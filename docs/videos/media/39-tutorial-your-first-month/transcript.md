Through-line: Month one is one loop: read the results, change one definition, sign it, read again.

# Clip 39: Tutorial: your first month

## Transcript

### The hook and the promise

Everyone now has the reach they were given, and nobody can widen their own. Now the month that follows your first send. By week four, your definitions reflect what actually worked, and your first win card is green.

By the end you'll run a weekly review, tune scoring from evidence, and add a motion without guessing.

### The stakes

Mia changes scoring, a lane and a play in the same week. Replies move, and the cause stays a guess. Month one is one loop instead: read the results, change one definition, sign it, read again. Every change takes the road you know, dev, sign, promote, so learning never means guessing in production.

### Step one: the data

Step one, week one, the data. A score is only as good as the records behind it, so close the gaps before you tune anything. In the console: CRM, Data health. Compare the source against what GTM OS holds for each object, and read the flags below threshold. Or ask your agent: "Show source coverage and flag what is below threshold".

### Step two: the weekly review

Step two, a weekly review, on the same day each week. In the console: Engines, Outreach for the K P Is, then Plays, Results, then Operate, Cost. Or ask your agent: "Give me my weekly review of what worked, what did not, and what it cost". Here's the trap. What's working shows a group only once it has enough sends. Early weeks may say not enough yet. That is the honest answer, because a rate on a handful of sends is noise.

### Step three: signals and replies

Step three, week two, read what the market and your buyers told you. In the console: CRM, Signals, Review queue. New organizations start on the Strict gate, so an unverified third party signal neither scores nor reaches a seller. Verify the good ones and dispute the bad ones, and the account rescores either way. Or ask your agent: "List unverified signals and verify the funding ones".

Then the replies. In the console: CRM, Conversations. Every reply carries a label and its effect, and a reply that asks to stop becomes a suppression. The next action on a reply is always a proposal. Or ask your agent: "What replies came in, and what do they want".

### Step four: tune scoring from results

Step four, tune scoring from what happened. Score keeps a snapshot of every verdict, then measures the outcomes: positive replies, meetings, opportunities, wins. It computes lift for each criterion and proposes a new scoring model with the evidence attached. A criterion needs enough outcomes on both sides before it counts, and a weight moves only a limited step per run. Reps can flag a score they disagree with, and that counts as learning input. An agent's flag does not. In the console: Engines, Score, Learning. Or ask your agent: "Run the learning loop for scoring and show the proposed changes". A person other than the proposer approves it. Pro move: preview the rescan first, because scores can move once.

### Step five: a new motion and the play results

Step five, week three, add a motion, but only when the first one is healthy. In the console: Blueprints. Open a second blueprint and read what it sets up, the engines it uses and the connections it needs. Or ask your agent: "Which blueprint would add a product led motion, and what would it need". Applying it lands one ChangeSet in dev, a different person approves, and you sign and promote as before. For a single play, ask Studio for it in a sentence.

Then read the play results. In the console: Engines, Plays, Results shows each play's runs, outcomes, credited revenue and spend. Keep the plays that earn more than they cost, and rework or retire the rest. Operator tip: before you change a play, run gtm play simulate. It replays recent days with zero writes. And event plays never fire on bulk writes, so an import can't set off your whole book.

Two habits keep the loop honest. Change one definition at a time, so you know what moved the result. And wait for enough sends before you judge a group, because a bad Tuesday is not a trend.

### Last: week four

Last, week four, set cost against results. In the console: Operate, Cost, beside Plays, Results. Or ask your agent: "Which plays earned more than they cost this month". Decide play by play what to widen, trim or retire. Widening is a cap or lane change, so a person approves it.

Then open the first win card, on the organization home and in Setup. Every milestone is computed from real facts, never ticked by hand, and an unknown shows its reason instead of a guess. Or ask your agent: "What is my next first win step".

### The objection

Fair concern: a loop that rewrites its own scoring will drift. It can't, because it only proposes. The evidence is attached, and a person other than the proposer approves. Weights move a limited step per run, and every version can be rolled back.

### Recap and close

Replay: First close the data gaps. Then verify signals and tune scoring. Add one play or one motion in week three, and set cost against results in week four. Read, change one thing, sign it, read again.

Mia's first win card is green, and she can say why. Keep the weekly review on the calendar. After this comes Apps, packages and extending GTM OS, where you build the screens and packages your own method needs.

## Ask your agent

- "Give me my weekly review of what worked, what did not, and what it cost."
- "Run the learning loop for scoring and show the proposed changes."
- "Which blueprint would add a product led motion, and what would it need?"
- "Simulate play speed-to-lead over the last thirty days."
- "What is my next first win step?"
- "Show source coverage and flag what is below threshold."

Reads and simulations answer directly. Changes to scoring or a new blueprint are proposals: the agent reports the approval id, and a different person approves, then signs, then promotes.

Next clip: Apps, packages and extending GTM OS.

## To verify before recording

- Agent response shapes are invented; confirm real outputs at capture.
- Confirm the Score Learning section and the play Scoring tab names against the release build.
- Learning loop guard rails (enough outcomes on both sides, a limited weight step per run, rep flags count and agent flags do not): FEATURE-INVENTORY section 12.1. The narration states no numbers; keep it that way.
- Signal verification gate: new organizations start on Strict; verify, dispute and retract rescore the account (section 12.3).
- Event plays never fire on bulk writes such as imports and syncs (section 12.11): confirm on the build before showing.
- Rates with too small a denominator show a reason instead of a number (plays.kpis, outreach learning report groups need enough sends): confirm the on screen wording.
- First win card: eight milestones computed from real facts, shown on the organization home and Setup. This is a 0.2.6 on main item in the inventory: confirm it is in the published build before recording.
