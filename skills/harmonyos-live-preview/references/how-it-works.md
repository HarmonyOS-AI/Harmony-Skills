# 零 DevEco 预览是怎么工作的

HarmonyOS SDK 自带了一个独立的宿主渲染器 `Previewer`，位于
`sdk/default/openharmony/previewer/common/bin/Previewer`。在 DevEco Studio 内部，是一个基于 Node 的
预览服务器在驱动它；本 skill 用一个小型 Node 编排器替代了那个服务器，让引擎直接对着常规 CLI 构建产物
运行，全程不涉及任何 IDE。

## 流水线

```
 编辑 .ets ─▶ hvigorw PreviewBuild ─▶ 重启 Previewer 引擎 ─▶ 桥接层 ─▶ 浏览器
            (builder.mjs)              (engine.mjs)           (bridge.mjs)
```

1. **构建**——`hvigorw --mode module -p module=<m>@<t> -p product=<p> -p previewer.replace.page=<page> PreviewBuild --no-daemon`。
   `PreviewBuild` 就是 DevEco 自己的预览守护进程所驱动的那套任务图（`PreviewUpdateAssets` →
   `ReplacePreviewerPage` → `PreviewArkTS` → `buildPreviewerResource`）——它是 hvigor-ohos-plugin 里的
   一个常规任务，无条件注册给每一个 HAP 模块（插件源码里的
   `TaskInitializer.commonHap`/`initializeCommonTargetTasks`），并不是只有 DevEco 的 IDE 才能注入的东西。
   它的 ArkTS 编译步骤（`PreviewArkTS`）会内嵌 inspector/debug 元数据（组件树、每个节点的布局矩形、
   源码行映射），而普通的 `assembleHap` 构建会把这些统统去掉——这一点是通过对比两种构建产物的
   `modules.abc`（大小不同、哈希不同）以及分别向引擎请求 `inspector` 树来确认的：`assembleHap` 产物
   得到的是一个只有 `{$type:"root", ...}`、没有子节点的空壳，`PreviewBuild` 产物得到的是完整的树。
   产物落在 `.preview/<product>/intermediates/{loader,assets,res}/<target>/…`（和旧版
   `build/.../{loader,loader_out,res}` 的结构一样，只是换到了 `.preview/` 下面，`loader_out/` 换成了
   `assets/`）。`previewer.replace.page`（在 `ReplacePreviewerPage` 里通过
   `hvigorCore.getExtraConfig()` 读取）指向正在预览的具体 `@Entry` 路由，和 `--page` 是对应的。
2. **引擎**——启动 `Previewer`，指向那些构建产物。引擎需要三个 Unix-domain socket，这些通常是由 DevEco
   的预览服务器提供的（命令 / 图像 / trace）。本 skill 把这三个都创建出来；图像/trace 这两个 socket
   只是单纯放空排掉，但**命令管道会被保留下来**——引擎作为客户端连上它，把状态实时推送回来（inspector
   树、避让区域、命令确认），本 skill 会解析这些数据（NUL 分隔的 JSON，见
   [获取 ArkUI inspector 树](#getting-the-arkui-inspector-tree)），也接受写入这条管道的输入命令（见
   [驱动输入（交互）](#driving-input-interaction)）。引擎会自动渲染入口页面，并通过本地
   WebSocket（`-lws <port>/<sid>`）推流 JPEG 帧。
3. **桥接层**——作为客户端连上那个 WebSocket，剥掉帧头，再通过普通 HTTP 把 JPEG 提供给浏览器。页面通过
   轮询 `/frame.jpg` 来保证始终能渲染出当前帧（MJPEG 流需要等到下一个边界才能"敲定"一帧，这在单帧场景
   下会卡住）；轮询频率是自适应的——有输入之后的一小段时间内轮询较快，空闲时较慢。桥接层还暴露了
   `POST /input`（浏览器事件 → 引擎命令）和 `GET /inspector`（组件树，同样会被 viewer 页面轮询用来
   构建它的 `#a11y` DOM 叠加层）。

## 关键引擎参数

引擎是用探测出来的工程信息启动的（见 `engine.mjs`）：

- `-j <loader_out/.../ets>` ——构建出来的 JS/ArkTS 应用
- `-ljPath <loader/.../loader.json>` ——模块映射
- `-arp <res/...>` ——应用资源
- `-url <page>` ——要渲染的 `@Entry` 路由（例如 `pages/AdaptiveIndex`）
- `-n <pkgName>` ——包名（来自模块的 `oh-package.json5`）
- `-hsp <sdk/default/hms/previewer>` ——HMS previewer 支持包
- `-pages <profile>` ——pages 配置文件名（来自 `module.json5` 里的 `"pages": "$profile:<name>"`）
- `-f <device-profile.json>` ——通用的分辨率/避让区域/语言档位文件，打包在 `scripts/assets/` 里，
  不需要一份 DevEco 生成的副本
- `-pm Stage -av ACE_2_0 -device <type>` ——stage 模型、ACE 版本、设备 token
- `-or/-cr <w> <h> -sd <dpi> -o <orientation>` ——帧缓冲几何尺寸 + 密度 + 方向
- *(仅 ability 模式)* `-d -abn <abilityName> -abp <ohmurl>` ——运行真正的 UIAbility；`-abp` 是归一化后
  的 ohmurl，形如 `@normalized:N&&&<pkg>/<abilitySrc-without-.ets>&`。`-d`（debug）会强制要求带上
  `-abp`，所以这三个参数总是一起出现。

## 页面模式 vs ability 模式——单个 `@Entry` 是怎么被预览的

这和 DevEco 预览单个 `@Entry`/`@Preview` 的效果是一样的：

- **页面模式（默认）。** 启动引擎时**只带 `-url <page>`**，*不*带 `-d/-abn/-abp`。previewer 会直接渲染
  那个页面文档——它**不会**实例化用户的 UIAbility。所以即使应用的
  `DefaultAbility.onWindowStageCreate` 调用的是 `loadContent('pages/Index')`，`-url
  pages/AdaptiveIndex` 依然能显示出 AdaptiveIndex。切换 `-url` 就能切换页面，不需要重新构建，也不需要
  改源码。唯一的要求是这个路由必须是 pages 配置里列出的、已编译的 `@Entry`。
- **Ability 模式。** 加上 `-d -abn <ability> -abp <ohmurl>`。previewer 会运行这个 UIAbility，显示的是
  它 `loadContent` 加载的内容；这时 `-url` 会被忽略。

这个结论是怎么确定的：带上 `-d/-abn/-abp` 之后，渲染出的页面由 ability 编译好的 `loadContent`
决定——`-url` 以及构建后对 `main_pages.json` 的编辑都**不会**覆盖它（后者只会得到一个空白帧）。去掉
`-d/-abn/-abp` 就会把引擎切换到页面文档路径，这时 `-url` 才是唯一决定因素。previewer 会拒绝只带 `-d`
不带 `-abp` 的调用（报错 `CommandParser: Launch -d parameters without -abp parameters`），这也是为什么
页面模式要把这三个参数一起省略。

<a id="relation-to-devecos-previewbuild"></a>

### 与 DevEco 的 `PreviewBuild` 之间的关系

这里说的是**构建**这一步，和上面页面模式/ability 模式的选择是正交的（那个选择关乎*已经构建好*的产物
怎么被加载进引擎）。hvigor 的 **`PreviewBuild`** 任务链（`PreviewUpdateAssets` →
`ReplacePreviewerPage` → `PreviewArkTS` → `buildPreviewerResource`），由注入配置
`previewer.replace.page`、`previewer.replace.srcPath`、`pageType`（`page` 还是 `component`）驱动，会
把 `main_pages.json` 重写成 `src=[<target>]`，并**重新编译**出一棵独立的 `<module>/.preview/<product>/`
产物树，带有普通 `assembleHap` 构建所没有的 inspector/debug 元数据（见
[获取 ArkUI inspector 树](#getting-the-arkui-inspector-tree)）——当 `pageType=component` 时，还能通过
一个生成的包装器来预览裸 `@Preview` 组件（本 skill 并不驱动这个用法；它只针对 `@Entry` 页面，所以
`pageType` 始终保持默认值 `page`）。

本 skill 早期的版本以为整条链路都是仅限 IDE 的，于是刻意避开它，改用 `assembleHap` 来构建——页面模式
下这样构建依然能复现出视觉画面，所以这个假设一直没被质疑过。但它是错的：`PreviewBuild` 和
hvigor-ohos-plugin 里的其他任务一样，是无条件注册给每个 HAP 模块的
（`TaskInitializer.commonHap`/`initializeCommonTargetTasks`），并不受 DevEco 预览守护进程的门控，
`hvigorw ... -p previewer.replace.page=<page> PreviewBuild --no-daemon` 完全可以脱离 IDE 独立运行——
这一点是通过在 DevEco 之外反复运行它，并对比生成的 `.abc` 和 inspector 树响应与 `assembleHap` 产物之间
的差异确认的。`builder.mjs` 现在改跑 `PreviewBuild` 而不是 `assembleHap`，正是因为这个原因：两种方式
都能渲染出画面，但只有 `PreviewBuild` 产物能让引擎的 `inspector` 命令返回一棵有内容的树。

<a id="driving-input-interaction"></a>

## 驱动输入（交互）

SDK Previewer 本身就能交互——它和 DevEco 的 Previewer 面板驱动的是同一个引擎。DevEco 的预览服务器通过
**命令管道**（`/tmp/<base>_commandPipe` 这个 Unix socket）给它发送指针/键盘命令；本 skill 做的是同样
的事，于是浏览器里的预览也能点击、滚动、输入。`bridge.mjs` 暴露 `POST /input`，`input.mjs` 把浏览器
事件翻译成引擎命令，`engine.send()` 把它写进管道。

线路格式（和 DevEco 预览服务器完全一致）：

- **分帧**——`JSON.stringify(command) + "\0"`（每条命令一个 NUL 结束符）。
- **信封**——`{ "version": "1.0.1", "command": "<name>", "type": "action", "args": { … } }`。
- **指针**——`MousePress` / `MouseMove` / `MouseRelease`，`args:{ x, y, button:0, duration:0 }`，
  `x`/`y` 用**设备像素**。一次点击 = 在同一点先 press 再 release；一次滑动/滚动 = press、若干次
  move、再 release。引擎会确认 `{"command":"MousePress","result":true}`。
- **系统返回**——`BackClicked`，`args:{}`。
- **键盘**——`KeyPress`，`args:{ isInputMethod:false, keyCode, keyAction, keyString, pressedCodes }`。
  `keyCode` 是 SDK 自己的值（`oh_key_code.h`：`A..Z`=2017–2042，`0..9`=2000–2009，空格=2050，
  Backspace=2055，Enter=2054）。一次按键会触发**down → press → up**，`keyString` 是要插入的字符。

有一个不太直观的坑：**`keyAction` 用的是 Previewer 自己的枚举——`DOWN=0, UP=1, PRESS=2`——而不是
`@ohos.multimodalInput.keyEvent.Action`（`DOWN=1, UP=2`）。** 如果用 `@ohos` 的值，引擎依然会确认
`result:true`，但不会真的插入文字（它会把这些值解读成 up/press，从来读不到一次 down）。这一点是端到端
验证过的：用 `DOWN=0/PRESS=2/UP=1`，打字能正常输入到聚焦的 `TextInput` 里，`onChange` 也会触发；用
`@ohos` 的那套值就不行。坐标空间（`x`/`y` = 帧缓冲像素）、命令名，以及分帧格式，都是从引擎自身的字符串
（`MouseInputImpl`、`DispatchPointerEvent`）和 DevEco 的 `openharmony-preview-server` 里取出来的，然后
针对一个真实运行的引擎做了验证（点击 → 跳转，BackClicked → 返回，KeyPress → 打出文字）。

编排器在每次（重新）启动时都会把 `engine.send` 交给桥接层，所以输入总是路由到当前的引擎——即使每次热
重载都会启动一个带全新命令管道的引擎，交互功能依然能持续可用。

<a id="getting-the-arkui-inspector-tree"></a>

## 获取 ArkUI inspector 树

除了输入之外，命令管道也是 DevEco 自己的 inspector 面板读取实时组件树的方式——本 skill 现在也会解析
这个方向上的数据，而不只是把它排空。

- **请求**——和其他命令用同样的信封，没有参数：
  `{"version":"1.0.1","command":"inspector","type":"action"}`。（`"inspectorDefault"` 取的是主题的
  默认属性表，不是实时树——这里用不到。）取自 DevEco 的 `openharmony-preview-server` 包
  （`DeviceSocketManager.prototype.sendCommandToSimulator` 调用点），不是猜出来的。
- **响应**——在同一个 socket 上异步推回来，分帧方式和请求一样（JSON + `\0`，可能好几条消息合并在一次
  写入里，要缓冲到遇到末尾的 NUL，再按 `\0` 切分）：
  `{"version":"1.0.1","command":"inspector","result":"<json-encoded tree>"}`。`result` 本身是一个
  JSON *字符串*，需要再 `JSON.parse` 一次。这里没有请求/响应关联 id，所以 `engine.mjs` 的
  `getInspectorTree()` 同一时间只允许有一个请求在途。
- **树的结构**——递归节点：`$type`（组件标签，例如 `Text`/`TextInput`/`Column`）、`$rect`
  （设备像素；本机引擎上验证到的是 `"x,y,width,height"`，也有引擎版本输出角点对
  `"[x1,y1],[x2,y2]"`——`drive.mjs` 的解析两种都兼容，以 `],[` 分隔符区分）、`$ID`、`$debugLine`（一个 JSON 字符串，形如
  `{"$line":"entry/src/main/ets/pages/Index.ets(8:7)", "$packageName":"entry"}`——能直接映射回源码）、
  `$children`（数组，结构相同），以及 `$attrs`——一个扁平对象，包含引擎为该节点追踪的**每一个**
  style/prop（边框、阴影、渐变、字体、布局——值得一提的是，还包括 ArkUI 已经为每个组件算好的无障碍字段：
  `accessibilityText`、`accessibilityDescription`、`accessibilityLevel`、`accessibilityGroup`、
  `accessibilityVirtualNode`）。带文本的组件会把自己渲染出来的实际字符串直接放在 `$attrs` 里——`Text`
  用 `content`，`TextInput` 用 `placeholder`/`text`——这是对着一棵真实的树验证过的
  （`"content":"Hello World From Claude"`，`"placeholder":"请输入内容..."`）。
- **有个前提：这只对 `PreviewBuild` 产物有效。** 如果对着一个指向普通 `assembleHap` 产物的引擎请求
  `inspector`——视觉画面一样，协议握手也一样，两种情况都不需要额外的初始化命令（这一点是通过和一个真实
  DevEco Studio 会话的 `previewer.log` 做对比验证的）——得到的只是
  `{"$type":"root","width":...,"height":...}`，**没有** `$children`。这个差异是构建时就烙进编译产物
  `.abc` 里的（isPreview 标记的 ArkTS 编译——参见 DevEco 生成的 `.preview/` 树里 `buildConfig.json`
  的 `"isPreview":"true"`），不是协议层面或引擎启动参数层面能修的。把 `builder.mjs` 从
  `assembleHap` 换成 `PreviewBuild`（见上面的流水线小节）才是让树填充起来的原因。
- **暴露为** `GET /inspector`（`bridge.mjs`），并被 viewer 页面（`viewer-page.mjs`）在客户端消费，
  用来构建 `#a11y`——一棵不可见的 DOM 树，叠加在图像帧上面（每个节点的 `$rect` 会根据 `/status` 里的
  `resolution` 换算成基于百分比的盒子），每个节点带有 `data-arkui-type`、`data-debug-line`、
  `aria-label`/文本内容。它是 `pointer-events:none` 且文字透明的——点击依然会落在图片上，不会有任何
  东西被视觉上重复渲染——但它是真实的 DOM/无障碍树内容，所以浏览器自动化或无障碍工具读取这个页面时，
  看到的是真正的结构化元素，而不是一张扁平截图。

## 模块结构

各个文件按职责拆分，让编排逻辑保持与具体工程无关：

| 文件 | 职责 |
|---|---|
| `scripts/preview.mjs` | CLI 编排器：解析参数 → 构建 → 引擎 → 桥接层 → 监听 `.ets` |
| `scripts/lib/discovery.mjs` | 定位工具链；从工程配置文件里读取可预览的模块 |
| `scripts/lib/config.mjs` | 组装不可变的会话配置；推导构建路径 + ability 的 ohmurl |
| `scripts/lib/builder.mjs` | 运行 `hvigorw PreviewBuild`，报告成功/失败 |
| `scripts/lib/engine.mjs` | 创建 socket、启动/停止 `Previewer` 引擎、`send()` 输入命令、解析命令管道收到的消息、`getInspectorTree()` |
| `scripts/lib/input.mjs` | 把浏览器事件翻译成引擎命令（指针 / 按键 / 返回） |
| `scripts/lib/bridge.mjs` | HTTP + WebSocket 桥接层；`/input` POST、`/inspector` GET；`setEngine()` 把每个新引擎目标及其 `send`/`getInspectorTree` 交给它 |
| `scripts/lib/viewer-page.mjs` | 静态的浏览器 viewer HTML + `#a11y` inspector 树 DOM 叠加层 |
| `scripts/lib/status.mjs` | 内存中的构建状态通道 + ArkTS 报错提取 |
| `scripts/lib/json5.mjs` | 宽松的 HarmonyOS `*.json5` 读取器（支持注释 + 尾随逗号） |
| `scripts/lib/registry.mjs` | 存活编排器（PID/端口）的磁盘记录，用于精确清理 |
| `scripts/drive.mjs` | agent 驱动 CLI：基于桥接层 HTTP 接口封装 `wait`（等构建/引擎/出帧齐备）、`shot`、`tree`/`find`（紧凑组件树/按文本定位）、`tap`/`swipe`/`type`/`key`/`back`；经注册表自动发现运行中的预览 |
| `scripts/capture-frame.mjs` | 调试用：直接从运行中的引擎抓一帧 JPEG |
| `scripts/cleanup.mjs` | `SessionEnd` 钩子的目标脚本：根据注册表终止残留的预览 |

编排器掌控着引擎的生命周期，所以每次重新构建后都会重启引擎，并调用
`bridge.setEngine({port, sid, device, send, getInspectorTree})`。桥接层用一个 `generation` 计数器来
让被替代的旧引擎的重连循环失效，这样过期的 socket 就没法和当前的引擎打架。

## 生命周期与清理

一次预览会启动一个较重的原生 `Previewer` 引擎外加一个文件监听，所以它必须能自行释放，不需要用户去问。
只有一条清理路径——`preview.mjs` 里的 `shutdown()`（停引擎 → 关桥接层 → 退出），并且是幂等的——有三个
地方会调用它：

1. **手动**——`SIGINT`/`SIGTERM`（Ctrl-C）。
2. **关闭浏览器自动释放。** viewer 页面在整个生命周期内保持一个 SSE `/alive` 连接打开；关闭 tab 会断开
   这个 socket，于是 `bridge.mjs` 的 `req.on('close')` 会立刻触发——比靠轮询间隔去猜要靠谱得多。桥接层
   统计当前打开的 viewer 数量，一旦降到零，就会在一个宽限窗口（`releaseGraceMs`，默认 10 秒，足够一次
   页面 reload 在窗口内重新连上）之后调用 `onIdle`（接到 `shutdown`）。它**只有在浏览器连接过之后**
   才会启动这套机制（`everViewed`），所以文档里那种无头 `curl` 流程——从来不会打开 `/alive`——永远不会
   被这样清理掉。`--keep-alive` 可以关闭这套机制。
3. **`SessionEnd` 钩子。** `hooks/hooks.json` 会在 Claude Code 会话结束时运行 `cleanup.mjs`。编排器
   启动时会通过 `registry.mjs` 把自己（PID、端口）记录到
   `$TMPDIR/harmonyos-live-preview/sessions/<port>.json`，正常退出时会删掉这条记录；`cleanup.mjs`
   读取这个注册表，对每个还存活的编排器发 `SIGTERM`（然后 `SIGKILL`），并用一次 `ps` 命令行检查防止
   PID 复用导致误杀。用注册表而不是 `pkill -f`，能保证清理动作只会碰到本 skill 自己的进程。

这两条自动路径是互补的：(2) 会在用户看完的那一刻立刻释放引擎，而 (3) 保证即使浏览器信号从未到达，也不
会有东西在会话结束后继续泄漏。

<a id="trade-offs"></a>

## 权衡

每次重载都是一次完整的 `PreviewBuild`（约 3–7 秒，主要耗时在 `PreviewArkTS` 编译）外加一次引擎重启，
相比之下 DevEco 是亚秒级的原地热替换。完全独立运行是收益，重载延迟是代价。

一个看起来显而易见的优化——让引擎保持存活，通过命令管道发一条原地重载命令，而不是重启——**在独立环境
下行不通**：引擎只在启动时读取编译产物，之后不会原地重新读取。针对一个正在运行的引擎，在重新构建一个
肉眼可见发生了变化的页面之后测试过，`ReloadRuntimePage` 和 `LoadDocument` 都没有让旧画面发生变化，
而完整重启引擎则会应用上变化。DevEco 的亚秒级热替换依赖于让它的 hvigor daemon 在多次编辑之间保持热态，
从而让 `PreviewArkTS` 只重新编译发生变化的部分；本 skill 每次编辑都是冷启动
（`--no-daemon`）调用 `PreviewBuild`，这才是真正耗费那几秒钟的原因——这个任务本身一旦被摸清楚，其实
就是一个再普通不过的、CLI 可调用的 hvigor 任务（见
[获取 ArkUI inspector 树](#getting-the-arkui-inspector-tree)），并不是什么 IDE 专属的东西。所以本
skill 选择在每次重新构建后重启引擎；桥接层会在屏幕上保留上一帧正常画面，并自动重新接上输入通道，所以
除了构建本身的延迟之外，这次重启对用户来说是无感的。

真正能让重载变快的杠杆在于**构建**本身，而不是引擎：如果能在多次编辑之间保持一个热的 hvigor daemon
进程（而不是每次重建都用一个全新的 `--no-daemon` 进程），就能让 `PreviewArkTS` 做增量重编译，而不是每
次都从头编译——本 skill 没有尝试这么做，因为这会重新引入 daemon 生命周期管理的复杂度，而这正是本 skill
一直想避免的。

<a id="known-issue-previewarkts-crash"></a>

## 已知问题：部分工具链版本上的 `PreviewArkTS` 崩溃（`addOhmurlToHarAbility`）

在 HarmonyOS SDK 26.0.0 Beta1 / hvigor 6.26.1 上复现（独立的 `command-line-tools` 构建和
DevEco-Studio.app 内置的那份都一样——两者的 hvigor-ohos-plugin 版本相同，所以换工具链根目录也没用）：
每一次 `PreviewBuild` 都会在 `PreviewArkTS` 这一步失败，包括一个刚用 `devecocli create` 脚手架出来、
没有任何 HSP/HAR 依赖、也没有任何 mock 配置的单模块工程，报错如下：

```text
> hvigor ERROR: Failed :entry:default@PreviewArkTS...
> hvigor ERROR: Error Code: 00308018 Unknown Error
The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined
```

用 `--stacktrace` 追踪下去，定位到
`PreviewerArkCompile.addOhmurlToHarAbility`（`hvigor/hvigor-ohos-plugin/src/tasks/previewer-ark-compile.js`）
内部的 `Object.writeFileSync`，它是在 `PreviewUpdateAssets`/`ReplacePreviewerPage`/
`buildPreviewerResource` 都报告"Finished"之后紧接着被调用的——但此时磁盘上其实根本不存在
`.preview/<product>/` 这棵树（确认过：即便前面的任务都打印了成功日志，`find <module>/.preview` 依然
是空的），所以 `addOhmurlToHarAbility` 调用的
`JsonUtil.getJson5Obj(this.pathInfo.getPreviewIntermediatesResModuleJsonPath())` 什么也读不到，结果是
`undefined`，随后 `JSON5.stringify(undefined)`（这个调用本身返回的也是 `undefined`，不是字符串）就是
`writeFileSync` 噎住的地方。这个问题在本 skill 自己的代码之上——`builder.mjs` 只是调用了
`hvigorw ... PreviewBuild --no-daemon`，在引擎启动这一步之前从来不会去调用
`addOhmurlToHarAbility` 或读取 `.preview/`——而且在 `DEVECO_SDK_HOME` 未设置的情况下同样能复现（所以
不是那个环境变量可能引起的多 SDK 安装歧义问题）。它会挡住受影响工具链版本上的*每一次*预览，和 mock、
HAR/HSP 依赖，或者具体工程都没有关系。

目前本 skill 这边还没找到修复办法——看起来像是这个特定 hvigor-ohos-plugin 版本里
`buildPreviewerResource`/`PreviewUpdateAssets` 时序上的一个真实上游 bug（资源步骤实际上没有写出
`PreviewArkTS` 接下来期望的东西，却依然打印成功日志）。如果你遇到一模一样的报错，在怀疑是工程或者本
skill 有问题之前，值得先检查一下有没有更新的、非 beta 的 HarmonyOS SDK 版本。
