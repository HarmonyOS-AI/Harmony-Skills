#!/usr/bin/env node
// Agent-facing driver for a running preview. Wraps the bridge's HTTP endpoints
// (/status /frame.jpg /inspector /input) into the handful of operations an
// edit-and-verify loop actually needs, so callers don't re-derive polling logic,
// coordinate normalization, and inspector-tree walking on every session.
//
//   node drive.mjs <command> [args] [--port <n>]
//
// Commands:
//   status                          print /status JSON
//   devices                         list configured devices (id, resolution, online state)
//   wait [--for-rebuild] [--timeout <s>] [--device <id>]
//                                   block until the preview is healthy (build ok + engine
//                                   connected + frame rendered). --for-rebuild first waits
//                                   for the file-watcher build triggered by an edit, and
//                                   fails fast with the ArkTS error lines on a broken build.
//   shot [out.jpg] [--device <id>] [--all]
//                                   save the current frame (default /tmp/harmony-preview.jpg).
//                                   --all captures every configured device to <out>-<id>.jpg —
//                                   the one-shot way to compare sizes side by side.
//   tree [--json] [--depth <n>] [--device <id>]
//                                   component outline: type "text" [x,y wxh] @source-line
//   find <text> [--type <T>] [--device <id>]
//                                   locate nodes by rendered text (or component type)
//   tap <text|x,y> [--index <n>] [--device <id>]
//                                   tap an element by its text, or coordinates
//   swipe <x1,y1> <x2,y2> [--steps <n>] [--ms <total>] [--device <id>]
//   type <text> [--device <id>]     type into the focused input (ASCII only — no IME/CJK)
//   key <Enter|Backspace|Tab|Space> [--device <id>]
//                                   press a single named key
//   back [--device <id>]            system back (pops route / closes dialog)
//   raw <Command> [json-args] [--device <id>]
//   sessions                        list running previews from the on-disk registry
//
// --device <id> targets one configured device (see `devices`) when a preview runs more than one
// simultaneously (--devices phone,tablet on preview.mjs); omitted, every command falls back to the
// first configured device — the exact same target a single-device preview always had, so none of the
// above needs --device at all when only one size is running.
//
// Coordinates are normalized 0..1 over the target device's frame; values > 1 are taken as device px
// and divided by its resolution, so inspector rects can be pasted in directly.
import fs from 'node:fs';
import { listSessions } from './lib/registry.mjs';

const args = process.argv.slice(2);
const opts = {};
const positional = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--for-rebuild' || a === '--json' || a === '--all') opts[a.slice(2)] = true;
  else if (a.startsWith('--')) opts[a.slice(2)] = args[++i];
  else positional.push(a);
}
const [command, ...rest] = positional;

const fail = (msg, code = 1) => { console.error(`✗ ${msg}`); process.exit(code); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// One orchestrator per port; when exactly one is alive the port is unambiguous, otherwise
// require --port so we never drive the wrong preview.
function resolvePort() {
  if (opts.port) return Number(opts.port);
  const alive = listSessions().filter((s) => {
    if (!s.pid) return false;
    try { process.kill(s.pid, 0); return true; } catch { return false; }
  });
  if (alive.length === 1) return alive[0].port;
  if (alive.length > 1) fail(`multiple previews running (ports ${alive.map((s) => s.port).join(', ')}) — pass --port`);
  return 8088;
}

const port = resolvePort();
const base = `http://127.0.0.1:${port}`;

async function get(path, asBuffer = false) {
  let res;
  try { res = await fetch(base + path, { signal: AbortSignal.timeout(6000) }); }
  catch { fail(`no preview responding on :${port} — is preview.mjs running? (see \`sessions\`)`); }
  if (!res.ok) return { status: res.status, body: null };
  return { status: res.status, body: asBuffer ? Buffer.from(await res.arrayBuffer()) : await res.json() };
}

async function postInput(msg) {
  let res;
  try {
    res = await fetch(`${base}${deviceRoute('/input')}`, {
      method: 'POST', body: JSON.stringify(msg), signal: AbortSignal.timeout(6000),
    });
  } catch { fail(`no preview responding on :${port}`); }
  if (res.status === 503) fail('engine input pipe not connected yet — `wait` first, then retry');
  const { sent } = await res.json();
  if (!sent) fail(`engine dropped the event: ${JSON.stringify(msg)}`);
  return sent;
}

const getStatus = async () => (await get('/status')).body;

// --- devices -------------------------------------------------------------------------------

// Routes a per-frame request at the device --device names, or the legacy unprefixed route (the
// default/first configured device) when --device is omitted — same target a single-device preview
// always had.
const deviceRoute = (sub) => (opts.device ? `/devices/${encodeURIComponent(opts.device)}${sub}` : sub);

// Resolves --device against the live /status devices[] list; fails fast on an unknown id (before any
// waiting/polling) rather than silently falling back to the default device. Returns that device's
// live status entry — same shape as the legacy top-level fields (resolution/engineConnected/hasFrame/
// interactive/port/engineError).
function pickDevice(st) {
  const list = st.devices || [];
  if (!opts.device) return list[0] ?? st;
  const d = list.find((x) => x.id === opts.device);
  if (!d) fail(`unknown --device "${opts.device}" — known: ${list.map((x) => x.id).join(', ') || '(none)'}`);
  return d;
}

// --- coordinates -------------------------------------------------------------------------

const parsePoint = (s) => {
  const m = String(s).match(/^\s*([\d.]+)\s*,\s*([\d.]+)\s*$/);
  return m ? [Number(m[1]), Number(m[2])] : null;
};

// Accept both normalized (0..1) and device-px points so `find` output pastes straight in.
const normalizePoint = ([x, y], [rw, rh]) => [x > 1 ? x / rw : x, y > 1 ? y / rh : y];

async function sendPointer(phase, [nx, ny]) {
  await postInput({ t: 'p', phase, x: nx, y: ny });
}

// --- inspector tree ----------------------------------------------------------------------

// $rect has been seen as "x,y,width,height" and as corner pairs "[x1,y1],[x2,y2]" across
// engine versions; both carry four numbers, so the bracket separator is the discriminator.
function parseRect(raw) {
  if (raw == null) return null;
  const nums = String(raw).match(/-?[\d.]+/g)?.map(Number);
  if (!nums || nums.length < 4) return null;
  const [a, b, c, d] = nums;
  return String(raw).includes('],[') ? { x: a, y: b, w: c - a, h: d - b } : { x: a, y: b, w: c, h: d };
}

const sourceLine = (node) => {
  try { return JSON.parse(node.$debugLine).$line ?? null; } catch { return null; }
};

const nodeText = (node) => {
  const a = node.$attrs ?? {};
  return a.content ?? a.text ?? a.placeholder ?? a.accessibilityText ?? null;
};

function* walk(node, depth = 0) {
  if (!node || typeof node !== 'object') return;
  yield { node, depth };
  for (const child of node.$children ?? []) yield* walk(child, depth + 1);
}

async function fetchTree() {
  // Right after a rebuild the engine may not answer inspector yet (503 / no tree); a couple of
  // retries beats making every caller re-run the command.
  for (let attempt = 0; ; attempt++) {
    const { status, body } = await get(deviceRoute('/inspector'));
    if (status === 200 && body) return body;
    if (attempt >= 4) fail('inspector tree unavailable — engine still starting, or not ready; `wait` first');
    await sleep(1500);
  }
}

function findNodes(tree, { text, type }) {
  const hits = [];
  for (const { node } of walk(tree)) {
    if (type && node.$type !== type) continue;
    if (text) {
      const t = nodeText(node);
      if (!t || !String(t).includes(text)) continue;
    }
    if (!text && !type) continue;
    hits.push(node);
  }
  return hits;
}

const describe = (node, [rw, rh]) => {
  const r = parseRect(node.$rect);
  const t = nodeText(node);
  const center = r ? `center=${(r.x + r.w / 2) / rw},${(r.y + r.h / 2) / rh}` : 'no-rect';
  return `${node.$type}${t != null ? ` ${JSON.stringify(String(t))}` : ''}  rect=(${r ? `${r.x},${r.y} ${r.w}x${r.h}` : '?'})  ${center}`
    + (sourceLine(node) ? `  @ ${sourceLine(node)}` : '');
};

// --- keyboard ----------------------------------------------------------------------------

const NAMED_KEYS = { Enter: 'Enter', Backspace: 'Backspace', Tab: 'Tab', Space: ' ' };

function keyMessage(ch) {
  if (ch === ' ') return { t: 'key', key: ' ', code: 'Space' };
  if (/[a-zA-Z]/.test(ch)) return { t: 'key', key: ch, code: `Key${ch.toUpperCase()}`, keyString: ch };
  if (/[0-9]/.test(ch)) return { t: 'key', key: ch, code: `Digit${ch}` };
  return null; // no IME on this channel: anything beyond ASCII letters/digits can't be typed
}

// --- commands ----------------------------------------------------------------------------

const commands = {
  async status() {
    console.log(JSON.stringify(await getStatus(), null, 2));
  },

  async wait() {
    const timeoutMs = Number(opts.timeout ?? 120) * 1000;
    const deadline = Date.now() + timeoutMs;
    const poll = async () => { await sleep(500); return getStatus(); };
    let st = await getStatus();

    // Phase A (only --for-rebuild): "has the latest watched change been built?" is answered by
    // ordering, not wall-clock guessing — a settled build whose start is at or after the newest
    // watched change (buildStartedAgoMs <= lastChangeAgeMs) contains that change. This holds no
    // matter how long the caller took between saving and running `wait` (the build may have long
    // finished) and rejects both stale successes (build predates the edit — including the startup
    // build) and mid-debounce snapshots. No watched change at all within 8s → the edit never
    // reached the watcher (file outside the module source dirs, or --no-watch).
    if (opts['for-rebuild']) {
      const editBuilt = () => (st.build === 'ok' || st.build === 'error')
        && st.lastChangeAgeMs != null && st.buildStartedAgoMs != null
        && st.buildStartedAgoMs <= st.lastChangeAgeMs;
      const armed = Date.now() + 8000;
      while (!editBuilt()) {
        if (st.build !== 'building' && st.lastChangeAgeMs == null && Date.now() > armed) {
          fail('no rebuild detected within 8s — watcher only fires for .ets edits under the module source dirs (and not with --no-watch)', 3);
        }
        if (Date.now() > deadline) fail(`timed out after ${opts.timeout ?? 120}s waiting for the edit's rebuild (build=${st.build})`, 2);
        st = await poll();
      }
    }
    while (st.build === 'building' || st.build === 'idle' || st.build == null) {
      if (Date.now() > deadline) fail(`timed out after ${opts.timeout ?? 120}s (build still ${st.build})`, 2);
      st = await poll();
    }
    if (st.build === 'error') fail(`build failed:\n${st.buildError ?? '(no error text captured)'}`);
    while (!(pickDevice(st).engineConnected && pickDevice(st).hasFrame)) {
      const d = pickDevice(st);
      if (Date.now() > deadline) fail(`timed out after ${opts.timeout ?? 120}s (build ok, but engineConnected=${d.engineConnected} hasFrame=${d.hasFrame})`, 2);
      st = await poll();
    }
    console.log(JSON.stringify(st));
  },

  async devices() {
    const list = (await getStatus()).devices || [];
    if (!list.length) { console.log('no devices configured'); return; }
    for (const d of list) {
      const state = d.engineConnected && d.hasFrame ? 'online' : d.engineConnected ? 'waiting-for-frame' : 'starting';
      console.log(`${d.id}  ${d.resolution.join('x')}  port=${d.port}  ${state}${d.engineError ? `  ⚠ ${String(d.engineError).slice(0, 80)}` : ''}`);
    }
  },

  async shot() {
    if (opts.all) {
      const list = (await getStatus()).devices || [];
      if (!list.length) fail('no devices configured');
      const outBase = (rest[0] ?? '/tmp/harmony-preview.jpg').replace(/\.jpe?g$/i, '');
      for (const d of list) {
        const out = `${outBase}-${d.id}.jpg`;
        for (let attempt = 0; ; attempt++) {
          const { status, body } = await get(`/devices/${encodeURIComponent(d.id)}/frame.jpg`, true);
          if (status === 200) { fs.writeFileSync(out, body); console.log(`${out} (${body.length} bytes)`); break; }
          if (attempt >= 9) fail(`no frame for device "${d.id}" after 10 tries — check \`status\` (build error? engine down?)`);
          await sleep(1000);
        }
      }
      return;
    }
    const out = rest[0] ?? '/tmp/harmony-preview.jpg';
    for (let attempt = 0; ; attempt++) {
      const { status, body } = await get(deviceRoute('/frame.jpg'), true);
      if (status === 200) {
        fs.writeFileSync(out, body);
        console.log(`${out} (${body.length} bytes)`);
        return;
      }
      if (attempt >= 9) fail('no frame after 10 tries — check `status` (build error? engine down?)');
      await sleep(1000);
    }
  },

  async tree() {
    const tree = await fetchTree();
    if (opts.json) { console.log(JSON.stringify(tree)); return; }
    const { resolution } = pickDevice(await getStatus());
    const maxDepth = opts.depth ? Number(opts.depth) : Infinity;
    for (const { node, depth } of walk(tree)) {
      if (depth > maxDepth) continue;
      console.log('  '.repeat(depth) + describe(node, resolution));
    }
  },

  async find() {
    if (!rest[0] && !opts.type) fail('usage: find <text> [--type <ComponentType>]');
    const tree = await fetchTree();
    const { resolution } = pickDevice(await getStatus());
    const hits = findNodes(tree, { text: rest[0], type: opts.type });
    if (!hits.length) fail(`no node matching ${rest[0] ? `text ${JSON.stringify(rest[0])}` : ''}${opts.type ? ` type=${opts.type}` : ''}`);
    hits.forEach((n, i) => console.log(`#${i}  ${describe(n, resolution)}`));
  },

  async tap() {
    if (!rest[0]) fail('usage: tap <text|x,y> [--index <n>] [--type <T>]');
    const { resolution } = pickDevice(await getStatus());
    let point = parsePoint(rest[0]);
    let label = rest[0];
    if (!point) {
      const hits = findNodes(await fetchTree(), { text: rest[0], type: opts.type });
      if (!hits.length) fail(`no node matching ${JSON.stringify(rest[0])} — try \`tree\` to see what rendered`);
      if (hits.length > 1 && opts.index == null) {
        hits.forEach((n, i) => console.error(`#${i}  ${describe(n, resolution)}`));
        fail(`${hits.length} matches — disambiguate with --index <n>`);
      }
      const node = hits[Number(opts.index ?? 0)] ?? fail(`--index out of range (0..${hits.length - 1})`);
      const r = parseRect(node.$rect) ?? fail('matched node has no rect');
      point = [r.x + r.w / 2, r.y + r.h / 2];
      label = describe(node, resolution);
    }
    const [nx, ny] = normalizePoint(point, resolution);
    await sendPointer('down', [nx, ny]);
    await sleep(60);
    await sendPointer('up', [nx, ny]);
    console.log(`tapped (${nx.toFixed(3)}, ${ny.toFixed(3)})  ${label}`);
  },

  async swipe() {
    const from = parsePoint(rest[0]);
    const to = parsePoint(rest[1]);
    if (!from || !to) fail('usage: swipe <x1,y1> <x2,y2> [--steps <n>] [--ms <total>]');
    const { resolution } = pickDevice(await getStatus());
    const [fx, fy] = normalizePoint(from, resolution);
    const [tx, ty] = normalizePoint(to, resolution);
    const steps = Number(opts.steps ?? 8);
    // Spread the moves over real time: the engine derives scroll/fling velocity from event
    // timing, so an instantaneous burst wouldn't scroll like a finger does.
    const stepMs = Number(opts.ms ?? 160) / steps;
    await sendPointer('down', [fx, fy]);
    for (let i = 1; i <= steps; i++) {
      await sleep(stepMs);
      await sendPointer('move', [fx + ((tx - fx) * i) / steps, fy + ((ty - fy) * i) / steps]);
    }
    await sendPointer('up', [tx, ty]);
    console.log(`swiped (${fx.toFixed(3)}, ${fy.toFixed(3)}) → (${tx.toFixed(3)}, ${ty.toFixed(3)})`);
  },

  async type() {
    const text = rest.join(' ');
    if (!text) fail('usage: type <text>   (focus a TextInput first — e.g. `tap` it)');
    const untypable = [...text].filter((c) => !keyMessage(c));
    if (untypable.length) {
      fail(`can't type ${JSON.stringify([...new Set(untypable)].join(''))} — the key channel has no IME, only [a-zA-Z0-9 ] reach the engine. For CJK or symbols, put the value in the page's @State/mock data instead.`);
    }
    for (const ch of text) { await postInput(keyMessage(ch)); await sleep(30); }
    console.log(`typed ${JSON.stringify(text)}`);
  },

  async key() {
    const key = NAMED_KEYS[rest[0]];
    if (!key) fail(`usage: key <${Object.keys(NAMED_KEYS).join('|')}>`);
    await postInput({ t: 'key', key, code: rest[0] === 'Space' ? 'Space' : rest[0] });
    console.log(`pressed ${rest[0]}`);
  },

  async back() {
    await postInput({ t: 'back' });
    console.log('back sent');
  },

  // Escape hatch for the wider engine command vocabulary (Resolution, LoadDocument, FoldStatus, …):
  // `raw <Command> ['{"json":"args"}']`. Useful for protocol experiments and features the typed
  // commands don't cover; the engine acks over the same pipe (watch with PREVIEW_ENGINE_LOG=1).
  async raw() {
    if (!rest[0]) fail('usage: raw <Command> [json-args]');
    let args = {};
    if (rest[1]) {
      try { args = JSON.parse(rest[1]); } catch { fail('args must be valid JSON'); }
    }
    await postInput({ t: 'raw', command: rest[0], args });
    console.log(`sent ${rest[0]} ${JSON.stringify(args)}`);
  },

  async sessions() {
    const sessions = listSessions();
    if (!sessions.length) { console.log('no running previews'); return; }
    for (const s of sessions) {
      let alive = false;
      try { process.kill(s.pid, 0); alive = true; } catch {}
      console.log(`port=${s.port} pid=${s.pid} ${alive ? 'alive' : 'dead'} project=${s.project ?? '?'}`);
    }
  },
};

const run = commands[command];
if (!run) {
  console.error(`unknown command: ${command ?? '(none)'}\ncommands: ${Object.keys(commands).join(', ')}\n(see the header of this file for usage)`);
  process.exit(2);
}
run();
