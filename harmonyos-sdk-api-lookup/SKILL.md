---
name: harmonyos-sdk-api-lookup
description: Search HarmonyOS SDK TypeScript declaration files (.d.ts) to find API signatures, types, and usage info. Supports two query modes - single API lookup and feature-level implementation guidance with code examples. Use when looking up HarmonyOS/OpenHarmony API definitions, asking how to implement a feature on HarmonyOS, checking ohos or hms module interfaces, finding system capabilities (@syscap), permissions, or when adapting code to HarmonyOS platform. Triggers on mentions of HarmonyOS API, ohos API, hms API, ArkTS API, Kit lookup, SDK search, specific module names like @ohos.xxx or @hms.xxx, or questions like "how to do X on HarmonyOS".
---

# HarmonyOS SDK API Lookup

在本 skill 目录下的 `sdk/` 中搜索 HarmonyOS SDK 的 `.d.ts` 声明文件，支持两种查询模式：

1. **API 查询** — 查找具体 API 的签名、类型、权限等信息
2. **功能查询** — 根据功能需求，分析多个相关 API 的调用关系，组合出完整实现方案并给出代码示例

## SDK 信息

- **版本**: HarmonyOS 6.0.1 / API 21
- **路径**: 本 skill 目录下的 `sdk/`（绝对路径 `~/.cursor/skills/harmonyos-sdk-api-lookup/sdk/`）
- **规模**: ~958 个 `.d.ts` 文件，97 个 Kit

## 目录结构

```
sdk/
├── openharmony/ets/         # OpenHarmony 开源 API
│   ├── kits/                # Kit 入口（@kit.XXX.d.ts），re-export 子模块
│   ├── api/                 # 具体 API 模块（@ohos.XXX.d.ts）
│   ├── component/           # ArkUI 组件声明
│   └── arkts/               # ArkTS 基础 API
└── hms/ets/                 # 华为移动服务 (HMS) API
    ├── kits/                # HMS Kit 入口
    └── api/                 # HMS 模块（@hms.XXX.d.ts）
```

## 核心搜索流程（Kit 优先策略）

**始终按此顺序执行，先定位 Kit 再深入模块：**

### 第一步：根据功能定位 Kit

阅读 [kit-index.md](kit-index.md) 中的 Kit 列表，根据功能需求匹配最可能的 Kit：

| 功能领域 | 优先查找的 Kit |
|---------|--------------|
| 网络/HTTP/WebSocket | NetworkKit |
| 文件/存储 | CoreFileKit, ArkData |
| 相机/拍照 | CameraKit |
| 音视频/播放/录制 | MediaKit, AudioKit |
| 图片处理 | ImageKit |
| 蓝牙/WiFi/NFC | ConnectivityKit |
| 定位/GPS | LocationKit |
| 传感器 | SensorServiceKit |
| 通知 | NotificationKit |
| 加密/安全 | CryptoArchitectureKit, UniversalKeystoreKit |
| 设备信息/电池/振动 | BasicServicesKit |
| 剪贴板 | BasicServicesKit (pasteboard) |
| UI 组件 | ArkUI, `sdk/openharmony/ets/component/` |
| Web/WebView | ArkWeb |
| 后台任务 | BackgroundTasksKit |
| 应用生命周期 | AbilityKit |
| 扫码/二维码 | ScanKit (HMS) |
| 地图 | MapKit (HMS) |
| 推送 | PushKit (HMS) |
| 支付/内购 | IAPKit, PaymentKit (HMS) |
| 语音识别/合成 | SpeechKit, CoreSpeechKit (HMS) |
| OCR/图像识别 | VisionKit, CoreVisionKit (HMS) |

### 第二步：读取 Kit 入口文件，获取模块列表

找到对应 Kit 后，读取其 `.d.ts` 文件查看 re-export 的模块：

```
sdk/openharmony/ets/kits/@kit.NetworkKit.d.ts
→ 导出: @ohos.net.connection, @ohos.net.http, @ohos.net.socket, @ohos.net.webSocket ...
```

### 第三步：在目标模块中搜索具体 API

根据 Kit 导出的模块名，到 `api/` 目录读取对应的 `.d.ts` 文件：

- OpenHarmony: `sdk/openharmony/ets/api/@ohos.{module}.d.ts`
- HMS: `sdk/hms/ets/api/@hms.{module}.d.ts`

用 Grep 搜索函数名、类型名、关键词。

### 第四步（兜底）：全局关键词搜索

如果前三步未命中，在整个 `sdk/` 目录用 Grep 搜索功能关键词：

```
# 在 api/ 目录全局搜索
Grep: pattern="关键词" path="sdk/openharmony/ets/api/"
Grep: pattern="关键词" path="sdk/hms/ets/api/"
```

## 快速定位表

| 搜索目标 | 文件路径模式 |
|---------|------------|
| UI 组件 | `sdk/openharmony/ets/component/*.d.ts` |
| @ohos 模块 | `sdk/openharmony/ets/api/@ohos.*.d.ts` |
| @hms 模块 | `sdk/hms/ets/api/@hms.*.d.ts` |
| Kit 入口 | `sdk/{openharmony,hms}/ets/kits/@kit.*.d.ts` |
| ArkTS 基础 | `sdk/openharmony/ets/arkts/@arkts.*.d.ets` |

## 从 .d.ts 中提取的关键信息

找到 API 后，重点关注以下 JSDoc 标注：

| 标注 | 含义 | 重要性 |
|------|------|--------|
| `@syscap` | 系统能力要求 | 必须声明 |
| `@permission` | 权限要求 | 需要在 module.json5 配置 |
| `@since` | API 起始版本号 | 确认兼容性 |
| `@deprecated` | 已废弃，看 `@useinstead` | 避免使用 |
| `@crossplatform` | 跨平台支持 | 判断可用性 |
| `@atomicservice` | 原子化服务可用 | 场景判断 |

## 返回格式

根据查询类型选择对应格式返回。

### 格式 A：单个 API 查询

用于精确查找某个具体 API 的定义。

```
### [API 名称]
- **模块**: @ohos.xxx 或 @hms.xxx
- **Kit**: XxxKit
- **文件**: sdk/openharmony/ets/api/@ohos.xxx.d.ts
- **import**: `import { xxx } from '@ohos.xxx'`
- **签名**: `function methodName(param: Type): Promise<Result>`
- **@since**: API version X
- **@syscap**: SystemCapability.Xxx.Xxx
- **@permission**: ohos.permission.XXX（如需要）
- **异步模式**: Promise / callback / sync

**相关类型**:
（列出参数和返回值中涉及的 interface / enum / type 定义摘要）
```

### 格式 B：功能级查询（重点）

用于回答"如何在鸿蒙上实现 XXX 功能"类型的问题。需要分析多个 API 之间的调用关系，组合出完整方案。

**功能查询的额外步骤（在核心搜索流程之后执行）：**

1. **识别 API 调用链** — 读取相关 `.d.ts` 文件，分析实现该功能需要哪些 API、按什么顺序调用、API 之间如何传递数据
2. **梳理前置条件** — 确认权限申请、系统能力依赖、初始化步骤
3. **构建调用流程** — 将多个 API 按逻辑串联：初始化 → 配置 → 执行 → 结果处理 → 资源释放
4. **生成代码示例** — 基于 `.d.ts` 中的真实签名编写 ArkTS 代码示例

```
### 功能: [功能名称]

**涉及模块与 Kit**:
| Kit | 模块 | 用途 |
|-----|------|------|
| XxxKit | @ohos.xxx | 核心功能 |
| YyyKit | @ohos.yyy | 辅助功能（如需要） |

**权限配置** (module.json5):
- `ohos.permission.XXX` — 用途说明
- `ohos.permission.YYY` — 用途说明（如需要）

**实现流程**:
1. [步骤1说明] — 用到 `模块A.methodX()`
2. [步骤2说明] — 用到 `模块B.methodY()`，输入来自步骤1的结果
3. [步骤3说明] — 资源释放 / 回调处理

**代码示例**:
（基于 .d.ts 真实签名的 ArkTS 代码，包含 import、核心逻辑、错误处理）

```typescript
import { xxx } from '@ohos.xxx';
import { yyy } from '@ohos.yyy';

// 示例代码...
```

**关键类型定义**:
（列出代码中用到的 interface / enum 定义摘要）

**注意事项**:
- 版本要求、平台限制、常见坑点等
```

### 功能查询的分析技巧

分析 `.d.ts` 文件中 API 关系的方法：

- **返回值→参数链**: 方法 A 返回 `TypeX`，方法 B 接收 `TypeX` 作为参数 → A 的输出是 B 的输入
- **配置对象模式**: 一个功能通常有 `XxxConfig` / `XxxOptions` 接口 → 先构造配置再调用
- **生命周期模式**: 有 `create/open` + `start/execute` + `stop/close/release` → 需完整管理
- **回调/监听模式**: 有 `on(event, callback)` / `off(event)` → 注册后需在适当时机取消
- **错误码枚举**: 模块内有 `ErrorCode` enum → 用于错误处理分支

## 注意事项

- **绝不猜测 API 签名**，只返回 `.d.ts` 文件中实际存在的定义
- 代码示例中的所有 API 调用**必须**与 `.d.ts` 签名严格一致
- 同一功能有 Promise 和 callback 两种形式时，优先返回 Promise 形式
- 标记为 `@deprecated` 的 API 需注明替代方案（`@useinstead`）
- 区分 OpenHarmony API (`@ohos.`) 和 HMS API (`@hms.`)，HMS 需要华为设备
- 功能查询涉及多模块时，注明各模块分别来自哪个 Kit
- Kit 详细列表见 [kit-index.md](kit-index.md)
