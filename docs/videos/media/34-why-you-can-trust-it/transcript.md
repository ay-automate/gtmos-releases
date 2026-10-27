Through-line: A fence the database enforces, a log that shows tampering, and actions only people take.

# Clip 34: Why you can trust it

## Transcript

### Hook and promise

You've set how fast you go live, with every limit enforced for you. Now the proof that those limits hold. Built so you can verify it instead of taking it on faith. By the end you'll know what keeps your data yours, what proves the record wasn't rewritten, and what no agent can do alone.

### The stakes

Leo is about to connect the CRM, a mailbox and an agent to one system. The question is what stops it going wrong, and how he'd know.

### First: separation

First, separation. Every organization's rows sit behind row-level security, enforced by the database itself. The application connects with a database role that isn't allowed to bypass that fence. So a bug in a screen, a query or an agent prompt can't reach another organization's rows, because the database never returns them. Your data stays yours. Private and team only records are enforced as well, rather than hidden on screen.

### Second: a record you can check

Second, a record you can check. Every operation, by a person or an agent, goes into the audit log. Each entry is chained to the one before it with a hash. Change an old entry, or remove one, and everything after it stops matching. So a reviewer can trust the history without taking our word. Approvals carry the same trail: who proposed, which agent was involved, who approved, and what was frozen.

### Third: secrets

Third, secrets. Stored credentials are encrypted under a master key that lives with you, not in the database and not in a backup. Connection credentials are sealed. An agent key is shown once, expires on its own, and can never create other keys. Your project folder holds no key at all, only a reference to one.

### Fourth: actions only people take

Fourth, the actions reserved for people, and no setting changes that: approving, signing a definition, executing an approved action, switching Dry Mode, creating keys and assigning roles. An agent that tries is refused, and the refusal is useful. It stops and names the screen and the button. Even for people, the proposer can't approve their own work, and neither can the person an agent acts for.

### Last: extensions

Last, extensions. A package is signed, by us or by a publisher you chose to trust. It declares what it may write, and what it reaches out to is checked. Installing or enabling one is itself a proposal that a person approves, so nothing arrives on faith.

### The objection

Say it out loud: that's a vendor grading its own homework. So don't take our word. A reviewer can check the chain. The master key stays with you. And the database holds the fence even when a screen has a bug.

### How to check it yourself

Here's how to check. In the console: Approvals, then an approval's timeline, and Settings, Audit log for the full chain. Or ask your agent: "Who approved the last send, and what exactly did they approve". Ask it to approve, and it stops and sends you to the right screen. One habit worth copying: pick one approval a month and compare its frozen payload with what actually went out.

None of this replaces your judgment. Keep your master key somewhere safe, review who holds approval rights, and use Dry Mode while you learn the system.

### Recap and close

Boiled down: a fence the database enforces, a log that shows tampering, and actions only people take.

So you can hand an agent real access and still prove what it did. Open the audit log and read one entry today. The next clip is Dashboards, your daily rhythm and what it costs: how you run all of this in minutes a day.

## Ask your agent

- "Who approved the last send, and what exactly did they approve?"
- "Approve that proposal for me."

The agent reads the approval trail and reports the approval id. Approving is human only: the agent stops and names the screen and the button, and a different person approves in the console.

Next clip: Dashboards, your daily rhythm and what it costs.

## To verify before recording

- Concept clip: confirm the verify mockup still matches the Approvals timeline and Settings, Audit log wording at release.
- Private and team record enforcement is described as enforced, not as row-level security; confirm that wording is acceptable.
- Row-level security: the app connects as a role that cannot bypass it (gtmos_app); the narration says database role and never names the role.
- Audit log is hash chained org wide with a checkpoint signing key (inventory section 13); the narration says a reviewer can trust the history, it does not claim an external verification tool.
- Secrets: envelope encryption under the master key held by the operator, sealed connection credentials, agent keys shown once, expiring on their own and unable to mint keys; folders hold a reference, never a key. No expiry figure is quoted in this concept clip.
- Human only operations as named: approving, signing a definition, executing an approved action, switching Dry Mode, creating keys, assigning roles; an agent that tries is refused and told the screen and button.
- Package trust: signed by the first party key or a trusted publisher key, declared permissions, outbound calls checked, installing or enabling is a proposal a person approves.
- Pro move (compare one approval's frozen payload with what went out, monthly) is a practice, not a product feature.
