import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadMarketplaceConfig, loadPluginConfigs, readJson } from "./lib/plugin-config.mjs";
import {
  renderClaudeManifest,
  renderClaudeMarketplace,
  renderCodexManifest,
  renderCodexMarketplace,
  renderOpenCodePackage,
  renderQoderManifest
} from "./lib/manifests.mjs";

const repositoryRoot = process.env.PLUGIN_MARKETPLACE_ROOT
  ? path.resolve(process.env.PLUGIN_MARKETPLACE_ROOT)
  : fileURLToPath(new URL("../", import.meta.url));
const marketplace = await loadMarketplaceConfig(repositoryRoot);
const plugins = await loadPluginConfigs(repositoryRoot);
const template = await readFile(path.join(repositoryRoot, "scripts/templates/opencode-plugin.js"), "utf8");
const errors = [];

for (const { config, pluginRoot } of plugins) {
  await compareJson(path.join(pluginRoot, ".codex-plugin/plugin.json"), renderCodexManifest(config));
  await compareJson(path.join(pluginRoot, ".claude-plugin/plugin.json"), renderClaudeManifest(config));
  await compareJson(path.join(pluginRoot, ".qoder-plugin/plugin.json"), renderQoderManifest(config));
  await compareJson(path.join(pluginRoot, "package.json"), renderOpenCodePackage(config));
  await compareText(path.join(pluginRoot, "opencode/plugin.js"), template);
  await validateSkills(config, pluginRoot);
  await validateOptionalComponents(config, pluginRoot);
}

const configs = plugins.map(({ config }) => config);
await compareJson(
  path.join(repositoryRoot, ".agents/plugins/marketplace.json"),
  renderCodexMarketplace(marketplace, configs)
);
await compareJson(
  path.join(repositoryRoot, ".claude-plugin/marketplace.json"),
  renderClaudeMarketplace(marketplace, configs)
);

for (const removedRootPath of [".codex-plugin", "skills", "hooks"]) {
  try {
    await access(path.join(repositoryRoot, removedRootPath));
    errors.push(`Legacy plugin-root path still exists: ${removedRootPath}`);
  } catch {
    // Expected after the monorepo migration.
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${plugins.length} plugin group(s) and both marketplaces.`);
}

async function validateSkills(config, pluginRoot) {
  if (!config.components.skills) {
    return;
  }
  const skillsRoot = path.resolve(pluginRoot, config.components.skills);
  let entries;
  try {
    entries = await readdir(skillsRoot, { withFileTypes: true });
  } catch (error) {
    errors.push(`${config.name}: cannot read skills directory (${error.message})`);
    return;
  }

  const skillDirectories = entries.filter((entry) => entry.isDirectory());
  if (skillDirectories.length === 0) {
    errors.push(`${config.name}: skills directory is empty.`);
  }
  for (const entry of skillDirectories) {
    try {
      await access(path.join(skillsRoot, entry.name, "SKILL.md"));
    } catch {
      errors.push(`${config.name}: skills/${entry.name}/SKILL.md is missing.`);
    }
  }
}

async function validateOptionalComponents(config, pluginRoot) {
  if (!config.components.mcpServers) {
    return;
  }
  try {
    await readJson(path.resolve(pluginRoot, config.components.mcpServers));
  } catch (error) {
    errors.push(`${config.name}: invalid MCP configuration (${error.message})`);
  }
}

async function compareJson(filePath, expected) {
  try {
    const actual = await readJson(filePath);
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      errors.push(`${path.relative(repositoryRoot, filePath)} is out of sync; run npm run plugins:sync.`);
    }
  } catch (error) {
    errors.push(`${path.relative(repositoryRoot, filePath)} is invalid or missing (${error.message}).`);
  }
}

async function compareText(filePath, expected) {
  try {
    const actual = await readFile(filePath, "utf8");
    if (actual !== expected) {
      errors.push(`${path.relative(repositoryRoot, filePath)} is out of sync with its template.`);
    }
  } catch (error) {
    errors.push(`${path.relative(repositoryRoot, filePath)} is invalid or missing (${error.message}).`);
  }
}
