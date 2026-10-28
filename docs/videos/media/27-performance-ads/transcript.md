Through-line: The engine proposes the move. A person moves the money.

# Clip 27: Performance ads

## Transcript

### The hook and the promise

Last clip a publish was bound to the exact payload you read. Now money gets the same treatment. Your ad budget is steered by what a customer really costs and returns, and no money moves until a different person says yes.

In this clip you'll sync spend, set a target, read pacing, and approve a budget move. Performance ads proposes. It never moves money on its own.

### The stakes

Leo's ad platforms optimize for their own results. Finance asks what a customer really cost, and the answer takes a spreadsheet and a week. Meanwhile a budget keeps running on a campaign that stopped paying back.

### Spend, targets, campaigns

First, spend. It syncs from Google and Meta, and arrives read only from other platforms through Composio. In the console: Engines, Performance ads, Platforms. Re-syncing the same window updates the rows already there, so spend and conversions never count twice.

Second, what good looks like. You write it in a unit economics definition: a target cost to acquire a customer, or a target return, or a maximum payback in months, with gross margin and revenue per customer. From those it sets a spend ceiling and a first order profit gate. It's a definition like any other, so a different person signs it.

Now read a campaign. In the console: Engines, Performance ads, Campaigns, then open one. You'll see spend, conversions, pacing and any open moves in one place. The figures are the synced ones, so when a number looks wrong, check the sync before you blame the campaign.

Pacing compares what you spend with what your CAC target allows. In the console: the Pacing tab, with MER and CAC payback tiles. Real CAC and return come from paid visits credited by campaign tag. Or ask your agent: "Where should budget go this week?"

Now the gotcha. A paid visit is credited to a campaign by its campaign tag, so put one on every ad link. Without it, GTM OS can't tie the visit to the campaign. The tile shows a dash with the reason, never a guess. Ask your agent: "Which campaigns are missing a campaign tag?" Then fix the links at the source.

### The allocator and the approval

Third, the allocator. Each night it reads pacing and proposes budget moves. It only proposes. Every move needs a different approver, and one move can at most double a budget. In Dry Mode the plan is a draft nobody can execute. In the console: Engines, Performance ads, Open moves. Or ask your agent: "Show the last allocator run".

Real money sits behind an approval. Changing a budget or pausing a campaign is a proposal. Sophia opens the approval, reads the frozen change and its impact, and approves or rejects. Neither the proposer nor the human the agent acts for can approve. An approved change can be undone, through an approval as well. Ask your agent: "Propose pausing the Brand Search campaign".

Caps stand around all of it. In the console: Settings, Safety. A guardrail limits ad spend per day, and above it a person has to approve. Cost budgets in the ledger turn a breach into an approval instead of a silent overrun. Operator tip: stay in Dry for a few weeks, read each night's plan, and move nothing until you trust it. Or ask your agent: "How much did we spend yesterday against the cap?"

### How it improves

It improves with cleaner inputs. Each night's plan reads fresher spend and better attribution, so tag your campaigns and keep the sync running. To customize, set your targets and margin, the campaigns in scope, and the spend cap. Each is a definition, so a different person signs every change.

### Handoffs and limits

Performance ads reads revenue truth and attribution from Money. It answers to the ad spend guardrail in Safety, and it feeds the spend tile on Mission Control.

Not in the product yet: the ads creative loop, so this engine doesn't generate or rank ad creative. Audience sync and offline conversion upload aren't built either. Spend from LinkedIn and TikTok is read only.

### The objection

The skeptic's line: an allocator that reads my numbers every night will drain a budget before I wake up. It can't. It only proposes, one move can at most double a budget, and every move waits for a different approver. In Dry Mode it can't even be executed.

### Recap and close

In one pass: Spend syncs without double counting, pacing compares it with your target, and the allocator proposes. The engine proposes the move. A person moves the money.

Spend follows the payback, every move waits for a person, and a re-sync never inflates your numbers. Tag one campaign today and watch its tile fill in. Next is Research agent, a researcher on every account.

## Ask your agent

- "Where should budget go this week?"
- "Show the last allocator run."
- "Propose pausing the Brand Search campaign."
- "How much did we spend yesterday against the cap?"

The agent proposes budget and status changes and reports an approval id. A different person approves in the console before any money moves.

Next clip: Research agent.

## To verify before recording

- Engine page tabs Pacing, Campaigns, Open moves and Platforms, and the Campaign workbench: from the inventory, not a live capture. Console route /org/<orgId>/perf-ads exists on main.
- Idempotent sync (plan 12b): confirm the exact console wording, if any, and that existing duplicate rows count once after the release; the clip says only that a re-sync does not double count.
- Platforms: Google and Meta live, LinkedIn and TikTok read only through Composio. Confirm "live" for Google and Meta is acceptable on camera (not on the unverified list).
- Unit economics definition: confirm the console path for editing it (definition.unit_economics, change set) and the field names targetCac, targetRoas or maxPaybackMonths with grossMargin and monthlyRevenuePerCustomer. The clip names them in words.
- Allocator runs nightly: the inventory says 02:00 UTC; the narration says "each night" only. perf_ads.reallocate is a data write that proposes moves; moves execute through perf_ads.update_campaign, which needs a different approver. Confirm the double budget cap per move wording.
- Tile names: MER and CAC payback are confirmed; aMER and ACoS also exist but are left out of the narration.
- Untagged campaigns show a dash with the reason (credit by utm_campaign): confirm the wording.
- The ad spend per day guardrail: confirm "above it a person approves" in Settings > Safety, Guardrails and Usage.
- Per engine Dry or Live for Performance ads: confirm label in Settings > Safety.
- Op for "How much did we spend yesterday against the cap": policy.guardrails.usage assumed; confirm.
- Op for the untagged campaigns question: perf_ads.get_campaign_performance assumed; confirm it exposes tag status, or drop the agent path from that scene.
- The ads creative loop, audience sync and offline conversions are not shipped and are said so.
- Depth claims used: the nightly allocator only proposes; each move needs a different approver; one move can at most double a budget; in Dry Mode the plan is a draft; a re-sync of the same window updates rows and never double counts; an untagged campaign shows a dash with the reason (FEATURE-INVENTORY 12.6 and plan 12b).
- The campaign tag is utm_campaign; the narration says "campaign tag" only. Confirm the console wording for the tag status before recording.
- The pro move (stay in Dry for a few weeks and read each night's plan) follows from the Dry Mode behaviour of the allocator and the per engine Dry or Live switch; confirm the Performance ads switch label in Settings, Safety.
