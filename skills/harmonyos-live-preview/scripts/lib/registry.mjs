// On-disk registry of running preview orchestrators. Each live `preview.mjs` writes one JSON file
// here on startup and removes it on clean shutdown; `cleanup.mjs` (the SessionEnd hook) reads them
// to terminate leftovers precisely — by recorded PID, not a fragile `pkill -f` pattern that could
// hit unrelated processes.
//
// The file is keyed by the HTTP port (one orchestrator per port), so a relaunch on the same port
// overwrites cleanly and stale files are self-identifying.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export const REGISTRY_DIR = path.join(os.tmpdir(), 'harmonyos-live-preview', 'sessions');

function entryPath(port) {
  return path.join(REGISTRY_DIR, `${port}.json`);
}

// Record this orchestrator. Returns a deregister() that removes the file (idempotent).
export function register(info) {
  fs.mkdirSync(REGISTRY_DIR, { recursive: true });
  const file = entryPath(info.port);
  const record = { pid: process.pid, startedAt: Date.now(), ...info };
  fs.writeFileSync(file, JSON.stringify(record));
  return () => { try { fs.unlinkSync(file); } catch {} };
}

// Read every registered session. Skips unreadable/corrupt files instead of throwing so one bad
// entry can't block cleanup of the rest.
export function listSessions() {
  let names;
  try { names = fs.readdirSync(REGISTRY_DIR); } catch { return []; }
  const out = [];
  for (const name of names) {
    if (!name.endsWith('.json')) continue;
    const file = path.join(REGISTRY_DIR, name);
    try {
      out.push({ file, ...JSON.parse(fs.readFileSync(file, 'utf8')) });
    } catch {
      out.push({ file, corrupt: true });
    }
  }
  return out;
}

export function removeSession(file) {
  try { fs.unlinkSync(file); } catch {}
}
