Through-line: No evidence, no value: setup drafts from your own data, and a person signs what goes live.

# Clip 04: The onboarding steps

## Transcript

### The hook and the promise

Your agent has an organization of its own and a key that can never approve. It's ready to start the setup. Answer a few questions, and the system configures itself, with every suggestion citing where it came from.

By the end you'll know what six screens save, what each answer changes, and which steps only a person can take.

### The stakes

Most setup wizards collect everything, then guess the rest. Mia gets a scoring model that looks confident, and its numbers have no source to check.

Setup works the other way. No evidence, no value: it drafts from your own data, and a person signs what goes live. Three rules hold on every screen. No invented values. Anything unknown stays empty and becomes a numbered open ask. And the proposer never approves.

### Where you start

In the console: Setup. Or ask your agent: "Set up GTM OS for my company". Both drive the same operations, so you can take turns. What one saves, the other sees.

Take an example. Setup suggests a weight for company size. Beside it you see the closed won deals it rests on, and a line from your pricing document. If a model drafted a value and cited nothing, that value is dropped. With no model configured, a deterministic drafter fills only what your data supports, and the card says so.

### Screen one: Welcome

Screen one is where you describe your company: team size, markets, current stack, up to three pains, the hours a week you can spend, and your motions. The ARR band is optional and private. Only an owner or admin can read it, and agents never see it.

From your pains and motions, setup ranks the engines with reasons and suggests blueprints. Pick yours, then click Select. Or ask your agent: "Which engines and blueprint fit us, and why". Each line lists the facts for and the facts against.

### Screen two: Connect your data

Screen two, Connect your data, shows real coverage: connected sources, records, last sync. Sources overlap, so counts are never added up. Each source has Pull now, and every missing grant becomes a numbered ask that names who grants it.

Connecting is a human click, because OAuth consent and secret entry stay in the console. Ask your agent: "What data do we still need to connect". It names the gap and sends you to Integrations, then Connections.

### Screen three: Your definitions

Screen three, Your definitions, starts with your documents: PDFs with text, Word, Excel, CSV and more. Suppression lists and your data processing agreement are restricted to owners and admins, and never go to a model.

Setup then drafts a card for each of these: lifecycle stages, the ICP and its weights, pilot scope, customer types. Then who the engines never contact, your CRM stage values, revenue truth, your words for deals, who owns what, and brand voice. Each card shows its evidence. Edit, skip, or approve, and your edits survive a redraft. Or ask your agent: "Show me the drafted cards and their evidence".

Approving publishes through the operation that owns that definition. The ICP, scope and customer types become proposals a different person approves. Revenue truth, deal words, territories and brand need a signed in human, because agent keys are refused.

### Screen four: Rules and who approves what

Screen four, Rules and who approves what, holds buying roles, consent, and trust settings such as Dry Mode, caps and quiet hours. Then autonomy per engine: dry or live, and suggest, approve each, or act within caps. Last come seats and role profiles. The product refuses to remove the last steward.

Role profiles, the ARR band, and approving cards that target a human are human only. Ask your agent: "Set our role profiles". It stops and says: do this in the console, then names the screen and button.

Each answer changes real behavior. The ICP card becomes the scoring model that ranks accounts. The suppression card is checked on every send. Consent decides which channels reach a person, autonomy decides which engines act without asking, and territories decide who owns a lead.

### Screen five: The build

Screen five, The build. First, engine readiness: each requirement is met, missing or unknown. Then Run build, and a worker job settles your cards, adapts and proposes your blueprint, and asks about unmapped stage values. It also checks CRM completeness, runs a dry rescore, and takes a readiness snapshot. Or ask your agent: "Start the build and tell me what it needs".

Follow the live log, retry or cancel, and read the Needs a human list.

If someone changes the session while you work, you see a conflict. Re-read, then redo. Every write names the version it was based on, so nobody overwrites anyone silently.

### Screen six: First motion and 90 days

Screen six, First motion and ninety days, gives you a plan sized to your weekly hours. Add, remove, defer or reorder plays, or request a new one from Studio. The brief cites a brief line for every sentence. Or ask your agent: "Show me the ninety day plan and the brief".

Then Launch, which is human only. It signs and promotes the setup definitions, and turns engines live only where your autonomy card says so. The rest stay in Dry Mode, and a different person approves in Approvals. Ask your agent: "What does Launch need", and it reads the preview.

At the end, the first win card shows eight milestones, computed from real facts and never stored.

### The objection

The pushback: a model drafting my rules, then Launch switching engines on? Uncited values never survive, each card waits on the right person, and engines go live only where you chose it. Everything else stays in Dry Mode.

### Recap and close

The short version: Six screens, every draft cited, every live change signed by a person. No evidence, no value.

You answered a few questions, and the system now holds evidenced definitions, waiting on the right people. The next clip is blueprints and motions, templates that seed a whole system in one change.

## Ask your agent

- "Set up GTM OS for my company."
- "Which engines and blueprint fit us, and why?"
- "What data do we still need to connect?"
- "Show me the drafted cards and their evidence."
- "Set our role profiles."
- "Start the build and tell me what it needs."
- "Show me the 90 day plan and the brief."
- "What does Launch need?"

The agent proposes and reports an approval id. A different person approves in the console.

Next clip: Blueprints and motions.

## To verify before recording

- Setup page (/org/<orgId>/onboarding): six screens Welcome, Connect your data, Your definitions, Rules and who approves what, The build, First motion and 90 days, then Launch (inventory section 7; confirm names on the published build).
- No invented values: uncited model-drafted values are dropped; with no model, the deterministic drafter says so on the card.
- ARR band is owner or admin only, never indexed, never given to agents.
- Documents: PDF with text, docx, xlsx, csv, tsv, json, md, txt; suppression lists and the data processing agreement are restricted and never sent to a model.
- Human-only steps: role profiles, the ARR band, approving cards that target a human, Launch. Cards that refuse agent keys: revenue truth, deal words, territories, brand. Cards that become proposals: ICP, scope, customer types.
- The product refuses to remove or narrow the last setup steward (LAST_OWNER_NARROWING).
- The build steps list (settle cards, adapt and propose blueprint, stage value asks, CRM completeness, plays rescore, dry rescore, readiness snapshot); live log, retry, cancel, Needs a human list.
- Writes carry expectedVersion; a CONFLICT means re-read, then redo.
- Launch signs and promotes the setup definitions and turns engines live only where the autonomy card says so; a different person approves.
- First win card: eight milestones computed from real facts (0.2.6 on main; confirm on the published build).
- Every screen stays a marked mockup ("example, simplified") until the capture script exists.
