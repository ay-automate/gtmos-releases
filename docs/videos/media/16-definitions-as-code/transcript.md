# Definitions as code

Clip 16, mixed, about 5 minutes. Ladder level: Build.

## Transcript

Through-line: Nothing reaches an engine until two different people have put their name to it.

### The hook and the promise

Last clip, every answer had a source. This clip, every rule behind the engines gets a signature. A rule that changes who you contact should never rest on one person's judgment. Here it can't. By the end you'll take a definition from draft to signed, with two people on the record.

### The stakes

Leo tightens a suppression rule in the rush before quarter end. By the forecast call, Mia's best accounts are quietly excluded, and nobody can say who changed it or when. Nothing reaches an engine until two different people have put their name to it.

### First: what a definition is

First, what a definition is. It's a piece of your go to market written down so the system can read it: who you target, how you score, what your brand may say, who is never contacted. Definitions as code means three things. They're scoped to your organization, versioned, and signed. Engines read them at run time, and only the signed version counts. An unsigned draft is ignored, and the engine falls back to its default.

The kinds, in plain terms. Segments and personas say who you sell to. Scoring models and the buying committee model say who fits. Brand voice, suppression rules and a compliance policy say what you may say, and to whom. Lanes, sequences and plays say how outreach runs. Journeys, stage maps and money say what your numbers mean. The generated reference in your docs folder lists every kind with its fields.

### Second: the draft

Second, the draft, in a ChangeSet: a bundle of proposed changes reviewed as one unit. In the console, edit a definition on its settings page, like Journeys, Money or Proof library, or in Environments. From the command line, write the files, then run gtm plan to preview the difference against what's live. Plan writes nothing.

### Third: approval

Third, approval. Run gtm apply with the environment dev, and it proposes the ChangeSet. Nothing changes yet. A person who isn't the proposer opens the approval card in Approvals. The impact preview says what would change and for whom. Then they approve or reject. The agent that drafted it can never approve it, and neither can the person that agent works for.

### Fourth: the signature

Fourth, the signature. An approved ChangeSet puts the definition in dev, but engines still don't trust it. Propose it for signing, in Environments or with gtm definition propose for signing. Then a person signs. The signer can't be the proposer, nor the person behind a proposing agent. Pro move: gtm definition sign all, with the environment dev, signs everything proposed at once. Signing is human only.

Here's the same flow with a team. Leo drafts the stricter rule and runs plan. Orbit computes the impact. Sophia reads the card, sees the accounts it would suppress, and approves. Leo proposes it for signing, and Mia signs, because she didn't propose it. No one person does every step.

Why two people? A rule that changes who you contact is a business decision. Every change is a new version, so you can see what changed, when, and who signed it. Every step is on the audit log. To go back, gtm rollback proposes returning a definition to an earlier version. That proposal needs a second person too.

Or ask your agent: "Draft a stricter suppression rule for competitors, validate it, show the impact preview and propose it. Do not approve or sign anything". It reports the approval and stops, because approving and signing aren't its to do.

### Fifth: two checks

Fifth, two checks keep it honest. Environments shows a banner when definitions sit in dev and aren't live. And gtm check compares environments and exits non zero on drift, so it works as a gate in C I. Or ask your agent: "What is in dev and not live".

One boundary to know. Environments are named places: dev, staging and production. A change lands in the environment it was proposed for, not the one you're viewing. Real customer facing effects outside production are recorded, not sent. Promoting and rolling back is the clip called Environments: dev, staging and production.

### The objection

The objection: two people on every rule change will slow us down. It's two people per rule, not per message. A draft sits harmlessly in dev, because engines ignore it until it's signed. Sign all clears a batch in one command. Your definitions, signed once, and every engine follows them.

### Recap and close

Keep these: Draft and preview the impact. A different person approves. A person who didn't propose it signs. Nothing reaches an engine until two different people have put their name to it.

You can now take any rule from idea to signed config, with every step on the record. Run gtm check on your own organization today. Next up: your ICP and scoring model, the first definition worth drafting.

## Where to click

- CRM > Environments: drift banner, plan diffs, propose for signing, Sign
- Settings pages that edit definitions: Journeys, Money, Proof library, Brand and compliance
- Approvals: the approval card with the impact preview (a different person approves)
- Settings > Audit log: every step is on the record

## Commands

```
gtm plan
gtm apply --env dev
gtm definition propose-for-signing <kind>/<key> --env dev
gtm definition sign-all --env dev
gtm check
```

## Ask your agent

Prompt:

> Draft a stricter suppression rule for competitors, validate it, show the impact preview and propose it. Do not approve or sign anything.

What you should see, in shape:

- ChangeSet valid. Impact: 14 accounts would be suppressed.
- Approval ap_91c7 created. Waiting for a person other than you.
- Signing is human only: open Environments and press Sign.

Prompt:

> What is in dev and not live?

What you should see, in shape:

- 5 definitions are in dev and not live: 3 signed, 2 draft.
- Promoting the signed ones takes one approval. See Environments.

Example responses are simplified and use fake data. The agent can draft, validate, preview and propose. Approving and signing stay with people.
- Rewrite note: the narration says an engine uses the signed version in the call's environment and ignores an unsigned draft, falling back to its default (inventory section 11). Confirm on a draft-only definition.
- Rewrite note: the narration says gtm plan writes nothing and gtm check exits non zero on drift (previous script). Confirm both on the published CLI.
- Rewrite note: the narration says the audit log records every step and a rollback proposal needs a second person (previous script). Confirm the audit log wording.

Next clip: Your ICP and scoring model.