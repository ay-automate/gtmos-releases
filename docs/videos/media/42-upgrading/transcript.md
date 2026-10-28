Through-line: An upgrade only adds, rehearses on a copy first, and rolls back by swapping images, never by touching your data.

# Clip 42: Upgrading

## Transcript

### The hook and the promise

Last clip your instance went behind its own proxy. Now keep it current without risking what's inside. Upgrade without losing a thing, and know exactly what happened.

By the end you'll upgrade in the right order, know what gets checked first, and know what happens if it fails.

Leo upgrades late one evening, a migration fails halfway, and nobody knows which version is running or what state the data is in. These steps exist so that story never happens.

### First: who runs what, and the CLI

First, who runs what. Before this release, the public images were only 0.2.2 and stable. CLI versions 0.2.3 and 0.2.4 shipped no images. If you installed either, your instance still runs the 0.2.2 images. The CLI version and the instance version are separate things. In the console: Settings, Updates, for instance admins. Or ask your agent: "Check whether an upgrade is available and what it would change".

Then the CLI, always first. Install it globally at latest. The CLI renders the compose file your instance runs on. So it must be at least as new as the release you're moving to. If it's too old, gtm upgrade stops and tells you which version to install.

### Second: look before you leap

Second, look before you leap. Run gtm upgrade with check, which shows both versions. Then run gtm upgrade with dry run from the instance folder. It prints every command the upgrade would run. Both change nothing. One habit worth copying: run the dry run every time, and read it.

### Third: what the real run does

Third, the real run: gtm upgrade with yes. Yes is required, because it migrates your live database. Before anything changes, the signed release list is fetched and its signature checked. The path is planned by rules: no downgrade, no skipped required stop, additive only, and a minimum CLI. Then the images are pulled, and each digest must match the signed one. Every pending database change is read, and anything that drops, renames, retypes, deletes or overwrites is refused.

Now the order that matters: backup, rehearsal, migrate. The services stop gracefully, and a backup is taken and verified. A rehearsal restores that backup into a scratch database and migrates it there. Then it compares tables, columns, row counts and checksums with your live data. Any difference refuses the upgrade. Only then does the real migration run, followed by start, health check and verification. A flag to skip the rehearsal exists. Don't use it.

### Fourth: what is kept, and the rollback

Fourth, what's kept. All of it: records, history, definitions, approvals, connections and keys. Nothing is dropped, recreated or rewritten. Your data stays yours. Your master key isn't in any backup, so keep it somewhere safe, separate from the dump.

If an upgrade fails part way, it rolls back by swapping images. The previous compose and env files and the previous images come back, and the services restart on them. The database is never restored, dropped or recreated by an upgrade. Restoring a backup is a manual last resort, for damage something else caused. Never restore over the live database. Rename it first, then restore into a new one. gtm upgrade with help prints the exact commands.

### The objection

The worry: a rollback that never restores the database sounds risky. It's the safe part. Every migration only adds, so the previous code runs fine on the migrated database. Nothing was dropped, so nothing needs restoring.

### Fifth: two changes to expect

Fifth, two things to expect. Coming from the older images, expect local only ports. The console, API and MCP bind to 127.0.0.1 by default. Only your machine reaches them. Both gtm up and gtm upgrade warn you first, and the setting lands in your .env. If people reach the server by address, set GTMOS_BIND_ADDRESS or run gtm up with bind. Better still, put a reverse proxy in front.

Then the apps. An upgrade changes no installed engine app. New versions arrive through apps update, which is owner or admin only. In the console: Settings, Packages, Engine app updates, Propose update. Or ask your agent: "Which engine apps have updates". A second person approves, and your edits are merged in with a three way merge. If an edit overlaps the release, that app waits until you choose Keep mine or Take new.

### Last: the checklist

Last, work the checklist. The doctor shows the sources you expect as live, and its Harness section has no stale line. Health reports the new version on the API, worker, MCP and console. The upgrade said verification passed, a snapshot exists, and your row counts match. Preview the rescan before the first one, because scores can move once. Propose one send to an internal address, and confirm a different person must approve it. Then run gtm init with refresh in each project. Or ask your agent: "Run the post upgrade checklist and tell me what is not green".

### Recap and close

Run it back: CLI first, then check and dry run. Backup, rehearsal, migrate. An upgrade only adds, and a failure swaps images back, never touching your data.

You get a signed path, a rehearsal on a copy, and a rollback that never touches your data. Keep your master key somewhere separate. Coming next, Tutorial: when something looks wrong, where the cheapest check comes first.

## Ask your agent

- "Check whether an upgrade is available and what it would change."
- "Which engine apps have updates?"
- "Run the post-upgrade checklist and tell me what is not green."

The agent runs checks and reads. Upgrading itself needs the yes flag and a person at the terminal. apps.update is owner or admin only, and a second person approves.

Next clip: Tutorial: when something looks wrong.

## To verify before recording

- Record only after the release is published and the signed release list exists; re-check every version statement against docs/guides/upgrading.md at that moment. This is the only source for the clip.
- The guide says images exist only as 0.2.2 and stable until publication; the narration says 'Before this release' so it stays true, but update the scene wording once the new images exist.
- Do not state min-cli or min-from values. The narration says only 'a minimum CLI' as one of the rules, and 'the CLI must be at least as new as the release', both from the guide.
- The 'Fifth' scene uses 'Coming from the older images' instead of 'now' so it does not depend on the release number; confirm that is still the right framing for the published release.
- The preview scene says check 'shows both versions' (the guide: the CLI you run, the release your instance runs, and what the release list offers).
- The guide's checklist also lists the Proof library check and the snapshot comparison; the narration keeps the doctor, health, verification, snapshot, row counts, rescan preview, Dry Mode send check and gtm init refresh, and drops the Proof library item for length. Add it back if the clip is allowed to run longer.
- Console path Settings > Updates (instance admins, needs the updater service) and Settings > Packages > Engine app updates > Propose update: confirm labels.
