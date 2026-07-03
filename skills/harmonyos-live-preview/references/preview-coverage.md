# Preview coverage (mirrored from Huawei's official docs)

Everything here describes the `Previewer` engine's own capabilities — the same engine this skill and
DevEco Studio both drive — so it applies whether the engine was launched by DevEco's IDE or by this
skill's `preview.mjs`. None of it is specific to running standalone.

Source pages (each carries its own "更新时间"; re-check if something here looks stale):
[UI预览](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-ide-previewer),
[支持使用预览器的API清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-api-list),
[组件预览 / PreviewParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-previewer),
[PreviewChecker检测规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-previewchecker),
[预览数据模拟](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-mock),
[查看多端设备预览效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-multi-profile).
Fetched 2026-07-03.

## Supported ArkTS components

| Category | Components |
|---|---|
| Basic | AlphabetIndexer, Blank, Button, Checkbox, CheckboxGroup, DataPanel, DatePicker, Divider, Gauge, Image, ImageAnimator, ImageSpan, LoadingProgress, Marquee, Menu, MenuItem, MenuItemGroup, Navigation, NavRouter, NavDestination, PatternLock, Progress, QRCode, Radio, Rating, ScrollBar, Search, Select, Slider, Span, Stepper, StepperItem, Text, TextArea, TextClock, TextInput, TextPicker, TextTimer, Toggle |
| Container | Badge, Column, ColumnSplit, Counter, Flex, FlowItem, GridCol, GridRow, List, ListItem, ListItemGroup, Navigator, Panel, Refresh, RelativeContainer, Row, RowSplit, Scroll, SideBarContainer, Stack, Swiper, Tabs, TabContent, WaterFlow |
| Drawing | Circle, Ellipse, Line, Polyline, Path, Rect, Shape |
| Canvas | Canvas, CanvasGradient, CanvasPattern, CanvasRenderingContext2D, ImageBitmap, ImageData, Matrix2D, OffscreenCanvasRenderingContext2D, Path2D |

**Notably absent** (not on Huawei's list — no promise they render correctly; treat as unverified, not
as "will definitely fail"): `Web` (ArkWeb webview), `Video`, `XComponent`, `RichEditor`, the waterfall
`Grid`/`GridItem` pair (the *layout* helpers `GridRow`/`GridCol` are listed, `Grid` itself is not),
`FormComponent`/`PluginComponent`/`EmbeddedComponent`/`UIExtensionComponent`, `SymbolGlyph`, camera- or
map-backed views, and anything else requiring a native/hardware backend.

## Supported JS components (类Web/hml-css-js paradigm)

Relevant only to the legacy JS-compatible paradigm, not ArkTS declarative UI (which is what this skill
and modern HarmonyOS apps use).

| Category | Components |
|---|---|
| Basic | button, chart, divider, image, image-animator, input, label, marquee, menu, option, picker, picker-view, piece, progress, qrcode, rating, search, select, slider, span, switch, text, textarea, toolbar, toolbar-item, toggle |
| Container | badge, dialog, div, form, list, list-item, list-item-group, panel, popup, refresh, stack, stepper, stepper-item, swiper, tabs, tab-bar, tab-content |
| Canvas | canvas, CanvasRenderingContext2D, Image, CanvasGradient, ImageData, Path2D, ImageBitmap, OffscreenCanvas, OffscreenCanvasRenderingContext2D |
| Grid | grid-container, grid-row, grid-col |
| SVG | svg, rect, circle, ellipse, path, line, polyline, polygon, text, tspan, textPath, animate, animateMotion, animateTransform |

## Supported framework interfaces

| Module | API |
|---|---|
| `@ohos.animator` | `Animator`, `AnimatorResult`, `AnimatorOptions` |
| `@ohos.mediaquery` | `matchMediaSync`, `MediaQueryResult`, `MediaQueryListener` |
| `@ohos.promptAction` | `showToast`, `showDialog`, `showActionMenu`, `ShowToastOptions`, `Button`, `ShowDialogSuccessResponse`, `ShowDialogOptions`, `ActionMenuSuccessResponse`, `ActionMenuOptions` |
| `@ohos.router` | `pushUrl`, `replaceUrl`, `back`, `clear`, `getLength`, `getState`, `enableAlertBeforeBackPage`, `disableAlertBeforeBackPage`, `getParams`, `RouterMode`, `RouterOptions`, `RouterState`, `EnableAlertOptions` — page-to-page navigation works inside plain page preview, not just ability mode |
| `@ohos.net.http` | `http.createHttp` only — the sole supported network call. From API 12, the previewer honors the system `http_proxy`/`https_proxy`/`no_proxy` env vars if the request needs a proxy. |
| `@ohos.data.preferences` | `getPreferences`, `deletePreferences`, `removePreferencesFromCache`, `Preferences`, `ValueType` |
| `@ohos.file.fs` | `open`, `close`, `fdatasync`, `fsync`, `read`, `write`, `mkdir`, `mkdtemp`, `rename`, `rmdir`, `unlink`, `stat`, `truncate` — Stage HAP/HSP only, and only from DevEco Studio 6.0.0 Beta5+ with its IDE-side **Enable file operation** switch turned on. That switch lives in IDE/project state this skill never touches — unverified whether it's on by default for a pure CLI build. |

Everything outside these two tables — most system capabilities, most `@ohos.net.*` modules besides
`http.createHttp`, hardware sensors, most Ability/Context APIs — is not simulated by the previewer.
None of this fails at compile time; a page can build cleanly and still render blank or throw at
runtime. See [SKILL.md § When a page won't start](../SKILL.md#when-a-page-wont-start-mock-the-dependency)
for the mocking workaround.

## `@Preview` decorator / component preview

DevEco can preview a bare `@Component` struct (no `@Entry`) directly by decorating it with `@Preview`
— up to 10 per source file. **This skill doesn't drive that mode**: it only ever targets `@Entry`
routes via `--page` (see [how-it-works.md § Relation to DevEco's
PreviewBuild](how-it-works.md#relation-to-devecos-previewbuild) for why — `pageType=component` is a
real `PreviewBuild` inject config, just not one this orchestrator sets). Use the harness-page pattern
in SKILL.md to get the same effect through page mode instead.

`PreviewParams` (the `@Preview({...})` argument) controls per-preview device simulation DevEco exposes
that this skill bakes into its two `--device` profiles instead:

| Field | Type | Default | Notes |
|---|---|---|---|
| `title` | string | component name | English/digits only |
| `width` | number | 1080px | range `[20, 3000]` |
| `height` | number | 2340px | range `[20, 3000]` |
| `locale` | string | `zh_CN` | e.g. `en_US` |
| `colorMode` | `'light' \| 'dark'` | `light` (TV defaults `dark`; wearable is `dark`-only) | |
| `deviceType` | string | `Phone` | see `deviceTypes` in the module config file |
| `dpi` | number | 480 | range `[120, 640]` |
| `orientation` | `'portrait' \| 'landscape'` | `portrait` | |
| `roundScreen` | boolean | `false` | circular screen shape |

```ts
@Preview({ title: 'PreviewParams', width: 540, height: 1170, colorMode: 'dark' })
@Component
struct Test {
  @State message: string = 'PreviewParams';
  build() {
    RelativeContainer() { Text(this.message).fontSize(40).fontWeight(FontWeight.Bold) }
      .height('100%').width('100%')
  }
}
```

## PreviewChecker rules

DevEco runs this lint before launching a preview; the rules describe engine-level facts (not just IDE
policy), so a page that breaks one of them behaves the same way when previewed through this skill —
the only difference is nothing here flags it ahead of time, so watch for a blank frame or a
console-only error instead of an upfront lint message.

| Rule | What it means |
|---|---|
| `mandatory-default-value-for-local-initialization` | Any locally-initializable prop needs a legal, runtime-independent default, so the component still renders if a real caller's args are incomplete. |
| `no-unallowed-decorator-on-root-component` | Can't preview a component whose root uses `@Consume`/`@Link`/`@ObjectLink`/`@Prop` directly — preview a parent that supplies legal defaults instead (exactly the harness-page pattern in SKILL.md). |
| `paired-use-of-consume-and-provide` | `@Consume` needs an ancestor `@Provide` with a legal default (API ≤19), or its own default (API 20+). |
| `no-page-method-on-preview-component` | `onPageShow`/`onPageHide`/`onBackPress` only fire on `@Entry` components, not bare `@Preview` ones. |
| `no-page-import-unmocked-hsp` | Importing an HSP without a `mock-config.json5` entry risks a broken preview at runtime — mock it (see below) or avoid the import from the previewed component's dependency chain. |

## Official mock mechanism (Hamock)

DevEco's `@ohos/hamock` package (add as a `devDependency`, resync the project) provides two mocking
surfaces for preview builds:

- **Module mocks** — for a system module, HSP, or local module: write a `.mock.ets` file under
  `src/mock/` re-exporting a class that `extends` the real one (or free functions with the same
  names), then map the target module to it in `src/mock/mock-config.json5`:

  ```json5
  // src/mock/mock-config.json5
  {
    "@ohos.measure": { "source": "src/mock/MeasureText.mock.ets" },      // system/HSP module
    "utils/CommonUtils.ets": { "source": "src/mock/module/utils/CommonUtils.mock.ets" }, // local module (relative path + extension required)
  }
  ```

  ```ts
  // src/mock/MeasureText.mock.ets
  import MeasureText from '@ohos.measure';
  class MockMeasureText extends MeasureText {
    static measureText(): number { return 100; }
  }
  export default MockMeasureText;
  ```

  One target module maps to exactly one mock file; every page that imports that module gets the mock
  during preview. Local-module mocking only covers files under `src/main/ets`.

- **UI component mocks** — decorate a method with `@MockSetup`; it runs once at preview time, before
  `aboutToAppear`, and inside it you can reassign the component's own `@Prop`/state properties or use
  `MockKit`/`when(...).afterReturn(...)` to stub a method's return value for specific args:

  ```ts
  import { MockSetup } from '@ohos/hamock';

  @Component
  struct Person {
    @Prop species: string;
    @MockSetup randomName() { this.species = 'primates'; } // only runs in preview
  }
  ```

  `readonly` and `@ObjectLink` properties can't be mocked this way; for `@Link`/`@Consume`/`@Prop`/
  `@BuilderParam` children, DevEco still recommends the harness-parent pattern over property mocking.

Note (from SKILL.md): this is a compile-time source substitution applied during hvigor's `PreviewArkTS`
step, the same step `PreviewBuild` runs whether triggered by DevEco or by this skill's
`hvigorw ... PreviewBuild --no-daemon` — so it should carry over, but this skill hasn't independently
confirmed it against a CLI-only build yet.

## Multi-device / dynamic resolution (DevEco IDE feature, not reproduced here)

DevEco's **Multi-profile preview** runs up to 4 devices side by side (all must share one language,
ArkTS or JS) and its page preview supports freeform drag-resize of the device frame. This skill instead
launches one engine per orchestrator instance against a fixed `--device phone|tablet` geometry (see
`scripts/lib/config.mjs`'s `DEVICE_PROFILES`) — run two orchestrator instances (different `--port`s) if
you need two device geometries open at once. Note animation preview is disabled in DevEco's
multi-profile mode specifically; that limitation doesn't apply here since this skill never runs more
than one profile per engine.
