Through-line: A brief that keeps itself current, and a fact only as strong as its source.

# Clip 28: Research agent

## Transcript

### Hook and promise

Spend now follows payback, and a person approves every budget move. Now the same discipline for what you know about an account. A sourced brief on any account, re-checked on a schedule, and nothing taken on faith.

By the end you'll know how to request a brief and read the queue. You'll decide what research suggests, and see where the findings go.

### The stakes

Mia preps the night before a renewal call. She pastes what she finds into a note. Three weeks later the champion has left, the note still names her, and nobody has looked again. A note is a photograph. You need a researcher who keeps looking.

### First: your workspace profile

First, tell research who you are, or a brief can't say why an account matters to you. GTM OS reads your company site into a workspace profile, and every brief frames an account against what you actually sell. In the console: CRM, Research, settings. Or ask your agent: "Refresh our workspace profile". You'll see the profile re-read, with what changed. Read it before briefs rely on it, and refresh it whenever your site changes.

### Second: request a brief

Second, ask for a brief, so one request replaces an evening of open tabs. In the console: CRM, Accounts, open the account, and choose Research. Or ask your agent: "Research Northwind". The task joins a queue and runs in the background. When it finishes, the brief lands on the account, and every line carries its source: a careers page, a news article. Research draws on web search, page extraction, news, and the person and company enrichment you have bound.

### Third: watch the queue

Third, watch the queue, so a failed lookup shows up instead of vanishing. In the console: CRM, Research, queue. Or ask your agent: "What is in the research queue". Each task reads running, queued, failed, or scheduled for a re-check. Retry a failed one, or cancel one that's running. Your agent lists tasks by state, with the next re-check date.

Now what keeps a brief fresh: time. Briefs don't rot. Re-checks follow how much a contact matters: by default, champions every fourteen days, named contacts every ninety, and people research couldn't find, once a year. Before a meeting, a brief older than a week is refreshed. A daily budget caps the spend, and once it's gone, queued tasks wait.

The second mechanism is why a fact deserves trust. Research reports observations, never a confidence. Each kind has a fixed weight, and independent signals combine. On its own, a search result stays weak. A fact only reaches verified with a primary source: a profile that names the employer, an email signature, or a reply on a thread your mailbox synced. If another value has real support, the fact waits for a person to settle it. Every fact carries its source, and a weak source never counts as proof.

### Fourth: decide what counts

Fourth, decide what counts. In the console: CRM, Research, suggestions. Each one shows its source, and you accept or dismiss it. Or ask your agent: "Accept the funding fact for Northwind". It will send you to the console, because deciding is human only. Mind this: read the source before you accept. A value you dismiss is never offered again. Research never overwrites something a person typed, and an employer change never applies on its own. Accepted facts resolve to the record that exists, so you don't get a twin.

### Where the findings go

Now where the findings go. One to one drafts read the brief for their opening, so a first touch can mention something true and recent. The meeting prep play builds a brief and a prep task before a meeting starts. Accepted facts can also feed scoring. Ask your agent: "What do we know about Northwind". You get the brief, the accepted facts, the open suggestions, and the date of the last check.

### Settings and cost

Settings choose the sources, the re-check rhythm and the limits. In the console: CRM, Research, settings. Or ask your agent: "Show the research settings". Changes happen in the console. Then open Operate, Cost. Each brief can use paid lookups, so the ledger shows what one account cost to research. Pro move: keep the daily budget low in week one. After a week of ledger lines you know what a brief costs, and you raise the budget on purpose.

### How it improves, how you customize it

It improves in two ways. Re-checks keep briefs current, and your accept and dismiss decisions keep the record clean. To customize: bindings choose which sources research may use, the workspace profile frames what you sell, and settings set the rhythm.

### The objection

Fair concern: an agent writing facts into my CRM? It can request and read, but it can't decide a suggestion, because that's human only. Nor can it turn on automatic acceptance of verified facts. And every applied fact keeps its source and its band, with an audit entry.

### The edge, said honestly

Know the edge. Research works one account or contact at a time. It isn't account based marketing, and it doesn't run sales intelligence across your market. Those aren't built yet.

### Recap and close

Replay: Your profile says who you are. The queue re-checks on a schedule. Facts carry their source until a person decides.

Any account can have a sourced brief that stays fresh. Open one account and request a brief today. Coming next: Plays and Studio, where automations run on your rules, after you've simulated them.

## Ask your agent

- "Refresh our workspace profile".
- "Research Northwind".
- "What is in the research queue".
- "Accept the funding fact for Northwind".
- "What do we know about Northwind".
- "Show the research settings".

The agent requests and reads research. Accepting or dismissing a suggested fact is human only: the agent answers "do this in the console" with the screen and button, and it cannot switch on automatic acceptance of verified facts.

Next clip: Plays and Studio.

## To verify before recording

- Console path: CRM > Research (queue, settings) and the Research action in the Account Workspace. Route /org/<orgId>/research exists on main; the tab names and the suggestions screen are not confirmed.
- Workspace profile ("who we are") read from the company site: confirm the label in the console, that refresh is available to a member, and whether research.workspace_profile.refresh needs approval.
- Sources: bindings research.web_search, research.extract_page, research.news, enrich.person and enrich.company. Confirm the user can see which are bound and that every brief line carries its source link.
- Queue states: running, queued, failed and scheduled re-checks. Confirm retry and cancel buttons and the next re-check date beside each account.
- Re-check defaults quoted in the narration (champions fourteen days, named contacts ninety, not found a year), the meeting refresh of a brief older than a week, and the daily budget behaviour (queued tasks wait when it is spent): read from kernel/data-plane/src/research and kernel/db/src/research-store.ts on origin/main; confirm they are the shipped defaults and the settings labels.
- Evidence model quoted in the narration (observations with fixed weights that combine, a search result alone stays weak, verified needs a primary source and no contradicting value, a dismissed value is never offered again, research never overwrites a typed value, an employer change never applies on its own): from evidence.ts and apply.ts on main; confirm how the console words the bands before showing them.
- Auto accept: autoApplyVerified is a setting that defaults to on in code on main (it fills an empty field only); an agent cannot turn it on. Confirm the default and the console wording before saying more than the narration does.
- Suggestions screen where a person accepts or dismisses (research.fact.decide is human only). Accepted writes resolve to the record that exists (link resolution rule in the inventory); confirm wording before showing.
- Research spend booked to the cost ledger (Operate > Cost) and who can change settings (research.settings.set): not confirmed.
- Whether web search results are checked as being about the account: the signals scan has a known limit here (plan 12b). The narration only says read the source before you accept; confirm before saying more.
- Accepted facts feeding Score: the inventory purpose line says research feeds scoring; confirm the mechanism before showing it.
