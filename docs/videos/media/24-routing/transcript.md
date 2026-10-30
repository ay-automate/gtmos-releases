Through-line: One owner per lead, and the reason is written down.

# Clip 24: Routing

## Transcript

### The hook and the promise

A verified signal now reaches your sellers, and it needs an owner in seconds. Every new lead lands with a human who owns it, chosen by rules you wrote, and every choice comes with its reason.

Over the next few minutes you'll write a territory, set capacity, and read the decision behind any assignment. Assigning an owner is an internal write. The only thing Routing sends out is a notification to the owner.

### The stakes

Mia's demo request lands in a shared queue. Two reps reply, or nobody does, and the account's owner in the CRM never hears about it. Speed to lead is lost to a question that needed a rule, not a meeting.

### Territories and strategy

First, territories. A territory is a set of criteria with an owner or a rotation. In the console: Engines, Routing, and the territory editor under When routing runs. Criteria are structured, like country or company size. They match first, before any rotation. Each territory has a priority and an on switch. Only a person edits territories. Your agent can read them and never change them. Or ask your agent: "Which territory would this lead fall into?"

Second, strategy. Routing assigns by round robin, territory or named owner. Stickiness keeps a record with the owner of its account, so a new contact never splits an account between two reps. When nobody in the territory can take the lead, overflow sends it to a fallback owner or a named queue. It tries again after a day, or the moment you change a setting.

Third, capacity, which keeps it fair. In the console: Engines, Routing, Team capacity. Each person has caps on open leads and leads per week, and a weight from one to a hundred. The person with the lightest load for their weight is next. People can be paused or marked out of office. Dates follow their own time zone. An owner can lock capacity for the whole team. Availability is human only. An agent can't change it.

Fourth, matching a lead to an account. In the console: Engines, Routing, match preview. A lead on the exact company domain attaches automatically. A subdomain or a sibling domain is only a suggestion, unless the territory allows it, and free mail addresses never match. The preview shows the result before anything is assigned. Or ask your agent: "Which account does this lead match, and who owns it?"

### The decision on record

Now the part that earns trust. Every assignment writes a decision record: assigned, kept or queued, the territory and rule that fired, the reason, and who or what did it. In the console: Engines, Routing, Assignment history, and its Decision column. So when someone asks why a lead went to Leo, you read the answer. Or ask your agent: "Who owns this lead and why?"

Owners hear about it by Slack or email. A notification leaves the building, so it follows Routing's own Dry or Live switch. In Dry Mode you can watch who would have been told, without telling anyone. Pro move: stay in Dry for a week and read the Decision column before the first real ping.

Speed to lead puts it together. When a form comes in, the play routes the lead without taking it from an existing owner. It skips customers, creates a first touch task due in fifteen minutes, and drafts a reply with the send proposed for approval. In the console: Engines, Plays, speed to lead, Simulate. Or ask your agent: "Simulate speed to lead over the last thirty days". You'll see who it would have assigned, with zero writes.

### Improve and customize

Routing doesn't tune itself, so you do. Read the Decision column, find where leads queue or overflow, then adjust territories and caps. Or ask your agent: "Find unowned leads and preview owners". A scheduled reconcile play and the routing steward agent check hourly for leads nobody owns.

### Handoffs and limits

Routing is the receiver. The qualified handoff from Score and the signal reaction from Signals both ask it for an owner. Outreach then uses that owner when a reply comes back.

What's still missing: response time targets with escalation when an owner doesn't act, and a scorecard for Routing of its own. Today speed to lead is the first touch task and the play results, not a clock that Routing enforces.

### The objection

A careful engineer will say: an agent will reshuffle my accounts overnight. It can't edit territories or availability, because those are human only. Stickiness keeps a record with its account's owner. And every move it does make writes a decision you can read.

### Recap and close

Checkpoint: Territories match first, capacity keeps the load fair, and stickiness keeps accounts whole. One owner per lead, and the reason is written down.

Every lead reaches the right owner in seconds, and the reason is on record. Read yesterday's decisions under Engines, Routing. After this comes Outreach, where that owner sends nothing until a second person approves.

## Ask your agent

- "Which territory would this lead fall into?"
- "Which account does this lead match, and who owns it?"
- "Who owns this lead and why?"
- "Simulate speed to lead over the last 30 days."
- "Find unowned leads and preview owners."

Assigning an owner is an internal write, so it needs no approval. Territories and availability are edited by a person in the console; the agent reads them and explains the decisions.

Next clip: Outreach.
