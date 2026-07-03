#!/usr/bin/env node
// SessionEnd hook: terminate any preview orchestrators still running when the Claude Code session
// ends, so no Previewer engine or file-watch leaks past the session. Driven by the on-disk registry
// (registry.mjs) rather than a broad `pkill -f`, so only this skill's own processes are touched.
//
// Each live preview.mjs records its PID + port; here we SIGTERM it (its own handler stops the engine
// and unlinks sockets), wait briefly, then SIGKILL any holdout. A `ps` command-line check guards
// against PID reuse — we only signal a PID that still looks like our orchestrator.
import { execFileSync } from 'node:child_process';
import { listSessions, removeSession } from './lib/registry.mjs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function isAlive(pid) {
  try { process.kill(pid, 0); return true; } catch (e) { return e.code === 'EPERM'; }
}

// Confirm the PID is really our orchestrator before signalling it (PID reuse safety). Returns true
// if we can't run ps at all, so cleanup still works where ps is unavailable.
function looksLikeOurs(pid) {
  try {
    const cmd = execFileSync('ps', ['-p', String(pid), '-o', 'command='], { encoding: 'utf8' });
    return cmd.includes('preview.mjs');
  } catch { return false; }
}

async function main() {
  const sessions = listSessions();
  if (!sessions.length) return;

  const targets = [];
  for (const s of sessions) {
    if (s.corrupt || !s.pid || !isAlive(s.pid)) { removeSession(s.file); continue; }
    if (!looksLikeOurs(s.pid)) { removeSession(s.file); continue; } // stale file, PID reused
    try { process.kill(s.pid, 'SIGTERM'); targets.push(s); } catch { removeSession(s.file); }
  }
  if (!targets.length) return;

  await sleep(1500); // let each orchestrator's SIGTERM handler stop its engine + unlink sockets
  for (const s of targets) {
    if (isAlive(s.pid)) { try { process.kill(s.pid, 'SIGKILL'); } catch {} }
    removeSession(s.file);
  }
  console.log(`[harmonyos-live-preview] released ${targets.length} preview session(s) on SessionEnd`);
}

main().catch(() => process.exit(0));
