# The CRM workspace

Clip 12, mixed, about 5 minutes. Ladder level: Build.

## Transcript

Through-line: Every value on every screen can tell you where it came from.

### The hook and the promise

Last clip you proved the mirror was complete. Now open any account in it. Most C R Ms show you a value and ask you to trust it. Here you see what you know, why you know it, and what happens next.

In this clip you'll save a view and read a company's timeline. You'll also trace a value to its source and check the consent on a person.

### The stakes

Sophia opens an account before a renewal call, and the employee count looks wrong. In most tools she can't tell if it came from a form, an import or a guess. Orbit can't either. So she checks by hand, and she stops trusting the screen. Every value here can tell you where it came from.

### First: lists and saved views

First, the lists. In the console: CRM, then Companies, Contacts, Deals and Tasks. Companies and Contacts are tables you can search, sort and filter. Deals are a pipeline board and a table, by stage. Marking a deal lost asks for a loss reason. It's never missing later. Tasks shows what is due, overdue and done.

A saved view remembers a list's filter and sort, so your team opens the same slice the same way. Build one from any list, say every tier A company with no owner. If an agent changes a saved view, the change goes through approval.

Or ask your agent: "Create a task for Mia to call the champion at Northwind by Friday". It exists at once, because it only touches your own organization. Then ask: "Save a view of every tier A company with no owner". That comes back as a proposal, and a teammate approves it.

### Second: the company page

Second, the company page, where the story lives. Open any company. The overview comes first, then tabs for contacts, deals, tasks, the Activity timeline, Actions, Research and Evidence. The timeline puts every email, call, meeting, signal and change in order, so you read the account's story from top to bottom. Page and agent read the same operations, so the console and the agent can't disagree about an account. A relationship line says whether your team already knows them.

The Actions tab shows what the engines drafted or did on this account: the draft, the gate it passed, who approved it, the outcome, and an Undo where one exists. Research holds sourced briefs. Evidence collects each fact with where it came from. A note or a call you log from the page joins the timeline.

### Third: why this value

Third, the part that sets this apart. Next to any field, open Why this value. It shows which source wrote the value, which rule chose it when sources disagreed, and when. A lineage trace goes down to the contributing records. A value a person set is marked as theirs, and it beats every automatic source. Power habit: open Why this value before you edit. If a source got it wrong, fix the source. If you set it by hand, it stays.

### Fourth: records, consent and your words

Fourth, records beyond the big three. In the console: CRM, Records. Browse every object type, including custom ones like a Partner you defined in Model. Open a record to see its fields, its provenance and its links. Contacts link to companies through employment, and deals link to contacts with a buying role.

On a contact, the Consent tab lists email, phone, SMS, WhatsApp and LinkedIn. Each shows status, legal basis, source and expiry, with the history of every change. It's the record you'd hand over in a data protection request. The rules behind it come in the clip called Consent, suppression and privacy.

Last, deals in your words. In the console: Settings, Money, Your words for deals. Types like new business, expansion or renewal use your labels in every filter and grouping, never ours. A deal's page also shows its buying committee: who plays which role, and whose is still missing.

Or ask your agent: "Show the Northwind company page and explain why it is on the hot list". It answers from the same records, with your permissions. Each reason points at its evidence. Open the company and check the claim yourself.

One more entry in the same rail: AI chat. Ask about a record, and anything it proposes to change waits for a teammate's approval.

### The objection

Say it out loud: a tidy record page is not the same as trust. Fair. So here's what backs it. The agent reads with your permissions, and can't see what you can't. Every reason points at evidence you can open. A saved view change is a proposal, not an edit. And a sync can't overwrite a value a person set.

### Recap and close

Boiled down: Work from lists and saved views. Read the company page top to bottom. Ask why for any value. Every value can tell you where it came from.

You can open any account and trust what you read, because it shows its sources. Pick one company and open Why this value on three fields. Next is identity and data quality, where one customer becomes one record.

## Where to click

- CRM > Companies, Contacts, Deals, Tasks: lists, saved views, detail pages
- Company page tabs: Overview, Contacts, Deals, Tasks, Activity, Actions, Research, Evidence, Agent
- Any field > Why this value: the provenance panel, with Lineage trace
- CRM > Records: every object type, including custom objects
- Contact page > Consent tab: per channel consent and its history
- Settings > Money > Your words for deals: deal types in your words
- CRM > AI chat: the assistant, briefly

## Ask your agent

Prompt:

> Create a task for Mia to call the champion at Northwind by Friday, and save a view of every tier A company with no owner.

What you should see, in shape:

- Task created: call the champion at Northwind, due Friday, assigned to Mia.
- Saved view proposed: Tier A, no owner. Approval ap_2d90, waiting for a teammate.

Prompt:

> Show the Northwind company page and explain why it is on the hot list.

What you should see, in shape:

- Northwind: tier A, score 82. Open deal: renewal, Active.
- Why: funding signal six days ago, a new VP of Sales, champion identified.
- Each reason links to its evidence on the Evidence tab.

Example responses are simplified and use fake data. The agent reads with your permissions; any change it proposes to a saved view or a record waits for a person.

## To verify before recording

- Tab names on a company page come from company-detail.tsx on origin/main: Overview, Contacts, Deals, Tasks, Activity, Actions, Research, Evidence, Agent. A contact page has Overview, Company, Consent, Tasks, Activity, Actions, Research. A deal page has Overview, Contacts, Tasks, Activity, Evidence, Agent. The timeline is the Activity tab; confirm the word on screen.
- The provenance panel opens from a control titled Why this value (provenance-panel.tsx); the Lineage trace section appears where withLineage is set (contact page confirmed). Confirm it is also on the company page before showing it there.
- Saved views: the inventory says agent changes go through approval. Confirm the console control that saves a view (the views route exists) and its label before recording; the narration does not name a button.
- Marking a deal lost asks for a reason (loss-reason-dialog.tsx exists). Confirm on the live board.
- The relationship line on a company page (account.relationship, we know them) comes from the inventory; confirm the wording on the page.
- Deal types in your words: Settings > Money > Your words for deals (deal-words-card.tsx confirmed). The deal page buying committee is from the inventory; confirm it is visible on the deal Overview or Contacts tab.
- Records and relationships: contacts link to companies through employment and deals link to contacts with a buying role (deal_contact.buyingRole, employment.buyingRole in the 0.2.5 data model spec). Confirm the Records page shows links.
- Consent tab: channels email, phone, SMS, WhatsApp, LinkedIn; statuses granted, denied, withdrawn, expired, unknown; the history sheet is titled Consent history (consent-panel.tsx).
- Replies and plays creating tasks: a not now reply makes a follow up task thirty days later by default, plays such as renewal runway create tasks. The narration only says plays and replies create tasks.
- Actions, Research and Evidence tab contents: the Actions tab is the per record view of the Actions ledger (Operate > Actions); Research shows briefs from the research agent. The narration also says you can log a note or a call from the page: confirm the composer (activity-composer.tsx) is on the company page in the build you record, or cut that sentence.
- Conversations and AI chat sit in the CRM group (inventory and nav, coordinator ruling); confirm the group in the recorded build, since the m10 spec places Conversations under Operate.
- Mockup data is fake. The hot list reasons in the agent response are invented.
- Rewrite note: the narration says a lineage trace goes down to the contributing records for a stored field value, and a value a person set beats any automatic source. Derived values and metrics are covered honestly in the Ask your data anything clip (partial lineage today).
- Rewrite note: the narration says the agent reads with the caller's permissions and cannot see what the person cannot open. Confirm in the permissions model before voicing.

Next clip: Identity and data quality.