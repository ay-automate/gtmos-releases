# Your CRM, kept in sync

Clip 11, mixed, about 6 minutes. Ladder level: Build.

## Transcript

Through-line: Your CRM stays the record: GTM OS reads freely, writes only by approval, and proves the count.

### The hook and the promise

Your book came in safely, with nothing duplicated. By Monday that file is stale. Keep the CRM as the record instead. GTM OS follows it, writes back only with approval, and can prove nothing went missing.

Over the next few minutes you'll have a CRM syncing and a write back approved, then undone. You'll also build an adapter for a source that isn't a CRM, and check the numbers.

### The stakes

Here's the failure. Leo's mirror silently drops a slice of the deals, and Mia forecasts from what's left. Then Orbit writes a score into the wrong field, and nothing can undo it. Both are preventable. Read freely, write by approval, and prove the count.

### First: pick the record

First, choose the record, because everything downstream trusts one CRM. In the console: Integrations, Connections, the Composio card. Connect Composio once, then connect your CRM until it shows active. HubSpot, Salesforce, Pipedrive, Attio and Zoho all work through Composio. Mark the one your team treats as truth as the CRM of record.

From then on, GTM OS mirrors your accounts, contacts and deals every six hours. Sync now runs it on demand, one at a time per organization. Each record remembers which CRM record it came from. Mind this: a very large object can hit a per run cap. The sync status says so instead of hiding it.

Or ask your agent: "Set HubSpot as our CRM of record, sync it, and tell me what came in". Sign in stays a human click, so it hands you the link.

### Second: write back, gated

Second, write back, the gated direction. Your CRM is the record, so nothing touches it without a person. Someone, or an agent, proposes an update to one record. That becomes an approval, and a different person approves it. The approval is bound to the exact payload, so what's approved is what runs. In the console: Operate, Actions. Every write back lands there with an Undo that restores the earlier values.

Two honest limits. Write back updates records that already exist, and it can't create one in your CRM. And a high risk write through Composio needs one approval per record, not per batch. Pro move: write back only the few fields that matter, like scores and outcomes.

Or ask your agent: "Update the Northwind deal in HubSpot: set the next step to send the renewal quote". It proposes and waits. If the value was wrong, ask for the undo. The ledger shows who approved, and the values before and after.

### Third: sources that are not a CRM

Third, sources that aren't a CRM, like a warehouse, a billing tool or a niche system. The adapter builder maps any list into your organization and writes nothing back to the source. In the console: CRM, Adapters. Choose the app or MCP server, the tool that lists records, and the object they fill.

It starts read only: introspect pulls one page and lists every field. Then comes the step most tools skip. Run audit counts the records the source holds against what you mirror, before anything is mapped. You see the size of the job, and any gap, while it's cheap to fix.

Propose mapping drafts every target field with a confidence bar, and shows who decided each line: a rule, the model, or a person. Anything under sixty percent is flagged. Anything ambiguous becomes a numbered question, which is also an open ask a teammate can answer.

Publish proposes a mapping version, and a person signs it before it runs. The sync reads only that signed mapping. Activate then schedules full reads, anywhere from every six hours to weekly. Incremental reads can run as often as every fifteen minutes, if the source can filter by last changed.

Or ask your agent: "Build an adapter for the invoices list in our billing tool. Audit completeness first and ask me about anything unclear". It stops exactly where a person has to sign.

### Last: prove the count

Last move, the proof. Data health asks one question: is everything there? In the console: CRM, Data health. Each object shows source rows, GTM OS rows, rows held back, and completeness against your threshold. Below it, the object is flagged and the owner gets a decision. Agents caveat their answers about it.

Counts can match while values drift, so check parity. It reads a live sample from the source and compares it with GTM OS, field by field: identical, different, or missing. Operator tip: in Audit settings, switch on the automatic full sync, so a falling object repairs itself.

Or ask your agent: "How complete is our HubSpot mirror, and does a live sample match". Owners and admins can read the parity detail, because it carries record values. Everyone else sees counts only.

### The objection

You may be thinking: two copies of my deals means two versions of the truth. It doesn't. The CRM stays the record, and the mirror is measured against it. Completeness runs against your threshold, and parity compares live values. Nothing drifts quietly.

### Recap and close

To recap: Pick the record and let it sync, then gate every write back. Audit before you map, and check parity after. Read freely, write by approval, prove the count.

Your CRM stays the record, and you can prove the mirror is complete. Open CRM, then Data health, and run an audit today. The next clip is the CRM workspace, where every account explains itself.

## Where to click

- Integrations > Connections > Composio card: Connect Composio, connect your CRM, set it as the CRM of record, Sync now
- Settings > CRM settings: the CRM of record section, with Manage, sync now
- Operate > Actions: every write back, with Undo
- CRM > Adapters: New adapter, Run audit, Propose mapping, Questions, Publish, Propose for signing, Sign, Activate
- CRM > Data health: Run audit, Check parity, Audit settings

## Ask your agent

Prompt:

> Set HubSpot as our CRM of record, sync it, and tell me what came in.

What you should see, in shape:

- CRM of record set to hubspot. Sync queued, one running for this organization.
- Last run: accounts, contacts and deals mirrored. Truncated: no. Errors: none.

Prompt:

> Update the Northwind deal in HubSpot: set the next step to send the renewal quote. Then undo it.

What you should see, in shape:

- Proposed: update one HubSpot deal. Approval ap_7c1e, waiting for a person other than me.
- After approval: executed. Undo restores the previous next step and is recorded in the Actions ledger.

Prompt:

> Build an adapter for the invoices list in our billing tool. Audit completeness first and ask me about anything unclear.

What you should see, in shape:

- Audit before mapping: 9,400 rows in the source, none mirrored yet. 22 fields found.
- Mapping proposed with 3 numbered questions (asks 41 to 43).
- Publishing needs another person to sign. Open the adapter in CRM > Adapters.

Prompt:

> How complete is our HubSpot mirror, and does a live sample match?

What you should see, in shape:

- Contacts: 98 percent mirrored, above the threshold. Deals: 91 percent, flagged.
- Parity on 50 sampled deals: 46 identical, 3 with differences, 1 missing in GTM OS.
- Say sync now and I will start a full read for deals.

Example responses are simplified and use fake data. Sign-in to your CRM through Composio is always a person clicking; the agent hands you the link. Write-back proposals and adapter signing always wait for a person other than the proposer.

## To verify before recording

- Salesforce: described only as one of the CRMs reachable through Composio; every scene uses HubSpot as the demo CRM. The native Salesforce adapter is unverified and is never shown. Confirm the plan's sample prompt (Salesforce mirror) is deliberately replaced by HubSpot.
- Six-hourly CRM sync: confirmed in the shipped guide 04-connections.md and reference engines.md (crm.sync every 6 hours once a CRM of record is set). Confirm on the recording build that Sync now and the schedule behave that way.
- Per-run record cap: crm.sync_status reports truncated runs (the guide says a cap per object). The narration says a cap exists without a number. Confirm the number before anyone quotes it.
- Write back is update only: no create-in-CRM action exists (crm.update_record takes a record type, a record id and fields). High-risk Composio writes need one approval per record. Confirm the approval wording on the real approval card.
- Undo of a CRM update: crm.undo_update_record is the compensator and the Actions ledger shows Undo. Confirm whether the undo itself needs an approval, and match the response line in the agent scene.
- Dry Mode and the CRM write backs engine: the narration deliberately does not say what Dry Mode does to a write back. The plan says Dry Mode turns every external effect into a logged draft, and the adapter sheet says incremental runs skip while the CRM write backs engine is Dry. Check this on the Safety page in the build you record before adding any line about Dry Mode to the write-back scene (coordinator ruling: leave it out until checked).
- Adapter steps and button names come from adapter-detail-sheet.tsx on origin/main (Run audit, Propose mapping, Publish, Propose for signing, Sign, Activate, Save schedule). The mapping sheet says confidence under sixty percent is flagged. Confirm the New adapter button label in adapters-shell.tsx.
- Cadences: full read manual, every 6h, every 12h, nightly, weekly; incremental off, every 15 min, hourly, every 4h. Incremental needs a changed-since argument on the source tool.
- Signing: confirm that the person who proposed a mapping cannot sign it (the sheet says a human signs before it runs; the four-eyes rule is the plan's anchored term).
- Data health: threshold, parity sample size (one to one hundred), auto backfill and nightly audit are on the Audit settings card. A flagged object opens a decision item, alerts the owner and makes agents caveat answers. Confirm the default threshold before saying one.
- Fake numbers in mockups and agent responses are invented; none is a product default.
- Rewrite note: the narration says the approval holds the exact change, so what is approved is what runs (frozen payload shown on the approval card, inventory section 13). Confirm the card shows the payload.
- Rewrite note: the narration says a flagged object raises a decision for the owner and agents caveat their answers about it (from the Data health description in the previous script). Confirm both on the recording build.
- Rewrite note: the narration says the sync reads only the signed mapping (signed definition.source_mapping, inventory section 10). Confirm an unsigned mapping does not run.

Next clip: The CRM workspace.