// Static browser viewer served at `/`. Renders the live frame, overlays build state + ArkTS
// errors, and — the interactive part — forwards pointer/keyboard input to the engine via POST
// /input (which input.mjs turns into MousePress/MouseMove/MouseRelease/KeyPress/BackClicked).
//
// Frame transport stays poll-based on /frame.jpg (always the latest complete JPEG, no MJPEG
// "needs the next boundary to finalize" stall), but polling is adaptive: ~90ms for a short window
// after any input so taps/scrolls feel live, ~350ms when idle. Status is polled on its own slow
// timer. Coordinates are sent normalized (0..1) over the rendered frame; the bridge scales them to
// device px, so the mapping is exact as long as the screen box matches the device aspect ratio
// (set from /status resolution).
//
// On top of the pixel frame, #a11y mirrors the engine's inspector tree (GET /inspector) as a real
// DOM tree positioned over the image — one element per ArkUI component, sized/positioned from its
// $rect, carrying its type/text/accessibility attrs. It's invisible (transparent) but present in the
// DOM/accessibility tree and individually hoverable/selectable (each node is pointer-events:auto;
// only the #a11y container itself stays pointer-events:none, so empty gaps between components still
// fall through to the image), so anything reading the page's structure — accessibility snapshots,
// text extraction, DOM queries, or a human using the browser's own "inspect element" picker — can
// select the actual component instead of just a flat screenshot. Taps still reach the image/#screen's
// input-forwarding handlers regardless of which element they landed on, since those are bound on
// #screen and pointer events bubble up to it either way. The tree is only rebuilt when it actually
// changes (a cheap string-equality check against the last /inspector response) — rebuilding on every
// poll would otherwise replace every node's DOM identity ~once a second, which is enough to make an
// in-progress click/hover/selection in DevTools miss its target mid-interaction.
export const VIEWER_HTML = `<!doctype html><html lang="zh"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>HarmonyOS ArkUI Live Preview</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin:0; min-height:100vh; display:flex; flex-direction:column; align-items:center;
    justify-content:center; gap:14px; background:#0f1115; color:#e6e8ee;
    font:14px/1.5 ui-sans-serif,-apple-system,"PingFang SC",sans-serif; }
  .bar { display:flex; gap:10px; align-items:center; font-size:13px; color:#9aa3b2; }
  .dot { width:8px; height:8px; border-radius:50%; background:#6b7280; transition:.3s; }
  .dot.live { background:#22c55e; box-shadow:0 0 8px #22c55e; }
  .dot.wait { background:#f0b429; }
  .dot.err { background:#ef4444; box-shadow:0 0 8px #ef4444; }
  .dot.build { background:#3b82f6; box-shadow:0 0 8px #3b82f6; }
  .phone { position:relative; padding:12px; border-radius:44px; background:#1b1e26;
    box-shadow:0 20px 60px rgba(0,0,0,.5), inset 0 0 0 1px #2a2f3a; }
  .screen { width:300px; aspect-ratio:1080/2340; max-height:82vh; border-radius:32px;
    overflow:hidden; background:#fff; position:relative; touch-action:none; cursor:default; outline:none; }
  .screen.kb { box-shadow:0 0 0 3px #22c55e; }
  #v { width:100%; height:100%; object-fit:fill; display:block; -webkit-user-drag:none; user-select:none; }
  #a11y { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
  #a11y div { position:absolute; overflow:hidden; color:transparent; font-size:10px; line-height:1;
    pointer-events:auto; }
  #ph { position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
    color:#9aa3b2; font-size:13px; text-align:center; padding:0 24px; }
  #err { position:absolute; left:0; right:0; bottom:0; max-height:55%; overflow:auto;
    background:rgba(127,29,29,.96); color:#fecaca; font:12px/1.45 ui-monospace,Menlo,monospace;
    padding:12px 14px; white-space:pre-wrap; display:none; border-top:2px solid #ef4444; }
  #err b { color:#fff; display:block; margin-bottom:6px; font-family:ui-sans-serif; }
  #building { position:absolute; top:10px; left:50%; transform:translateX(-50%); display:none;
    background:#1d4ed8; color:#fff; font-size:12px; padding:3px 12px; border-radius:999px; }
  .tools { display:flex; gap:8px; align-items:center; }
  .tools button { background:#1b1e26; color:#e6e8ee; border:1px solid #2a2f3a; border-radius:10px;
    padding:6px 14px; font-size:13px; cursor:pointer; }
  .tools button:hover { border-color:#3b82f6; }
  .tools button.on { border-color:#22c55e; color:#22c55e; }
  code { color:#c8cddb; background:#1b1e26; padding:2px 6px; border-radius:6px; }
</style></head><body>
  <div class="bar"><span class="dot" id="dot"></span><span id="status">连接中…</span></div>
  <div class="phone"><div class="screen" id="screen" tabindex="0">
    <img id="v" alt="" draggable="false"><div id="a11y"></div><div id="ph">连接中…</div>
    <div id="building">构建中…</div>
    <div id="err"></div>
  </div></div>
  <div class="tools">
    <button id="back" title="系统返回">← 返回</button>
    <button id="kb" title="点击后可用电脑键盘向聚焦输入框打字">⌨ 键盘：关</button>
  </div>
  <div class="bar">点按 / 拖动 / 滑动屏幕即可交互 · 改 <code>.ets</code> 保存自动重建 · 零 DevEco</div>
<script>
  const img = document.getElementById('v'), dot = document.getElementById('dot'),
        st = document.getElementById('status'), ph = document.getElementById('ph'),
        err = document.getElementById('err'), building = document.getElementById('building'),
        screenEl = document.getElementById('screen'), backBtn = document.getElementById('back'),
        kbBtn = document.getElementById('kb'), a11y = document.getElementById('a11y');

  // ---- input → POST /input -------------------------------------------------
  let kbOn = false, dragging = false, lastMoveAt = 0, sizedTo = '';
  const post = (msg) => { fetch('/input', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(msg) }).catch(()=>{}); bumpFast(); };
  function norm(e) {
    const r = img.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    return { x, y };
  }
  screenEl.addEventListener('pointerdown', (e) => {
    e.preventDefault(); screenEl.focus(); dragging = true;
    try { screenEl.setPointerCapture(e.pointerId); } catch {}
    const p = norm(e); post({ t:'p', phase:'down', x:p.x, y:p.y });
  });
  screenEl.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const now = Date.now(); if (now - lastMoveAt < 40) return; lastMoveAt = now;
    const p = norm(e); post({ t:'p', phase:'move', x:p.x, y:p.y });
  });
  const endDrag = (e) => { if (!dragging) return; dragging = false; const p = norm(e); post({ t:'p', phase:'up', x:p.x, y:p.y }); };
  screenEl.addEventListener('pointerup', endDrag);
  screenEl.addEventListener('pointercancel', endDrag);

  backBtn.addEventListener('click', () => post({ t:'back' }));
  kbBtn.addEventListener('click', () => { kbOn = !kbOn; kbBtn.classList.toggle('on', kbOn); kbBtn.textContent = '⌨ 键盘：' + (kbOn?'开':'关'); if (kbOn) screenEl.focus(); });
  screenEl.addEventListener('keydown', (e) => {
    if (!kbOn) return;
    if (['Backspace','Tab','Enter',' '].includes(e.key)) e.preventDefault();
    post({ t:'key', key:e.key, code:e.code });
  });
  screenEl.addEventListener('blur', () => { if (kbOn) { kbOn = false; kbBtn.classList.remove('on'); kbBtn.textContent = '⌨ 键盘：关'; } });
  screenEl.addEventListener('focus', () => screenEl.classList.toggle('kb', kbOn));

  // ---- inspector tree → real DOM nodes over the frame ----------------------
  // Turns the engine's ArkUI component tree into an actual (invisible) DOM tree positioned over the
  // image, so accessibility tools / DOM queries can see real elements instead of a flat screenshot.
  const textAttrOf = (attrs) => {
    if (!attrs) return '';
    for (const k of ['content', 'text', 'placeholder', 'value']) {
      if (typeof attrs[k] === 'string' && attrs[k]) return attrs[k];
    }
    return '';
  };
  const a11yLabelOf = (attrs) => {
    if (!attrs) return '';
    for (const k of ['accessibilityText', 'accessibilityDescription']) {
      if (typeof attrs[k] === 'string' && attrs[k]) return attrs[k];
    }
    return '';
  };
  // $rect is in *global* frame coordinates (every node's x/y is relative to the whole screen, not
  // its parent) — but the DOM mirrors the component tree via real nesting, and CSS resolves a
  // percentage top/left against the nearest positioned ancestor (its immediate DOM parent here), not
  // the frame. So each node's percentage must be computed relative to its own parent's rect, not the
  // frame resolution — otherwise a nested node's offset gets applied twice (once baked into its own
  // global coordinate, once again by the browser resolving the percentage against a parent that's
  // itself offset from the frame). Only components with a non-zero-offset, non-full-size ancestor
  // (i.e. almost anything below the first level) would visibly drift; a first-level node like the
  // root Column, which spans the full width at x=0, hides the bug on that axis by coincidence.
  function buildA11yNode(n, parentRect) {
    const el = document.createElement('div');
    if (n.$type) el.setAttribute('data-arkui-type', n.$type);
    if (n.$debugLine) { try { el.setAttribute('data-debug-line', JSON.parse(n.$debugLine).$line || ''); } catch {} }
    let rect = parentRect;
    if (n.$rect) {
      const [x, y, w, h] = n.$rect.split(',').map(Number);
      rect = { x, y, w, h };
      const { x: px, y: py, w: pw, h: ph } = parentRect;
      if (pw && ph) {
        el.style.left = ((x - px) / pw * 100) + '%'; el.style.top = ((y - py) / ph * 100) + '%';
        el.style.width = (w / pw * 100) + '%'; el.style.height = (h / ph * 100) + '%';
      }
    }
    const text = textAttrOf(n.$attrs), label = a11yLabelOf(n.$attrs) || text;
    if (label) el.setAttribute('aria-label', label);
    if (text) el.textContent = text;
    (n.$children || []).forEach((c) => el.appendChild(buildA11yNode(c, rect)));
    return el;
  }
  let inspectorBusy = false, lastInspectorText = '';
  async function pollInspector(resolution) {
    if (inspectorBusy || !resolution) return;
    inspectorBusy = true;
    try {
      const r = await fetch('/inspector', { cache: 'no-store' });
      if (r.ok) {
        const text = await r.text();
        if (text === lastInspectorText) return; // unchanged — don't rebuild, keeps node identity stable
        lastInspectorText = text;
        const tree = JSON.parse(text);
        a11y.innerHTML = '';
        // The synthetic top-level "root" node carries no $rect (only bare width/height fields), so
        // as an absolutely-positioned element it has nothing to size itself by and collapses to
        // 0×0 — taking every percentage-sized descendant down with it as their containing block.
        // Skip it and anchor its real children straight to #a11y (whose box is the full frame, i.e.
        // the same coordinate origin $rect itself uses: 0,0,resolution).
        const frameRect = { x: 0, y: 0, w: resolution[0], h: resolution[1] };
        (tree?.$children || []).forEach((c) => a11y.appendChild(buildA11yNode(c, frameRect)));
      }
    } catch {} finally { inspectorBusy = false; }
  }

  // ---- adaptive frame poll + slow status poll ------------------------------
  let fastUntil = 0;
  const bumpFast = () => { fastUntil = Date.now() + 1200; };
  async function pollFrame() {
    try {
      const r = await fetch('/frame.jpg?t=' + Date.now(), { cache:'no-store' });
      if (r.ok) {
        const url = URL.createObjectURL(await r.blob());
        const old = img.src; img.src = url; if (old.startsWith('blob:')) URL.revokeObjectURL(old);
        img.style.display = 'block'; ph.style.display = 'none';
      }
    } catch {}
    setTimeout(pollFrame, Date.now() < fastUntil ? 90 : 350);
  }
  let currentResolution = null;
  async function pollStatus() {
    try {
      const s = await (await fetch('/status', { cache:'no-store' })).json();
      if (s.resolution) currentResolution = s.resolution;
      if (s.resolution && sizedTo !== s.resolution.join('x')) {
        sizedTo = s.resolution.join('x');
        const [w, h] = s.resolution;
        screenEl.style.aspectRatio = w + '/' + h;
        screenEl.style.width = (w >= h ? 520 : 300) + 'px';
      }
      kbBtn.style.display = s.interactive ? '' : 'none';
      backBtn.style.display = s.interactive ? '' : 'none';
      building.style.display = s.build === 'building' ? 'block' : 'none';
      if (s.build === 'error') { err.style.display='block'; err.innerHTML='<b>⚠ 构建失败（界面停在上次成功状态）</b>' + (s.buildError||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
      else { err.style.display='none'; }
      if (s.build === 'error') { dot.className='dot err'; st.textContent = '构建失败 · 见下方红框'; }
      else if (s.build === 'building') { dot.className='dot build'; st.textContent = '构建中…'; }
      else if (s.engineConnected && s.hasFrame) { dot.className='dot live'; st.textContent = '在线 · ' + s.device + ' · 可交互 · :' + s.port; }
      else if (s.engineConnected) { dot.className='dot wait'; st.textContent='等待首帧…'; }
      else { dot.className='dot wait'; st.textContent='等待引擎…'; }
      if (!s.hasFrame) { ph.textContent = st.textContent; ph.style.display='flex'; }
    } catch { dot.className='dot'; st.textContent='桥接未运行'; ph.textContent='桥接未运行'; ph.style.display='flex'; }
  }
  pollFrame(); pollStatus(); setInterval(pollStatus, 400);
  setInterval(() => pollInspector(currentResolution), 1200);

  // ---- liveness: hold an SSE channel so the server releases the preview when this tab closes ----
  // The browser keeps /alive open for the page's lifetime; closing the tab drops it and the server
  // tears down the engine after a short grace. EventSource auto-reconnects across a reload, so the
  // grace window absorbs that without releasing.
  try { new EventSource('/alive'); } catch {}
</script></body></html>`;
