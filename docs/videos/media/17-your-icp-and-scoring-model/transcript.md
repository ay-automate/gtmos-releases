# Your ICP and scoring model

Clip 17, tutorial, about 6 minutes. Ladder level: Build.

## Transcript

Through-line: Define fit once, test it on a real account, read the reasons, and let outcomes improve it.

### The hook and the promise

A rule needs two names before an engine reads it. Now write the rule that matters most, your idea of a good fit. Today it lives in someone's head, so every tool scores it differently.

By the end you'll have a scoring model you can read, test on a real account, and improve with outcomes.

### The stakes

Mia calls Example Logistics a perfect fit. The CRM says tier C, the sequencer says priority, and neither explains itself. Define fit once, test it on a real account, read the reasons, and let outcomes improve it.

### Step one: who you sell to

Step one, who you sell to. A segment is a slice of the market you work, by industry, size or region. A persona is a role you sell to, with the titles that count. Both are definitions, so both are signed and versioned. In the console: Setup, Your definitions, the Pilot scope card. Personas arrive with your blueprint, and change through a ChangeSet.

### Step two: the weights sheet

Step two, the weights sheet, the heart of the model. Each criterion, like industry or company size, carries a weight, and together they make a fit score. Tiers turn scores into Hot, Warm and Cold. Thresholds decide what counts as qualified or needs review. In the console: Setup, Your definitions, the ICP and weights sheet card. It shows a drafted sheet with the evidence behind each suggestion. Edit it, skip it, or approve it.

One habit worth copying: start small. A few criteria you can defend to a sales lead beat a long list you can't. Add one when the Learning section shows evidence for it.

Fit is only half. Intent comes from signals, and a signal loses weight as it ages. A funding round fades slowly, and a page visit fades fast. Hard disqualifiers, like a competitor or a current customer, cap the score. Negative behavior, like an unsubscribe or a hard bounce, pulls it down. That logic is built in, and you tune the weights and thresholds.

### Step three: the buying committee

Step three, the buying committee. Deals are bought by groups, so the committee model says which roles you need, and the score reads that coverage. If the champion or the economic buyer is missing, the verdict says so. Unknown coverage never counts as zero. Customer types say how an enterprise account differs from a self serve one, each with its own journey. Buying roles live in Settings, Brand and compliance. And customer types are a card in setup.

### Step four: draft it from your best customers

Step four, draft it from your best customers. Ask your agent: "Draft an ICP scoring model from our best customers and propose it". It proposes weights with the evidence for each and files a ChangeSet. A different person approves, and someone signs. Until then, engines keep using the signed model, or the default.

### Step five: test it on a real account

Step five, test it on a real account. In the console: Engines, Score. Pick a company and qualify it. The verdict shows which fit criteria matched and which signals counted, with how far each has decayed. It also shows any cap or negative that applied, and committee coverage. The Hot list shows the same reasoning in a why drawer. If a score looks wrong, flag it. A rep flag becomes a learning input.

Or ask your agent: "Preview the rescore, then score account Example Logistics and explain it. Tell me which environment you read". The preview shows how tiers would move, and changes nothing. Watch for this: an unsigned draft is ignored, so test in dev once it's signed there.

One note on Dry Mode. Scoring sends nothing, so it runs in any mode. What Dry Mode holds is what leaves the building: a CRM write back, a routing notification or an outreach message stays a draft until that engine goes live. And scores are only as good as the data under them. On sample data you get sample scores, and gtm doctor tells you what's live.

### Step six: let outcomes improve it

Step six, let outcomes improve it. In the console: Engines, Score, Learning. Each week the engine measures which criteria predicted replies, meetings, opportunities and wins, and proposes a new model version. Weights move only a limited step per run, and only on strong evidence. By default it only reports. A person other than the proposer approves, and then the organization is rescored. A new organization shows insufficient data at first. Or ask your agent: "Propose a scoring update from outcomes".

### The objection

The skeptic's line: a model that rewrites itself will drift where I can't see. It can't. Learning proposes, and a person approves. Weights move a limited step per run. The old version stays in history, and a rollback is one proposal away.

### Recap and close

In one pass: Define who you sell to and the weights that decide fit. Add the committee. Test on a real account, and read the reasons. Then let outcomes propose the next version.

You now have a fit model you can read, test and improve, with two people on every change. Test it on one real account today. After this comes journeys, pipelines and revenue truth.

## Where to click

- Setup > Your definitions: the ICP and weights sheet card, the Pilot scope card (segments), the Customer types card; edit, skip or approve each
- Settings > Brand and compliance: buying roles
- Engines > Score: qualify an account, read the explanation, flag a score, Rescan, Learning section (Run learning now)
- CRM > Hot list: the why drawer
- Personas and the buying committee model arrive with your blueprint and change through a ChangeSet (agent or command line)

## Ask your agent

Prompt:

> Draft an ICP scoring model from our best customers and propose it.

What you should see, in shape:

- Drafted: 5 criteria with weights, each citing the accounts it came from.
- ChangeSet proposed. Approval ap_52de: a different person approves, then sign in Environments.

Prompt:

> Preview the rescore, then score account Example Logistics and explain it. Tell me which environment you read.

What you should see, in shape:

- Rescore preview: tiers would move for 31 accounts. Nothing changed.
- Example Logistics: Hot, 82 of 100. Fit matched. Signal: funding round, 9 days old. Committee: champion found, no economic buyer yet.
- Environment read: prod.

Prompt:

> Propose a scoring update from outcomes.

What you should see, in shape:

- Learning run: insufficient data yet, or a proposed model version with the lift per criterion.
- If proposed: approval ap_77b0, a person other than the proposer approves.

Example responses are simplified and use fake data. The agent proposes; a person approves and signs.
- Rewrite note: the narration says Learning proposes a new model version, weights move a limited step per run on strong evidence, it only reports by default, and a person other than the proposer approves (inventory 12.1 S2/H1). The objection scene adds that the previous version stays in history and a rollback is one proposal away; confirm that rollback applies to scoring_model definitions (gtm rollback kind key).
- Rewrite note: the narration says signal decay differs by signal type, hard disqualifiers cap the score and negative behaviour lowers it, and unknown committee coverage never counts as zero (inventory 12.1). No decay numbers are voiced.

Next clip: Journeys, pipelines and revenue truth.