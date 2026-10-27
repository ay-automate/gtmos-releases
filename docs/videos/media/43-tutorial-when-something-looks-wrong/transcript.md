Through-line: Start with the cheapest check, follow the run, and restore only as a last resort.

# Clip 43: Tutorial: when something looks wrong

## Transcript

### The hook and the promise

An upgrade only adds, and a failure swaps images back. Now the day something looks wrong and you don't know why. You can find out in minutes, with the cheapest check first.

By the end you'll know the order to check in, the one command that starts it, and when a restore is the last resort.

Sophia's queue is empty and Leo's sends stay drafts. He spends the afternoon in logs. The cause was one switch he could have read in ten seconds. Order saves the afternoon.

### Step one: the doctor

Step one, the doctor. Run gtm doctor. It prints one line per model provider, backend, connector and sender: live, unverified, failed, fixture or not configured. Every line that isn't live comes with its exact fix. In the console: Integrations, Connections, Required connections. Or ask your agent: "Run gtm doctor and tell me what is not live". Pro move: add strict, and it exits with one when anything you need isn't live, so scripts can gate on it.

Read the lines in order. Failed means that source is down. Fixture means a built in sample is standing in, and fixture data never counts toward your first win. Unverified means configured but not yet proven. And if sends stay drafts and no approval ever appears, check Dry Mode before anything else. Ask your agent: "Why are my sends staying drafts".

### Step two: the Harness section

Step two, the Harness section. When gtm init runs, it stamps three things into a file in your .claude folder: the CLI version, the skills release and the operation list. The doctor compares them with what's running now. If they differ, it warns that skills and reference are stale. The fix is gtm init with refresh. New skills come in and your edits are kept. Restart Claude Code afterwards. A project folder set up before this check reports as unstamped, which is informational only.

### Step three: monitors

Step three, monitors. They run in the background on data quality, bounce rate, complaint rate and content freshness. In the console: Operate, Monitors. Or ask your agent: "Which monitors are failing, and is any lane paused". A monitor can pause a lane after a spike. An approved action on a paused lane won't run until a person resumes it. That's the point: investigate first, then resume.

### Step four: follow the run

Step four, follow the run. When an action didn't do what you expected, open Operate, Runs. Every flow run keeps a step by step journal. On the command line, gtm logs lists recent runs, and gtm trace with a run ID shows the steps. Errors carry a code, a message and a remediation, and the remediation usually names the exact fix. Read it first. The cost ledger links each spend line back to the same run.

### Step five: who did what

Step five, who did what. In the console: Settings, Audit log. Every operation, by a person or an agent, sits in a hash chained log, each entry tied to the one before. For one approval, its timeline shows the frozen payload, who proposed, which agent was involved, and who decided.

If the agent says unauthorized, or every call is refused, check the key. Agent keys expire, after ninety days by default, and exchanged tokens last minutes. A refusal on every call can also mean the agent was killed, or the key belongs to another organization. A person issues a new key or revives the agent, under Settings. One more case. An auth expired error is a connection's sign in, such as Google or Slack, not your agent key. Reconnect it on the Connections page.

### Last: restore, and getting help

Restoring from a backup is the last resort, for damage that something other than an upgrade caused. As the upgrade clip said, never restore over the live database. Rename it first, restore into a new one, and keep your master key, because backups don't contain it. A failed upgrade needs no restore. It already swapped the images back.

Getting help. The troubleshooting guide is already in your project folder, under docs, gtmos, guides. It's written from the code, and your agent can read it with you. When you ask your team or us for help, send four things: the doctor output, the run I D, the approval number, and the version from gtm version. Never paste a key.

### The objection

You may be thinking: when it breaks, I'll be digging through logs at midnight. Mostly you won't. The doctor points at the line. Every error carries a remediation that names the fix. You only go deeper when the cheaper check tells you to.

### Recap and series close

To recap: the order is the doctor, the readiness lines, Dry Mode, monitors, runs, then the audit log. Cheapest check first, and each one tells you whether to go deeper.

That ends the series. You started with an empty folder and agents that move fast. You finish with definitions your people signed, engines that run on them, and a record of every step. The series followed the order you'd build in: plan, build, operate, automate, optimize, scale. An agent asks. A person decides. Return to the clip your path needs, and keep the troubleshooting guide close.

## Ask your agent

- "Run gtm doctor and tell me what is not live."
- "Why are my sends staying drafts?"
- "Which monitors are failing, and is any lane paused?"
- "Why did run run_demo_8d2e fail?"
- "Show the audit entries for approval apr_demo_2c91."

Reads answer directly. Resuming a paused lane, reviving an agent and restoring a backup are human steps: the agent names the screen or command and stops.

Series close: this is the last clip. There is no next clip.

## To verify before recording

- Name the support route once the operator provides it; the narration says 'your team or us' until then.
- The series page location is not final; the close says 'start over from the first clip of your path' without naming a URL. Confirm the on screen close once the releases site is live.
- Agent response shapes are invented for the mockups. Run ids and approval ids appear on screen only, never in the narration.
- gtm init stamps the CLI version, the skills release and the operation list into a file in the .claude folder, and gtm doctor compares them (0.2.6 on main in the inventory; confirm it is in the published build). A workspace set up before the check reports as unstamped, informational only.
- Audit log is hash chained (inventory section 13); 'each entry tied to the one before' is the plain wording of that. Confirm the approval timeline shows the frozen payload, proposer, agent and decider.
- Agent keys expire after ninety days by default; exchanged tokens last about fifteen minutes (inventory section 13, secrets and keys); the narration says 'minutes'.
- 'Why are my sends staying drafts' is a new prompt in the Ask block; the answer reads policy.get_dry_mode. The storyboard 'lines' scene already carries the same prompt shape.
- The pro move (doctor with strict as a gate) matches 'gtm doctor --strict' exit code one from the inventory.
- The series close names the build order plan, build, operate, automate, optimize, scale, which clip one says opens the series; confirm that wording in clip one's final script.
