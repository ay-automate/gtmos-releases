# Ask your data anything, and what it remembers

Clip 14, mixed, about 6 minutes. Ladder level: Build.

## Transcript

Through-line: Every answer has a source, and every reply and call is remembered once.

### The hook and the promise

Each customer is now one record, merged by rules you signed. Ask that clean data a question. What takes a spreadsheet and a week should take one sentence, and the answer should name its sources.

In this clip you'll ask in plain words and share a chat. You'll check what search can find, trace a value, and read the memory of every reply and call.

### The stakes

Mia asks what was agreed on the Northwind renewal. The answer sits in a March call and a reply buried in a thread. Nobody finds both, and the quote goes out wrong. Every answer needs a source, and every reply and call needs to be remembered once.

### First: ask

First, ask. In the console: CRM, AI chat. Ask about your whole organization, or one company, contact or deal. It reads with your permissions, so it never shows what you couldn't open yourself. Your chats are private to you. Anything it proposes to change becomes an approval request that a teammate approves, never you and never the assistant.

Or ask your own agent over MCP: "What did we agree about the Northwind renewal, and which records is that based on". It reads freely and names where each answer came from. Advanced move: always add that last clause, so you can open the sources and check.

Share creates a read only link to one conversation, handy for showing a colleague how you got an answer. Anyone with the link can read it, so treat it like a shared document. Revoke ends every link for that chat. Or ask your agent: "Share my Northwind chat read only and give me the link".

### Second: search

Second, search. In the console: Settings, Search index. Records are indexed as they change and swept daily. Each object type shows how many records are indexed, how many have vectors, and the embedding model in use. Reindex now rebuilds it. Without an embedding provider, search still works as plain text, but no vectors are stored.

Or ask your agent: "How much of our organization can be searched by meaning? If vectors are missing, reindex". It reads the coverage, queues the reindex and gives you the job. A reindex rebuilds the index and changes no records.

### Third: lineage and its honest limit

Third, lineage, with its honest limit. On a company, contact or deal, open Why this value. It shows the source, the rule that picked it when sources disagreed, and the observations behind it. For derived values like a score, and for metrics, the trace is partial today. It says the value is derived instead of pretending to a full chain.

Or ask your agent: "Where did the employee count on Northwind come from". It names the rule and the observations. For a derived value it says what it can show, so you never mistake a summary for a full chain.

### Fourth: replies, remembered once

Now the memory. In the console: CRM, Conversations. Every inbound reply is stored once, whatever the channel. It's linked to the person, company and deal, and labeled. The defaults are interested, not now, objection, referral, wrong person, unsubscribe, out of office and bounce. You can define your own. Rules read the reply first, and a person's label always wins.

Each label has effects, applied once. Every reply stops that contact's sequences. Unsubscribe records the opt out, and bounce suppresses the address. Not now creates a follow up task in thirty days. Objection and referral open a question for the owner. If a model or an agent chose a label that suppresses, the effect waits for a person.

Or ask your agent: "Show this week's replies labeled objection or referral, and what happened after each". It reads the labels and the effect log. Any next action it proposes waits for a person.

### Fifth: calls

Fifth, calls. Transcripts arrive from a recorder connected through Composio, pulled every six hours, or from a paste, an upload or an agent. Each becomes one record on the timeline, linked to the person, company, deal and meeting. It's split at speaker turns and indexed, so search and your agent can recall what was said.

Transcripts follow visibility: organization, team or private. A hidden linked record hides them too. When a person is erased, their name is replaced and their speaker lines and email addresses are redacted. Lines with no speaker label can't be attributed, so they stay.

Or ask your agent: "Add this call transcript to Northwind, then tell me what the buyer said about price". The answer points at the place in the call.

### Last: coverage

Last, coverage. In the console: CRM, Conversations, Coverage. Each source shows whether it's connected, its records synced, and when it last synced. It also shows the share of your accounts it covers, over ninety days by default. Or ask your agent: "Which of our sources cover the fewest accounts".

### The objection

The pushback: an assistant that reads everything will leak, or invent. It reads with your permissions, so it can't show what you can't open. Each answer names the records behind it. The assistant can't write, because anything it proposes waits for a teammate. And where it can't trace a value, it says so.

### Recap and close

The short version: Ask in plain words, and ask for the sources. Search by meaning, and trace a value as far as the trace goes. Replies and calls are stored once and remembered. Every answer has a source.

You can ask in plain words, trace a value, and trust what your organization remembers. Open AI chat and ask your first question, with its sources. Up next, definitions as code, where your rules become signed config.

## Where to click

- CRM > AI chat: ask, attach a file, rate a reply, share read only (Share, Revoke)
- /shared/chat/<token>: the public read only view of a shared chat
- Settings > Search index: records indexed and with vectors, embedding model, Reindex now
- Any field > Why this value, then Lineage trace
- CRM > Conversations: tabs Replies, Calls, Coverage, Labels
- Conversations > Replies: relabel a reply, see its effect log
- Conversations > Calls: Add transcript, Sync calls

## Ask your agent

Prompt:

> What did we agree about the Northwind renewal, and which records is that based on?

What you should see, in shape:

- Agreed: annual billing, renewal quote by Friday.
- Sources: the renewal deal, the call transcript from March 4, and a reply labeled interested.
- Nothing was changed.

Prompt:

> Share my Northwind chat read only and give me the link.

What you should see, in shape:

- Read only link created for this conversation.
- Revoke it any time from the chat.

Prompt:

> How much of our organization can be searched by meaning? If vectors are missing, reindex.

What you should see, in shape:

- Companies: all indexed, all with vectors. Contacts: all indexed, some vectors pending.
- Reindex queued, job 9f3c.

Prompt:

> Where did the employee count on Northwind come from?

What you should see, in shape:

- 240, set by an enrichment provider six days ago. Rule: most trusted source.
- Older value: 200 from the CRM sync, not used.
- For a derived value I can show the definition and its evidence, not a full field by field trace.

Prompt:

> Show this week's replies labeled objection or referral, and what happened after each.

What you should see, in shape:

- 5 replies: 3 objection, 2 referral.
- Each stopped that contact's sequences. Objections opened a question for the owner.
- Referrals raised a signal. Proposed next actions are waiting for approval.

Prompt:

> Add this call transcript to Northwind, then tell me what the buyer said about price.

What you should see, in shape:

- Transcript added, linked to Northwind and the renewal deal, indexed.
- On price: the buyer asked for annual billing. See the twelve minute mark.

Prompt:

> Which of our sources cover the fewest accounts?

What you should see, in shape:

- Call recorder: not connected, covers none.
- Web forms: 18 percent of accounts, last 90 days.
- Mailbox covers the most: 62 percent.

Example responses are simplified and use fake data. Anything the assistant or the agent proposes to change waits for a person other than the proposer. Lineage for derived and metric values is partial today, and the agent will say so.

## To verify before recording

- Lineage honesty: the lineage.trace description says derived and metric values are stubbed honestly, and the release notes list real lineage for derived and metric values as next release. The narration says the trace is partial today and names no future date. Re-check docs/release-notes/0.2.5.md wording before recording.
- Chat sharing: chat.share.create gives a read only link and chat.share.revoke ends every link; deleting a chat revokes its links (operations.md). The narration says anyone with the link can read it. Confirm the public page /shared/chat/<token> does not require sign-in on the recorded build, and confirm the button labels (the page shows a Share icon and a toast Read only share link copied).
- Whether an agent over MCP may call chat.share.create on the user's own conversation (class D, caller's own conversations). The agent scene for sharing is written that way; if an agent key cannot, cut that sentence and its prompt.
- AI chat attachments: text, CSV and TSV, JSON, PDF, Word, Excel and images, up to ten megabytes each (chat.attachment.upload). The narration names the kinds, not the size.
- Search index page: per type indexed and with vectors, embedding model, Reindex now, and without an embedding provider search is full text only with no vectors. Which providers can embed: OpenAI native; the inventory says docs disagree on Gemini embeddings and it is UNVERIFIED, so no provider is named on screen or in speech.
- Reply labels shipped as defaults when no signed definition exists: interested, not now (follow up task in thirty days), objection (open ask), referral (open ask plus a signal), wrong person, unsubscribe, out of office, bounce. Confirm on the Labels tab that these are the labels shown, and that thirty days is still the default.
- Classification: rules first, then the model through the model gateway only when rules are under the minimum confidence and model assist is on; a person's label always wins; suppressing effects chosen by a model or agent wait for a person (m10-memory spec). Confirm the held wording in the effect log.
- Out of office stops sequences like every reply (no pause mechanism): not stated in narration; do not imply a pause.
- Call transcripts: recorder sync through Composio on a six hour pull (transcripts.sync description). No recorder is named in the narration or on screen because Fireflies, Gong, Zoom and Fathom depth differs and Gong is listed as not yet a native catalog card. Confirm the Add transcript and Sync calls buttons on the Calls tab.
- Redaction text comes from the m10 spec for a person erase: participant becomes erased, speaker lines and email addresses in the text are redacted, the transcript is re-chunked, unattributed lines stay. Confirm the exact participant placeholder before showing it on screen.
- Coverage tab: per source connected or not, records synced, last sync, share of accounts covered, default window ninety days, members count only accounts they can see (m10 spec). Confirm the tab names Replies, Calls, Coverage, Labels and which nav group holds Conversations Coordinator ruling: Conversations stays under CRM (inventory and nav); the m10 spec says Operate, so confirm in the recorded build.
- Fake replies, counts, chunk numbers and job ids in mockups and responses are invented.
- Rewrite note: the sample prompt now says organization instead of workspace (How much of our organization can be searched by meaning? If vectors are missing, reindex).
- Rewrite note: the narration says the assistant can name the records behind each answer and reads with the caller's permissions. Confirm the sources line appears in the chat answer on the recording build.

Next clip: Definitions as code.