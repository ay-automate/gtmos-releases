Through-line: Your agent already knows the product, and refresh keeps it current without touching your edits.

# Clip 07: Skills

## Transcript

### The hook and the promise

Last clip you connected your tools. Now your agent learns to use them, because it can know GTM OS before you type a single prompt. That's what skills are for.

By the end you'll know the four groups of skills and how an agent picks one. You'll also keep them fresh and add your own.

### The stakes

Without skills, Mia explains the scoring model to Orbit every morning, and Orbit guesses how HubSpot behaves inside GTM OS. With them, Orbit starts the day already knowing.

A skill is a packaged instruction set an agent loads when your request matches it. When you ran gtm init, it placed them in your project: in .claude/skills for Claude Code, and in .codex/skills and .agents/skills for Codex.

They come from a published skills release, checked by hash, with an offline copy bundled in the CLI. So init works without a network, and it never trusts a file it can't verify.

### First: the four groups

First, the groups. There's a large set, so think in four. Setup and onboarding: the skills behind /setup-gtmos and the setup wizard. Per engine: scoring and lead work, signals, outreach, research, SEO and GEO, ads and content. Tool skills: HubSpot, Salesforce, Composio, Search Console, GA4, Gmail, Slack and more. Each tells the agent how that tool behaves inside GTM OS. And looot skills, for enrichment, verification and search data.

One more sits across all four: the engine catalog, which explains every engine's purpose, connections and settings. Beside the skills sit role subagents, like the revenue operations analyst and the deal reviewer, that you call by name.

### Second: how an agent picks one

Second, how an agent picks one. Each skill carries a short description. The agent reads only those, and loads the full instructions when your request matches. Ask your agent: "Score my accounts against our ICP", and it loads the scoring skill first.

Ask for first lines, and it loads the first lines skill, which writes one cited fact per lead, or says no fact. You never name the skill. A skill teaches the agent how. Its key still decides what it may do, so instructions can update freely while permissions don't move.

### Third: slash commands

Third, the slash commands: shortcuts to the big jobs, typed in Claude Code in the project folder. /setup-gtmos installs and connects from zero. /build-gtm-system builds your system end to end. The rest cover the daily work: /create-play, /wire-connector and /describe-ops.

The one to remember is /go-live-check, a read only go or no go before you leave Dry Mode. Ask your agent: "/go-live-check". It answers with a verdict, and lists what's left.

### Fourth: keep them fresh

Fourth, keep them fresh. Skills change as GTM OS does. In the terminal: gtm init with the refresh flag takes new skills and updates the ones you haven't touched. It keeps the ones you edited, plus any files of your own. Then restart Claude Code, because it reads skills only at startup.

How do you know when you need it? Run gtm doctor. Its Harness section compares the version stamps from your last init with your CLI, the skills release and the live server. If they differ, it warns that skills are stale and tells you to refresh. Or ask your agent: "Are my skills up to date".

### Fifth: add your own

Fifth, add your own. Make a folder under .claude/skills. Add a skill file with a name, a description and your instructions. Copy it to the Codex folders if your team uses Codex. Refresh never touches your own files. Or ask your agent: "Write me a skill for how we qualify inbound leads, and save it in the project".

Pro move: a shipped skill you edit is kept exactly as it is, so it stops receiving updates. To keep both, copy it under a new name, and the original keeps updating.

### The objection

Fair concern: instructions from a release, running in my agent? Each skill is checksum verified plain text you can read, and a skill only instructs. What your agent may actually do is still decided by its key.

### Recap and close

Replay: Four groups, picked by description. Refresh when doctor says stale, and add your own beside them.

Your agent now knows the product, the engines and your tools, and you can teach it your own way of working. Up next, predefined agents, a team that works inside the rules you set.

## Ask your agent

- "Score my accounts against our ICP."
- "/go-live-check"
- "Are my skills up to date?"
- "Write me a skill for how we qualify inbound leads, and save it in the project."

The agent reads, drafts and proposes. What it may actually do is decided by its key.

## Console paths

- Terminal: gtm init. Skills are files in your project, not a console page.
- Claude Code: type the slash command in the project folder
- Terminal: gtm doctor, then gtm init --refresh
- Create a folder under .claude/skills with a skill file; copy it to .codex/skills or .agents/skills for Codex

Next clip: Predefined agents.
