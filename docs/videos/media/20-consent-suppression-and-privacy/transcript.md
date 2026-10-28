Through-line: An agent can take consent away. Only a person can give it.

# Consent, suppression and privacy

## Transcript

### The hook and the promise

Every claim now meets a gate that reads your proof. The next gate asks whether you may write to this person at all. One withdrawn consent, and every engine and every agent stops. No spreadsheet of who said what.

By the end you'll record consent per channel, write suppression rules, and erase a person with proof. Retention and buying roles close it out.

### The stakes

Sophia gets an erasure request. Weeks later somebody is still hunting for copies of that person, and nobody can prove the hunt ended. Set the rules once, and every engine and agent follows them.

### Consent per channel

First, consent per channel, because a send needs a yes you can show. In the console: CRM, Contacts, open a contact, Consent tab. You'll see a line each for email, phone, S M S, WhatsApp and LinkedIn. Each has a status, a legal basis such as consent or legitimate interest, a source, proof and an expiry. The history only grows, so every change shows who made it.

Now how it blocks. Withdrawn, denied and expired stop a send in every organization, and in G D P R mode a missing legal basis stops it too. The check reads every record for that channel, and the strictest one wins, whatever its source or purpose. A withdrawal for all purposes beats a grant for one. It runs when a send is proposed and again when it's sent, for sequences, LinkedIn steps, plays and agents alike.

Or ask your agent: "Can we email Priya Shah, and on what basis? What about LinkedIn?" You get what's allowed right now, per channel, and why. Here's the trap. An agent can record a withdrawal or a refusal. It can never record a grant. Only a person says yes on someone's behalf.

### G D P R mode

Second, G D P R mode, the switch that turns a missing basis into a stop. In the console: Settings, Brand and compliance. Owners and admins flip it, and only a person can. While it's on, no engine or agent contacts or enriches someone until a lawful basis is recorded for that channel. New organizations start with it on. Existing ones stay off until an owner decides.

### Suppression rules

Third, suppression rules, the people your engines must never contact. In the console: Setup, Rules and who approves what. They cover competitors, existing customers, and a do not contact list of emails and whole domains, and every send is checked against them. Setup drafts them from your documents, and a second person approves. Owners and admins see the list, everyone else sees counts, and unsubscribes and bounces add themselves.

Or ask your agent: "Add acme-rival.com to our do not contact rules". It proposes the change and returns an approval number. Nothing moves until another owner or admin approves, and the approval is bound to the exact payload, so what they approve is what lands.

### Erase and retention

Fourth, erase, the answer to a right to erasure request. It deletes the person's record, identity keys, search entries, and related rows such as messages and timeline, then redacts the observations behind them. Then it plants a guard, so nothing quietly ingests them again. The guard is a hash, computed before the identity keys are deleted, so it recognizes the person without remembering them. The erase, the log and the guard commit together or not at all. There is no undo. The erasure log keeps counts, hashes, who and when.

Run it through your agent, and start with a dry run: "Dry run an erasure for Priya Shah and show me what would be deleted". It lists the impact and changes nothing. Pro move: read that list before you decide. The erase itself is deliberate and permanent. Afterwards, ask for the erasure log. That's your proof.

Fifth, retention, how long raw observations live, set by class: ephemeral, standard or sensitive. A sweep redacts older ones and keeps the hash and the source locator. Zero keeps them forever, and archived records have their own retention in Settings, C R M settings. Or ask your agent: "What retention policy do we have for each class?"

### Buying roles

Last, buying roles, so every engine means the same thing by champion. In the console: Settings, Brand and compliance, Buying roles. The defaults are champion, economic buyer, decision maker, influencer, user, blocker and unknown, and you can add your own. Common spellings, such as budget holder, are normalized, so old data keeps its meaning without a rewrite. Or ask your agent: "Which buying roles do we use, and who is the champion on the Northwind renewal?"

### The objection

Someone on your team will say: an agent with access to my contacts could grant itself consent. It can't. Agents can only tighten consent, by recording a withdrawal or a refusal. A grant needs a person. And the gate reads the stored record when the send executes, so a claim in a chat changes nothing.

### Recap and close

Say it back: Consent is recorded per channel and checked twice. Suppression rules and G D P R mode block the rest. Erase comes with a dry run and proof. An agent can take consent away. Only a person can give it.

Compliance now runs without anyone remembering it. Open one contact and read its Consent tab. Next is Score: the engine that ranks every account and shows its reasons.

## Where to click

- CRM > Contacts > a contact > Consent: per channel status, legal basis, source, expiry, Consent history
- Settings > Brand & compliance: GDPR mode, buying roles, brand safety
- Setup > Rules and who approves what: setup drafts the suppression rules; later changes are a ChangeSet in Approvals that a second person approves
- Erase and retention: operations privacy.erase, privacy.list_erasures, retention.set_policy (console path to confirm)
- Settings > CRM settings: archive retention

## Ask your agent

Prompt:

> Can we email Priya Shah, and on what basis? What about LinkedIn?

What you should see, in shape:

- Email: allowed. Granted, legitimate interest, source form, expires in March.
- LinkedIn: blocked. No record, and GDPR mode needs a lawful basis.
- I can record a withdrawal if she asks. I cannot record a grant.

Prompt:

> Add acme-rival.com to our do not contact rules.

What you should see, in shape:

- Proposed a change to the suppression rules: adds the domain acme-rival.com.
- Approval ap_5b21, waiting for another owner or admin.

Prompt:

> Dry run an erasure for Priya Shah and show me what would be deleted.

What you should see, in shape:

- Dry run, nothing changed. Would delete: 1 contact, 2 employment links, 14 timeline items, 3 messages.
- Would redact the observations behind them and set a re-ingest guard.
- This cannot be undone. Say erase when you are sure.

Prompt:

> What retention policy do we have for each class?

What you should see, in shape:

- Ephemeral: 30 days. Standard: 365 days. Sensitive: 90 days.
- Older observations are redacted; hashes are kept.

Prompt:

> Which buying roles do we use, and who is the champion on the Northwind renewal?

What you should see, in shape:

- Roles: the defaults plus technical evaluator.
- Champion on the Northwind renewal: Priya Shah. Economic buyer: not identified yet.

Example responses are simplified and use fake data. An agent can tighten consent (record a withdrawal or a refusal) but never grant it. Erase has no undo, so always ask for the dry run first.

## To verify before recording

- Erase has no console button that I could find on origin/main (no privacy.erase reference under apps/console). The scenes show it through the agent and the operation. Coordinator ruling: the erase scenes stay agent-only. If a console path for erase exists in the build you record, add it to the erase scene and to Where to click.
- Erase approval: the operations reference says Approval no, but the descriptor advertises destructive policy facts so an organization's gate policy can force an approval, and the call is human initiated. The narration does not claim an approval step. Confirm what actually happens for an agent key (it lists agent keys with record write and engine configure as allowed).
- Erase scope text (record, provenance, identity and blocking keys, search index, acquired field cache, employment, deal links, signals, opt outs, messages, timeline, observation redaction, re-ingest guard, no PII in the erasure log) comes from operations.md and privacy-erase.ts. Confirm the full list before reading it on screen.
- Unsuppress removes only the re-ingest guard and restores nothing (privacy-operations.ts). It is mentioned once; confirm it is worth the seconds.
- Retention: retention.set_policy takes class ephemeral, standard or sensitive and a maximum age in days; zero keeps forever; the sweep redacts the payload and keeps the hash and the source locator. Confirm the console location, if any (the inventory says Settings > Brand & compliance or CRM settings; only the archive retention days field is confirmed in CRM settings).
- GDPR mode: on for new organizations, off for organizations that existed before, human only switch for owners and admins (gdpr-card.tsx and the m09 spec). Enrichment skips a contact with no lawful basis while it is on.
- Consent rules: withdrawn, denied, expired or a past expiry always block; in GDPR mode a missing lawful basis also blocks; the check runs at propose and at execute for sequences, LinkedIn, plays and agents (m09 spec). Agents may only tighten consent (consent.set).
- Consent sources in the UI: form, double opt in, import, CRM sync, manual, inbound reply, event, contract (consent-panel.tsx). A grant on the consent basis needs a proof reference.
- Suppression rules: definition.suppression_rule; setup publishes competitors, existing customers and do not contact lists in one ChangeSet; owners and admins see the list, others see counts (m19 spec). Unsubscribes and bounces create suppressions through reply label effects. There is no Definitions page in the console: confirm where, outside setup, a rule is reviewed (the Approvals ChangeSet, the Environments page, the agent or gtm plan and gtm apply).
- Retention example values in the mockup and agent response (thirty, three hundred sixty five and ninety days) are invented. No default is claimed.
- Buying roles: champion, economic buyer, decision maker, influencer, user, blocker, unknown; alias normalization; extending needs an owner or admin human (buying_roles.set). Confirm the Buying roles card in Settings > Brand & compliance.
- Fake contact names, dates, counts and approval ids in mockups and responses are invented.
- Depth claims re-verified on origin/main: the consent verdict (kernel/core/src/consent.ts, evaluateConsent) refuses on any withdrawn, denied or expired record from any source, and a withdrawal for all purposes stops a purpose scoped grant; the erase (kernel/data-plane/src/privacy/privacy-erase.ts) derives the suppression hash from the authoritative keys before the cascade deletes them, and the cascade, the erasure record and the re-ingest guard commit in one org scoped transaction.
- The erase scenes say only "run it through your agent" and make no claim about a console control, following the coordinator ruling that erase stays agent only unless a console path exists in the recorded build.
- The objection says the gate reads the stored record when the send executes, so a claim in a chat changes nothing; this follows from the check running at propose and execute against stored consent records.

Next clip: Score.
