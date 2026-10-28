Through-line: Add to GTM OS by definition, never by fork, and every update merges instead of overwriting.

# Clip 40: Apps, packages and extending GTM OS

## Transcript

### The hook and the promise

Month one was a loop: read, change one definition, sign, read again. Now change what GTM OS itself looks like. Generate a screen from your data, package your method for clients, and take updates that never overwrite what your team changed.

In this clip you'll generate a screen and know the three kinds of package. You'll also take an update through a three way merge.

### The stakes

Leo's agency builds the same dashboards for every client. Then a release lands, and the copy one client edited breaks. Fork, and you fall behind. Overwrite, and you lose their changes. GTM OS does neither.

### First: every screen is an app

First, every screen in the console, from Mission Control to the engine pages, is an app. It's a definition, with no custom code. The framework has view types: record page, queue, table, dashboard, form, wizard, approval card, list and spotlight. Every button is an operation from the same registry your agent uses, so a screen can never do what an agent couldn't. And brand tokens restyle all of it at once. In the console: Apps, All apps.

### Second: generate a screen

Second, generate one. gtm app generate scaffolds a screen from an object type and the live operation registry. Pass a kind: record page, queue, table or dashboard. You get an app definition to review and edit. It goes in as a ChangeSet like any other, so a different person approves it. Or ask your agent: "Create a queue screen for accounts that need review".

### Third: packages and trust

Third, packages. Everything installable is a package: engines, screens, connectors, modules and blueprints. There are three tiers. Declarative packages carry definitions and no code, and they're the default choice. Trusted packages run code in process, and sandboxed packages run it in isolation. Both must be signed. An unsigned trusted or sandboxed package is refused at install. In the console: Settings, Packages. Or ask your agent: "What packages are installed".

Now the trust check. A package is signed by the first party key or by a publisher key you've listed as trusted. It declares a permission envelope, the operations it may call, and its writes stay inside it. An egress guard controls what it can reach outside GTM OS.

### Fourth: agency packages

Fourth, agencies package their method. A declarative package of definitions, with parameters per client, installs with one proposal and one approval. And gtm pkg provenance shows which agency package and which version an organization runs. Because it's only definitions, the client can read all of it before approving. Or ask your agent: "Which agency package and version do we run".

### Last: updates that merge

Last, updates arrive without taking over. In the console: Settings, Packages. A card says engine apps have updates and shows what each adds, changes or removes per environment. Only an owner or admin can propose the update, and a second person approves it. It's a three way merge: the version you started from, the new one, and your edited copy. Where they overlap you see both, and you choose Keep mine. Edited copies are never overwritten, and every update is a new config version you can roll back. Or ask your agent: "Do any of our engine apps have updates".

### The objection

Here's the doubt: someone else's code in my stack? Mostly it isn't code. A declarative package is only definitions you can read. Trusted and sandboxed code must be signed, can call only the operations in its envelope, and sits behind an egress guard. And an update to an installed app stays a human decision, because agent keys are refused for it.

Shipped apps get better with each release, and you take them on your schedule. Edit an app in the console or by ChangeSet. Restyle it with brand tokens, or package your changes so another organization can install them. Studio can also draft an app from a sentence and ship it into dev behind approval.

Advanced move: prefer a declarative package over code. It's the easiest for a client to review and the hardest to get wrong. Reach for trusted or sandboxed code only when definitions can't do the job.

Approvals gate every change here. Environments move apps from dev to production. And Upgrading is where new defaults arrive.

### Recap and close

Quick pass: Screens are definitions, packages are signed and reviewable, and updates merge instead of overwriting. Add by definition, never by fork.

Now you can extend GTM OS with screens and packages that are signed, readable and safe to update. Next: Self hosting on a server, your own instance, on your own domain, closed to everything except a proxy.

## Ask your agent

- "Create a queue screen for accounts that need review."
- "What packages are installed?"
- "Which agency package and version do we run?"
- "Do any of our engine apps have updates?"

The agent can read packages and check whether updates exist. Proposing an engine app update is owner or admin only and a different person approves it; agent keys are refused for that operation.

Next clip: Self-hosting on a server.

## To verify before recording

- View type names (record page, queue, table, dashboard, form, wizard, approval card, list, spotlight) and 'every button is a registry operation': from the inventory; confirm the exact spelling in the app definition reference.
- Apps > All apps in the console (route /org/<orgId>/apps exists on main) and BrandKit tokens re-theming: confirm the label and where tokens are edited.
- gtm app generate <objectType> [--kind record_page|queue|table|dashboard]: confirm the object type spelling (the storyboard uses gtm.account) and that the output is a definition applied through a change set.
- Agent op for 'Create a queue screen': config.apply assumed through a change set; confirm the agent path and the approval wording.
- Package tiers: declarative (no code), trusted (in process, signature required), sandboxed (isolated, signature required); an unsigned trusted or sandboxed package is refused at install. Confirmed in guide 06; confirm the console shows the tier.
- Signed publishers: first party key plus GTMOS_TRUSTED_PUBLISHER_KEYS; permission envelope; writes limited to permissions.write (inventory section 11); per package egress guard. The narration says the guard 'controls what it can reach outside GTM OS'. Confirm before claiming more.
- Trust ladder (community, verified, certified) is deliberately not mentioned: it is not verified in the code.
- Agency packages and provenance: gtm pkg provenance; which op backs 'Which agency package and version do we run' (packages.get assumed).
- Engine app updates card in Settings > Packages ('N engine apps have updates'), Propose update, one approval, Keep mine on overlaps, config.rollback to restore. apps.update is owner or admin only and humans only (agent keys refused); apps.update_available is readable by an agent. Confirm labels.
- Studio can ship an app into dev behind approval (CRM > Studio): confirm before showing.
