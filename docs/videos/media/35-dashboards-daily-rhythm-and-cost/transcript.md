Through-line: A short morning, and a ledger that explains every line.

# Clip 35: Dashboards, your daily rhythm and what it costs

## Transcript

### Hook and promise

You've checked the fence, the chain and the actions only people take. Now run it in minutes a day. Start every morning knowing the one move, and know what each action cost, down to the single run.

By the end you'll have a morning loop and a weekly one. Mornings: Mission Control, the queue, the Hot list. Weeks: the engine pages and the cost ledger.

### The stakes

Mia starts Monday with ten tabs open, trying to learn what the system did overnight. The bill, when it comes, is one number nobody can explain.

### First: Mission Control

First, Mission Control, pinned at the top of the left rail. At the top is today's one move: the oldest approval waiting on a person, with one click to approve if you're the right person. Under it sit tiles for qualified coverage, open pipeline, reply rate and spend, then ranked risks from your monitors. A tile with no published metric shows a dash, never a made up number. Or ask your agent: "Brief me on today".

It isn't the same page for everyone. Each role profile has its own seat dashboard. Profiles only narrow what a person can do, and a member's agents inherit the same limits.

Leo reads the overnight log first: scores refreshed, drafts made, syncs run. A failed line opens its run, with the step by step journal, so he lands on the cause. In the console: Mission Control, then Operate, Runs. Or ask your agent.

### Second: the Focus queue

Second, the Focus queue, for when one move isn't enough. In the console: Operate, Needs a human. It lists only what still waits on a person, and opening one shows the frozen payload as a diff. Or ask your agent. It can brief you, but deciding is yours.

### Third: the Hot list

Third, the Hot list. In the console: CRM, Hot list. Accounts are ranked by their latest score, with the live signals behind them. Open the why drawer on the top account. It shows the reasons, the caps and negatives that held it back, how old signals decayed, and the buying committee. If the ranking looks wrong, Mia flags the score from the lead queue, and that feeds tuning. Or ask your agent: "Show the hot list and why number one is hot".

### Fourth: the engine pages

Fourth, each engine page opens on an overview: Dry or Live, its KPIs, what it needs, approvals waiting, recent actions with undo, and the definitions it runs on. Read the engine you changed last week first. In the console: Engines, then the engine. Or ask your agent.

### Fifth: the daily update and the nudges

Fifth, the daily update, the same morning read delivered to you: what was done yesterday, what waits on a human, numbered open questions, and sync health. In the console: Operate, Daily update. Or ask your agent. Each person opts in to delivery, owners and admins set the hour, and an AI summary is always labelled.

The bell holds your notifications. The Waiting on you badge adds the open asks you own to the approvals that need you, so there's one number to clear.

On the home page sits the first win card. Each milestone is computed from real facts, never ticked by hand, and a fact that can't be read shows unknown with its reason. Or ask your agent for your next step.

Nudges are the reminders. While setup is unfinished, owners and admins see one in the app first. Email is opt in, at most once a week, with an unsubscribe link in every mail. If email isn't configured, the nudge says so. An agent can't turn it on.

### What it costs

Now the other half of the rhythm: what it costs.

In the console: Operate, Cost, the cost ledger. It's double entry: money is reserved before a call, settled when it finishes, or released if it never ran. Released reservations don't count as spend. Every line links to the run that spent it. Or ask your agent: "What did we spend this week, and which runs spent it".

Three kinds of money move: model calls, data lookups like enrichment, and ad spend. The first two are booked to the play or run that caused them. That turns a monthly bill into a decision: this play cost this much, and here's what it was credited with.

Spend has ceilings at several levels. Above the per call cap on data lookups, a person approves. When a budget by organization, environment, agent or play would be exceeded, the action doesn't quietly run or vanish. It becomes a proposal. Enrichment has a monthly cap too, and enriches your best accounts first when money is short. In the console: Operate, Cost for the lines, and Settings, Safety for usage. Or ask your agent.

To judge a play, open Engines, Plays, Results: runs, outcomes, credited revenue and spend, side by side. Or ask your agent. Syncing the same ad window again updates rows instead of adding them, so spend never double counts.

Pro move: set conservative caps in week one, while you're in Dry Mode. After a week of real ledger lines you know what a normal day costs. Tighten the caps to that, then widen on purpose, with a person approving each change.

### The objection

The objection: a dashboard I can't trust is worse than none. A tile with no published metric shows a dash. The first win is computed from real facts, and says unknown when it can't read one. And the ledger counts only money that settled.

### Recap and close

That was Mia's Monday: one approval decided, one score flagged, one update read, one cap checked. A short morning, and she knows what the system did and what it cost.

You run this in minutes, and you can explain every line of spend. Open Mission Control tomorrow and clear the one move. Next is Environments: dev, staging and production.

## Ask your agent

- "Brief me on today."
- "Show me my dashboard."
- "What did the engines do overnight, and did anything fail?"
- "What is waiting on me?"
- "Show the hot list and why number one is hot."
- "What are the engine KPIs this week?"
- "Generate today's daily update."
- "What notifications are unread, and what am I waiting on?"
- "What is my next first win step?"
- "What did we spend this week, and which runs spent it?"
- "How close are we to our caps?"
- "Which plays earned more than they spent?"

Reads answer directly. Anything that approves, executes or turns on an email preference is human only: the agent reports the approval id or the screen to open, and a different person decides in the console.

Next clip: Environments: dev, staging and production.

## To verify before recording

- Ad sync idempotence (spend and conversions do not double count on re-sync) comes only from plan 12b; confirm against the release build.
- Exact page name for the nudge email opt-in (Notification preferences) is unverified, and what triggers a nudge is unverified; the narration says only: in app first for owners and admins, email opt in, at most once a week, unsubscribe in every mail, honest when email is not configured, an agent cannot turn it on.
- Where the per call data cap is set is unclear; the narration only says going over it needs a person's approval.
- Exact KPI tiles on engine overview pages are unchecked; confirm at capture.
- Mission Control: today's one move is the oldest pending approval with one click Approve; tiles qualified coverage, open pipeline, reply rate and spend from metric.evaluate; a tile with no published metric shows a dash; ranked risks from monitors; overnight engine log; role aware seat dashboards (Exec cannot change configuration, journeys or sends) that only narrow.
- Cost ledger is double entry (reserve, settle, release; released is not spend); budgets by organization, environment, agent or play turn BUDGET_EXCEEDED into an approval proposal; enrichment monthly cap with best accounts first when money is short; ad spend per day guardrail above which a person approves. Read from the inventory; confirm wording on Operate > Cost.
- Daily update: done yesterday, waiting on a human, numbered open questions, sync health; per user opt in, owners and admins set the hour, optional labelled AI summary, Generate now.
- First win card: eight milestones computed from real facts; unknown shows its reason (0.2.6 on main, confirm it is in the published build).
- All agent response shapes are invented for the mockups.
