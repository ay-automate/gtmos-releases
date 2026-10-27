# Sync note: public docs at 0.2.5 vs the GTM-OS sources

The public pages `docs/user-guide.html` and `docs/product-documentation.html` were edited here, not in
GTM-OS (`GTM-OS-USER-GUIDE.html`, `GTM-OS-SYSTEM-DOCUMENTATION.html`). To sync later, diff each
public page against its source (`git diff fadf58b -- docs/user-guide.html`) and port the changes.

## user-guide.html
- Intro: release 0.2.5 instead of a commit hash; eight engines in the console; Dry-first rule.
- Nav: new entries Skills/subagents/agents, Setup wizard, First wins and nudges, Dry Mode and guardrails,
  Proof library and claims, Self-host on a server, Security defaults.
- Quickstart: ports local-only note, setup wizard alongside /build-gtm-system, first-win pointer.
- New cards: skills-agents, wizard, first-win, dry-mode, proof, selfhost, security.
- Rewritten: Upgrade (CLI first, --check, --channel stable, pinned install rule, rollback, data never
  restored over live, start points, checklist). Not built yet (now "Known limitations", honest lists).
- Edited: Connections page (grid, search, sort), LinkedIn (sends via Unipile, approval path), CSV import
  (company column), engines (Score learning, Enrichment freshness, Outreach sequences and claims, Merges,
  SEO publishing, Ads allocator; new Routing, Plays, Attribution, Signals bullets), Approvals, Environments
  ("Not applied (dev)"), Packages (engine app updates), troubleshooting rows, glossary.
- Removed as stale: 7-engine wording, "LinkedIn human-sent only", "no Signals/Enrichment page",
  "no dashboards", unverifiable "no org-wide spend budget" and "market-events" lines, 1,000-row import line.
- Cosmetic: brand mark and step numbers use dark ink on ember (contrast).

## product-documentation.html
- Version strings (header, TOC note, delivery, setup example, footer) to 0.2.5; pills now 8 engines,
  670+ operations, 31 definition kinds, 41 packages (counts from the generated CLI reference).
- New: "Self-hosting and upgrading" subsection (bind address, reverse proxy, upgrade path, operator
  settings), Dry Mode per engine and guardrails, "Proof library and the claims gate".
- Engines: updated Enrichment, Score, Routing/Plays, Outreach, Merges, SEO, Ads; flow diagram claims check.
- Integrations: Connections page, OpenRouter, Unipile wording. Customize: org agents, harness counts
  (107 skills, 11 + 11 subagents, 11 guides, version stamps). Security: four new tiles. Glossary additions.
- "Honest limits in 0.2.2" replaced by "Honest limits in 0.2.5" plus "Needs a live check".
- Mermaid is now served from `assets/vendor/mermaid.min.js` (was a jsdelivr CDN request).
- Cosmetic: contrast fixes (brand mark, hero em, dark-mode ok and ember ink).

## Source discrepancy to resolve
`docs/SELF-HOST.md` in the product repo labels the local-only ports change "0.2.6"; the 0.2.5 release
notes and this site say 0.2.5. Fix SELF-HOST.md.
