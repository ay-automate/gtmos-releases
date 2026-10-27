Through-line: Agents work on triggers, inside limits they cannot raise.

# Clip 08: Predefined agents

## Transcript

### The hook and the promise

Your agent now knows the product. Now meet a team that arrives already working. Orbit can research an account while you sleep, and it still can't send a word.

In this clip you'll know each pack and one real trigger from it. You'll also know the limits no agent can raise, and how to switch one on.

### The stakes

An agent that wakes on its own is useful. One that also approves its own work is a liability, and Mia finds out from a customer, not from a log.

Here, agents run on triggers, inside limits they cannot raise. They ship in packs. A pack is a package that carries agents together with their triggers and skills. The packs are core, CRM, data, growth, ops and revenue. A trigger is what wakes an agent: an event, a schedule, or you.

### First: one real trigger from each pack

First, one trigger from each pack. Core: the SDR agent wakes on a verified buying signal, a funding round, a hiring spike or an intent surge. It researches the account, drafts one personal first touch, and proposes the send. It never sends.

CRM: the meeting prep agent wakes when a meeting is booked. It writes a brief with who is coming, the deal, open items, signals and talking points, each line tied to a record.

Data: the enrichment agent runs weekly, early on Monday. It finds empty or stale fields worth filling, quotes the cost, and proposes the run. It never spends on its own.

Growth: the SEO and GEO watch agent runs daily. It looks for decaying pages and gaps in AI answers, drafts the top refresh, and proposes publishing it through the claims gate.

Ops: the ops copilot runs when you ask what's going on. It answers across engines, approvals, agents and spend, with every figure traced to an operation. It suggests, and never acts.

Revenue: the reply triage agent wakes when a reply arrives. It drafts the answer to a meeting request or an objection, and hands anything sensitive to the account owner.

Here's what keeps it calm. An event trigger skips bulk writers, so a big import or a C R M sync doesn't wake an agent for every row. Each trigger is also capped per hour, and an over cap fire is recorded as skipped.

### Second: the limits

Second, the limits, because they're the point. An agent asks. A person decides. It can never approve its own work. Approving, rejecting, executing, signing, creating keys and switching Dry Mode are human only. An agent that tries is refused, and told which screen to use.

An agent can't widen its own rights either. It can't grant itself scopes, mint keys or loosen a policy. And any operation that spends money inside itself is never handed to an agent skill.

Now the rule that surprises people. Mia creates an agent key for Orbit. Everything Orbit proposes is attributed to Orbit and to Mia, so Mia can't approve, reject or execute it. Sophia can. Its authority is also capped three ways, by the key's scopes, the agent's scopes and the creator's current role. Whichever is narrowest wins.

### Third: switch one on

Third, switch one on. In the console: Settings, then Agents. Each pack card shows its state: not installed, off, on, or waiting for approval. Choose Install pack, or Turn on for your default environment. That's a request, and a second owner or admin approves it.

Or ask your agent: "Turn on the crm-agents pack in dev". The agent proposes, reports the approval number, and waits. Approval registers each agent, publishes its skills, and sets up its triggers.

### Fourth: scope and watch

Fourth, scope them, on the same page. Each agent lists its triggers, running or paused, and its hard limits on steps, cost and time. You can edit its scopes down, stop it, or revive it. Or ask your agent: "Show my agents and what triggers them".

Then watch them. Each agent shows its last thirty days: runs, proposals approved against proposed, and cost. For the step by step trace of any run, open Operate, then Runs. Or ask your agent: "How did my agents do this month". Every figure comes with its source operation.

One habit worth copying: start with the ops copilot and the meeting prep agent. They suggest and brief, so nothing leaves the building. Add the SDR agent once the drafts you read in Dry Mode look right.

One honest note. Agents that depend on engines GTM OS hasn't built yet are not shipped, so this clip doesn't show them. Everything here runs on engines that exist today.

### The objection

Here's the doubt: an agent that wakes by itself will spam my customers. It can't send. A send is a proposal a different person approves. Triggers are capped per hour, and a first message to someone nobody has written to always waits for a person.

### Recap and close

Quick pass: Packs, each with its trigger. Limits no agent can raise. And a switch that's a proposal a second person approves.

You now have a team that proposes work, inside limits it can't raise, with a person on every decision. Next up, Tutorial: your first week, a checkpoint a day.

## Ask your agent

- "Turn on the crm-agents pack in dev." (operation: `packages.enable`)
- "Show my agents and what triggers them." (`agent.list`, `agent.trigger.list`)
- "How did my agents do this month?" (`agent.kpis`, `agent.run_list`)

The agent proposes and reports an approval id. A different owner or admin approves in the console.

## Console paths

- Settings > Agents: pack card (Not installed, Off, On, Waiting for approval), Install pack or Turn on in your default environment; a second admin approves
- Settings > Agents: per agent, triggers, limits, scopes (edit), Stop and Revive
- Settings > Agents: 30 day activity per agent; Operate > Runs for the step by step trace

Next clip: Tutorial: your first week.

## To verify before recording

- Packs: core, CRM, data, growth, ops, revenue (core-agents, crm-agents, data-agents, growth-agents, ops-agents, revenue-agents). One trigger each: sdr-agent (verified funding, hiring or intent surge signal), meeting-prep-agent (meeting booked), enrichment-agent (Monday 06:00 cron), seo-geo-watch-agent (daily 06:00 cron, publish through the claims gate), ops-copilot (manual), reply-triage-agent (reply received).
- Event triggers skip events from bulk writers (imports, CRM sync, projector, enrichment) unless includeBulkSources is set; fires are capped per hour and an over cap fire is recorded as skipped (kernel/agent-runtime agent-trigger-operations, origin/main).
- Human only: approve, reject, execute, sign, key creation, Dry Mode switch; agents cannot widen their own scopes or mint keys; operations that spend inline (`spendsInline`) are never granted to an agent skill.
- Attribution: the creator of an agent key cannot approve, reject or execute that agent's proposals; authority is the narrowest of key scopes, agent scopes and the creator's current role.
- Enabling a pack is a `packages.enable` proposal (build access proposes, a different owner or admin approves); on approval it registers the agents, publishes their skills and provisions their triggers in the default environment.
- Settings > Agents: pack card states, triggers running or paused, limits on steps, cost and deadline, edit scopes, Stop, Revive; 30 day activity (runs, approved against proposed, cost); Operate > Runs.
- The net-new rule: the first message to someone nobody has written to is never auto-sent.
- Agents that depend on unbuilt engines (engine-dependent agents) are not shown.
- Every screen stays a marked mockup ("example, simplified") until the capture script exists.
