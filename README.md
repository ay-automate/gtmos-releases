# GTM OS releases

Public releases of **GTM OS**, the self-hosted operating system for go-to-market: one typed model of your accounts, contacts, deals and signals; engines that find, enrich, score, route and reach accounts; and an agent-first interface (Claude Code, Codex or any MCP agent) where every customer-facing action waits for a second person to approve it.

This repository holds **releases and documentation only**. The source code is not published here.

## Latest: v0.2.2

| What | Where |
|---|---|
| CLI | npm: [`@gtmos/cli`](https://www.npmjs.com/package/@gtmos/cli) |
| Images | `ghcr.io/walidboulanouar/gtmos-{api,worker,mcp,console}:0.2.2` (also `stable`) |
| Release notes | [releases/0.2.2.md](releases/0.2.2.md) and [GitHub release v0.2.2](https://github.com/ay-automate/gtmos-releases/releases/tag/v0.2.2) |
| User guide | https://ay-automate.github.io/gtmos-releases/user-guide.html |
| Product documentation | https://ay-automate.github.io/gtmos-releases/product-documentation.html |

## Requirements

- Docker Desktop running, 4 GB+ free RAM, 10 GB+ free disk
- Node 22+
- Claude Code (recommended: it runs the setup with you)

## Install

```bash
npm i -g @gtmos/cli@0.2.2
mkdir my-gtm && cd my-gtm
gtm init
```

Then open Claude Code in that folder (restart it if it was already open) and run:

```
/setup-gtmos
```

Claude installs GTM OS, creates your organization with an owner and a second approver, connects itself, and asks you only for what a person has to provide (names and emails, OAuth sign-ins, keys you keep private, DNS records). Then run `/build-gtm-system` to build your engines, and go live from **Environments > Go live** in the console.

Manual setup, without Claude:

```bash
gtm setup ./instance --org "Acme" --email you@acme.com --approver-email ops@acme.com --version 0.2.2
gtm doctor --strict
```

Install the CLI globally (`-g`). A project-local install or `npx` is not supported in 0.2.2.

## Upgrading

```bash
npm i -g @gtmos/cli@latest
gtm upgrade --check
gtm upgrade --to <version> --dry-run
gtm upgrade --to <version> --yes
```

Upgrades snapshot your data first and roll back automatically if a step fails.

## Support

Open an issue in this repository, or contact your AY Automate team.
