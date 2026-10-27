# GTM OS releases

Public releases of **GTM OS**, the self-hosted operating system for go-to-market: one typed model of your accounts, contacts, deals and signals; engines that find, enrich, score, route and reach accounts; and an agent-first interface (Claude Code, Codex or any MCP agent) where every customer-facing action waits for a second person to approve it.

This repository holds **releases and documentation only**. The source code is not published here.

## Latest: GTM OS 0.2.5 (CLI 0.2.5)

| What | Where |
|---|---|
| CLI | npm: [`@gtmos/cli`](https://www.npmjs.com/package/@gtmos/cli) (0.2.5) |
| Images | `ghcr.io/ay-automate/gtmos-{api,worker,mcp,console}:0.2.5` (also `stable`), listed under this repo's Packages |
| Release notes | [releases/0.2.5.md](releases/0.2.5.md) and the [GitHub release v0.2.5](https://github.com/ay-automate/gtmos-releases/releases/tag/v0.2.5) |
| Video series | https://ay-automate.github.io/gtmos-releases/videos/index.html |
| User guide | https://ay-automate.github.io/gtmos-releases/user-guide.html |
| Product documentation | https://ay-automate.github.io/gtmos-releases/product-documentation.html |

Earlier releases are kept for history: [0.2.2](releases/0.2.2.md).

**Self-hosters, read this before you upgrade.** From 0.2.5 the console, API and MCP ports bind to `127.0.0.1` only. If people or systems reach your server by IP address or hostname, put a reverse proxy with HTTPS in front, or set `GTMOS_BIND_ADDRESS=0.0.0.0` on purpose. Details are in the [release notes](releases/0.2.5.md#breaking-change-for-self-hosters-ports-are-local-only-by-default).

## Requirements

- Docker Desktop running, 4 GB+ free RAM, 10 GB+ free disk
- Node 22+
- Claude Code (recommended: it runs the setup with you)

## Install

```bash
npm i -g @gtmos/cli
mkdir my-gtm && cd my-gtm
gtm init
```

Then open Claude Code in that folder (restart it if it was already open) and run:

```
/setup-gtmos
```

Claude installs GTM OS, creates your organization with an owner and a second approver, connects itself, and asks you only for what a person has to provide (names and emails, OAuth sign-ins, keys you keep private, DNS records). Then open the setup wizard in the console (Setup) or run `/build-gtm-system` to build your engines, and go live from **Environments > Go live**.

Manual setup, without Claude:

```bash
gtm setup ./instance --org "Acme" --email you@acme.com --approver-email ops@acme.com --version 0.2.5
```

The owner and approver passwords are saved in `./instance/.env`. Sign in to the console (http://localhost:3000), create an agent key in **Settings > Developer**, then connect the CLI and check the install:

```bash
gtm init --url http://localhost:3001 --key <agent key>
gtm doctor --strict
```

Install the CLI globally (`-g`). A project-local install or `npx` is not supported yet.

## Upgrading

Upgrade the CLI first, then the instance:

```bash
npm i -g @gtmos/cli@latest
gtm upgrade --check
gtm upgrade --channel stable --dry-run
gtm upgrade --channel stable --yes
gtm init --refresh        # in each project folder
```

A plain `gtm upgrade` never moves an install that is pinned to a version: choose the target on purpose with `--channel stable` or `--to <version>`. Upgrades only add to your data, take a verified backup first, and roll back by swapping the images if a step fails. Your data is never restored over your live database. See the [user guide](https://ay-automate.github.io/gtmos-releases/user-guide.html#upgrade).

## Video series

A six-part series from install to a system you trust, published in parts: https://ay-automate.github.io/gtmos-releases/videos/index.html. Clips 01 to 10, 16, 17, 19, 21 to 23, 25, 29, 31 to 37, 39 and 43 are available now; the rest are coming soon. The MP4 files are assets of the `videos-v1` release; captions, transcripts and posters are in this repository. How clips are published: [docs/videos/README.md](docs/videos/README.md).

## Support

Open an issue in this repository, or contact your AY Automate team.
