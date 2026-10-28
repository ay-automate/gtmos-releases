# Identity and data quality

Clip 13, mixed, about 5 minutes. Ladder level: Build.

## Transcript

Through-line: Merge by rules you signed, approve with a second person, undo anything, and a human's value always wins.

### The hook and the promise

Every value can say where it came from. Now make sure each customer is only one record. Two records for one customer means two scores, two owners and two cold emails.

By the end you'll know how rules decide who is the same. You'll merge a pair, undo it, and see why a correction survives the next sync.

### The stakes

Leo imports a list, and Northwind now exists twice. One copy sits with Sophia's renewal rep. The other sits in a cold sequence. Same customer, two owners, one awkward email. The fix has four parts. Merge by signed rules. Approve with a second person. Undo anything. And a human's value always wins.

### First: the rule

First, the rule. An identity rule is a signed definition that says which keys make two records the same. Companies match on domain, contacts on primary email, with weights, a minimum confidence and a name similarity floor. If you haven't signed one, GTM OS uses built in values and says so. The same rule drives the duplicate scan and the resolver that runs when data arrives.

Matching goes in order: exact keys, then blocking keys, then probability. If a match isn't safe to decide, the pair waits as a resolution review. In the console: Operate, Needs a human. A person links them, keeps a new record, or rejects the match. Nothing is guessed.

### Second: scan and merge

Second, scan and merge. In the console: Engines, Merges, Duplicate candidates. Rescan runs the scan again. Each pair shows why it matched, with a confidence score and both records side by side. Pick the survivor, and see which empty fields it will fill from the other.

Merge proposes. It doesn't merge. The card lists each conflicting field and the strategy that settles it. Keep the survivor, most recent, most trusted source, most complete, first written, highest confidence, or a person picks. A different team member approves and executes before any record changes, and the duplicate is archived, not deleted.

If you disagree with a call, pick the other value. The revised proposal goes back to someone who didn't propose or revise it. And if the survivor changed in the meantime, the merge refuses to run, so a stale decision never lands.

Or ask your agent: "Find duplicate accounts and propose merges". It proposes the pairs it's confident about, one approval each, and leaves the doubtful pairs for you. It can also preview a single merge first, showing the filled fields and how each conflict would be settled.

### Third: undo

Third, undo. In the console: Engines, Merges, Recent merges, then Unmerge. Unmerge is its own proposal and needs approval too. It brings back the archived record and restores only the fields that still hold the merged value. Edits made since the merge are never trampled.

### Fourth: corrections that stick

Fourth, corrections that stick. A value a person sets, including a pick made during a merge, is recorded in field history. Survivorship never overwrites a human value. So the next CRM sync, or a rebuild of the records from their sources, doesn't put the old one back.

The Merge rules card, on the same page, sets how each conflicting field is settled, with a default for the rest. Saving changes nothing live. It proposes a new version of the identity rule, signed like any definition.

### Last: data quality

Last, the Data quality tab. In the console: Engines, Merges, Data quality. It shows a quality score, the duplicates, the stale records and how many were scanned, then each field's fill rate, lowest first. That tells you where to clean next. Monitors watch bounce and complaint rates and freshness, and a nightly scan keeps it all current.

Or ask your agent: "Give me the data quality report before and after this import". Pro move: run it before every big import and again after. The difference is what the import did to your fill rate, duplicates and staleness. Any cleanup that follows is a proposal a person approves.

### The objection

A careful engineer will say: an approval per pair will bury my team. Merges are proposed one pair at a time today. So the agent proposes only the pairs it's confident about, and leaves the doubtful ones for you. And every merge can be undone, so a wrong call costs one unmerge.

### Recap and close

Checkpoint: A signed rule decides who is the same. A second person approves every merge. Unmerge brings it back, and a human's value stays put.

One customer, one record, every merge reversible, and corrections that stay. Run Rescan on Duplicate candidates and read the first pair. Coming next: ask your data anything, and what it remembers.

## Where to click

- Engines > Merges > Merge rules: the identity rule per object (companies on domain, contacts on primary email) is proposed from here and signed like any definition
- Operate > Needs a human: resolution reviews (link, new record, reject)
- Engines > Merges: Duplicate candidates, Rescan, pick the survivor, Merge
- Engines > Merges > Recent merges: Unmerge
- Engines > Merges > Merge rules: per field strategy, default, propose a new identity rule version
- Engines > Merges > Data quality: quality score, duplicates, stale, field fill rate
- Operate > Monitors: bounce and complaint rates, freshness

## Ask your agent

Prompt:

> Find duplicate accounts and propose merges.

What you should see, in shape:

- Scanned accounts: 6 candidate pairs.
- Proposed 4 merges, one approval each (ap_a1f3 to ap_a1f6), every one waiting for a person other than me.
- 2 pairs left for you: confidence too low to propose.

Prompt:

> Give me the data quality report before and after this import.

What you should see, in shape:

- Before: quality 87 percent, 12 duplicate pairs, phone fill 31 percent.
- After: quality 89 percent, 15 duplicate pairs, phone fill 36 percent.
- 3 new duplicate pairs came from the import. Want me to preview the merges?

Example responses are simplified and use fake data. A merge is always proposed and approved by a different person; merges are proposed one pair at a time, with one approval each.

## To verify before recording

- Merge batches are NOT shipped: the narration says merges are proposed one pair at a time and promises nothing else. Do not show a bulk merge control. Learning from rulings and a trust ledger are also deferred; neither is mentioned.
- Identity rules: definition.identity_rule per object, built in values when unsigned (inventory 12.8 and the merge rules card text: edit them in Definitions). There is no Definitions page in the console, so the console path is the Merge rules card (it proposes a new identity rule version). Confirm that the card says built in values when no signed rule exists.
- Review queue: resolve.review.list and resolve.review.decide (link, new_entity, reject) surface in Operate > Needs a human. Confirm the labels on the review card.
- Strategies on the approval card: keep survivor, most recent, most trusted source, most complete, first written, highest confidence, person picks (inventory 12.8). Confirm the exact labels in merge-rules.tsx before showing the table.
- Revised pick: the inventory says a THIRD person approves the revision. The narration says someone who did not propose or revise it. Confirm against the identity_dq.revise_merge description before quoting a number of people.
- Stale survivor refuses to run, and unmerge restores only fields still holding the merged value (inventory 12.8). Confirm in a recorded run.
- The duplicate is archived, not deleted (UI text: it will set fields on the survivor, then archive the duplicate).
- Manual overrides surviving re-projection: field history keeps merge picks so a later CRM sync does not overwrite them; survivorship never overwrites a human value. Confirm with a live run that edits a field after a sync.
- Data quality tab tiles: Quality score, Duplicates, Stale, Scanned, Field fill rate (duplicates.tsx). Nightly identity_dq.scan job from the inventory; the data hygiene agent at 02:00 is not mentioned because it depends on the agent pack being on.
- Merges are available for accounts, contacts and deals in the operation (identity_dq.merge_records); the console page shows companies and contacts. The narration says companies and contacts.
- Fake pairs, counts and approval ids in mockups and responses are invented.
- Rewrite note: the narration says the same identity rule drives the duplicate scan and the resolver that runs when data arrives (inventory 10 and 12.8). Confirm in definition.identity_rule docs.
- Rewrite note: the narration says merges are proposed one pair at a time today and the agent proposes only the pairs it is confident about, leaving doubtful pairs for a person. No bulk merge control is shown or implied.

Next clip: Ask your data anything, and what it remembers.