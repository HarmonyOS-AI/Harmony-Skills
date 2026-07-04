---
name: harmonyos-live-preview
description: Preview, screenshot, and interact with a HarmonyOS ArkUI app in a browser using only the command-line-tools — no DevEco Studio. Renders any @Entry page, rebuilds on every .ets edit, can preview multiple device sizes side by side (--devices phone,tablet, mirroring DevEco's multi-device preview), and ships a driver CLI (wait for rebuild / capture frame across every size / read the live ArkUI component tree / tap / swipe / type). Use it whenever you modify ArkUI or .ets code and need visual proof it renders correctly (screenshot + component-tree assertions), whenever the user asks to preview, see, demo, or screenshot a HarmonyOS page on one or multiple screen sizes, verify responsive/breakpoint behavior, or debug a blank or wrong-looking ArkUI page. 无需 DevEco Studio 在浏览器实时预览鸿蒙应用：改 .ets 自动重建，可同时预览多个设备尺寸（手机+平板并排），命令行等待构建、截图（支持一次截全部尺寸）、读组件树、点击/滑动/输入。改完 ArkUI 代码要看效果、验证、截图，用户想预览鸿蒙页面效果、验证响应式/多尺寸适配，或排查白屏/样式错乱时都用它。触发词：鸿蒙预览、看下效果、界面截图、HarmonyOS/ArkUI/ArkTS/.ets 预览、可交互预览、热重载、白屏排查、多设备预览、响应式适配、多尺寸同屏。
---

# HarmonyOS ArkUI 实时预览

在浏览器里渲染 HarmonyOS ArkUI 应用，与它交互（点击、滑动、输入、系统返回），每次编辑 `.ets` 自动
重建刷新——全程只依赖 HarmonyOS 的 `command-line-tools`（hvigorw + SDK 自带的独立 `Previewer`
引擎），不需要 DevEco Studio。对 agent 来说它同时是**验证工具**：截下来的帧可以直接用图像阅读
能力查看，组件树可以做机器断言（渲染文本、布局矩形、映射回源码行）。架构、引擎参数、命令管道协议
等机制考证见 [references/how-it-works.md](references/how-it-works.md)，只在排查深层问题时才需要读。

## 前置条件

- **HarmonyOS 工具链**——独立 `command-line-tools` 或完整 DevEco Studio 均可，只需要它的**根目录**。
  用 `--clt <dir>`（别名 `--sdk`）传入，或设 `$HARMONY_SDK`/`$HARMONY_CLT`；不传则自动探测
  `~/command-line-tools`、`~/Library/command-line-tools`、`/Applications/DevEco-Studio.app`、
  `/opt/deveco-studio`、`%ProgramFiles%\Huawei\DevEco Studio`。探测失败就先找到根目录（问用户或搜
  常见安装位置）再传。两种布局（`bin/hvigorw` 或 `tools/hvigor/bin/hvigorw`）都能解析。
- **Node.js ≥ 21**（需要全局 `WebSocket`）。无 npm 依赖，纯标准库。
- **可构建的 HarmonyOS 工程**（根目录有 `build-profile.json5`）。
- **平台：macOS / Linux。** 引擎经 Unix-domain socket 通信，运行时不支持 Windows。
- **无头 Linux（ECS/容器/CI）可用，无需 GPU：** 没有 `$DISPLAY` 时编排器自动起 Xvfb + Mesa 软件渲染，
  但依赖要预装——Debian/Ubuntu：`apt-get install -y xvfb libgl1 libglu1-mesa libgl1-mesa-dri
  fonts-noto-cjk`；Fedora：`dnf install -y xorg-x11-server-Xvfb mesa-libGL mesa-dri-drivers
  google-noto-sans-cjk-fonts`。桌面 Linux/macOS 直接复用现有 display。

## 启动预览

单进程编排器：构建、起引擎、起浏览器 viewer、监视 `.ets`，一个进程全包。

```bash
node ${CLAUDE_PLUGIN_ROOT}/skills/harmonyos-live-preview/scripts/preview.mjs \
  --project /absolute/path/to/HarmonyOSProject
```

| 参数 | 作用 | 默认值 |
|---|---|---|
| `--project <dir>` | 工程根目录 | 当前目录 |
| `--module <name>` | 要预览的模块 | entry 类型模块（自动发现） |
| `--page <route>` | 要预览的 `@Entry` 路由，如 `pages/AdaptiveIndex` | pages 配置里第一个页面 |
| `--device <type>` | `phone`（1080×2340@480dpi 竖屏 = 360×780vp）或 `tablet`（2048×1280@320dpi 横屏 = 1024×640vp）——断点/响应式调试按 vp 算 | `phone` |
| `--devices <列表>` | 逗号分隔，**同时**预览多个尺寸，例如 `phone,tablet`，并排显示在浏览器 viewer 里。给了就覆盖 `--device`。 | 未给时等价于 `--device` 的单一档位 |
| `--clt`/`--sdk <dir>` | 工具链根目录 | 见前置条件 |
| `--port <n>` | viewer HTTP 端口 | `8088` |
| `--ability-mode` | 跑真正的 UIAbility 而不是直接渲染 `--page`（见下） | 关（页面模式） |
| `--no-watch` | 只构建一次，不做编辑后自动刷新 | 默认 watch |
| `--keep-alive` | 浏览器 tab 关闭后不自动释放（无头/常驻用） | 默认自动释放 |

模块、UIAbility、包名、pages 配置都从工程配置文件自动发现，以上参数只是覆盖项。

### 同时预览多个尺寸

```bash
node ${CLAUDE_PLUGIN_ROOT}/skills/harmonyos-live-preview/scripts/preview.mjs \
  --project /absolute/path/to/HarmonyOSProject --devices phone,tablet
```

每个尺寸各起一个独立的 `Previewer` 引擎进程，浏览器 viewer 里横向并排各画一块面板；每次重建
（改 `.ets`）会重启**全部**配置的引擎。不传 `--devices` 时单尺寸的行为和开销与以前完全一样。
尺寸只能从 `phone`/`tablet` 两档里选（`scripts/lib/config.mjs` 的 `DEVICE_PROFILES`），任意
自定义分辨率暂不支持。

`drive.mjs` 用 `--device <id>` 选定要操作哪个面板：

```bash
$DRIVE devices                    # 列出已配置的尺寸 + 各自在线状态（含 engineError，见下）
$DRIVE shot --all                 # 一次性截出所有尺寸，写 <out>-<id>.jpg（默认 /tmp/harmony-preview-<id>.jpg）
$DRIVE tap "提交订单" --device tablet   # 只影响 tablet 那块面板
$DRIVE tree --device phone         # 不传 --device 时默认第一个配置的尺寸——单尺寸用法完全不用改
```

**换页面 = 重启编排器**：`--page` 是启动参数，没有运行时切页接口。预览另一个 `@Entry` 就带新
`--page` 重启（Claude Preview 场景：改 `launch.json` 的 `runtimeArgs` 再 preview-start 一次）。
`--page` 只接受模块 pages 配置（`$profile:main_pages`）里列出的路由。**只有 `@Preview` 没有
`@Entry` 的裸组件（DevEco 的"组件预览"）不支持**（纯 CLI 复刻不了 DevEco 的 IDE 侧实现，考证见
[how-it-works.md § 组件预览调查](references/how-it-works.md#component-preview-investigation)）。
替代方案：预览承载它的页面，或用 [harness 模式](#mock-the-dependency)手写包装页——含 `@Preview`
的文件在页面模式下照常预览，装饰器本身无副作用。

### 优先用宿主应用的内嵌浏览器

如果当前 agent 运行在自带内嵌浏览器/预览工具的宿主里——如 **Claude 的 `Claude Preview` 工具**
（`preview_start`/`preview_screenshot`/`preview_eval`/…）或 **Codex** 的等价机制——优先用它们，
而不是裸 shell 起 `preview.mjs` 再让用户自己开浏览器：宿主工具管得住进程生命周期，还自带截图。

Claude 的接法：在工程根目录 `.claude/launch.json` 里加一项（文件不存在就建；已有其他配置就
追加，别覆盖）：

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

然后按 `name` 调 preview-start 工具（它会复用同配置已在跑的服务，重复调用不会起重复的编排器）。
Codex 或其他宿主：查该宿主自己的启动约定注册预览，不要照搬 `.claude/launch.json` 格式。
完全没有内嵌工具时（纯终端），直接跑 `preview.mjs`，让用户打开打印出的 `http://127.0.0.1:8088`。

无论哪种方式启动，下面的 `drive.mjs` 验证/交互命令都照常可用——编排器会把自己登记到注册表，
`drive.mjs` 自动发现它（多实例时传 `--port`）。

## 核心循环：编辑 → 重建 → 验证

最常见的用法：你刚改了 `.ets`，要拿到"真的生效了"的证据再向用户汇报。

```bash
DRIVE="node ${CLAUDE_PLUGIN_ROOT}/skills/harmonyos-live-preview/scripts/drive.mjs"

# 1) 保存文件后，阻塞到 watcher 触发的这一轮重建结束
$DRIVE wait --for-rebuild        # 构建失败 → 打印 ArkTS 报错行并 exit 1
# 2) 截一帧，用你的图像阅读能力亲眼看
$DRIVE shot /tmp/preview.jpg     # 然后 Read /tmp/preview.jpg
# 3) 机器断言：确认新文案/新组件真的渲染出来了
$DRIVE find "提交订单"            # 打印匹配节点的 rect/归一化中心/源码行；找不到 exit 1
$DRIVE tree --depth 6            # 紧凑组件树大纲：type "文本" rect @源码行
```

避免误报成功的四条规则：

- **别用 sleep，别保存后立刻查 `/status`**——watcher 有 200ms 防抖，立刻查看到的还是**上一轮**
  构建的 `ok`。`wait --for-rebuild` 保证"最新一次被监听的文件变更已经构建完成"，无论保存后隔了
  多久才调用，结论都正确。
- **`wait` exit 3 = 这次编辑根本没触发构建**——watcher 只监听 `<module>/src/main/ets` 下的
  **`.ets`** 文件，改 `resources/`（string.json、图片）、`module.json5` 或其他模块的文件都不会
  触发重建。touch 一个被 watch 的 `.ets`（或重启编排器）让改动进下一轮构建；开着 `--no-watch`
  时同理。
- **构建失败时画面保留上一帧正常内容**——旧帧截图看起来一切正常。先看 `wait` 的退出码，再信截图。
- 每次重建后引擎整个重启（一次完整 `PreviewBuild`，约 3–7 秒），期间 `engineConnected` 短暂为
  false——`wait` 会把构建、引擎重连、出帧三个条件都等齐才返回。

`tree`/`find` 输出里的 `@ entry/src/main/ets/pages/Index.ets(20:9)` 是源码位置：看到哪个节点
渲染得不对，直接映射回源码行去改，不用肉眼在工程里找。

## 与预览交互

浏览器 viewer 页面本身就能点击/滑动/物理键盘输入/系统返回（给用户演示用）。脚本化驱动用 drive.mjs：

```bash
$DRIVE tap "登录"                 # 按渲染文本找元素点其中心；多个匹配会列出，加 --index 消歧
$DRIVE tap 0.5,0.3               # 坐标：0..1 归一化；>1 按设备像素算，find 输出可直接粘贴
$DRIVE swipe 0.5,0.75 0.5,0.25   # 向上滑=列表向下滚；move 事件按真实时间分布，fling 才有速度
$DRIVE tap "请输入内容" && $DRIVE type "hello 123"   # 先 tap 输入框聚焦，再打字
$DRIVE key Enter                 # Enter / Backspace / Tab / Space
$DRIVE back                      # 系统返回：弹路由栈 / 关对话框
$DRIVE raw FoldStatus '{"FoldStatus":"fold"}'   # 逃生舱：向命令管道发任意引擎命令
```

`raw` 能发引擎支持的任意命令（`FoldStatus`、`Resolution`、`OrientationChanged`、`LoadDocument`
等，完整词汇表见 how-it-works.md）；配合 `PREVIEW_ENGINE_LOG=1` 能看到引擎对每条命令的应答。

交互后的验证与编辑后一样：`shot` + `find`/`tree` 断言状态变化（点了"关注"之后 `find "已关注"`）。
交互能力在热重载之后依然保持——输入通道随引擎重启自动重接。

**键盘通道没有 IME：只有 `[a-zA-Z0-9 ]` + Enter/Backspace/Tab 能到达引擎，中文和符号打不进去。**
要验证中文文本的显示，把值写进页面/harness 的 `@State` 或 mock 数据，而不是运行时打字。

自己手搓 `/input` 协议时（不经 drive.mjs）：body 为 `{t:"p",phase:"down|move|up",x,y}`（0..1 归一
化）、`{t:"key",key,code}`、`{t:"back"}`。注意键盘 keyAction 用 Previewer 自己的枚举
（DOWN=0/UP=1/PRESS=2），不是 `@ohos.multimodalInput` 的——用错了引擎照样 ack `result:true` 但字
不上屏；drive.mjs 和 viewer 已内置正确值，协议细节见
[how-it-works.md](references/how-it-works.md#driving-input-interaction)。

## 页面起不来？按顺序排查

1. **`$DRIVE wait` exit 1（`build:"error"`）**——读打印出的 ArkTS 报错行，按行号回源码修。
2. **构建 ok 但白屏/空帧**——页面运行时访问了 Previewer 模拟不了的东西。引擎是 UI 沙箱不是完整
   运行时：白名单外的组件（`Web`、`Video`、`XComponent`、`RichEditor`、瀑布流 `Grid`——布局辅助的
   `GridRow`/`GridCol` 反而在白名单里）和接口（除 `http.createHttp` 外的网络、传感器、大多数
   Ability/Context 调用）**构建照样成功**，运行时才白屏或抛异常。对照
   [references/preview-coverage.md](references/preview-coverage.md) 的完整白名单；依赖注入类失败
   （`@Link`/`@Consume` 根组件、未 mock 的 HSP、真实后端）→ 用下面的 harness 模式。先查
   `$DRIVE devices`（或 `/status` 的 `engineError` 字段）——引擎会把运行时报错主动推回来，常常
   已经有可读的报错文本。更完整的原始输出（ArkTS console、`LoadPage` 失败、JS 异常）用
   `PREVIEW_ENGINE_LOG=1` 启动 `preview.mjs`——引擎 stdout 默认被丢弃，这个开关把它放出来。
3. **`engineConnected:false` 且不恢复**——引擎进程没起来。无头 Linux 查 Xvfb/Mesa 依赖是否装齐
   （见前置条件）；查工具链根目录是否解析正确（`--clt`）。
4. **组件树只有 root 没 children**——引擎跑的不是 `PreviewBuild` 产物。正常流程不会发生；见
   [how-it-works.md](references/how-it-works.md#getting-the-arkui-inspector-tree)。

<a id="mock-the-dependency"></a>

## 当页面起不来时：模拟依赖（harness 模式）

页面依赖真实后端、HSP、UIAbility 注入的状态，或父组件运行时提供的 `@Link`/`@Consume`/`@ObjectLink`
值时，**不要直接预览真实入口页——加一个小的 harness `@Entry` 页，用 mock 数据渲染同一份 UI**：

1. 在真实路由旁边加 `pages/PreviewProfileCard.ets` 并注册进 pages 配置（`--page` 只认配置里的路由）。
2. 引入*展示型*组件本身（不是取真实数据的页面/view-model 链路），喂字面量 mock props，回调换桩函数：

   ```ts
   // pages/PreviewProfileCard.ets — 仅用于预览，不属于真正的导航图
   import { ProfileCard, UserVO } from '../components/ProfileCard';

   @Entry
   @Component
   struct PreviewProfileCard {
     @State user: UserVO = { name: 'Ada Lovelace', avatar: $r('app.media.startIcon'), followers: 128 };

     build() {
       Column() {
         ProfileCard({ user: this.user, onFollow: () => console.info('preview: follow tapped') })
       }
       .width('100%').height('100%')
     }
   }
   ```

   注意 ArkTS 的坑：`{...}` 字面量只能初始化没有自定义构造函数/`readonly` 字段/方法的类型——
   `interface` 天然可以，带构造函数的 `class` 必须 `new UserVO(...)`，否则构建直接死在
   `arkts-no-obj-literals-as-types`，什么都渲染不出来。
3. `--page pages/PreviewProfileCard` 预览，热重载循环里迭代 mock 数据。
4. 完事删掉 harness 或排除出正式构建——它是普通 `@Entry`，留在 pages 配置里会被打进正式包。

要集中式 mock（模块级替身 `src/mock/mock-config.json5`，或 `@MockSetup` 属性级打桩），两套官方机制
的用法见 [preview-coverage.md](references/preview-coverage.md#official-mock-mechanism-hamock)。

## 预览模式（page vs ability）

- **页面模式（默认）**——直接渲染 `--page` 指定的 `@Entry` 路由，等价于 DevEco 的单页预览。不运行
  任何 UIAbility，所以即使 ability 的 `loadContent` 加载的是别的页面，任意已注册 `@Entry` 都能显示。
  `@ohos.router` 的页面间跳转在此模式下照样可用。
- **Ability 模式（`--ability-mode`）**——启动真正的 UIAbility（走 `onCreate`/`onWindowStageCreate`
  生命周期），显示它 `loadContent` 的内容；此时 `--page` 不生效。需要走 ability 启动逻辑时才用。

## 生命周期／释放

不会留孤儿 `Previewer` 进程，不需要用户手动收拾：

- **关浏览器 tab → 自动释放**（viewer 的 SSE 存活通道断开后 ~10 秒宽限）。只在浏览器连接过之后才
  生效，所以纯 `drive.mjs`/curl 的无头流程不会被误杀；`--keep-alive` 彻底关闭。
- **会话结束 → 兜底清理**：`SessionEnd` 钩子（[hooks/hooks.json](../../hooks/hooks.json) →
  `scripts/cleanup.mjs`）按 `$TMPDIR/harmonyos-live-preview/sessions/` 注册表精确终止（不是
  `pkill`）。
- **手动**：Ctrl-C。三条路径走同一个幂等 shutdown。

## HTTP 接口（桥接层）

drive.mjs 覆盖了下列接口的常见用法；直接访问适合自定义驱动或宿主工具（`preview_eval` 等）：

| 路由 | 说明 |
|---|---|
| `/` | 可交互 viewer 页面，每个配置的设备一块面板（含各自的 `#a11y` 组件树 DOM 叠加层，浏览器自动化可见真实元素） |
| `/status` | 顶层字段镜像"默认设备"（`--devices` 里第一个）：`{engineConnected, hasFrame, resolution, interactive, frameAgeMs, engineError, build, buildError, buildAgeMs, buildStartedAgoMs, lastChangeAgeMs}`；`build` 状态机：`idle→building→ok\|error`；另加 `devices` 数组，逐个设备给出同样的字段（`id/device/resolution/port/engineConnected/hasFrame/interactive/frameAgeMs/engineError`） |
| `/devices` | 和 `/status.devices` 内容一样，单独暴露一份，方便只要设备列表不要构建状态的场景 |
| `/frame.jpg` | 默认设备当前帧 JPEG（无帧时 503） |
| `/devices/:id/frame.jpg` | 指定设备的当前帧 JPEG |
| `/mjpeg` / `/devices/:id/mjpeg` | `multipart/x-mixed-replace` 流，默认设备 / 指定设备 |
| `/inspector` / `/devices/:id/inspector` | ArkUI 组件树 JSON：`{$type, $rect, $debugLine, $attrs（含渲染文本 content/placeholder 与无障碍字段）, $children}`；引擎未就绪 503 |
| `/input` / `/devices/:id/input` | `POST` 输入事件 → 引擎命令（见上），打给默认设备 / 指定设备 |
| `/alive` | viewer 的 SSE 存活通道（驱动自动释放，全局一份，不分设备） |

单设备时，`/status` 顶层字段、`/frame.jpg`、`/inspector`、`/input` 的行为与多尺寸支持之前完全
一样——`/devices/:id/...` 和 `devices` 数组是纯增量，不影响任何现有对接。

## 已知限制（相比 DevEco）

- **重载更慢**：一次重载 = 完整 `PreviewBuild`（约 3–7 秒）+ 引擎重启，没有 DevEco 的亚秒级原地
  热替换。交互能力则持平（同一条命令通道）。
- **单次预览级的 `colorMode`/`locale` 不可切换**——固化为档位里的默认值。
- **无自定义分辨率**——只有 `phone`/`tablet` 固定档位，不支持 DevEco 那种自由拖拽改边框尺寸。
- **裸 `@Preview` 组件预览不支持**——用 harness 模式替代（见上）。

取舍的完整分析见 [how-it-works.md](references/how-it-works.md#trade-offs)。
