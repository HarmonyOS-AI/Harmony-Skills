# How the zero-DevEco preview works

The HarmonyOS SDK ships a standalone host renderer, `Previewer`, at
`sdk/default/openharmony/previewer/common/bin/Previewer`. Inside DevEco Studio a Node-based
preview-server drives it; this skill replaces that server with a small Node orchestrator so the
engine runs against the regular CLI build output, with no IDE involved.

## Pipeline

```
 edit .ets ─▶ hvigorw PreviewBuild ─▶ relaunch Previewer engine ─▶ bridge ─▶ browser
            (builder.mjs)             (engine.mjs)                 (bridge.mjs)
```

1. **Build** — `hvigorw --mode module -p module=<m>@<t> -p product=<p> -p previewer.replace.page=<page> PreviewBuild --no-daemon`.
   `PreviewBuild` is the same task graph DevEco's own preview daemon drives
   (`PreviewUpdateAssets` → `ReplacePreviewerPage` → `PreviewArkTS` → `buildPreviewerResource`) —
   it's a regular hvigor-ohos-plugin task, registered unconditionally for every HAP module
   (`TaskInitializer.commonHap`/`initializeCommonTargetTasks` in the plugin source), not something
   only DevEco's IDE can inject. Its ArkTS compile (`PreviewArkTS`) embeds inspector/debug metadata
   (component tree, per-node layout rects, source-line mapping) that a plain `assembleHap` build
   strips entirely — confirmed by diffing the two builds' `modules.abc` (different size, different
   hash) and by requesting the engine's `inspector` tree against each: `assembleHap` output yields a
   bare `{$type:"root", ...}` with no children, `PreviewBuild` output yields the full tree. Output
   lands at `.preview/<product>/intermediates/{loader,assets,res}/<target>/…` (same shape as the old
   `build/.../{loader,loader_out,res}` tree, just under `.preview/` with `assets/` instead of
   `loader_out/`). `previewer.replace.page` (read via `hvigorCore.getExtraConfig()` in
   `ReplacePreviewerPage`) targets the exact `@Entry` route being previewed, mirroring `--page`.
2. **Engine** — spawn `Previewer` pointed at those artifacts. The engine expects three
   Unix-domain sockets that DevEco's preview-server normally provides (command / image / trace).
   The skill creates all three; the image/trace sockets just drain, but the **command pipe is
   kept** — the engine connects to it as a client, streams status back (inspector tree, avoid-area,
   command acks) which the skill parses (NUL-delimited JSON, see
   [Getting the ArkUI inspector tree](#getting-the-arkui-inspector-tree)), and accepts input commands
   written to it (see [Driving input](#driving-input-interaction)). The engine auto-renders the entry
   page and streams JPEG frames over a localhost WebSocket (`-lws <port>/<sid>`).
3. **Bridge** — connect to that WebSocket as a client, strip the frame header, and serve JPEG to a
   browser over plain HTTP. The page polls `/frame.jpg` so the current frame always renders (the
   MJPEG stream needs the next boundary to finalize a frame, which stalls single-frame views);
   polling is adaptive — fast for a short window after any input, slow when idle. The bridge also
   exposes `POST /input` (browser events → engine commands) and `GET /inspector` (the component
   tree, also polled by the viewer page to build its `#a11y` DOM overlay).

## Key engine arguments

The engine is invoked with the discovered project facts (see `engine.mjs`):

- `-j <loader_out/.../ets>` — built JS/ArkTS app
- `-ljPath <loader/.../loader.json>` — module map
- `-arp <res/...>` — app resources
- `-url <page>` — `@Entry` route to render (e.g. `pages/AdaptiveIndex`)
- `-n <pkgName>` — package name (from the module's `oh-package.json5`)
- `-hsp <sdk/default/hms/previewer>` — HMS previewer support package
- `-pages <profile>` — pages profile name (from `module.json5` `"pages": "$profile:<name>"`)
- `-f <device-profile.json>` — generic resolution/avoid-area/language profile, bundled in
  `scripts/assets/` so a DevEco-generated copy is not required
- `-pm Stage -av ACE_2_0 -device <type>` — stage model, ACE version, device token
- `-or/-cr <w> <h> -sd <dpi> -o <orientation>` — framebuffer geometry + density + orientation
- *(ability mode only)* `-d -abn <abilityName> -abp <ohmurl>` — run the real UIAbility; `-abp` is the
  normalized ohmurl `@normalized:N&&&<pkg>/<abilitySrc-without-.ets>&`. `-d` (debug) makes `-abp`
  mandatory, so the three travel together.

## Page mode vs ability mode — how per-`@Entry` preview works

This is the same effect DevEco gives when you preview an individual `@Entry`/`@Preview`:

- **Page mode (default).** Launch the engine with **just `-url <page>`** and *without*
  `-d/-abn/-abp`. The previewer renders that page document directly — it does **not** instantiate
  the user's UIAbility. So `-url pages/AdaptiveIndex` shows AdaptiveIndex even though the app's
  `DefaultAbility.onWindowStageCreate` calls `loadContent('pages/Index')`. Switching `-url` switches
  pages with no rebuild and no source edit. The only requirement is that the route is a compiled
  `@Entry` listed in the pages profile.
- **Ability mode.** Add `-d -abn <ability> -abp <ohmurl>`. The previewer runs the UIAbility and the
  displayed page is whatever its `loadContent` loads; `-url` is then ignored.

How this was determined: with `-d/-abn/-abp` present, the rendered page is fixed by the ability's
compiled `loadContent` — `-url` and post-build edits to `main_pages.json` do **not** override it
(the latter just yields a blank frame). Dropping `-d/-abn/-abp` switches the engine to the
page-document path where `-url` is authoritative. The previewer rejects `-d` without `-abp`
(`CommandParser: Launch -d parameters without -abp parameters`), which is why page mode omits all
three together.

### Relation to DevEco's `PreviewBuild`

This is about the **build** step, orthogonal to the page-mode/ability-mode choice above (which is
about how the *already-built* bundle gets loaded into the engine). The hvigor **`PreviewBuild`** task
chain (`PreviewUpdateAssets` → `ReplacePreviewerPage` → `PreviewArkTS` → `buildPreviewerResource`),
driven by inject configs `previewer.replace.page`, `previewer.replace.srcPath`, `pageType` (`page` vs
`component`), rewrites `main_pages.json` to `src=[<target>]` and **recompiles** into a separate
`<module>/.preview/<product>/` tree with inspector/debug metadata a plain `assembleHap` build lacks
(see [Getting the ArkUI inspector tree](#getting-the-arkui-inspector-tree)) — and, with
`pageType=component`, is what enables previewing a bare `@Preview` component via a generated wrapper
(not something this skill drives; it only ever targets `@Entry` pages, so `pageType` is left at its
`page` default).

Earlier revisions of this skill assumed the whole chain was IDE-only and avoided it, building via
`assembleHap` instead — page mode still reproduced the visual frame that way, so the assumption went
unquestioned. It was wrong: `PreviewBuild` is registered like any other hvigor-ohos-plugin task for
every HAP module (`TaskInitializer.commonHap`/`initializeCommonTargetTasks`), not gated behind
DevEco's preview daemon, and `hvigorw ... -p previewer.replace.page=<page> PreviewBuild --no-daemon`
runs standalone with no IDE involved — confirmed by running it repeatedly outside DevEco and diffing
the resulting `.abc` and inspector-tree responses against `assembleHap` output. `builder.mjs` now
runs `PreviewBuild` instead of `assembleHap` for exactly this reason: the visual frame renders either
way, but only a `PreviewBuild` bundle makes the engine's `inspector` command return a populated tree.

## Driving input (interaction)

The SDK Previewer is interactive on its own — it is the same engine DevEco's Previewer pane drives.
DevEco's preview-server sends it pointer/keyboard commands over the **command pipe** (the
`/tmp/<base>_commandPipe` Unix socket); the skill does the same, so the in-browser preview taps,
scrolls, and types. `bridge.mjs` exposes `POST /input`, `input.mjs` translates the browser event to
an engine command, and `engine.send()` writes it to the pipe.

Wire format (matches DevEco's preview-server exactly):

- **Framing** — `JSON.stringify(command) + "\0"` (one NUL terminator per command).
- **Envelope** — `{ "version": "1.0.1", "command": "<name>", "type": "action", "args": { … } }`.
- **Pointer** — `MousePress` / `MouseMove` / `MouseRelease`, `args:{ x, y, button:0, duration:0 }`
  with `x`/`y` in **device px**. A tap = press+release at one point; a swipe/scroll = press, a few
  moves, then release. The engine acks `{"command":"MousePress","result":true}`.
- **System back** — `BackClicked`, `args:{}`.
- **Keyboard** — `KeyPress`, `args:{ isInputMethod:false, keyCode, keyAction, keyString, pressedCodes }`.
  `keyCode` is the SDK value (`oh_key_code.h`: `A..Z`=2017–2042, `0..9`=2000–2009, space=2050,
  Backspace=2055, Enter=2054). A keystroke fires **down → press → up**, and `keyString` is the
  character to insert.

The one non-obvious trap: **`keyAction` uses the Previewer's own enum — `DOWN=0, UP=1, PRESS=2` —
not `@ohos.multimodalInput.keyEvent.Action` (`DOWN=1, UP=2`).** With the `@ohos` values the engine
still acks `result:true` but inserts no text (it reads them as up/press, never a down). This was
confirmed end-to-end: with `DOWN=0/PRESS=2/UP=1`, typing renders into a focused `TextInput` and its
`onChange` fires; with the `@ohos` values it does not. The coordinate space (`x`/`y` = framebuffer
px), command names, and framing were taken from the engine's own strings (`MouseInputImpl`,
`DispatchPointerEvent`) and DevEco's `openharmony-preview-server`, then verified against a live
engine (tap → navigation, BackClicked → return, KeyPress → typed text).

The orchestrator hands the bridge `engine.send` on every (re)launch, so input is always routed to
the current engine — interaction keeps working across hot reloads even though each reload spawns a
fresh engine with a new command pipe.

## Getting the ArkUI inspector tree

Beyond input, the command pipe is also how DevEco's own inspector panel reads the live component
tree — and the skill now parses that direction of the channel too, instead of draining it.

- **Request** — same envelope as any other command, no args: `{"version":"1.0.1","command":"inspector","type":"action"}`.
  (`"inspectorDefault"` fetches the theme's default-attribute table instead of the live tree — not
  used here.) Sourced from DevEco's `openharmony-preview-server` bundle
  (`DeviceSocketManager.prototype.sendCommandToSimulator` call site), not guessed.
- **Response** — pushed back asynchronously on the same socket, framed exactly like requests
  (JSON + `\0`, possibly several messages coalesced in one write — buffer until a trailing NUL, then
  split on `\0`): `{"version":"1.0.1","command":"inspector","result":"<json-encoded tree>"}`. `result`
  is itself a JSON *string* and needs a second `JSON.parse`. There's no request/response correlation
  id, so `engine.mjs`'s `getInspectorTree()` only allows one request in flight at a time.
- **Tree shape** — recursive nodes: `$type` (component tag, e.g. `Text`/`TextInput`/`Column`),
  `$rect` (`"x,y,width,height"` in device px), `$ID`, `$debugLine` (JSON string like
  `{"$line":"entry/src/main/ets/pages/Index.ets(8:7)", "$packageName":"entry"}` — maps straight back
  to source), `$children` (array, same shape), and `$attrs` — a flat object of **every** style/prop
  the engine tracks for that node (border, shadow, gradients, font, layout — and, notably, the
  accessibility fields ArkUI already computes per component: `accessibilityText`,
  `accessibilityDescription`, `accessibilityLevel`, `accessibilityGroup`, `accessibilityVirtualNode`).
  Text-bearing components carry their actual rendered string directly in `$attrs` — `content` for
  `Text`, `placeholder`/`text` for `TextInput` — confirmed against a live tree (`"content":"Hello
  World From Claude"`, `"placeholder":"请输入内容..."`).
- **The catch: this only works against a `PreviewBuild` bundle.** Requesting `inspector` against an
  engine pointed at plain `assembleHap` output — same visual frame, same protocol handshake, no
  extra init commands needed either way (verified by diffing against a real DevEco Studio session's
  `previewer.log`) — returns just `{"$type":"root","width":...,"height":...}` with **no** `$children`.
  The difference is baked into the compiled `.abc` at build time (isPreview-flagged ArkTS compile —
  see `buildConfig.json`'s `"isPreview":"true"` in a DevEco-generated `.preview/` tree), not anything
  fixable at the protocol or engine-launch-argument level. Switching `builder.mjs` from `assembleHap`
  to `PreviewBuild` (see the pipeline section above) is what makes the tree populate.
- **Exposed as** `GET /inspector` (`bridge.mjs`), and consumed client-side by the viewer page
  (`viewer-page.mjs`) to build `#a11y` — an invisible DOM tree positioned over the image frame
  (each node's `$rect` converted to a `%`-based box using `/status`'s `resolution`), carrying
  `data-arkui-type`, `data-debug-line`, `aria-label`/text content per node. It's `pointer-events:none`
  and text-color-transparent — taps still land on the image, nothing renders visually twice — but it
  is real DOM/accessibility-tree content, so a browser automation or accessibility tool reading the
  page sees actual structured elements instead of a flat screenshot.

## Module structure

The pieces are split by responsibility so the orchestration logic stays project-agnostic:

| file | role |
|---|---|
| `scripts/preview.mjs` | CLI orchestrator: parse args → build → engine → bridge → watch `.ets` |
| `scripts/lib/discovery.mjs` | locate toolchain; read the previewable module from the project's config files |
| `scripts/lib/config.mjs` | assemble the immutable session config; derive build paths + ability ohmurl |
| `scripts/lib/builder.mjs` | run `hvigorw PreviewBuild`, report success/failure |
| `scripts/lib/engine.mjs` | create the sockets, spawn/stop the `Previewer` engine, `send()` input commands, parse inbound command-pipe messages, `getInspectorTree()` |
| `scripts/lib/input.mjs` | translate browser events → engine commands (pointer / key / back) |
| `scripts/lib/bridge.mjs` | HTTP + WebSocket bridge; `/input` POST, `/inspector` GET; `setEngine()` hands it each new engine target + its `send`/`getInspectorTree` |
| `scripts/lib/viewer-page.mjs` | the static browser viewer HTML + the `#a11y` inspector-tree DOM overlay |
| `scripts/lib/status.mjs` | in-memory build-status channel + ArkTS error extraction |
| `scripts/lib/json5.mjs` | tolerant reader for HarmonyOS `*.json5` (comments + trailing commas) |
| `scripts/lib/registry.mjs` | on-disk record of live orchestrators (PID/port) for precise teardown |
| `scripts/capture-frame.mjs` | debug: grab one JPEG straight from a running engine |
| `scripts/cleanup.mjs` | `SessionEnd` hook target: terminate leftover previews from the registry |

The orchestrator owns the engine lifecycle, so on every rebuild it relaunches the engine and calls
`bridge.setEngine({port, sid, device, send, getInspectorTree})`. The bridge uses a `generation`
counter to invalidate the reconnect loop of the superseded engine, so stale sockets can't fight the
current one.

## Lifecycle and teardown

A preview spawns a heavy native `Previewer` engine plus a file watch, so it must release itself
without the user having to ask. There is one teardown path — `shutdown()` in `preview.mjs`
(stop engine → close bridge → exit), made idempotent — and three things call it:

1. **Manual** — `SIGINT`/`SIGTERM` (Ctrl-C).
2. **Browser-close auto-release.** The viewer page holds an SSE `/alive` connection open for its
   whole lifetime; closing the tab drops the socket, so `bridge.mjs`'s `req.on('close')` fires at
   once — far more reliable than guessing from polling gaps. The bridge counts open viewers and,
   when the count hits zero, calls `onIdle` (wired to `shutdown`) after a grace window
   (`releaseGraceMs`, default 10s) that a reload re-connects inside of. It **arms only after a
   browser has connected** (`everViewed`), so the documented headless `curl` flow — which never
   opens `/alive` — is never torn down. `--keep-alive` disables it.
3. **`SessionEnd` hook.** `hooks/hooks.json` runs `cleanup.mjs` when the Claude Code session ends.
   The orchestrator records itself (PID, port) via `registry.mjs` in
   `$TMPDIR/harmonyos-live-preview/sessions/<port>.json` on start and removes it on clean exit;
   `cleanup.mjs` reads that registry and `SIGTERM`s (then `SIGKILL`s) each live orchestrator,
   guarding against PID reuse with a `ps` command-line check. Using the registry rather than
   `pkill -f` keeps cleanup from touching anything but this skill's own processes.

The two automatic paths are complementary: (2) frees the engine the moment the user is done looking,
while (3) guarantees nothing leaks past the session even if the browser signal never arrived.

## Trade-offs

Each reload is a full `PreviewBuild` (~3–7s; dominated by the `PreviewArkTS` compile) plus an engine
restart, versus DevEco's sub-second in-place hot-swap. Fully standalone is the win; reload latency is
the cost.

The obvious optimization — keep the engine alive and issue an in-place reload command over the
command pipe instead of relaunching — **does not work standalone**: the engine reads the compiled
bundle at launch and does not re-read it in place. Tested against a live engine after rebuilding a
visibly-changed page, both `ReloadRuntimePage` and `LoadDocument` left the old frame unchanged,
while a full engine relaunch picked up the change. DevEco's sub-second hot-swap relies on keeping its
hvigor daemon warm across edits so `PreviewArkTS` only recompiles what changed; this skill invokes
`PreviewBuild` cold (`--no-daemon`) on every edit, which is what actually costs the seconds — the
task itself turned out to be a perfectly ordinary, CLI-invocable hvigor task once identified (see
[Getting the ArkUI inspector tree](#getting-the-arkui-inspector-tree)), not something IDE-exclusive.
So the skill relaunches the engine on each rebuild; the bridge keeps the last good frame on screen
and rewires the input channel automatically, so the relaunch is seamless apart from the build latency
itself.

The realistic lever for faster reloads is the **build**, not the engine: keeping a warm hvigor
daemon process across edits (instead of a fresh `--no-daemon` process per rebuild) would let
`PreviewArkTS` recompile incrementally instead of from scratch each time — not attempted here since
it reintroduces the daemon-lifecycle complexity this skill otherwise avoids.
