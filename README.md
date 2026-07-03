# Harmony Skills · Claude Code / Codex 插件

HarmonyOS / ArkTS 开发技能集，已封装为 **Claude Code 插件**和 **Codex 插件**，可从公开 GitHub 仓库直接安装。

## 包含的 Skills

| Skill | 说明 |
| --- | --- |
| `arkts-rules` | ArkTS（鸿蒙）语言规则与约束，用于生成可编译的 `.ets` 代码、修复 ArkTS 编译错误、TS→ArkTS 迁移。 |
| `harmonyos-docs-lookup` | 在内置的约 2860 个官方文档 Markdown 中快速检索开发文档、API 参考、开发指导、常见问题。 |
| `harmonyos-sdk-api-lookup` | 在内置的 4000+ 个 API 参考 Markdown 中查找模块、API 签名、类型、权限、系统能力与示例。 |
| `harmonyos-live-preview` | 零 DevEco 的 ArkUI 实时预览：在浏览器中渲染 `.ets` 页面、支持点击/滑动/输入等交互，编辑后自动刷新。 |

加载插件后，这些 Skill 会以 `harmony-skills:<skill-name>` 命名空间暴露，并按各自 `description` 中的触发条件自动触发。

## 目录结构

```
Harmony-Skills/                    # 仓库根 = 插件根 = marketplace 根
├── .claude-plugin/
│   ├── plugin.json                # Claude Code 插件清单
│   └── marketplace.json           # Claude Code 本地市场清单
├── .codex-plugin/
│   └── plugin.json                # Codex 插件清单（skills 指向同一个 skills/ 目录）
├── .agents/
│   └── plugins/
│       └── marketplace.json       # Codex 本地市场清单
├── hooks/
│   └── hooks.json                 # SessionEnd 时清理仍在运行的 live-preview 进程（Claude Code）
└── skills/
    ├── arkts-rules/
    │   ├── SKILL.md
    │   └── agents/openai.yaml     # Codex 侧 UI 元数据（可选）
    ├── harmonyos-docs-lookup/
    │   ├── SKILL.md
    │   ├── agents/openai.yaml
    │   ├── references/            # 官方文档 Markdown
    │   └── scripts/
    ├── harmonyos-sdk-api-lookup/
    │   ├── SKILL.md
    │   ├── agents/openai.yaml
    │   ├── api-references/        # API 参考 Markdown
    │   └── sdk/
    └── harmonyos-live-preview/
        ├── SKILL.md
        ├── agents/openai.yaml
        ├── references/            # 引擎原理与协议说明
        └── scripts/                # 预览编排器（Node.js，无 npm 依赖）
```

同一份 `skills/` 目录被两个插件清单共用：Claude 侧靠 `skills/` 这一约定目录自动发现，Codex 侧通过 `.codex-plugin/plugin.json` 里的 `"skills": "./skills/"` 显式指向同一目录，没有任何内容需要复制或维护两份。

## 安装（Claude Code）

本仓库已发布到 GitHub，直接以 `owner/repo` 形式从公开仓库加载，无需 clone。

在 Claude Code 会话中执行：

```text
# 1. 把本仓库添加为插件市场
/plugin marketplace add HarmonyOS-AI/Harmony-Skills

# 2. 从该市场安装插件
/plugin install harmony-skills@harmonyos-ai
```

或使用命令行：

```bash
claude plugin marketplace add HarmonyOS-AI/Harmony-Skills
claude plugin install harmony-skills@harmonyos-ai
```

> `harmony-skills` 是插件名，`harmonyos-ai` 是市场名（见 `.claude-plugin/marketplace.json` 的 `name` 字段）。

更新与刷新：

```text
# 仓库有更新后，刷新市场再升级插件
/plugin marketplace update harmonyos-ai
```

### 本地开发 / 调试（可选）

如果你 clone 了本仓库、想在提交前本地验证，可把仓库目录当作市场加载：

```bash
# 校验插件与市场清单是否合法
claude plugin validate <仓库目录>

# 临时挂载插件目录（不安装，便于快速调试）
claude --plugin-dir <仓库目录>
```

安装后可用 `/plugin` 面板查看已启用的插件与 Skills。

## 安装（Codex）

同一个仓库根目录也是一个合法的 Codex 插件 + 本地市场（`.codex-plugin/plugin.json` + `.agents/plugins/marketplace.json`），同样可以直接从公开 GitHub 仓库加载：

```bash
# 1. 把本仓库添加为插件市场（owner/repo 形式，等价于 git 市场源）
codex plugin marketplace add HarmonyOS-AI/Harmony-Skills

# 2. 从该市场安装插件
codex plugin add harmony-skills@harmonyos-ai
```

> 市场名同样是 `harmonyos-ai`（见 `.agents/plugins/marketplace.json` 的 `name` 字段），与 Claude 侧保持一致，方便对照记忆。

安装后新开一个 Codex 会话即可让四个 Skill 生效（Codex 在会话启动时加载已安装插件的 Skill）。

### 本地开发 / 调试（可选）

```bash
# 把仓库目录当作本地市场加载并安装，便于提交前验证
codex plugin marketplace add <仓库目录>
codex plugin add harmony-skills@harmonyos-ai

# 确认插件与技能被正确发现
codex plugin list --marketplace harmonyos-ai --json
```

### Claude / Codex 两侧插件清单的差异

- Claude 侧 `plugin.json` 不带 `version` 字段，版本以 GitHub commit SHA 为准（见提交历史）；Codex 的插件校验要求 `version` 必须是合法 semver，因此 `.codex-plugin/plugin.json` 单独维护一个 `version` 字段，两者互不影响。
- `hooks/hooks.json`（SessionEnd 清理钩子）只被 Claude Code 识别；Codex 插件清单不支持 `hooks` 字段，`harmonyos-live-preview` 在 Codex 下依旧可用，只是少了这一层"会话结束自动兜底清理"，预览进程仍会在浏览器标签页关闭、或用户 `Ctrl-C` 时自行释放。
