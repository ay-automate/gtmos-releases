# Clip 02: First setup with Claude

Through-line: The playbook goes in your folder, the key never does, and doctor tells you the truth.

## Transcript

### The hook and the promise

Last clip ended on an empty folder and one rule: agents move fast, your rules decide how far. From here to a working GTM project takes minutes. Claude does most of the typing.

In this clip you'll have the command line tool, a project folder Claude understands, and a check that shows what is live.

### The stakes

Do it by hand and Leo pastes an agent key into a config file, then commits it. Done properly, the key never touches a file, and Orbit starts with the whole playbook.

### Before you start

First, the checklist. Docker running, Node twenty two or newer, four gigabytes of free memory, ten of disk. Claude Code is recommended, because it runs the setup with you. And a second person as approver, because GTM OS won't let you approve your own proposals.

Two paths from here: connect to an existing instance, or run your own on this laptop, in Docker. You'll see both.

### Step one: install

Step one, a single global npm install. A project install, or npx, isn't supported.

Check it with gtm version. Then make a folder, and run gtm init.

### Step two: gtm init

Step two, the init works offline, from an empty folder, and hands Claude your playbook before Claude touches anything.

Here's what lands. Instructions in CLAUDE.md for Claude, AGENTS.md for Codex. A .mcp.json pointing at the MCP server. A .claude folder with subagents, slash commands, settings and a session start hook. Skills for every agent. And docs.

One detail matters: the agent key is never written to a file, and the .mcp.json holds only a reference to an environment variable.

Now the part the team calls Hermes: the setup agents and skills that gtm init places in your repository. A full set of skills, from onboarding to one per engine, plus role subagents like the gtm-architect. They land in three places, so Claude, Codex and other agents all find them. Checksum verified, with a bundled copy for offline use.

Operator tip: run gtm init with refresh when new skills ship. Your edits stay, and gtm doctor warns you when your skills have gone stale.

### Step three: set up with Claude

Now the gotcha. Open Claude Code in this folder, and restart it if it was already open. It reads skills only at startup, so an old session sees nothing new.

Step three: /setup-gtmos. Claude runs a runbook. It checks Docker, Node, disk and memory, and looks for a running instance. Then it asks one grouped question: organization, owner, a different approver, version, ports, keys. In the console: nothing yet. Or ask your agent: "Set up GTM OS for my company".

Then the work starts: the stack installs in an instance folder, and your organization is created with a separate approver. Claude mints an agent key and connects this folder. It stops only for what a person must do, like signing in, pasting a key or adding DNS records. Then /build-gtm-system hands over to the gtm-architect.

Prefer to type it? One command does the same: gtm setup, a folder, your organization name, owner email and approver email. Run it twice and the second run does only what's missing.

Owner and approver passwords, plus the master key, land in the .env in the instance folder. Keep it private.

That was the Docker path. To connect to an existing instance instead, skip the install and pass its address and an agent key to gtm init.

Self hosted, the console, API and MCP bind to 127.0.0.1. By default, only this machine reaches them. To expose them, set GTMOS_BIND_ADDRESS, or use a reverse proxy. Both gtm up and gtm upgrade warn you first.

### Step four: gtm doctor

Last step. Run gtm doctor. One line per model provider, backend, connector and sender, each reading live, unverified, failed, fixture or not configured, with its exact fix.

A fixture is a sample response standing in for a real service, and it never counts toward your first win. Wire gtm doctor with strict into your scripts, and it exits with one when anything needed isn't live. Expect the model key to be missing for now. In the console: Integrations, Connections. Or ask your agent: "Run gtm doctor and tell me what is not live".

### The objection

Say it out loud: an agent installing software with my keys? It can't approve its own work, because the approver is a different identity. Nor does it write the key to a file. And it stops for every human step, with every port kept local.

### Recap

Boiled down: Install globally, run gtm init, restart Claude, run /setup-gtmos. Then gtm doctor.

### Close

You have a working project, an agent with the playbook, and a check you can trust. Keep that doctor output. After this comes your first organization and your agent. You clear the missing model key, and the agent gets an organization of its own.

## Ask your agent

- "Set up GTM OS for my company"
- "Run gtm doctor and tell me what is not live"

The agent proposes and reports an approval id where an action needs one. A different person approves in the console.

Next clip: Your first organization and your agent.

## To verify before recording

- Prerequisites on the checklist (Docker, Node 22 or newer, about 4 GB free memory, 10 GB free disk) against docs/SELF-HOST.md.
- `gtm init` offline behaviour with no instance reachable, and the files it writes (CLAUDE.md, AGENTS.md, .mcp.json, .claude, .codex/skills, .agents/skills, docs/gtmos).
- The skills release: over a hundred skills plus role subagents, checksum verified, bundled copy for offline use (apps/cli/src/harness/skills/release).
- `gtm init --refresh` keeps your edits; `gtm doctor` Harness section reports a stale harness with the hint "run gtm init --refresh" (0.2.6 on main; confirm on the published build before recording).
- /setup-gtmos runbook: the checks, the one grouped question, the stops for human steps, then /build-gtm-system and the gtm-architect.
- `gtm setup` is idempotent and starts the worker; passwords and master key are written to instance/.env.
- Self-host ports bind to 127.0.0.1 by default; `gtm up` and `gtm upgrade` print the local-only warning; GTMOS_BIND_ADDRESS in .env or a reverse proxy exposes them (docs/SELF-HOST.md).
- `gtm doctor` statuses (live, unverified, failed, fixture, not configured), `--strict` exit code one, console path Integrations > Connections.
- Every screen stays a marked mockup ("example, simplified") until the capture script exists.
