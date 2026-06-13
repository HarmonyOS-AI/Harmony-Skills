# Harmony Skills · Claude Code 插件

HarmonyOS / ArkTS 开发技能集，已封装为 **Claude Code 插件**，可从公开 GitHub 仓库直接安装。

## 包含的 Skills

| Skill | 说明 |
| --- | --- |
| `arkts-rules` | ArkTS（鸿蒙）语言规则与约束，用于生成可编译的 `.ets` 代码、修复 ArkTS 编译错误、TS→ArkTS 迁移。 |
| `harmonyos-docs-lookup` | 在内置的约 2860 个官方文档 Markdown 中快速检索开发文档、API 参考、开发指导、常见问题。 |
| `harmonyos-sdk-api-lookup` | 在内置的 4000+ 个 API 参考 Markdown 中查找模块、API 签名、类型、权限、系统能力与示例。 |

加载插件后，这些 Skill 会以 `harmony-skills:<skill-name>` 命名空间暴露，并按各自 `description` 中的触发条件自动触发。

## 目录结构

```
Harmony-Skills/                    # 仓库根 = 插件根 = marketplace 根
├── .claude-plugin/
│   ├── plugin.json                # 插件清单
│   └── marketplace.json           # 本地市场清单
└── skills/
    ├── arkts-rules/
    │   └── SKILL.md
    ├── harmonyos-docs-lookup/
    │   ├── SKILL.md
    │   ├── references/            # 官方文档 Markdown
    │   └── scripts/
    └── harmonyos-sdk-api-lookup/
        ├── SKILL.md
        ├── api-references/        # API 参考 Markdown
        └── sdk/
```

## 安装

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
