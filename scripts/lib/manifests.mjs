export function renderCodexManifest(config) {
  return {
    name: config.name,
    version: config.version,
    description: config.description,
    author: config.author,
    homepage: config.homepage,
    repository: config.repository,
    keywords: config.keywords,
    ...(config.components.skills ? { skills: config.components.skills } : {}),
    ...(config.components.mcpServers ? { mcpServers: config.components.mcpServers } : {}),
    interface: {
      displayName: config.displayName,
      shortDescription: config.shortDescription,
      longDescription: config.longDescription,
      developerName: config.author.name,
      category: config.category,
      capabilities: config.capabilities,
      defaultPrompt: config.defaultPrompt,
      brandColor: config.brandColor
    }
  };
}

export function renderClaudeManifest(config) {
  return {
    name: config.name,
    version: config.version,
    displayName: config.displayName,
    description: config.description,
    author: config.author,
    homepage: config.homepage,
    repository: config.repository,
    keywords: config.keywords
  };
}

export function renderQoderManifest(config) {
  return {
    name: config.name,
    version: config.version,
    displayName: config.displayName,
    description: config.description,
    author: config.author,
    homepage: config.homepage,
    repository: config.repository,
    keywords: config.keywords
  };
}

export function renderOpenCodePackage(config) {
  return {
    name: config.opencode.packageName,
    version: config.version,
    description: config.description,
    type: "module",
    exports: "./opencode/plugin.js",
    files: [
      ".claude-plugin",
      ".codex-plugin",
      ".qoder-plugin",
      ".mcp.json",
      "hooks",
      "opencode",
      "plugin.config.json",
      "skills"
    ],
    keywords: config.keywords,
    repository: {
      type: "git",
      url: `git+${config.repository}.git`,
      directory: `plugins/${config.name}`
    },
    dependencies: {
      "@opencode-ai/plugin": "^1.14.0"
    }
  };
}

export function renderCodexMarketplace(marketplace, pluginConfigs) {
  return {
    name: marketplace.name,
    interface: {
      displayName: marketplace.displayName
    },
    plugins: pluginConfigs.map((config) => ({
      name: config.name,
      source: {
        source: "local",
        path: `./plugins/${config.name}`
      },
      policy: {
        installation: "AVAILABLE",
        authentication: "ON_INSTALL"
      },
      category: config.category
    }))
  };
}

export function renderClaudeMarketplace(marketplace, pluginConfigs) {
  return {
    name: marketplace.name,
    description: marketplace.description,
    owner: marketplace.owner,
    plugins: pluginConfigs.map((config) => ({
      name: config.name,
      source: `./plugins/${config.name}`,
      description: config.description,
      category: "development",
      tags: config.keywords.slice(0, 8)
    }))
  };
}
