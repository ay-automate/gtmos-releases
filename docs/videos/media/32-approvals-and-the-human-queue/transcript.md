Through-line: What you approve is what runs, and nobody approves their own work.

# Clip 32: Approvals and the human queue

## Transcript

### Hook and promise

Last clip, the loop stopped at one gate. Now you're standing at it. Nothing leaves without a second pair of eyes: every message, every budget move and every live change waits for a person who didn't propose it.

In this clip you'll read an approval, work the queue, and know exactly who can approve and why.

### The stakes

Sophia approves a send on Monday. By Tuesday the draft has changed, and the message that went out isn't the one she read. Here, that can't happen.

### What an approval is

An approval is the record of a proposal waiting for a person. Any external effect, like a send, and any live configuration change becomes one. The rule is four eyes: the proposer, or the human an agent acts for, can never approve, sign or execute.

### First: the states

First, the states, so you know what's waiting and for how long. An approval moves from proposed to approved, then executing, then executed. It can also be rejected, withdrawn by its proposer, revoked, or fail. A proposal nobody decides expires after seven days. In the console: Approvals, and open any approval to see its timeline. Or ask your agent: "What is waiting for approval, and what is the oldest one".

### Second: read the payload

Second, read the payload. It's frozen the moment it's proposed, and you see a diff of what would change. Configuration changes add an impact preview. The approval is bound to the exact payload, so what you approve is what runs. In the console: Approvals, open the approval, and read the diff.

### Third: the claims panel

Third, the claims panel, for outbound content. Every factual claim, like a statistic or a named customer, is checked against proof you've approved. Each one shows as backed, close, or no proof. Close is never treated as backed. By default an unbacked claim blocks the send. In the other mode it routes to the approver, who acknowledges each claim. The proposer and the agent can't. The check runs when the message is proposed, and again when it's sent. If the proof is archived or expires in between, the run fails.

### Fourth: the receipt

Fourth, the receipt. If the approval ran in dev or staging, a real customer facing effect is recorded, not sent, and the receipt says not applied, dev. Configuration changes do apply in the environment they were proposed for, whatever environment you're viewing. Read the receipt before you tell anyone it went out.

### Last: decide

Last, decide. In the console: Mission Control shows today's one move, the oldest pending approval, with one click to approve. Or open Approvals, read the payload, the claims and the impact, and approve or reject. Each decision is attributed to you and kept in the history.

Every approval records who proposed it, which agent was involved, which human that agent acted for, and who approved. Months later, you can answer who let this happen, and why, without guessing.

### The human queue and open asks

Not everything waiting is a send. Needs a human is the queue for exactly what waits on a person right now: effect approvals, configuration decisions with an impact preview, and entity resolution reviews. In the console: Operate, Needs a human. Or ask your agent: "Show me everything that needs a human". Advanced move: clear it once in the morning and once before you leave, so the seven day expiry never catches anything.

Open asks cover the rest: questions, document requests, access requests and data gaps. Each is numbered, with an owner and a due date, and GTM OS chases the owner every day until it's answered. In the console: Operate, Open asks. Or ask your agent: "Which open asks are mine, and which are overdue". Agents open asks too, so a missing answer becomes a visible item, not a silent guess.

### Who can approve, and why

So who can approve? Agents never can. The person needs a role with the approve permission, which is owner or admin. And they can't be the proposer, or the human an agent acts for.

One rule closes a loophole. The person who created an agent key can't approve, reject or execute that agent's proposals. Executing an approved action is human only too, and it needs a second person.

So when you ask an agent to approve something, it stops and names the screen and the button. That's the system working, not failing. On a one person team, name a second identity as approver. That's by design.

### The objection

The worry: a second approver on everything will slow us down. Three things keep it fast. Mission Control puts the oldest approval one click away. A person can grant an agent an envelope for a narrow scope, with a budget and an expiry. And the queue shows only what needs a person.

### Recap and close

Run it back: The payload is frozen, the claims are checked twice, and the person who approves is never the person who proposed.

You always know what you're approving, and why nobody approves their own work. Read one approval timeline today. After this comes Dry Mode and guardrails, which sets how fast you go live.

## Ask your agent

- "What is waiting for approval, and what is the oldest one?"
- "Show me everything that needs a human."
- "Which open asks are mine, and which are overdue?"
- "Approve apr_7f3a for me."
- "Propose the send to this contact and tell me the approval id."

The agent proposes and reports the approval id. It never approves, rejects or executes, and it never retries a proposal. A different person approves in the console.

Next clip: Dry Mode and guardrails.

## To verify before recording

- Console paths: Approvals (timeline, payload diff, impact preview, Claims panel, result receipt), Mission Control (Today's one move), Operate > Needs a human, Operate > Open asks, the Waiting on you badge in the header. Confirm exact labels at capture.
- States: proposed, approved, executing, executed; also rejected, withdrawn, revoked, expired after seven days (DEFAULT_PROPOSAL_TTL_MS in kernel/runtime/src/actions/approval.ts), failed.
- Payload frozen at proposal with a diff against what is there now; impact preview for config changes (inventory section 13).
- Claims gate: verdicts Backed, Close (about fifty percent wording match, never treated as backed) and No proof; default mode blocks an unbacked claim, the other mode routes to the approver who acknowledges each claim; checked at propose and again at execute; archived or expired proof between approval and run fails the run. The narration does not quote the fifty percent figure.
- Receipt wording Not applied (dev) and the run-it-in-production hint; config changes apply in the environment they were proposed for (plan 12b).
- Who can approve: owner or admin hold action.approve; not the proposer; not the human an agent acts for; the person who created an agent key cannot approve, reject or execute that agent's proposals; executing is human only and four eyes. Agent response shapes in the mockups are invented.
- Envelope sentence in the objection (a narrow scope, a budget, an expiry, granted by a person) matches the Dry Mode and guardrails clip.
- Open asks: numbered, owner and due date, chased daily by one batched reminder per person; agents open asks and they are deduplicated.
- Single approver org policy exists but its details are unverified; the narration only says a one person team names a second identity as approver.
