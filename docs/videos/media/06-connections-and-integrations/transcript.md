Through-line: Connect once, and one strip shows what is live, what is missing and why.

# Clip 06: Connections and integrations

## Transcript

### The hook and the promise

Your blueprint ended with a list of what it requires. Plug in what you already use, and GTM OS reads your CRM, your search data and your enrichment. Then it tells you exactly what's still missing.

In this clip you'll connect looot, your CRM, search data and a mail sender. Then you'll read one strip that shows which are live.

### The stakes

Without it, Leo pastes keys into six tool consoles. One key expires, an enrichment call fails quietly, and nobody notices until Mia's numbers look wrong.

Here's the rule. A few core connections are native, and everything else goes through Composio or looot. Secrets are sealed under your master key, shown once, and never pass through a prompt. A connection you add for your organization wins over a key set for the whole instance. That keeps one record of what is live. A bad key shows up as a line, not a quiet gap in Mia's numbers.

### Step one: the Connections page

Step one, the Connections page. In the console: Integrations, then Connections. You get a grid of logos grouped by category. Press the slash key to search by name or category. Then sort the grid. Relevance to my setup is the default, and it's real: a tile ranks first when your readiness says you need it, with a reason like Needed by Outreach. You can also sort A to Z, or Connected first.

Or ask your agent: "What connections do I need, and what is missing". It reads the same readiness the grid uses, and lists what's required and not yet live. Reading is all it does here, because entering a key or clicking an OAuth consent is always your click.

### Step two: looot

Step two, looot. It's the data provider built into GTM OS: find and verify emails and phones, enrich a company or a person, search the web, pull keyword and AI answer data. You pay with one prepaid key, under a small per call cap that your admin sets. Anything above the cap needs a person to approve.

In the console: Connections, looot, then paste your key. Connecting once for your organization is enough, because lookups run on your organization's key and the instance key is only a fallback. Or ask your agent: "Quote enriching these fifty accounts". You get a price, not a charge.

Here's the mechanism. If a provider has an outage, times out or returns a server error, the next provider in the binding is tried. Every attempt is recorded. That can mean two providers were asked for one lookup, and the attempt log says so.

### Step three: your own apps through Composio

Step three, your own apps, through Composio. In the console: Connections, Composio, then Connect Composio. Connect each app until it shows active. Pick your CRM of record: HubSpot, Pipedrive, Zoho, Attio, or Salesforce, which also goes through Composio. Where a tile offers native or via Composio, you choose.

Or ask your agent: "Connect HubSpot through Composio. Then sync HubSpot and show completeness". It hands you a link, because the sign in is yours. Write backs to your CRM stay proposals, and a high risk write needs one approval per record.

### Step four: search and analytics

Step four, search and analytics. Ahrefs comes through Composio. Search Console and GA4 connect in the console under Settings, then Connected accounts, with a Google sign in, or through Composio. Search Console is required for SEO and GEO, and only there. Connect it early, because it keeps only months of history. Or ask your agent: "Is Search Console connected, and which property".

### Step five: a sender

Step five, a sender. The preferred route is a Gmail or Microsoft mailbox, ticked for sending under Connected accounts. Resend works too. Smartlead, Instantly and lemlist connect through Composio, not as native cards. Connecting a sender sends nothing, because Dry Mode stays on and every send is still a logged draft.

### Step six: check your work

Step six, check your work. At the top of Connections, the Needed strip lists what your setup requires, one row each. Every connection reads live, unverified, failed, fixture or not configured. Unverified means a key is saved but never checked, so choose Test now. A failed row shows the reason from the last check. An owner or admin can test, and so can an agent acting for one.

In the terminal: gtm doctor shows the same lines. Advanced move: gtm doctor with the strict flag exits with one when anything you need isn't live, so wire it into your scripts. Or ask your agent: "Test my connections and tell me which ones fail".

One thing to watch. A fixture line means a built in sample response is standing in for a real service. Demo mode says so, and sample data never counts toward your first win. Neither does a model key or a sender key. Only a real data source does. In live mode, a missing key fails with the exact key to set. Real, or a dash with a reason. Never a guess.

Mia signs in to each app. Leo pastes the keys and sets the Search Console property. Either way, the strip tells you when you're done.

### The objection

The skeptic's line: a wall of logos means that many native integrations. It doesn't. A few core connections are native. The rest run through Composio, and each tile says which, so nothing claims more than it is.

### Recap and close

In one pass: Plug in looot, your apps through Composio, search data and a sender. Then read the Needed strip: live, or a dash with a reason.

You now have a CRM, a data provider and search data connected, and a line by line check of what is live. Coming next: skills, the playbooks your agent already knows.

## Ask your agent

- "What connections do I need, and what is missing?" (operation: `instance.readiness`)
- "Quote enriching these 50 accounts." (`enrichment.enrich_accounts` with `estimate: true`)
- "Connect HubSpot through Composio. Then sync HubSpot and show completeness." (`composio.connect`, `crm.sync`, `sync.completeness`)
- "Is Search Console connected, and which property?" (`seo_geo.gsc_properties`)
- "Test my connections and tell me which ones fail." (`connections.test`)

The agent reads and prepares. Entering a key and clicking an OAuth consent stay human clicks.

## Console paths

- Integrations > Connections: logo grid, search box (press / to focus), sort menu (Relevance to my setup, A to Z, Connected first), Needed strip
- Connections > looot: paste the API key
- Connections > Composio > Connect Composio, then connect each app until it shows ACTIVE; pick the CRM of record
- Settings > Connected accounts (Google sign in, feature ticks, Use for org), or Composio for Ahrefs, Search Console and GA4
- Settings > Connected accounts (send feature) for Gmail or Microsoft; Connections for Resend; Composio for Smartlead, Instantly, lemlist
- Connections: Test now or Test again (owner or admin). Terminal: gtm doctor, gtm doctor --strict

Next clip: Skills.
