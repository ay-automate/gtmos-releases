Through-line: What goes live is what you approved, and you can take it back.

# Clip 26: SEO and GEO

## Transcript

### The hook and the promise

Every email is grounded and approved by a second person. Now the same rules govern your website. One engine audits your pages, watches what AI answers say about you, and ships the fixes. A person approves every change to your site.

By the end you'll read the audits and the visibility views, turn keywords into briefs, and queue a publish you can undo. Search Console is required for this engine, and for this engine only.

### The stakes

Mia's team publishes, then guesses. Which pages slipped, which questions the answer engines now answer without citing you, which two posts compete for one query. Search and AI answers are two surfaces. Nobody has time to watch both.

### Audits and visibility

First, the audit. Tracked pages are audited daily: crawl, on page checks, schema, GEO readiness, and the indexed verdict from Google's URL inspection. Findings land in the Fix queue, ranked. In the console: Engines, SEO and GEO, Pages and Fix queue. Or ask your agent: "What is in the fix queue?"

Second, visibility. GEO tracks the prompts you care about across the main answer engines. It records who gets cited, your domain or a competitor. Alerts fire when that changes. GEO readiness scores whether a page is built to be quoted. Where data is missing, the tile says why instead of showing a zero. In the console: the Visibility and GEO tabs. Or ask your agent: "How visible are we in AI answers?"

### Keywords, clusters, content

Third, keywords. They come from Search Console queries where you already rank just below the top, plus looot and Ahrefs when you connect them. Search Console is the one connection this engine can't run without. Connect it once under Settings, Connected accounts, and gtm doctor flags it if it's missing. Or ask your agent: "Which keywords are close to page one?"

Clusters group keywords by the search results they share. Two queries that return the same pages belong to one topic. Each cluster gets an intent, a funnel stage and a pillar candidate, and shows coverage as covered, weak or a gap. It also flags cannibalization: two of your pages competing for one topic. Ask your agent: "Build topic clusters".

Fourth, the content factory. An idea becomes a brief, a draft, a quality check and an approval. Pro move: brief per cluster, not per keyword, so your own posts never compete. The claims gate runs on the draft. Every statistic, result or named customer must match active proof, and a customer whose proof isn't public is never named. Ask your agent: "Draft the brief for the pricing cluster".

### Publish

Now the publish, which is a proposal. In the console: Engines, SEO and GEO, Publish queue, then Approvals. The change you approve is bound to the exact payload, the body of the draft, so what goes live is what you read. The claims gate and brand safety run again when it's published. A publish can be undone, and the undo is a proposal too. It reaches your site through a signed webhook or a connected content system. In Dry Mode it stays a logged draft. Or ask your agent: "Propose publishing the approved draft for the pricing cluster".

Content doesn't stay good. In the console: the Refresh calendar. A page is refresh due when clicks fall, rank drops, an AI citation is lost, or the page ages. You set the thresholds. A daily watch agent reads the results each morning and tells you what changed. Or ask your agent: "Which pages need a refresh?"

### The dashboard and how it improves

Now the dashboard. The overview shows organic clicks, average position, GEO readiness, tracked pages, AI share of voice and citation rate. It also credits visits from AI assistants to this engine. A tile with no data gives the reason. Or ask: "How is SEO and GEO doing this month?"

It improves from results. A page that loses clicks or a citation becomes refresh due. The content refresh play turns it into a brief and a task. To customize, set your tracked pages and prompts, the Search Console property, the content target, refresh thresholds, voice and proof. Edits to any of these go through a ChangeSet that a different person signs.

### Handoffs and limits

SEO and GEO leans on the proof library and the claims gate. It hands briefs to Studio and the content refresh play, and it credits visits from AI answers to this engine in attribution.

The honest edge, built or not. Publishing straight to Webflow or WordPress.com hasn't been tested against real accounts. Treat it as optional and try a staging site first. Automatic fixes for gaps in AI answers, and a link graph, aren't built yet.

### The objection

The objection: an agent that can publish to my site is a liability. It can't publish alone. A publish is a proposal that a different person approves. The approval is bound to the exact payload, and the claims gate runs again when it's published. If the proof expires in between, the publish fails.

### Recap and close

Keep these: Audit daily, track what AI answers cite, and draft behind a claims gate. What goes live is what you approved, and you can take it back.

Your pages are audited daily, your AI visibility is tracked, and every publish is checked, approved and undoable. Read the top three items in the Fix queue. The next clip is Performance ads, where the same rule guards your budget.

## Ask your agent

- "What is in the fix queue?"
- "How visible are we in AI answers?"
- "Which keywords are close to page one?"
- "Build topic clusters."
- "Draft the brief for the pricing cluster."
- "Propose publishing the approved draft for the pricing cluster."
- "Which pages need a refresh?"

The agent drafts and proposes, and reports an approval id for any publish or undo. A different person approves in the console. Webflow and WordPress.com publishing is not demonstrated live in this clip.

Next clip: Performance ads.

## To verify before recording

- Tab names on the engine page (Overview, Visibility, GEO, Keywords, Fix queue, Publish queue, Refresh calendar, Settings, Pages) come from the inventory; confirm against the build before a product capture.
- Console route /org/<orgId>/seo-geo exists on main; the content factory screen and its route are not confirmed.
- Search Console is connected under Settings > Connected accounts and flagged by gtm doctor as a required check for this engine: confirm both lines and that orgs without the SEO engine are not asked for it.
- Answer engines tracked: the inventory names ChatGPT, Perplexity, Gemini, Copilot and Google AI Overview; the narration says "the main answer engines" to avoid a list that goes stale.
- Which op backs "How visible are we in AI answers" (seo_geo.get_visibility assumed) and "Which keywords are close to page one" (seo_geo.keyword_opportunities assumed): confirm the wording of their results.
- Publish path wording: "a signed webhook or a connected content system". The Webflow and WordPress.com paths are unverified against real accounts and must not be shown live. Confirm the signed webhook path is described the same way in the product docs.
- Per engine Dry or Live for SEO and GEO publishing: confirm the label in Settings > Safety.
- Refresh due thresholds (clicks, rank, lost citation, age) are org settings: confirm where they live (Settings tab on the engine page assumed).
- GEO gap fixes and the link graph are deferred, so the clip lists them as not built yet.
- Depth claims used: the publish approval is bound to the exact body (hash) of the approved draft; the claims gate and brand safety run again at execute; the undo is itself a proposal; clusters group keywords by shared search results (FEATURE-INVENTORY 12.5).
- The objection says that if proof expires between approval and publish the publish fails. The inventory states the claims gate re-runs at execute; confirm the failure behaviour on a publish (it is documented for sends in the proof library) before recording.
- Pro move (brief per cluster, not per keyword) is a sequencing tip derived from cannibalization detection; it makes no product claim beyond that.
