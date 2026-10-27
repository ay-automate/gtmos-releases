Through-line: One lane, one engine, one real send, and a second person who approved it.

# Clip 37: Tutorial: going live

## Transcript

### The hook and the promise

Last clip you learned to promote a change with confidence. Now the change that reaches a real inbox. One real message leaves your system, a second person has approved it, and every other engine stays on Dry Mode.

Over the next few minutes you'll have a live sender, an active lane, and only Outreach set to Live.

### The stakes

Most teams flip one switch and hope. Mia turns Dry Mode off on a Friday, and every engine that inherits from it goes live with it. By Monday, a stranger has a cold email with a number nobody can prove. Order prevents that.

### Step one: check, then connect a sender

Step one, ask whether you're ready. The check is read only. It covers live mode, readiness, your lanes, and whether definitions are signed and promoted. In Claude Code, type /go-live-check. In the console: Integrations, Connections. Or ask your agent: "Run the go live check".

Now the sender. Outreach needs a real mailbox bound to the lane, so caps apply per mailbox. In the console: Settings, Connected accounts, with the send feature on. Or ask your agent: "Which sender is live and which lane uses it". The sign in is yours, because an agent can't click through that consent. In live mode a fixture sender is refused, so a fake success can't fool you.

### Step two: activate a lane

Step two, activate a lane. A lane is the guardrail around sending: channel, daily cap, touch window and sending domain. Activation is a proposal, so a different human approves it, and Sophia does, never the proposer. In the console: Engines, Outreach, lanes, Activate. Or ask your agent: "Activate lane primary-email in prod". Watch this one. With a sending domain, activation refuses until SPF, DKIM and DMARC verify.

### Step three: rehearse in Dry Mode

Step three, rehearse with Dry Mode still on, by proposing a first touch to a teammate anyway. You get a logged draft, nothing sends, and no approval exists. In the console: the Outreach workbench, then Operate, Actions. Or ask your agent: "Draft a first touch to our internal test contact on lane primary-email and propose it".

Read the claims check in that draft. Every factual claim is checked against active proof twice, when the action is proposed and again when it's sent. Each claim comes back backed, close, or no proof. Close never counts as backed, and no proof blocks the send.

### Step four: guardrails, then one engine live

Step four starts with guardrails, which apply to every engine and every agent. Set emails a day, new accounts a week, and a send window in the recipient's timezone. A hit doesn't drop the action. It holds it, then runs it later. In the console: Settings, Safety. Or ask your agent: "Show my guardrails and today's usage". Pro move: set them tight for week one.

Now one engine live. Dry Mode has two layers, the organization switch and a Live switch per engine, and the stricter one wins. Check the engines card first: an engine that inherits from the organization goes live with it, so set the others to Dry. Then an owner or admin turns the organization switch off and sets only Outreach to Live. Both steps are human only, confirmed and audited, so your agent points you to the screen. Leave autonomy and envelopes off for now.

### Step five: send, watch, widen

Step five, propose the internal send again. This time an approval appears, and Sophia opens it to read the frozen message and the claims panel. The approval is bound to the exact payload, so what she approves is what goes out. Someone other than the proposer executes it, and the message lands in a real inbox, which proves the chain end to end.

Now read what happened. In the console: Outreach, then Operate, Monitors. Or ask your agent: "Show deliverability for lane primary-email and the suppression rules". Monitors watch bounce and complaint rates, and can pause a lane when they spike. A paused lane blocks approved sends until a person resumes it. One honest limit: bounce reports from a connected mailbox, and delivery events from some providers, aren't checked against real accounts yet. Your first internal send is where you check them.

Who approves matters as much as how. Have a second owner or admin. With only one, add another using gtm member add and the admin role. Proposals expire after seven days, so a queue nobody reads quietly blocks you. For the first few days, keep Outreach, Needs a human and the Actions ledger open. If anything surprises you, set the engine back to Dry, since going dry is always allowed.

Then widen one step at a time: raise the daily cap a notch, add a segment, then add a second engine set to Live on its own. Every step repeats the pattern: draft in Dry, read, approve, go live.

### The objection

The objection: one slip, and a bad email reaches a real customer. Here's what has to line up. A first message to a new person always waits for a human. No proof means a blocked claim. Any cap hit holds the action. Only Outreach is live, and the person who executes isn't the person who proposed.

### Recap and close

Keep these: Check readiness and connect a sender. Activate a lane. Rehearse in Dry Mode. Then take Outreach live alone, with a second person approving the first send.

One lane, one engine, one real send, and a second person who approved it. Keep the Actions ledger open for a week. Up next, Teams, roles and seats: who gets which reach, and how your agents inherit it.

## Ask your agent

- "Run the go live check."
- "Which sender is live and which lane uses it?"
- "Activate lane primary-email in prod."
- "Draft a first touch to our internal test contact on lane primary-email and propose it."
- "Is Dry Mode on, and what is each engine's mode?"
- "Show deliverability for lane primary-email and the suppression rules."

The agent proposes and reports the approval id. Turning Dry Mode off, setting an engine to Live, approving and executing are human only: a different person does them in the console.

Next clip: Teams, roles and seats.

## To verify before recording

- Org Dry Mode versus per-engine Dry or Live: the stricter of the two applies; engines in an upgraded organization inherit the org switch, so confirm that still holds (the stakes line relies on it).
- Mailbox must be bound to the lane (from the troubleshooting guide, not seen in the console).
- Lane activation refuses until SPF, DKIM and DMARC verify when the lane has a sending domain (carried over from the earlier verified script; confirm on the build).
- Claims checked at propose and again at execute; Backed, Close, No proof; block by default (FEATURE-INVENTORY section 13). Net-new rule: first message to a never-contacted person always needs a human (section 13).
- Shadow report before widening: the earlier script said it shows whether past drafts would have landed; confirm the wording against policy.shadow_report.
- Unverified integrations (mailbox bounce reports, some provider delivery events, LinkedIn, site publishing) must stay undemonstrated; the clip says plainly they are not yet checked against real accounts.
- All agent response shapes are invented for the mockups. Every screen stays a marked mockup (example, simplified) until the capture script exists.
