# Journeys, pipelines and revenue truth

Clip 18, mixed, about 5 minutes. Ladder level: Build.

## Transcript

Through-line: One revenue truth, your words for stages, and nothing guessed.

### The hook and the promise

Fit is defined, tested and signed. Now define a won deal and a quarter's revenue. When two screens show two numbers for one quarter, trust in the dashboard dies. Here, finance and RevOps read one number.

Over the next few minutes you'll map your CRM's stages onto journeys, point revenue at one source, and choose how credit is shared. You'll also set currency rules and your own deal words.

### The stakes

Leo's CRM has a stage called Closed Renewed. A tool that guesses files it as open, and Mia's pipeline swells with deals already won. Orbit counts them again. One revenue truth, your words for stages, and nothing guessed.

### First: journeys and stage maps

First, journeys. In the console: Settings, Journeys. Define the lifecycles your companies, people and deals follow: main, renewal, self serve, partner. Each journey has stages marked open, won or lost, and can link to the stages of a deal pipeline from Settings, Pipelines. Saving proposes a new version in dev for a different person to approve. It goes live once signed and promoted to production.

Your CRM has its own stage values. A stage map says what each one means. Map it to a journey stage, ignore it, or press Guess for me. That suggests from names, synonyms and won or lost wording, ranked by your model if you have one. Values nobody has decided are held, never defaulted. Those records stay where they are, and each value raises a decision for a person.

Or ask your agent: "Which CRM stage values have no meaning yet, and where would you put each". It lists them with record counts and a suggestion. What a value means is your call, not the agent's, and records follow only after the map is applied.

### Second: revenue truth

Second, revenue truth. In the console: Settings, Money, Where does revenue truth live. Pick one source: CRM deal amounts, warehouse orders or billing records. The revenue K P I, the dashboard, attribution and your agents all read revenue from it. So two screens can't quietly disagree about one quarter.

Reconciliation then compares that truth with the won deal amounts in your CRM, by month and by account. It lists the accounts that drift most. Drift isn't hidden or averaged away. It's a list for finance and RevOps to work through together.

### Third: attribution

Third, attribution. In the console: Settings, Money, Attribution. The window is how far back a touch can claim credit: seven, thirty or ninety days, or your own number. The model is how credit splits across touches. Equal split is the default until you choose, with position based, first touch, last touch and time decay beside it. Compare models shows the same revenue under each. Changing either recomputes reports and rewrites nothing stored.

Two details matter for trust. Visits from AI assistants are classified as AI answers and credited to SEO and GEO. Ad click ids are opt in, expire after ninety days, and are blocked when Global Privacy Control is on. They're never shown to agents.

Or ask your agent: "Credit last quarter's revenue to channels under equal split and under last touch, and tell me what changes". It shows which channels move and which window it used. Pro move: run that comparison before you change the default model. Switching it is a person's decision.

### Fourth: currency and your words

Fourth, currency. In the console: Settings, Money, Currency and FX rates. Pick the reporting currency and the convention: your finance team's dated rates, or daily market rates. Add the finance rate sheet month by month, and the page shows revenue at both, with the drift between them. Stored deal values are never rewritten. The convention applies when a report is read.

Last, your words for deals. In the console: Settings, Money, Your words for deals. The OS adopts your words, and you never adopt ours. Name your deal types, say new business, expansion and renewal, and list the CRM values for each. Synced deals are typed automatically, and every dashboard filter and grouping uses your labels.

Or ask your agent: "What was revenue last quarter at finance rates, and how far is it from the CRM's won deals". It reads in your reporting currency, shows the drift, and reconciles against the CRM. Changing these settings is for owners and admins. The agent reads, explains and proposes.

### The objection

Fair concern: another settings page won't end the argument with finance. It makes the argument small. Reconciliation names the accounts that drift, month by month. Nothing stored is rewritten, so you can change a convention and compare. And a value nobody has defined is held for a decision, never guessed.

### Recap and close

Replay: Map stages, and hold what's undecided. Pick one revenue source and reconcile it. Compare attribution models before you switch. One revenue truth, your words for stages, and nothing guessed.

You now have stages that mean what you say, revenue that reconciles, and attribution you can inspect. Open Settings, then Money, and pick your revenue source today. Next: voice, proof and claims.

## Where to click

- Settings > Journeys: journeys, stages (open, won, lost), pipeline links, stage maps (map, ignore, Guess for me)
- Operate > Needs a human: one decision per unmapped value
- Settings > Money > Where does revenue truth live?
- Settings > Money > Reconciliation: accounts that drift most
- Settings > Money > Attribution: window, model, Compare models
- Settings > Money > Currency and FX rates: reporting currency, convention, finance rate sheet
- Settings > Money > Your words for deals

## Ask your agent

Prompt:

> Which CRM stage values have no meaning yet, and where would you put each?

What you should see, in shape:

- 3 unmapped values. Closed Renewed, 41 records: Renewed, won, 88 percent sure.
- On hold, 12 records: ignore, 60 percent sure. Nurture, 9 records: no good match.
- Say apply and I will set the map. Records move only after that.

Prompt:

> Credit last quarter's revenue to channels under equal split and under last touch, and tell me what changes.

What you should see, in shape:

- Window: 90 days. Equal split: email 34 percent, ads 30 percent, SEO 36 percent.
- Last touch: email 48 percent, ads 31 percent, SEO 21 percent.
- SEO loses most under last touch. Nothing stored changed.

Prompt:

> What was revenue last quarter at finance rates, and how far is it from the CRM's won deals?

What you should see, in shape:

- Revenue at finance rates: 1.20M EUR. At market rates: 1.17M EUR. Drift: 2.5 percent.
- CRM won deals differ by 38K EUR across 5 accounts. Largest: Northwind.
- To change the convention, an owner or admin does it in Settings > Money.

Example responses are simplified and use fake data. Changing money settings, the finance rate sheet and deal types is for owners and admins and is done by a person; the agent reads, explains and proposes.

## To verify before recording

- Journeys page: saving proposes a new version in dev and a different person approves; it goes live once signed and promoted to prod (journeys/page.tsx). Confirm the stage category names open, won, lost and the Ignore and Guess for me labels on the Stage maps view.
- Unmapped values: held, never defaulted. A new record is held, not created, and one decision item is raised per value (m04-journeys spec). Confirm the decision shows in Needs a human and the Held count shows on Data health.
- Guess for me: deterministic suggestions (names, synonyms, won and lost wording, funnel order) re-ranked by the org's model when one is configured (stage_map.suggest and stage_map.ai_suggest). Confirm the model re-rank is described correctly when no model key is set.
- Who may apply a stage map: stage_map.set is a data write; money.settings.set, money.rate_sheet.set and deal_type.set are owner or admin and human only. Confirm which of these an agent key can run before keeping the agent scenes as written.
- Revenue truth options on screen: CRM deal amounts, Warehouse orders, Billing records (revenue-truth-card.tsx). Confirm that a warehouse or billing source needs a mapped adapter or object, and say so on screen if it does.
- Attribution models in the console: Equal split, Position-based, First touch, Last touch, Time decay (attribution-card.tsx). The inventory also lists per channel. Windows: seven, thirty, ninety days, custom. Equal split is the default until a model is chosen. Confirm the default label on a fresh org.
- AI assistant visits classified as AI answer and credited to SEO and GEO; ad click ids opt in with ninety day expiry, blocked by Global Privacy Control, never shown to agents (inventory section 10, X0). Confirm before this sentence is voiced.
- FX: convention choices are Your finance team's dated rates and Daily market rates; the page shows revenue at market rates and at finance rates with the drift, and stored deal values are never rewritten (currency-card.tsx). Confirm the six month window on the tiles.
- Deal words: deal types in your words with the CRM values listed for each, so synced deals are typed automatically (deal-words-card.tsx).
- No exact totals: all counts, percentages and money amounts in mockups and responses are invented and must stay visibly fake.
- Rewrite note: the narration says the revenue KPI, the dashboard, attribution and agents all read revenue from the one chosen source, and that attribution recomputes reports and rewrites nothing stored (inventory 10, Money definitions). Confirm on the Money page.
- Rewrite note: the stakes scene says a tool that guesses would file Closed Renewed as open. This describes a hypothetical other tool, not GTM OS; keep it as an illustration and do not name a competitor.

Next clip: Voice, proof and claims.