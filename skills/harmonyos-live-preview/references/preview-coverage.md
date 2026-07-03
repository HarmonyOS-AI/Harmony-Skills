# 预览覆盖范围（照搬自华为官方文档）

这里的内容描述的都是 `Previewer` 引擎自身的能力——本 skill 和 DevEco Studio 驱动的是同一个引擎——所以
无论这个引擎是被 DevEco 的 IDE 启动的，还是被本 skill 的 `preview.mjs` 启动的，这些内容都同样适用。
没有任何一条是独立运行场景所特有的。

来源页面（每篇都带有自己的"更新时间"；如果这里的内容看起来过时了，去原文重新核对）：
[UI预览](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-ide-previewer)、
[支持使用预览器的API清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-api-list)、
[组件预览 / PreviewParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-previewer)、
[PreviewChecker检测规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-previewchecker)、
[预览数据模拟](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-mock)、
[查看多端设备预览效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-multi-profile)。
抓取于 2026-07-03。

## 支持的 ArkTS 组件

| 分类 | 组件 |
|---|---|
| 基础 | AlphabetIndexer, Blank, Button, Checkbox, CheckboxGroup, DataPanel, DatePicker, Divider, Gauge, Image, ImageAnimator, ImageSpan, LoadingProgress, Marquee, Menu, MenuItem, MenuItemGroup, Navigation, NavRouter, NavDestination, PatternLock, Progress, QRCode, Radio, Rating, ScrollBar, Search, Select, Slider, Span, Stepper, StepperItem, Text, TextArea, TextClock, TextInput, TextPicker, TextTimer, Toggle |
| 容器 | Badge, Column, ColumnSplit, Counter, Flex, FlowItem, GridCol, GridRow, List, ListItem, ListItemGroup, Navigator, Panel, Refresh, RelativeContainer, Row, RowSplit, Scroll, SideBarContainer, Stack, Swiper, Tabs, TabContent, WaterFlow |
| 绘制 | Circle, Ellipse, Line, Polyline, Path, Rect, Shape |
| Canvas | Canvas, CanvasGradient, CanvasPattern, CanvasRenderingContext2D, ImageBitmap, ImageData, Matrix2D, OffscreenCanvasRenderingContext2D, Path2D |

**明显缺席的**（不在华为的清单上——不保证能正确渲染，当作"未验证"，而不是"必然失败"）：`Web`
（ArkWeb webview）、`Video`、`XComponent`、`RichEditor`、瀑布流的 `Grid`/`GridItem` 组合（*布局*
辅助组件 `GridRow`/`GridCol` 在清单里，`Grid` 本身不在）、
`FormComponent`/`PluginComponent`/`EmbeddedComponent`/`UIExtensionComponent`、`SymbolGlyph`，以及
依赖摄像头或地图的视图，还有其他任何需要原生/硬件后端支持的东西。

## 支持的 JS 组件（类 Web/hml-css-js 范式）

仅适用于旧版的、兼容 JS 的范式，不适用于 ArkTS 声明式 UI（本 skill 和现代 HarmonyOS 应用用的都是后者）。

| 分类 | 组件 |
|---|---|
| 基础 | button, chart, divider, image, image-animator, input, label, marquee, menu, option, picker, picker-view, piece, progress, qrcode, rating, search, select, slider, span, switch, text, textarea, toolbar, toolbar-item, toggle |
| 容器 | badge, dialog, div, form, list, list-item, list-item-group, panel, popup, refresh, stack, stepper, stepper-item, swiper, tabs, tab-bar, tab-content |
| Canvas | canvas, CanvasRenderingContext2D, Image, CanvasGradient, ImageData, Path2D, ImageBitmap, OffscreenCanvas, OffscreenCanvasRenderingContext2D |
| Grid | grid-container, grid-row, grid-col |
| SVG | svg, rect, circle, ellipse, path, line, polyline, polygon, text, tspan, textPath, animate, animateMotion, animateTransform |

## 支持的框架接口

| 模块 | API |
|---|---|
| `@ohos.animator` | `Animator`, `AnimatorResult`, `AnimatorOptions` |
| `@ohos.mediaquery` | `matchMediaSync`, `MediaQueryResult`, `MediaQueryListener` |
| `@ohos.promptAction` | `showToast`, `showDialog`, `showActionMenu`, `ShowToastOptions`, `Button`, `ShowDialogSuccessResponse`, `ShowDialogOptions`, `ActionMenuSuccessResponse`, `ActionMenuOptions` |
| `@ohos.router` | `pushUrl`, `replaceUrl`, `back`, `clear`, `getLength`, `getState`, `enableAlertBeforeBackPage`, `disableAlertBeforeBackPage`, `getParams`, `RouterMode`, `RouterOptions`, `RouterState`, `EnableAlertOptions`——页面间跳转在普通的页面预览下就能用，不需要 ability 模式 |
| `@ohos.net.http` | 仅 `http.createHttp`——唯一支持的网络调用。从 API 12 起，如果请求需要走代理，previewer 会遵循系统的 `http_proxy`/`https_proxy`/`no_proxy` 环境变量。 |
| `@ohos.data.preferences` | `getPreferences`, `deletePreferences`, `removePreferencesFromCache`, `Preferences`, `ValueType` |
| `@ohos.file.fs` | `open`, `close`, `fdatasync`, `fsync`, `read`, `write`, `mkdir`, `mkdtemp`, `rename`, `rmdir`, `unlink`, `stat`, `truncate`——仅限 Stage 类型的 HAP/HSP，且仅在 DevEco Studio 6.0.0 Beta5 及以上版本、开启了 IDE 侧的**启用文件操作**开关之后才可用。这个开关存在于本 skill 从不触碰的 IDE/工程状态里——纯 CLI 构建下它是否默认打开，未经验证。 |

除了这两张表之外的一切——大多数系统能力、除 `http.createHttp` 外的大多数 `@ohos.net.*` 模块、硬件
传感器、大多数 Ability/Context API——都不会被 previewer 模拟。这些都不会在编译期失败；一个页面可以
干干净净地构建成功，却在运行时渲染空白或抛异常。模拟方案参见
[SKILL.md § 当页面起不来时](../SKILL.md#mock-the-dependency)。

## `@Preview` 装饰器 / 组件预览

DevEco 可以直接预览一个裸的 `@Component` struct（没有 `@Entry`），只要给它加上 `@Preview` 装饰器——
每个源文件最多 10 个。**本 skill 不驱动这种模式**：它只通过 `--page` 定位 `@Entry` 路由（原因见
[how-it-works.md § 与 DevEco 的 PreviewBuild 之间的关系](how-it-works.md#relation-to-devecos-previewbuild)
——`pageType=component` 确实是一个真实存在的 `PreviewBuild` 注入配置，只是本编排器没有去设置它）。想要
在页面模式下拿到同样的效果，用 SKILL.md 里的 harness 页面模式即可。

`PreviewParams`（`@Preview({...})` 的参数）控制的是单次预览级别的设备模拟，DevEco 把这些能力暴露给
用户，本 skill 则把它们固化进了两套 `--device` 档位：

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `title` | string | 组件名 | 仅限英文/数字 |
| `width` | number | 1080px | 范围 `[20, 3000]` |
| `height` | number | 2340px | 范围 `[20, 3000]` |
| `locale` | string | `zh_CN` | 例如 `en_US` |
| `colorMode` | `'light' \| 'dark'` | `light`（TV 默认 `dark`；穿戴设备只有 `dark`） | |
| `deviceType` | string | `Phone` | 参见模块配置文件里的 `deviceTypes` |
| `dpi` | number | 480 | 范围 `[120, 640]` |
| `orientation` | `'portrait' \| 'landscape'` | `portrait` | |
| `roundScreen` | boolean | `false` | 圆形屏幕形状 |

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

<a id="previewchecker-rules"></a>

## PreviewChecker 规则

DevEco 在启动预览之前会跑这个 lint；这些规则描述的是引擎层面的事实（不只是 IDE 策略），所以一个页面
只要违反了其中一条，通过本 skill 预览时的表现也会一样——唯一的区别是这里不会提前标出来，你只能靠
一帧空白画面，或者一条只出现在控制台里的报错来发现问题。

| 规则 | 含义 |
|---|---|
| `mandatory-default-value-for-local-initialization` | 任何本地可初始化的 prop 都需要一个合法的、不依赖运行时的默认值，这样即使真实调用方传的参数不完整，组件也依然能渲染。 |
| `no-unallowed-decorator-on-root-component` | 不能直接预览根节点用了 `@Consume`/`@Link`/`@ObjectLink`/`@Prop` 的组件——要预览一个提供了合法默认值的父组件（正是 SKILL.md 里的 harness 页面模式）。 |
| `paired-use-of-consume-and-provide` | `@Consume` 需要一个带合法默认值的祖先 `@Provide`（API ≤19），或者自己带默认值（API 20+）。 |
| `no-page-method-on-preview-component` | `onPageShow`/`onPageHide`/`onBackPress` 只会在 `@Entry` 组件上触发，裸的 `@Preview` 组件不会。 |
| `no-page-import-unmocked-hsp` | 导入一个没有 `mock-config.json5` 映射项的 HSP，会有运行时预览崩掉的风险——要么 mock 掉它（见下文），要么让被预览组件的依赖链避开这个 import。 |

<a id="official-mock-mechanism-hamock"></a>

## 官方 mock 机制（Hamock）

DevEco 的 `@ohos/hamock` 包（作为 `devDependency` 加入，然后 resync 工程）为预览构建提供了两种 mock
能力：

- **模块 mock**——针对系统模块、HSP，或本地模块：在 `src/mock/` 下写一个 `.mock.ets` 文件，让它
  `extends` 真实的类导出一个替身（或者导出同名的自由函数），然后在
  `src/mock/mock-config.json5` 里把目标模块映射到这个替身：

  ```json5
  // src/mock/mock-config.json5
  {
    "@ohos.measure": { "source": "src/mock/MeasureText.mock.ets" },      // 系统/HSP 模块
    "utils/CommonUtils.ets": { "source": "src/mock/module/utils/CommonUtils.mock.ets" }, // 本地模块（需要相对路径 + 扩展名）
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

  一个目标模块只能映射到一个 mock 文件；预览时，任何 import 了那个模块的页面都会拿到这个 mock。
  本地模块的 mock 只覆盖 `src/main/ets` 下的文件。

- **UI 组件 mock**——用 `@MockSetup` 装饰一个方法；它会在预览时运行一次，且在 `aboutToAppear`
  之前，你可以在里面重新赋值组件自己的 `@Prop`/state 属性，或者用
  `MockKit`/`when(...).afterReturn(...)` 针对特定参数给某个方法的返回值打桩：

  ```ts
  import { MockSetup } from '@ohos/hamock';

  @Component
  struct Person {
    @Prop species: string;
    @MockSetup randomName() { this.species = 'primates'; } // 只在预览时运行
  }
  ```

  `readonly` 和 `@ObjectLink` 属性没法用这种方式 mock；对于 `@Link`/`@Consume`/`@Prop`/
  `@BuilderParam` 子组件，DevEco 依然建议用 harness 父组件模式，而不是属性级 mock。

（来自 SKILL.md 的补充说明）这是在 hvigor 的 `PreviewArkTS` 步骤里做的编译期源码替换，和 `PreviewBuild`
所跑的是同一个步骤，不管是 DevEco 触发的，还是本 skill 的 `hvigorw ... PreviewBuild --no-daemon`
触发的——所以理论上应该同样适用，但本 skill 还没有针对纯 CLI 构建独立确认过这一点。

## 多设备 / 动态分辨率（DevEco IDE 特有功能，本 skill 未复现）

DevEco 的**多设备预览**能同时并排运行最多 4 台设备（必须共享同一种语言，ArkTS 或 JS 二选一），它的
页面预览还支持自由拖拽改变设备边框大小。本 skill 则是每个编排器实例只针对固定的 `--device
phone|tablet` 几何尺寸启动一个引擎（参见 `scripts/lib/config.mjs` 的 `DEVICE_PROFILES`）——如果需要
同时打开两种设备几何尺寸，就跑两个编排器实例（用不同的 `--port`）。另外，DevEco 的多设备预览模式下
动画预览是禁用的；这个限制在这里不适用，因为本 skill 每个引擎从来只跑一种档位。
