import { readdir, readFile, realpath, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tool } from "@opencode-ai/plugin";

const pluginRoot = fileURLToPath(new URL("../", import.meta.url));
const config = JSON.parse(await readFile(path.join(pluginRoot, "plugin.config.json"), "utf8"));
const skills = await discoverSkills(path.join(pluginRoot, "skills"));
const mcpServers = await loadMcpServers(path.join(pluginRoot, ".mcp.json"));

export default async function portableSkillPlugin() {
  return {
    config: async (hostConfig) => {
      if (Object.keys(mcpServers).length === 0) {
        return;
      }
      hostConfig.mcp ??= {};
      Object.assign(hostConfig.mcp, mcpServers);
    },
    ...(skills.size > 0 ? { tool: {
      [config.opencode.toolName]: tool({
        description: `Load instructions or a supporting text resource from ${config.displayName}.`,
        args: {
          skill: tool.schema.string().describe("Exact skill ID from the advertised catalog."),
          resource: tool.schema.string().optional().describe("Optional path relative to the skill directory.")
        },
        async execute({ skill, resource }) {
          const selected = skills.get(skill);
          if (!selected) {
            return `Unknown skill '${skill}'. Available skills: ${[...skills.keys()].join(", ")}`;
          }

          const relativeResource = resource ?? "SKILL.md";
          const resourcePath = await resolveContainedPath(selected.directory, relativeResource);
          const resourceStat = await stat(resourcePath);
          if (resourceStat.isDirectory()) {
            const entries = await readdir(resourcePath);
            return JSON.stringify({
              skill,
              baseDirectory: selected.directory,
              resource: relativeResource,
              entries: entries.sort()
            });
          }
          if (resourceStat.size > 2_000_000) {
            return `Resource is ${resourceStat.size} bytes. Search or read it in smaller ranges from ${resourcePath}.`;
          }

          const content = await readFile(resourcePath, "utf8");
          return [
            `Plugin: ${config.name}`,
            `Skill: ${skill}`,
            `Base directory: ${selected.directory}`,
            `Resource: ${relativeResource}`,
            "",
            content
          ].join("\n");
        }
      })
    } } : {}),
    ...(skills.size > 0 ? { "experimental.chat.system.transform": async (_input, output) => {
      const catalog = [...skills.values()]
        .map((skill) => `- ${skill.id}: ${skill.description}`)
        .join("\n");
      output.system.push([
        `${config.displayName} is installed as an OpenCode plugin.`,
        `When a task matches one of the skills below, call the ${config.opencode.toolName} tool before acting.`,
        `Use the same tool's resource argument for supporting files referenced by a loaded skill.`,
        catalog
      ].join("\n"));
    } } : {})
  };
}

async function discoverSkills(skillsRoot) {
  let entries;
  try {
    entries = await readdir(skillsRoot, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") {
      return new Map();
    }
    throw error;
  }
  const result = new Map();

  for (const entry of entries.filter((item) => item.isDirectory()).sort(byName)) {
    const directory = path.join(skillsRoot, entry.name);
    const skillPath = path.join(directory, "SKILL.md");
    const source = await readFile(skillPath, "utf8");
    result.set(entry.name, {
      id: entry.name,
      directory,
      description: readFrontmatterDescription(source)
    });
  }

  return result;
}

async function loadMcpServers(mcpPath) {
  let source;
  try {
    source = JSON.parse(await readFile(mcpPath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }
    throw error;
  }

  const servers = source.mcpServers ?? source.mcp_servers ?? source;
  return Object.fromEntries(Object.entries(servers).map(([name, server]) => [name, toOpenCodeMcp(server)]));
}

function toOpenCodeMcp(server) {
  if (server.command) {
    return {
      type: "local",
      command: [server.command, ...(server.args ?? [])],
      ...(server.env ? { environment: server.env } : {})
    };
  }
  if (server.url) {
    return {
      type: "remote",
      url: server.url,
      ...(server.headers ? { headers: server.headers } : {})
    };
  }
  throw new Error("MCP server entries must define either command or url.");
}

async function resolveContainedPath(root, relativePath) {
  if (path.isAbsolute(relativePath)) {
    throw new Error("Resource paths must be relative to the skill directory.");
  }
  const resolvedRoot = await realpath(root);
  const candidate = await realpath(path.resolve(root, relativePath));
  if (candidate !== resolvedRoot && !candidate.startsWith(`${resolvedRoot}${path.sep}`)) {
    throw new Error("Resource path escapes the selected skill directory.");
  }
  return candidate;
}

function readFrontmatterDescription(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return "No description provided.";
  }

  const lines = match[1].split(/\r?\n/);
  const start = lines.findIndex((line) => /^description\s*:/.test(line));
  if (start === -1) {
    return "No description provided.";
  }

  const firstValue = lines[start].replace(/^description\s*:\s*/, "").trim();
  if (!/^[>|]-?$/.test(firstValue)) {
    return stripQuotes(firstValue);
  }

  const continuation = [];
  for (const line of lines.slice(start + 1)) {
    if (/^[A-Za-z0-9_-]+\s*:/.test(line)) {
      break;
    }
    if (line.trim()) {
      continuation.push(line.trim());
    }
  }
  return continuation.join(" ") || "No description provided.";
}

function stripQuotes(value) {
  return value.replace(/^(?:"(.*)"|'(.*)')$/, "$1$2");
}

function byName(left, right) {
  return left.name.localeCompare(right.name);
}
