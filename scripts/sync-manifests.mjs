import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { loadMarketplaceConfig, loadPluginConfigs } from "./lib/plugin-config.mjs";
import {
  renderClaudeManifest,
  renderClaudeMarketplace,
  renderCodexManifest,
  renderCodexMarketplace,
  renderOpenCodePackage,
  renderQoderManifest
} from "./lib/manifests.mjs";

export const repositoryRoot = process.env.PLUGIN_MARKETPLACE_ROOT
  ? path.resolve(process.env.PLUGIN_MARKETPLACE_ROOT)
  : fileURLToPath(new URL("../", import.meta.url));

export async function syncAll(root = repositoryRoot) {
  const marketplace = await loadMarketplaceConfig(root);
  const plugins = await loadPluginConfigs(root);
  const template = await readFile(path.join(root, "scripts/templates/opencode-plugin.js"), "utf8");

  for (const { config, pluginRoot } of plugins) {
    await writeJson(path.join(pluginRoot, ".codex-plugin/plugin.json"), renderCodexManifest(config));
    await writeJson(path.join(pluginRoot, ".claude-plugin/plugin.json"), renderClaudeManifest(config));
    await writeJson(path.join(pluginRoot, ".qoder-plugin/plugin.json"), renderQoderManifest(config));
    await writeJson(path.join(pluginRoot, "package.json"), renderOpenCodePackage(config));
    await writeText(path.join(pluginRoot, "opencode/plugin.js"), template);
  }

  const configs = plugins.map(({ config }) => config);
  await writeJson(
    path.join(root, ".agents/plugins/marketplace.json"),
    renderCodexMarketplace(marketplace, configs)
  );
  await writeJson(
    path.join(root, ".claude-plugin/marketplace.json"),
    renderClaudeMarketplace(marketplace, configs)
  );

  return configs;
}

async function writeJson(filePath, value) {
  await writeText(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

async function writeText(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, value, "utf8");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const configs = await syncAll();
  console.log(`Synchronized ${configs.length} plugin group(s).`);
}
