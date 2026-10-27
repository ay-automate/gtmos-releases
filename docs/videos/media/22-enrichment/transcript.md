Through-line: Quote first, buy once, date every value.

# Clip 22: Enrichment

## Transcript

### The hook and the promise

Last clip Score showed the reasons for every verdict. A reason needs data, and your data has holes. Enrichment fills the missing emails, phones and firmographics, buys each answer once, and stops at the cap you set.

By the end you'll quote a run, set a cap, and read coverage for every field. Enrichment is the engine that fills empty fields on companies and contacts with provider verified values, and keeps them fresh.

### The stakes

Leo pulls the hot accounts and finds half the phone numbers blank. Buying them by hand means paying twice for the same answer, and no value carries a date. Enrichment prices the job first, and dates every answer.

### The waterfall

First, the waterfall. For each empty field, Enrichment asks the first provider in your binding. If that one has nothing, it asks the next, and it stops at the first answer. Providers are reached through looot with your organization's key, so connecting looot once is enough. An answer is bought once and cached, so the same question never costs twice.

Second, it fills empty fields only. A lookup never overwrites a value already on the record. When a newer enriched value differs, the company or contact page shows Newer enriched values, with Propose update. The approval shows the old and new value, provenance, confidence, the reason, and an undo. A value a person typed needs an explicit confirm, and only a person can approve it.

Third, freshness. Every value is stamped with when it was verified, how long it stays fresh, its confidence and its provider. By default an email stays fresh about three months, and a phone and firmographics about six. Override any window in the enrichment policy definition. A refresh re-checks only stale values that Enrichment wrote and nobody edited. If a provider has nothing, the old value stays, and it tries again a week later.

Providers fail. On an outage, a timeout or a server error, the lookup falls through to the next provider in the binding. Every attempt is recorded. Here's the honest part. A fallback after a timeout can mean two providers were asked for one lookup. The attempt log shows it, so a fallback is never free.

### What you configure

Money has three guards. Every run is quoted first, an estimate with no spend. Each binding carries a price ceiling per lookup. And the owner or an admin sets a monthly cap. When money is limited, the best accounts are enriched first, and cached answers still run free. In the console: Engines, Enrichment, where you change the cap. Or ask your agent: "How much of the monthly enrichment cap is left?"

Now run it. In the console: Engines, Enrichment shows the mode, the fill rate, spend this month, your bindings, the freshness windows and the run history. Or ask your agent: "Quote filling missing emails for the hot list". You'll see an estimate and no spend.

Pro move: quote first, then run with the quote as your ceiling. Ask your agent: "Run enrichment for the hot list, but stay under the estimate". Or let a play do it. The weekly account enrichment play is capped, and the enrich on create play refuses to run without a monthly cap. In Dry Mode, a run returns the estimate and attempts no lookup.

### The dashboard

The dashboard answers one question: how complete are we? You see the fill rate, the spend, and coverage for each field, with how many values are fresh and how many have gone stale. Or ask your agent: "What is our enrichment coverage, and which values are stale?"

### How it improves

It improves without guessing. Freshness windows and confidence decide what gets bought again, so spend goes to values going stale and fields still empty. You set the provider order in the binding, and the attempt log shows who answered. Change either in the console, or ask your agent, and a different person signs.

### Handoffs and limits

Enrichment feeds the rest. Fit fields sharpen Score. Backfilled domains help Merges spot duplicates. Routing reads country and size, and Outreach personalizes with what's now known.

Not built yet: the title, seniority and job change steps. They're planned, and nothing you've seen here depends on them.

### The objection

You may be thinking: an engine with a budget will quietly spend it. It can't. Every run is quoted first, each lookup has a price ceiling, and the monthly cap stops the rest. In Dry Mode, nothing is looked up at all.

### Recap and close

To recap: The waterfall stops at the first answer, and a person approves every change to a value. Quote first, buy once, date every value.

Every gap is now filled at a price you set, with a date on every value. Quote one run from Engines, Enrichment. Up next, Signals and intent, where the market starts talking about your accounts.

## Ask your agent

- "How much of the monthly enrichment cap is left?"
- "Quote filling missing emails for the hot list."
- "Run enrichment for the hot list, but stay under the estimate."
- "What is our enrichment coverage, and which values are stale?"

The agent proposes and reports an approval id. A different person approves in the console.

Next clip: Signals and intent.

## To verify before recording

- Enrichment policy and cap editing: the Freshness windows and monthly cap editors are on Engines > Enrichment in the code; confirm labels in the live console.
- Provider waterfall stops at the first answer, and fallback on outage, timeout or 5xx: confirm against the attempt log in the live console.
- The depth claims (a refresh re-checks only stale values Enrichment wrote itself and nobody edited; best accounts are enriched first when money is limited; a person-typed value needs an explicit confirm and only a person approves) come from FEATURE-INVENTORY 12.2. Confirm the wording in the live console before recording.
- Plan 12b: looot lookups run with the workspace key, so connecting looot once in the workspace is enough; the narration says a timeout fallback is never free and that the attempt log shows it.
