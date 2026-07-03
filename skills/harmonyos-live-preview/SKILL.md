---
name: harmonyos-live-preview
description: Render a HarmonyOS ArkUI app's UI in a browser, interact with it (tap/swipe/type), and edit-and-refresh, using only the HarmonyOS command-line-tools — no DevEco Studio. Use when a user wants to preview a HarmonyOS/ArkTS/ArkUI app, see a .ets page in the browser, click/scroll/type into a live preview, get a live/hot-reload preview while editing .ets, or capture visual proof of a HarmonyOS UI without DevEco. 在浏览器里实时预览并交互（点击/滑动/输入）鸿蒙 HarmonyOS / ArkUI / ArkTS 应用界面，改 .ets 自动刷新，无需 DevEco Studio。触发词：鸿蒙预览、ArkUI 预览、ArkTS 预览、HarmonyOS 实时预览、可交互预览、.ets 预览、热重载、零 DevEco。
---

# HarmonyOS ArkUI Live Preview (zero DevEco)

Render a HarmonyOS ArkUI app in a browser, **interact with it** (tap, drag/swipe, scroll, type,
system-back), and auto-refresh on every `.ets` edit — driven only by the HarmonyOS
`command-line-tools` (hvigorw + the SDK's standalone `Previewer` engine). No DevEco Studio, no
hvigor preview-service, no `projectConfig` reconstruction.

```
 edit .ets ─▶ hvigorw PreviewBuild ─▶ relaunch SDK Previewer engine ─▶ bridge ─▶ browser
            (CLI builds the project    (renders the artifacts, streams   (JPEG over /frame.jpg,
             model itself, with         JPEG over a WebSocket)            component tree over
             inspector metadata)        ▲ also answers "inspector"        /inspector)
                                        │ over the same command pipe             ▲ │
                                        └─ the Unix command pipe ◀── /input ◀────┘ ▼ tap/swipe/
                                                                                     type/back
```

`PreviewBuild` is the same hvigor task graph DevEco's own preview daemon drives
(`PreviewUpdateAssets` → `ReplacePreviewerPage` → `PreviewArkTS` → `buildPreviewerResource`) — it's a
regular, CLI-invocable task (registered for every HAP module, not IDE-injected), and unlike a plain
`assembleHap` build its ArkTS compile embeds inspector/debug metadata. That's what lets the engine's
"inspector" command return a real component tree (types, layout rects, source-line mapping, full
attribute dump) instead of a bare root — exposed as `GET /inspector` and mirrored into the viewer
page as an invisible DOM tree (`#a11y`) positioned over the image, so accessibility tools / DOM
queries can see actual elements instead of a flat screenshot.

This is the same control channel DevEco's preview-server uses: the SDK Previewer is interactive on
its own — it takes pointer/keyboard commands over a Unix-domain command pipe. The skill keeps that
pipe and forwards browser events to it, so the in-browser preview clicks, scrolls, and types just
like DevEco's Previewer pane.

## Prerequisites

- The HarmonyOS toolchain installed — either standalone `command-line-tools` **or** a full DevEco
  Studio. The skill needs exactly **one** input from it: the **toolchain root**. Everything else
  (`hvigorw`, the SDK `Previewer` engine, the HMS previewer) is derived relative to that root, so no
  other machine path is baked in.
- Node.js ≥ 21 (global `WebSocket`). No npm dependencies — pure Node standard library.
- A buildable HarmonyOS project (a `build-profile.json5` at its root).
- **Platform:** macOS / Linux. The engine talks to the Previewer over Unix-domain sockets, so the
  live preview does not run on Windows yet (toolchain *discovery* is Windows-aware, the runtime is not).
- **Headless Linux / server (ECS, container, CI):** runs with **no GPU and no monitor**. The
  Previewer creates its GL context through a bundled GLFW that needs an X11 display; on a box with no
  `$DISPLAY` the orchestrator **auto-starts a virtual one (Xvfb)** and renders purely in software via
  Mesa llvmpipe. Install that stack once:
  - Debian/Ubuntu: `apt-get install -y xvfb libgl1 libglu1-mesa libgl1-mesa-dri fonts-noto-cjk`
  - Fedora/CentOS: `dnf install -y xorg-x11-server-Xvfb mesa-libGL mesa-dri-drivers google-noto-sans-cjk-fonts`

  A desktop Linux (or any box with `$DISPLAY` / `$WAYLAND_DISPLAY` already set) is used as-is — no
  Xvfb is started and the existing display is never torn down. The SDK on a Linux box is the
  `command-line-tools` Linux build; if it lives at a non-standard path, point `--clt` at it (or set
  `$HARMONY_SDK`), since auto-detect only probes `~/command-line-tools` and `/opt/deveco-studio`.

### Locating the toolchain root

Pass the root with `--clt <dir>` (alias `--sdk <dir>`), or set `$HARMONY_SDK` / `$HARMONY_CLT`. With
no override, these conventional locations are probed automatically: `~/command-line-tools`,
`~/Library/command-line-tools`, and the platform's DevEco bundle (`/Applications/DevEco-Studio.app`
on macOS, `%ProgramFiles%\Huawei\DevEco Studio` on Windows, `/opt/deveco-studio` on Linux). If
auto-detection misses, **find the root first** (ask the user, or search common install dirs) and pass
it in. A root resolves whether it is a standalone `command-line-tools` dir (`bin/hvigorw`) or a
DevEco bundle (`tools/hvigor/bin/hvigorw`) — both share the same `sdk/…/Previewer` subtree, and a
`.app` or its `Contents` are both accepted.

## Workflow

Run the single-process orchestrator in a long-lived terminal, pointed at the project root. It
builds, launches the engine, serves the browser viewer, and watches `.ets` files — all in one
process.

```bash
node ${CLAUDE_PLUGIN_ROOT}/skills/harmonyos-live-preview/scripts/preview.mjs \
  --project /absolute/path/to/HarmonyOSProject
```

This default startup already builds with `PreviewBuild` (see the pipeline above) — the component
tree is available from the moment it's up, with no extra flag: `GET /inspector` and the viewer's
`#a11y` DOM overlay both work out of the box on every plain `preview_start`/`node preview.mjs`.

The printed `http://127.0.0.1:8088` is a normal, **interactive** page — see
[Interacting with the preview](#interacting-with-the-preview) — but how you *open* it depends on
the host app; see below.

### Opening it — prefer the host app's embedded browser

If the agent is running inside an app that exposes its own embedded browser/preview
capability — **Claude Code's `Claude Preview` tools** (`preview_start`/`preview_stop`/
`preview_screenshot`/`preview_eval`/`preview_snapshot`/`preview_inspect`/`preview_network`/…) or
**Codex**'s equivalent embedded-preview/browser tool — prefer that over spawning `preview.mjs`
directly with a raw shell command and telling the user to go open a system browser. The host app's
tool keeps the process lifecycle (start/stop/logs) managed instead of an untracked background
process, and gives programmatic screenshot/DOM/network access for free — exactly what
[Verifying it works](#verifying-it-works) and iterating on a UI change need.

Concretely, for Claude Code:

1. Make sure `.claude/launch.json` in the project root has a configuration entry for this preview
   (create the file if it doesn't exist; if it already has other configurations, add this as one
   more entry rather than overwriting them):
   ```json
   {
     "version": "0.0.1",
     "configurations": [
       {
         "name": "harmonyos-live-preview",
         "runtimeExecutable": "node",
         "runtimeArgs": [
           "${CLAUDE_PLUGIN_ROOT}/skills/harmonyos-live-preview/scripts/preview.mjs",
           "--project", "/absolute/path/to/HarmonyOSProject"
         ],
         "port": 8088
       }
     ]
   }
   ```
   Adjust `--project` — and add `--page`/`--device`/`--ability-mode`/etc. to `runtimeArgs` — to
   match the project and route actually being previewed.
2. Call the preview-start tool by `name` (`harmonyos-live-preview`) instead of running the command
   via Bash. It reuses an already-running server for the same config, so calling it again after an
   edit (or from a fresh conversation) is cheap and won't spawn a duplicate orchestrator.
3. Drive and verify it with that same tool family — screenshot, eval, network, snapshot/inspect —
   instead of `curl`/`ps`; they're the natural fit for "does this look right" and "click that
   button" while iterating on a change.

Codex (or any other host with an analogous embedded-preview mechanism): apply the same preference
— check for that mechanism's own config/launch convention and register the preview through it,
rather than assuming Claude Code's `.claude/launch.json` format applies there too.

Only fall back to raw `node preview.mjs` plus telling the user to open `http://127.0.0.1:8088`
manually when no such embedded tooling is available (a plain terminal session, or a host app
without any preview integration).

The previewable module and its settings are auto-discovered from the project's own config files:
the **entry-type module** (from `build-profile.json5` + each `module.json5`), its UIAbility, its
package name (`oh-package.json5`), its pages profile, and the first page as the default route.
Override any of it:

| flag | purpose | default |
|---|---|---|
| `--project <dir>` | HarmonyOS project root | current directory |
| `--module <name>` | module to preview | the entry-type module |
| `--page <route>` | **any `@Entry` route** to preview (DevEco-style per-page preview), e.g. `pages/AdaptiveIndex` | first page in the profile |
| `--device <type>` | device profile — geometry + type: `phone` (1080×2340 portrait) or `tablet` (2048×1280 landscape) | `phone` |
| `--clt`/`--sdk <dir>` | toolchain root (command-line-tools dir or DevEco bundle) | `$HARMONY_SDK`/`$HARMONY_CLT`, else common install locations |
| `--port <n>` | browser viewer HTTP port | `8088` |
| `--lws <n>` | engine image-websocket port | `41200` |
| `--ability-mode` | launch the real UIAbility instead of rendering `--page` directly (see Preview modes) | off (page mode) |
| `--no-watch` | build once, static view (no edit-and-refresh) | watch on |
| `--keep-alive` | keep running after the browser tab closes (for headless / always-on use) | off (auto-release on) |

### Preview modes

- **Page mode (default)** — renders the `--page` `@Entry` route directly, exactly like DevEco's
  per-page preview. The engine is launched without `-d/-abn/-abp`, so **no UIAbility runs**; any
  `@Entry` in the module's pages profile previews without recompiling or touching the ability's
  `loadContent`. This is why `--page pages/AdaptiveIndex` shows that page even when the app's
  ability loads `pages/Index`.
- **Ability mode (`--ability-mode`)** — launches the real UIAbility (its `onCreate` /
  `onWindowStageCreate` lifecycle) and shows whatever it `loadContent`s. The displayed page is then
  fixed by the ability, so `--page` has no effect. Use it when you need the ability's startup logic,
  not an isolated page.

`--page` accepts only routes listed in the module's pages profile (`$profile:main_pages`). A bare
`@Preview` component that is not an `@Entry` page cannot be addressed this way — preview the `@Entry`
page that hosts it.

### Lifecycle / releasing the preview

The preview frees itself at the right moments instead of waiting to be told — no orphaned
`Previewer` engines:

- **Browser tab closed → auto-release.** The viewer page holds a `/alive` SSE channel open; when you
  close the tab the orchestrator stops the engine, closes the bridge, and exits (after a ~10s grace
  that absorbs a page reload). This only arms **after a browser has connected**, so the headless
  `curl` flow below — which never opens a browser — keeps running. Pass `--keep-alive` to disable
  auto-release (headless or always-on use).
- **Session ended → guaranteed cleanup.** A bundled `SessionEnd` hook
  ([hooks/hooks.json](../../hooks/hooks.json) → `scripts/cleanup.mjs`) terminates any preview still
  running when the Claude Code session ends, found precisely via a registry file under
  `$TMPDIR/harmonyos-live-preview/sessions/` (not a broad `pkill`).
- **Manual.** Ctrl-C (SIGINT/SIGTERM) still works — same single teardown path.

## Interacting with the preview

The browser page forwards input straight to the running engine, so the preview behaves like a real
(if mocked) device:

- **Tap** — click anywhere on the screen. Triggers `onClick`, navigates `Navigation`/router, etc.
- **Swipe / scroll / drag** — press and drag on the screen. Scrolls `List`/`Scroll`, drags sliders.
- **Type** — click the `⌨ 键盘` button (or focus the screen) to capture your physical keyboard, then
  click a `TextInput`/`TextArea` to focus it and type. Letters, digits, and space are forwarded;
  Backspace/Enter too. The bound state updates live.
- **System back** — the `← 返回` button sends a back event (pops the route / closes a dialog).

Headless or scripted? Drive it with HTTP `POST /input` (coordinates are normalized `0..1` over the
rendered frame; the bridge scales them to device px):

```bash
# tap the center of the screen
curl -sX POST http://127.0.0.1:8088/input -d '{"t":"p","phase":"down","x":0.5,"y":0.5}'
curl -sX POST http://127.0.0.1:8088/input -d '{"t":"p","phase":"up","x":0.5,"y":0.5}'
# swipe up (scroll down): down high, move low, up
curl -sX POST http://127.0.0.1:8088/input -d '{"t":"p","phase":"down","x":0.5,"y":0.75}'
curl -sX POST http://127.0.0.1:8088/input -d '{"t":"p","phase":"move","x":0.5,"y":0.25}'
curl -sX POST http://127.0.0.1:8088/input -d '{"t":"p","phase":"up","x":0.5,"y":0.25}'
# type a character into the focused input, and go back
curl -sX POST http://127.0.0.1:8088/input -d '{"t":"key","key":"a","code":"KeyA"}'
curl -sX POST http://127.0.0.1:8088/input -d '{"t":"back"}'
```

Interaction also survives a hot reload: after each rebuild the engine is relaunched and the input
channel is rewired automatically. (`/status` reports `"interactive":true` once the channel is live.)

## Verifying it works

A loaded page is not proof the stream is healthy. Confirm a real frame renders before reporting
success, using either of:

- `GET http://127.0.0.1:<port>/status` → expect `"engineConnected":true` and `"hasFrame":true`.
  On a compile error it returns `"build":"error"` with `buildError` (the ArkTS error lines), and
  the last good frame stays on screen.
- `GET http://127.0.0.1:<port>/frame.jpg` → a JPEG of the current UI. For headless proof without
  a browser, save it and inspect it.
- `GET http://127.0.0.1:<port>/inspector` → the component tree as JSON. A populated tree (non-empty
  `$children`, real `$attrs.content`/`placeholder` text) confirms the engine is running a
  `PreviewBuild` bundle, not just rendering pixels.

A standalone debug grab (auto-discovers the running engine via `ps`):

```bash
node ${CLAUDE_PLUGIN_ROOT}/skills/harmonyos-live-preview/scripts/capture-frame.mjs /tmp/frame.jpg
```

## Endpoints (bridge)

- `/` — the interactive viewer page (forwards input, polls `/status` + `/frame.jpg`, overlays build
  state, shows ArkTS errors)
- `/frame.jpg` — latest JPEG frame
- `/mjpeg` — `multipart/x-mixed-replace` stream
- `/inspector` — the ArkUI component tree (`{$type, $rect, $debugLine, $attrs, $children}`,
  recursive), straight from the engine's own "inspector" command. `503` if the engine hasn't answered
  yet (first request after a (re)build can take a moment). Same data the viewer's `#a11y` DOM overlay
  is built from.
- `/input` — `POST` browser input → engine commands. Body: `{t:"p",phase,x,y}` (pointer, normalized),
  `{t:"key",key,code}` (keystroke), or `{t:"back"}`. Returns `{sent}`; `503` if no engine yet.
- `/status` — JSON: `{ engineConnected, hasFrame, port, device, resolution, interactive, frameAgeMs, build, buildError }`
- `/alive` — SSE liveness channel the viewer holds open; when the last one closes the orchestrator
  auto-releases (unless `--keep-alive`). Drives the browser-close teardown.

## Trade-offs vs DevEco

- **Interaction: parity.** Tap, swipe/scroll, text input, and system-back all work — the skill uses
  the same command channel the SDK Previewer exposes.
- **Reload: slower.** Reload = full `PreviewBuild` (~3–7s; it's the same `PreviewArkTS` compile
  DevEco's own preview daemon runs, just invoked one-shot via `--no-daemon` instead of through a
  long-lived hvigor daemon) + engine restart, versus DevEco's sub-second in-place hot-swap. That
  hot-swap is **not reproducible standalone**: the SDK Previewer reads the compiled bundle at launch
  and does not re-read it in place — only a relaunch picks up new code (verified:
  `ReloadRuntimePage`/`LoadDocument` against a live engine do not refresh the bundle). DevEco's fast
  path depends on keeping its hvigor daemon warm across edits for true incremental recompiles; this
  skill runs each build cold (`--no-daemon`) for process-lifecycle simplicity, so every reload pays
  the full compile. Fully standalone is the win; reload latency is the cost. The last good frame
  stays on screen across the relaunch.

See [references/how-it-works.md](references/how-it-works.md) for the engine internals, the input
command protocol, and the design of the standalone pipeline.
