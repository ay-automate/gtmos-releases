Through-line: Dev first, then a different person signs, then one promotion.

# Clip 36: Environments: dev, staging and production

## Transcript

### Hook and promise

Your mornings are short, and your ledger explains every line. Now the road a change takes before it reaches that morning. Change anything safely, then promote it with confidence. By the end you'll know where a change lands, what's real there, and how it reaches production with one approval.

### The stakes

Leo edits the scoring model in the last week of a quarter. By the next pipeline review, the Hot list has reshuffled under Mia. Nobody read the new ranking first. Here, that change waits in dev.

### What each environment is for

Every organization has three environments. Dev is where every change lands first: blueprints you apply, definitions you edit, and the plays and apps Studio ships. Staging is where you rehearse. Prod is what your organization actually runs: the runtime, scheduled plays, bindings and the research agent all read prod.

Now the rule behind most surprises. An engine uses the signed version of a definition in the environment the call runs in, and otherwise its built in default. A draft, or one that's only proposed, is ignored. So when a change seems to do nothing, it usually lives in dev, is unsigned, or the call ran somewhere else.

### The switcher and what is real

The switcher in the header shows which environment your console is reading. The gotcha is that a change set runs in the environment it was proposed for, whatever environment you're viewing. Approving a dev change while you look at prod doesn't push it to prod. Or ask your agent: "List the environments and tell me which one you are reading".

Now what's real in each. Config changes apply in their own environment, so a definition you apply to dev is live in dev. Customer facing effects differ. In dev and staging, a send, a CRM write or a publish is recorded, not performed. The approval reads not applied, dev. And only prod fires for real.

### Step one: apply to dev

Step one, apply to dev, so every change starts where it can't hurt. In the console: Environments, or a blueprint's Apply button. On the command line, gtm plan previews, and gtm apply with env dev applies. Or ask your agent: "Apply the outbound blueprint to dev and show me the plan". It becomes a change set, and a different person approves it in Approvals. You can't apply a definition straight to prod, because the system refuses.

### Step two: validate in dev

Step two, validate in dev. Run the engine, then read what it did in the actions ledger, and because effects are recorded, not sent, you can run it freely. Mia checks the ranking against her sense of fit. In the console: switch to dev in the header, then Engines, Score. Or ask your agent to score an account in dev and explain it.

### Step three: sign

Step three, sign, because engines read only signed definitions. Your definitions, signed once. Propose the definitions for signing, and a person who isn't the proposer, or the human behind a proposing agent, signs them. In the console: Environments, Go live, Review and sign all proposed. On the command line, gtm definition sign all with env dev signs everything in one go. Or ask your agent: "Which definitions are waiting for a signature".

### Step four: promote

Step four, promote. The Environments page shows drift as a banner, naming the definitions that are in dev and not live. Open Go live for the plan diff and an impact preview, then choose Promote dev to prod. It's one approval, and the change walks hop by hop, dev to staging to prod, re-checking each item on the way. Anything that changed after approval is skipped, not guessed. On the command line, gtm promote all dev prod does it. Or ask your agent: "Preview promoting everything from dev to prod". Operator tip: add preview first, every time, to see the plan.

Read the plan before you approve it. Each resource lists its version and a top level diff. Some are skipped, each with its reason: an unsigned definition bound for prod, a deprecated version, a per environment package default, or something already live.

### Step five: roll back

Step five, roll back when a change disappoints. It's a proposal like any other, a different person approves, and only that definition changes. In the console: Environments, pick the definition and an earlier version. On the command line, gtm rollback takes the kind, the key and the version to return to. Or ask your agent: "Roll back the scoring model to the previous version".

### Drift, named environments and messages

To catch drift before it bites, gtm check compares environments, in a script or in CI. The Environments banner shows the same thing. Or ask your agent: "What is in dev and not live".

Need another environment? Create a named one, for a client rehearsal, as a proposal that needs an approval. Studio ships into dev by default.

Three messages you'll meet. When it says the source version is draft, sign it first. When it says you proposed this version, a different person signs. And an illegal promotion from prod to dev means promotion only moves upward.

### A typical week

A typical week. On Monday, Leo changes the scoring model in dev and rehearses it in staging with Dry Mode on, while Sophia reads the drafts. On Tuesday the definitions are signed, one approval promotes them, and Mia checks the Hot list. Nothing touched production until Tuesday.

### The objection

The pushback: three environments is process for its own sake. The system enforces it, so nobody has to remember it. You can't apply straight to prod. You can't sign your own proposal. And promotion only moves upward.

### Recap and close

The short version: Change in dev, a different person signs, and one approval promotes it. Roll back one definition when you need to.

So you change anything without touching production, and you can say exactly when it went live. Run gtm check today and see what's in dev. After this comes Tutorial: going live, your first real send, safely.

## Ask your agent

- "List the environments and tell me which one you are reading."
- "What happened to the send I approved in dev?"
- "Apply the outbound blueprint to dev and show me the plan."
- "Score account Example Co. in dev and explain it."
- "Which definitions are waiting for a signature?"
- "Preview promoting everything from dev to prod."
- "Roll back the scoring model to the previous version."
- "What is in dev and not live?"
- "Create an environment called client-rehearsal."

Reads answer directly. Applying, signing, promoting and rolling back are proposals or human steps: the agent reports the approval id, and a different person approves in the console. The agent never signs.

Next clip: Tutorial: going live.

## To verify before recording

- Org Dry Mode versus per engine Dry or Live: the stricter of the two applies; keep wording consistent with the inventory.
- Console rollback flow is only named as Environments in the inventory; confirm the exact control.
- Studio and staging stage props are requested and not delivered (see the storyboard assetNote); compose from prop_toolbox, prop_dry_mode_dome plus prop_levels_ladder, and prop_control_room.
- Config changes (config.apply, config.promote, config.rollback) apply in the environment they were proposed for, whatever environment you are viewing; anything sunk in dev or staging reads Not applied (dev) (plan 12b, re-check against the release build).
- You cannot apply a definition straight to prod (the system refuses); promotion only moves upward; a promotion walks hop by hop dev, staging, prod, re-checking each item, and anything that changed after approval is skipped.
- CLI forms: `gtm plan --from <blueprint>`, `gtm apply --from <blueprint> --env dev`, `gtm definition sign-all --env dev`, `gtm promote --all dev prod --preview`, `gtm rollback <kind> <key> --to-version <n>`, `gtm check`. In narration these are spoken without dashes (sign all, promote all, to version).
- Console: Environments page (drift banner, Go live, Review and sign all proposed, Promote dev to prod, plan diff and impact preview), header environment switcher. The plan lists version and top level diff per resource and skips with reasons (unsigned definition bound for prod, deprecated version, per environment package default, already live).
- Named environments (env.create) are a proposal needing an approval; Studio ships into the studio environment, dev by default.
- Exact message wording (Cannot promote, the source version is draft, not signed; Cannot sign, you proposed this version; Illegal promotion from prod to dev) taken from the earlier verified script; confirm at capture.
