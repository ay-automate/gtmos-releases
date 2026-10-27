Through-line: Preview writes nothing, matching never creates a company, and re-importing updates instead of duplicating.

# Clip 10: Bring your data in

## Transcript

### The hook and the promise

The first week's scoreboard asked for a real data source on day one. If your book lives in a spreadsheet, this is how it gets in: companies, contacts and deals, linked to each other, in one afternoon.

You'll import a CSV with a company column and read the match report before anything is written. Then you'll shape the organization with custom objects, fields and pipelines.

### The stakes

Leo imports a contact file the usual way. A typo in one column creates a duplicate account, then another, and by month end the duplicates have no author.

Three rules prevent that. Preview writes nothing. Matching never creates a company. And importing again updates what exists, instead of duplicating it.

### Step one: prepare the file

Step one, prepare the file. One header row, one record per line. If you have the company website, include it, because websites are matched first. Keep a copy of the original, so you can always start again.

### Step two: choose and map

Step two, choose and map. In the console: CRM, then Import. There are four steps: choose, map, preview and commit. Choose what you're importing, companies, contacts or deals, then add the file. Committing is for owners and admins by default. An owner can let members commit in the CRM settings.

Map your columns. Each column goes to a field, to a custom field you made, or is left out. For contacts and deals, map one column to Company. GTM OS links each row to an existing company, by website first, then by exact name. It never creates a company for you, so a typo can't spawn a duplicate account.

A yes or no column accepts yes or no, true or false, or one or zero. A number column takes plain numbers. Rows are matched on a key, such as the domain for companies. So importing the file again updates what exists.

### Step three: preview

Step three, preview, where nothing is written yet. Every row is classified as create, update, duplicate or warning. The company card shows three counts: rows that matched, rows that were ambiguous because more than one company fits, and rows that found no company at all.

The problem rows are listed with their file line, and those rows import without a company link. Long lists are shortened, but the counts are exact. Fix the file and preview again. Operator tip: preview a ten row slice first. It costs nothing, because preview writes nothing.

### Step four: commit

Step four, commit. Rows go in batches. A file with a company column goes in batches of two hundred, and the page shows which batch it's on. A large file takes a few minutes, so keep the page open. If one batch fails, the batches already written stay written, and the result shows the real outcome for each row.

The result also counts how many company links were made, already there, or failed. And an import starts nothing. Event plays and agent triggers skip bulk writes by default, so a big file won't fire a first touch for every row.

An import writes only to your own organization and sends nothing outside it. If something lands wrong, archive the record from its page and restore it later. Purging for good needs an approval.

Or ask your agent: "Import contacts.csv into Contacts, link each contact to its company, preview first, and show me which companies did not match". It previews, shows the match counts, and lists the companies that didn't match. You decide what to fix, and it commits when you say so.

### Step five: shape the organization

Step five, shape it to your business. In the console: CRM, then Model. Define a custom object, for example a Partner, with its fields: text, a number, a list of allowed values, or a reference to another object. Validate it, then publish. Publishing is proposed as a ChangeSet. Another owner or admin approves it, so a change to your model is never silent.

For extra fields on companies, contacts and deals: Settings, then Custom fields. Pick the object, name the field, choose a type, and set its options: required, show on record, allow the agent to fill. Fields can be archived and restored, so a wrong turn is reversible.

One honest note. Show in tables and Allow filtering are saved, but the Companies and Contacts lists don't use them yet. Those columns and filters arrive in a later release. Today the field already works in records list filters and for your agent. You can ask for every company where it equals a value.

### Step six: pipelines

Step six, pipelines. In the console: Settings, then Pipelines. Create a deal pipeline and name its stages. Give each stage a category, open, won or lost, and a default win probability. Drag to reorder. The page refuses what would strand deals, such as archiving a stage that still holds open deals. Archived stages and pipelines can be restored.

Everything here has an agent path. Ask your agent: "Add a Partner object with the fields tier and region". It proposes the change and returns an approval number, and you or a teammate approve it in Approvals. Then ask: "Create a deal pipeline called Partnerships with the stages Intro, Active and Signed". It creates them.

### The objection

The worry: one bad file could wreck my CRM. It can't do much. Preview writes nothing, and matching never creates a company. A failed batch doesn't undo the rest, and anything that lands wrong is archived and restored from its record page.

### Recap and close

Run it back: Prepare, map, preview, commit. Then model your business. Preview writes nothing, matching never creates a company, and re-importing never duplicates.

Your records are in, linked to their companies and shaped to your business. Next: your CRM, kept in sync, so the tool you already use stays the record.

## Where to click

- CRM > Import: Choose, Map, Preview, Commit
- CRM > Model: define a custom object, validate, publish
- Settings > Custom fields: fields on companies, contacts and deals
- Settings > Pipelines: deal pipelines and stages
- CRM > Approvals: approve a published model change (a different owner or admin)

## Ask your agent

Prompt:

> Import contacts.csv into Contacts, link each contact to its company, preview first, and show me which companies did not match.

What you should see, in shape:

- Preview, nothing written yet: 412 rows. 380 create, 22 update, 10 warnings.
- Company match: 399 matched, 4 ambiguous, 9 unmatched. The problem rows are listed with their file line.
- Say commit when you are happy with the file.

Prompt:

> Add a Partner object with the fields tier and region.

What you should see, in shape:

- Partner object proposed as a ChangeSet: approval ap_4f2a, waiting for another owner or admin.

Prompt:

> Create a deal pipeline called Partnerships with the stages Intro, Active and Signed.

What you should see, in shape:

- Pipeline Partnerships created with three stages. Signed is categorised as won.

Example responses are simplified and use fake data. An import writes to your own organization and sends nothing outside it.

Next clip: Your CRM, kept in sync.

## To verify before recording

- CRM > Import: four steps Choose, Map, Preview, Commit; commit is owner or admin by default, an owner can allow members in the CRM settings (`crm.settings`, memberBulkWrites).
- Company column: matches accounts by website, then exact name; never creates accounts; lists ambiguous and unmatched rows with the file line; those rows import without a company link; long lists are shortened but counts are exact.
- Cells: yes or no, true or false, 1 or 0 in a yes or no column; numbers in number columns; match key per object (domain for companies) so a re-import updates.
- Commit: company-linked files go in chunks of 200 rows with a progress message ("Working on batch 3 of 9"); a large file takes a few minutes; a failed batch leaves earlier batches written; the result shows per row outcomes and company links made, already there, failed (apps/console/app/lib/gtm/import.ts COMPANY_CHUNK_SIZE = 200).
- Imports start nothing: event plays and agent event triggers skip events from bulk writers (imports, CRM sync, projector, enrichment) unless includeBulkSources is set (kernel/agent-runtime, kernel/config play definition, origin/main).
- Import writes only to your own organization; archive and restore from the record page; purge is a proposal.
- CRM > Model: custom object, validate, publish as a ChangeSet another owner or admin approves; Settings > Custom fields options (required, show on record, allow agent fill); archive and restore.
- Show in tables and Allow filtering are saved but the Companies and Contacts lists do not use them yet (later release); records.list filters and the agent do (plan 12b).
- Settings > Pipelines: stage categories open, won, lost; default win probability; drag to reorder; refuses archiving a stage that holds open deals; restore works.
- Every screen stays a marked mockup ("example, simplified") until the capture script exists.
