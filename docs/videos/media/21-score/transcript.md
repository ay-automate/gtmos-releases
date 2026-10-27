Through-line: Every verdict shows its reasons, and only a person changes the model.

# Clip 21: Score

## Transcript

### The hook and the promise

You've set who you may contact, and only a person can grant consent. Now you decide who comes first. Score ranks every account on fit and intent, and shows the evidence behind each verdict. You know who to call before they call.

In this clip you'll read a verdict, change the model behind it, and watch it learn from outcomes. Score is an engine: logic that runs on your signed definitions, never on hidden rules.

### The stakes

Mia's team has more accounts than hours. Without Score, the list is whoever shouted last, and last quarter's funding round still looks like news. Score fixes that with reasons you can read.

### The logic

First, the composite. Fit is how closely a company matches your ideal customer profile. Intent is what it did lately: a funding round, a hiring push, a pricing page visit. Score weighs both into one composite and maps it to Hot, Warm or Cold. Every weight and threshold lives in a signed definition, so you can read the rule behind a rank.

Second, intent fades, so old news stops counting. Every signal loses weight on a half life set by its family. By default web intent fades in about two weeks and a funding round in about six. Signals seen first hand count more. A retracted signal counts for nothing, and in Strict mode so does an unverified one.

Third, the brakes. A hard disqualifier caps a score, such as a former customer or a competitor on your suppression list. The lowest cap wins, and a cap of zero zeroes the account. Negatives lower intent: an unsubscribe, an objection, a hard bounce. Missing data is never punished. An unknown field is left out of the score, not counted as zero.

Fourth, the committee and the clock. Coverage counts how many roles on the largest open deal you've engaged, and flags a missing champion. That's why buying roles mattered last clip. And a band decays when nobody touches the account. By default Hot slides to Warm after three days, and Warm to Cold after fourteen.

### Read a verdict

Now read a verdict. In the console: CRM, Hot list, click an account. The why drawer lists what lifted it and what pulled it down. It shows the caps, the negatives, how far each signal has decayed, and who on the committee is covered. Or ask your agent: "Show the hot list and why number one is hot".

To score on demand, open Engines, Score. You'll see Accounts to score, Qualifications, Rescan, KPIs and Learning, and a Lead queue ranked by band, segment and committee coverage. Or ask your agent: "Score Northwind Logistics and explain it".

### Change the model

Now change the model. One definition kind, the scoring model, with three keys: default for qualification, ICP fit for firmographic fit, and signals for signal strength. Mia says what good looks like, Orbit drafts it, Sophia signs it. Your definitions, signed once. In the console, review the plan on the Environments page. Or ask your agent: "Propose raising the weight of funding signals in our scoring model".

Power habit: preview before you commit. A new signed version rescans the whole organization. The rescan preview scores accounts and rolls every one back, so nothing is written and nothing is queued. It shows who moves into or out of qualified, the band changes, and which handoffs would fire. Ask your agent: "Preview the rescore". Run it before a model change and before an upgrade.

### How it improves

Score also learns, with a person in the loop. Weekly, Learning measures lift per criterion: how much more often accounts with it replied, booked or won. It needs verdicts at least thirty days old and ninety five percent confidence. A weight moves at most thirty percent a run, and disqualifiers never change. The result is a proposed version that a different person approves. In the console: Engines, Score, Learning. Or ask your agent: "Propose a scoring update from outcomes".

Reps teach it too. In the Lead queue, use Flag this score when a verdict looks wrong. Rep flags are learning inputs, and agent flags are not. Shadow accuracy keeps Score honest. In Settings, Safety, the CRM write back card compares past qualified verdicts with the deals that followed. It says so when the sample is too small.

### The dashboard

The dashboard shows accounts scored, the tier mix, how often reps accept Score's next move, and the lift from qualified to deal. Rising acceptance with steady lift means the model fits your market. When lift fades, open Learning. Or ask: "How is scoring performing this month?"

### Handoffs and limits

Score doesn't work alone. Signals and enriched fields feed it, and replies and bounces count as negatives. A qualified account hands off to Routing for an owner, to Outreach to enrol, and to plays. With a CRM of record, scores can be written back as a proposal.

The honest edge. Learning needs history, and with too little it says insufficient data instead of guessing. Agent flags don't teach it. Account based marketing and the wider sales intelligence engines are on the roadmap, not in the product.

### The objection

The worry: a model that learns will drift somewhere I can't see. It can't change by itself. A weight cap and a confidence bar sit between the data and the model. Every change arrives as a proposal that a different person approves.

### Recap and close

Run it back: Fit and intent make the composite, caps and decay keep it honest, and outcomes tune the weights. Every verdict shows its reasons, and only a person changes the model.

You can now rank accounts, read the reason for every verdict, and let outcomes tune the model. Open the Hot list and click number one. Coming next: Enrichment, which fills the gaps in your data.

## Ask your agent

- "Show the hot list and why number one is hot."
- "Score Northwind Logistics and explain it."
- "Propose raising the weight of funding signals in our scoring model."
- "Preview the rescore."
- "Propose a scoring update from outcomes."
- "How is scoring performing this month?"

The agent proposes and reports an approval id. A different person approves in the console.

Next clip: Enrichment.

## To verify before recording

- Scoring model editing: no console editor page was found; the clip says changes go through a change set, with the plan on Environments. Confirm the real console path.
- Rescan preview: score.rescan_preview exists, but no console button was found; the clip shows it as an agent path only. Confirm.
- Shadow accuracy under Settings > Safety (CRM write-back engine card). Confirm the page and wording.
- Learning thresholds named in the narration (plenty of accounts with and without a criterion, ninety five percent confidence, weights move at most thirty percent a run) come from FEATURE-INVENTORY 12.1 and stdlib/qualification/src/learning.ts on origin/main (LEARNING_MIN_CONFIDENCE 0.95, LEARNING_FDR 0.05). Confirm the minimum sample (thirty with and thirty without) against the build before quoting it on screen.
- Buying roles feed committee coverage (the callback to the previous clip): committee coverage reads the roles on the largest open deal (score.committee_coverage).
