Through-line: One checkpoint a day, scored from real facts, never ticked by hand.

# Clip 09: Tutorial: your first week

## Transcript

### The hook and the promise

The agents run inside limits they can't raise, so this week you put them to work. A first real result takes days, not quarters, and nothing on the scoreboard is ticked by hand.

By the end you'll know the eight milestones, one checkpoint for each day, and exactly how to earn each one.

### The stakes

Teams drift through setup for a quarter without knowing how far along they are. Mia thinks she's nearly done, and the scoreboard says three of eight.

### The scoreboard

So the week has one rule: one checkpoint a day, scored from real facts, never ticked by hand. The scoreboard is the first win card, on your organization home and on the Setup page. It has eight milestones, and each is computed from real facts every time you look, as done, pending, or could not read.

Unknown always shows its reason and never counts as done, while pending ones carry the exact next step. Ask your agent: "What is my next first win step". It's a read, so any agent with read access can answer. Pro move: ask it every morning, and it becomes your standup.

### Day one

Day one holds two milestones. First, your instance is ready, which means every required item is live, and a model key and an email sender are the usual ones. In the console: Setup, then finish the required items. Or ask your agent: "What is missing before my instance is ready, and how much of my source is covered".

Second, connect your first real data source, usually your CRM, the way Connections and integrations showed. A model key or a sender key doesn't count, and sample data never does. Then check coverage in the console, under Connections, then Data health. You see how much of each object GTM OS holds, and where the gaps are. Until a real source is syncing, the rest of the week has nothing to work from.

### Day two

Day two, milestone three: your first sync finished. In the console: Connections, then Sync now on your CRM, and wait for it to complete. Or ask your agent: "Sync HubSpot and show completeness". When the records arrive and the gaps show, the numbers start to mean something. If the sync fails, the Connections row shows the reason from the last check, so you fix the cause instead of guessing. Leo owns this day, because it's mostly keys and access.

### Day three

Day three, milestone four: a person signs your first definition. In the console: Setup, then Your definitions. Review the drafted cards, each with its evidence. Edit what's wrong, then propose. A different person signs, and if an agent drafted it, the person behind that agent's key can't be the signer. Or ask your agent: "Which definitions are drafted and waiting for a signature".

Here's what the two people did. Mia reviewed the cards, fixed a wrong segment, and proposed them. Orbit helped with the drafts, but proposing isn't signing, so Sophia read the evidence and signed. The record shows both.

### Day four

Day four, milestone five: your first Dry Mode draft. In the console: Settings, then Safety, with Dry Mode on, then run one engine once. It drafts what it would have done and sends nothing. Or ask your agent: "Run scoring once under Dry Mode and show me the draft". Now you can judge the logic before anything leaves.

### Day five

Day five, milestone six: your accounts have fit scores. This needs the ICP and scoring definitions you signed on day three. In the console: Engines, Score, then score your accounts and read the evidence behind each verdict. Or ask your agent: "Score my accounts and explain the top three". If the ranking looks wrong, tune the scoring model instead of trusting it. The change goes through the same propose and sign steps.

### Day six

Day six, milestone seven: a second person approves a proposed action. In the console: Approvals, as the approver, and decide the first proposal. The proposer can't approve it, and neither can the human an agent acts for. Or ask your agent: "What is waiting for approval". It reports the approval number and stops there.

### Day seven

Day seven, milestone eight: your first live message. When the Dry Mode drafts look right, open Safety and check the engines card, so every other engine is set to Dry. Turn the organization switch off, set only Outreach to Live, and approve the first send. A first message to someone nobody has written to always waits for a person, whatever the autonomy setting. One habit worth copying: run the go live check first. Ask your agent: "Run the go live check", which is read only. Going live properly has its own clip: Tutorial, going live.

If a week is tight, nothing breaks, because the checklist keeps the order and not a deadline. Two weeks is a normal pace.

### Reminders

Last, reminders. While setup is unfinished, owners and admins see a reminder about the next step in the app. Email is opt in: it's off until you turn it on, comes at most once a week, and stops when setup is complete. Every mail says why you got it and has a one click unsubscribe. In the console: Notifications, Setup reminders by email. Or ask your agent: "Turn on setup reminder emails for me". It refuses, because that's a human only setting.

### The objection

Someone on your team will say: a week is too fast for a real go to market. It's the first message, not the whole motion. Day seven is one engine live and one approved send, with caps on and everything else still in Dry Mode.

### Recap and close

Say it back: Eight milestones, one checkpoint a day, each scored from real facts. The last one is a message a person approved.

You now have a week you can run, and a scoreboard that can't be faked. Up next, bring your data in, your whole book in one afternoon.

## Ask your agent

- "What is my next first-win step?" (operation: `onboarding.first_win`)
- "What is missing before my instance is ready, and how much of my source is covered?" (`instance.readiness`)
- "Sync HubSpot and show completeness." (`crm.sync`, `sync.completeness`)
- "Which definitions are drafted and waiting for a signature?" (`config.list`)
- "Run scoring once under Dry Mode and show me the draft." (`policy.get_dry_mode`, `policy.shadow_report`)
- "Score my accounts and explain the top three." (`score.list_ranked`)
- "What is waiting for approval?" (`gtm_approvals`)
- "Run the go live check." (`/go-live-check`, read only)
- "Turn on setup reminder emails for me." (human only: `notification.preferences.set`)

The agent proposes and reports an approval id. A different person approves in the console.

## Console paths

- Organization home and the Setup page: the first win card
- Setup: finish the required items. Integrations > Connections: connect your CRM
- Connections: Sync now on your connected CRM, wait for it to finish
- Setup > Your definitions: review the drafted cards with their evidence, edit, propose; a different person signs
- Settings > Safety: Dry Mode on. Engines: run one engine once
- Engines > Score: signed ICP and scoring definitions, then score your accounts
- Approvals: open the first proposed action as the approver and decide
- Safety > Engines: turn Outreach live for one engine, then approve the first send
- Notifications: Setup reminders by email switch; owners and admins see the in-app reminder first

Next clip: Bring your data in.

## To verify before recording

- First win card on the organization home and the Setup page; eight milestones computed from real facts by `onboarding.first_win` (outbox events, executed operations, readiness, coverage, approvals); nothing stored; unknown shows its reason and never counts as done (0.2.6 on main; confirm on the published build, plan 12b).
- Milestone names in order: instance ready; first real data source connected; first sync finished; first definition signed by a person; first Dry Mode draft produced; accounts have fit scores; a second person approved a proposed action; first live message went out.
- A model key or a sender key does not count toward the data source milestone; sample data never does.
- The person behind an agent's key cannot sign what that agent drafted.
- Net-new rule: the first message to someone nobody has written to is never auto-sent, whatever the autonomy setting.
- Setup reminders: opt in, off by default, at most one a week, in-app first for owners and admins, email only if opted in, unsubscribe in every mail, stops when setup completes; the setting is honest when the instance has no email configured; the agent cannot turn it on (plan 12b).
- /go-live-check is read only.
- Every screen stays a marked mockup ("example, simplified") until the capture script exists.
