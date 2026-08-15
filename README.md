# HarmonyOS-AI Plugin Marketplace

面向 Claude Code、Codex、Qoder 和 OpenCode 的 HarmonyOS 插件仓库。仓库根目录是 marketplace，每个 `plugins/<name>/` 子目录都是可独立安装、版本化和发布的插件组。

## 插件目录

### `harmonyos-dev-toolkit`

HarmonyOS / ArkTS 开发工具包，包含以下共享 Skills：

| Skill | 说明 |
| --- | --- |
| `arkts-rules` | ArkTS 语言规则、编译约束和 TypeScript → ArkTS 迁移。 |
| `harmonyos-docs-lookup` | 检索内置的 HarmonyOS 官方开发文档。 |
| `harmonyos-sdk-api-lookup` | 查询 SDK API、类型、权限和系统能力。 |
| `harmonyos-live-preview` | 在浏览器中预览和交互 ArkUI 页面，无需启动 DevEco Studio。 |

原插件 ID `harmony-skills` 已更名为 `harmonyos-dev-toolkit`。升级时需要使用新 ID 重新安装。

## 架构

```text
Harmony-Skills/
├── .agents/plugins/marketplace.json       # Codex marketplace
├── .claude-plugin/marketplace.json        # Claude Code marketplace
├── marketplace.config.json                # marketplace 公共元数据
├── plugins/
│   └── harmonyos-dev-toolkit/
│       ├── plugin.config.json             # 插件公共元数据唯一来源
│       ├── .codex-plugin/plugin.json      # 生成：Codex
│       ├── .claude-plugin/plugin.json     # 生成：Claude Code
│       ├── .qoder-plugin/plugin.json      # 生成：Qoder
│       ├── package.json                   # 生成：OpenCode npm 包
│       ├── opencode/plugin.js             # 生成：OpenCode 适配器
│       ├── skills/                        # 四个宿主共用的实际内容
│       └── hooks/
└── scripts/
    ├── create-plugin-group.mjs
    ├── sync-manifests.mjs
    └── validate-plugins.mjs
```

Claude Code、Codex 和 Qoder 直接扫描同一个 `skills/`。OpenCode 适配器只提供按需加载 Skill 的工具和 MCP 配置转换，仍读取相同目录，不复制文档、脚本或 SDK 数据。

## 安装

### Claude Code

```bash
claude plugin marketplace add HarmonyOS-AI/Harmony-Skills
claude plugin install harmonyos-dev-toolkit@harmonyos-ai
```

本地验证：

```bash
claude plugin validate plugins/harmonyos-dev-toolkit
claude --plugin-dir plugins/harmonyos-dev-toolkit
```

### Codex

```bash
codex plugin marketplace add HarmonyOS-AI/Harmony-Skills
codex plugin add harmonyos-dev-toolkit@harmonyos-ai
```

本地 marketplace：

```bash
codex plugin marketplace add /absolute/path/to/Harmony-Skills
codex plugin add harmonyos-dev-toolkit@harmonyos-ai
```

### Qoder

在 Qoder 的插件管理页面选择导入本地插件，然后选择：

```text
plugins/harmonyos-dev-toolkit
```

该目录同时包含原生 `.qoder-plugin/plugin.json` 和 Claude Code 兼容清单。Qoder Agent SDK 也可以把这个目录作为 local plugin path 传入。

### OpenCode

发布到 npm 后，可以直接安装：

```bash
opencode plugin @harmonyos-ai/harmonyos-dev-toolkit
```

仓库内调试时先安装 workspace 依赖，再把适配器链接到目标项目：

```bash
npm install
mkdir -p /path/to/project/.opencode/plugins
ln -s /absolute/path/to/Harmony-Skills/plugins/harmonyos-dev-toolkit/opencode/plugin.js \
  /path/to/project/.opencode/plugins/harmonyos-dev-toolkit.js
```

OpenCode 会通过 `harmonyos_dev_skill` 工具按需加载 Skill。若插件组包含 `.mcp.json`，适配器会把标准 MCP 配置转换成 OpenCode 配置。

## 创建新的插件组

新插件组必须带至少一个 Skill 或一份 MCP 配置，脚手架不会生成空插件或 TODO 占位内容。

```bash
npm run plugins:create -- my-plugin \
  --display-name "My Plugin" \
  --description "A focused HarmonyOS workflow plugin." \
  --skill /absolute/path/to/my-skill
```

可以重复传入 `--skill`，也可以使用 `--mcp /absolute/path/to/.mcp.json`。脚手架会创建插件目录，并同步四个平台的清单和两个 marketplace。

修改 `plugin.config.json` 后重新生成：

```bash
npm run plugins:sync
```

## 验证

```bash
npm test
npm run plugins:validate
python3 /Users/legend/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py \
  plugins/harmonyos-dev-toolkit
claude plugin validate plugins/harmonyos-dev-toolkit
node --check plugins/harmonyos-dev-toolkit/opencode/plugin.js
```

`plugins:validate` 会检查插件名与目录一致性、版本格式、清单是否由公共配置同步生成、marketplace 路径、Skill 入口、MCP JSON 和 OpenCode 适配器模板。
