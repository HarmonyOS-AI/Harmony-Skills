// HarmonyOS Previewer engine -> browser bridge (no external deps; Node >= 21 for global WebSocket).
//
// The orchestrator owns the engine lifecycle and hands the bridge the current engine target via
// setEngine({port, sid, device}); the bridge connects to that frame WebSocket, strips the JPEG
// framing, and serves the latest frame + build status to a browser. Direct handoff (vs. scanning
// `ps`) keeps the bridge decoupled from process listing and robust across rebuilds: a `generation`
// counter invalidates the reconnect loop of any superseded engine.
import http from 'node:http';
import { VIEWER_HTML } from './viewer-page.mjs';
import { eventToCommands } from './input.mjs';

const SOI = Buffer.from([0xff, 0xd8, 0xff]);
const EOI = Buffer.from([0xff, 0xd9]);
const ts = () => new Date().toISOString().slice(11, 19);

function extractJpeg(buf) {
  const s = buf.indexOf(SOI);
  if (s < 0) return null;
  const e = buf.indexOf(EOI, s + 3);
  return e > s ? buf.subarray(s, e + 2) : null;
}

export function createBridge(config, status, hooks = {}, log = (...a) => console.log(ts(), '[bridge]', ...a)) {
  let target = null;        // { port, sid, device }
  let send = null;          // current engine's command sender (set per engine via setEngine)
  let getInspectorTree = null; // current engine's inspector-tree fetcher (set per engine via setEngine)
  let ws = null;
  let connected = false;
  let lastFrame = null;
  let lastFrameAt = 0;
  let generation = 0;       // bumped on every setEngine; stale closures bail when it changes
  let reconnectTimer = null;
  let kickTimer = null;
  const clients = new Set();

  // Browser-viewer liveness → auto-release. Each open viewer holds an SSE /alive connection, so a
  // closed tab fires req.on('close') immediately. When the last viewer leaves we release the whole
  // preview (onIdle) after a short grace, so the heavy engine + watch don't linger once nobody is
  // looking. Armed only after a browser has actually connected (`everViewed`), so the documented
  // headless curl flow — which never opens /alive — is never torn down underneath the user.
  const onIdle = typeof hooks.onIdle === 'function' ? hooks.onIdle : null;
  const autoRelease = config.autoRelease !== false;
  const graceMs = Number.isFinite(config.releaseGraceMs) ? config.releaseGraceMs : 10000;
  const viewers = new Set();
  let everViewed = false;
  let releaseTimer = null;

  function maybeScheduleRelease() {
    if (!autoRelease || !onIdle || !everViewed || viewers.size > 0 || releaseTimer) return;
    releaseTimer = setTimeout(() => {
      releaseTimer = null;
      if (viewers.size === 0) { log(`no viewer for ${graceMs}ms — releasing preview`); onIdle(); }
    }, graceMs);
  }

  function pushToClients(jpeg) {
    for (const res of clients) {
      try {
        res.write(`--frame\r\nContent-Type: image/jpeg\r\nContent-Length: ${jpeg.length}\r\n\r\n`);
        res.write(jpeg);
        res.write('\r\n');
      } catch { clients.delete(res); }
    }
  }

  function connect(gen) {
    if (gen !== generation || !target) return;
    const url = `ws://127.0.0.1:${target.port}/${target.sid}`;
    let socket;
    try { socket = new WebSocket(url); } catch { scheduleReconnect(gen); return; }
    ws = socket;
    socket.binaryType = 'arraybuffer';

    // A freshly forked engine is silent until it renders; reconnect if no frame primes quickly.
    let primed = false;
    clearTimeout(kickTimer);
    kickTimer = setTimeout(() => { if (!primed) { try { socket.close(); } catch {} } }, 1500);

    socket.onmessage = (ev) => {
      if (gen !== generation) return;
      const jpeg = extractJpeg(Buffer.from(ev.data));
      if (!jpeg) return;
      if (!primed) { primed = true; connected = true; clearTimeout(kickTimer); log(`first frame (${jpeg.length}B)`); }
      lastFrame = jpeg; lastFrameAt = Date.now(); pushToClients(jpeg);
    };
    const retry = () => {
      if (gen !== generation) return;
      connected = false;
      ws = null;
      scheduleReconnect(gen);
    };
    socket.onclose = retry;
    socket.onerror = retry;
  }

  function scheduleReconnect(gen) {
    clearTimeout(reconnectTimer);
    reconnectTimer = setTimeout(() => connect(gen), 700);
  }

  function setEngine(next) {
    generation++;
    target = next;
    send = typeof next.send === 'function' ? next.send : null;
    getInspectorTree = typeof next.getInspectorTree === 'function' ? next.getInspectorTree : null;
    connected = false;
    if (ws) { try { ws.onmessage = ws.onclose = ws.onerror = null; ws.close(); } catch {} ws = null; }
    log(`engine target :${next.port} (device=${next.device})`);
    connect(generation);
  }

  // MJPEG keepalive: re-push the last frame so single-frame streams still render and stay alive.
  const keepalive = setInterval(() => { if (lastFrame && clients.size) pushToClients(lastFrame); }, 1000);

  // /alive keepalive: a periodic comment keeps the SSE stream warm and surfaces half-open sockets
  // (a failed write closes the response, firing its 'close' handler so the viewer count stays true).
  const viewerPing = setInterval(() => {
    for (const res of viewers) { try { res.write(': ping\n\n'); } catch { try { res.end(); } catch {} } }
  }, 5000);

  const server = http.createServer((req, res) => {
    const route = req.url.split('?')[0];
    if (route === '/' || route === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(VIEWER_HTML);
    } else if (route === '/status') {
      const bs = status.get();
      res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify({
        engineConnected: connected,
        hasFrame: !!lastFrame,
        port: target?.port ?? null,
        device: target?.device ?? null,
        resolution: config.resolution,
        interactive: typeof send === 'function',
        frameAgeMs: lastFrame ? Date.now() - lastFrameAt : null,
        build: bs?.state ?? null,
        buildError: bs?.error ?? null,
      }));
    } else if (route === '/input' && req.method === 'POST') {
      // Browser input → engine commands (tap/swipe/key/back) over the command pipe. Coordinates
      // arrive normalized (0..1) and are scaled to device px by input.mjs against config.resolution.
      let body = '';
      req.on('data', (d) => { body += d; if (body.length > 1e4) req.destroy(); });
      req.on('end', () => {
        let sent = 0;
        try {
          const cmds = eventToCommands(JSON.parse(body), config.resolution);
          if (send) for (const c of cmds) { if (send(c)) sent++; }
        } catch { /* malformed body → no-op */ }
        res.writeHead(send ? 200 : 503, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
        res.end(JSON.stringify({ sent }));
      });
    } else if (route === '/inspector') {
      // ArkUI's own component tree (types, layout rects, source-line mapping, full attribute dump —
      // including the accessibility fields ArkUI already tracks per node), straight from the engine's
      // "inspector" command. Only populated when the engine is running a PreviewBuild bundle; see
      // engine.mjs's getInspectorTree doc comment.
      if (!getInspectorTree) { res.writeHead(503, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'engine not ready' })); return; }
      getInspectorTree().then((tree) => {
        if (!tree) { res.writeHead(503, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); res.end(JSON.stringify({ error: 'no tree available' })); return; }
        res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
        res.end(JSON.stringify(tree));
      });
    } else if (route === '/mjpeg') {
      res.writeHead(200, {
        'Content-Type': 'multipart/x-mixed-replace; boundary=frame',
        'Cache-Control': 'no-cache, no-store', Connection: 'close', Pragma: 'no-cache',
      });
      clients.add(res);
      if (lastFrame) pushToClients(lastFrame);
      req.on('close', () => clients.delete(res));
    } else if (route === '/frame.jpg') {
      if (!lastFrame) { res.writeHead(503); res.end('no frame yet'); return; }
      res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-store' });
      res.end(lastFrame);
    } else if (route === '/alive') {
      // Browser-liveness channel: the viewer holds this SSE stream open for its whole lifetime, so
      // closing the tab drops the socket and req.on('close') fires at once. A reload briefly closes
      // then reopens — the grace timer (cleared on any new viewer) tolerates that.
      res.writeHead(200, {
        'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache, no-store',
        Connection: 'keep-alive',
      });
      res.write(': connected\n\n');
      viewers.add(res);
      everViewed = true;
      if (releaseTimer) { clearTimeout(releaseTimer); releaseTimer = null; }
      req.on('close', () => { viewers.delete(res); maybeScheduleRelease(); });
    } else {
      res.writeHead(404); res.end('not found');
    }
  });

  return {
    setEngine,
    listen: (port, cb) => server.listen(port, '127.0.0.1', cb),
    close: () => {
      generation++;
      clearInterval(keepalive);
      clearInterval(viewerPing);
      clearTimeout(reconnectTimer);
      clearTimeout(kickTimer);
      clearTimeout(releaseTimer);
      try { ws?.close(); } catch {}
      for (const res of clients) { try { res.end(); } catch {} }
      for (const res of viewers) { try { res.end(); } catch {} }
      server.close();
    },
  };
}
