Through-line: Your data sits behind a wall the database enforces, and your agent holds a key that can never approve.

# Clip 03: Your first organization and your agent

## Transcript

### The hook and the promise

The doctor told you the truth last clip, and one line stayed red: the model key. Clear it now, and Claude starts working inside your organization, holding a key that can never approve anything.

Most teams hand an agent their own admin login. You won't. By the end you'll have an organization, a model key, an agent key, and Claude connected over MCP.

### The stakes

Here's what that prevents. Leo gives the agent his own admin session. Weeks later, the audit trail can't tell Leo's changes from the agent's. And one customer's rows sit a single bad query away from another's.

Your data sits behind a wall the database enforces, and your agent holds a key that can never approve. Four steps build it.

### Move one: the organization

Step one, the organization. A key belongs to one organization, so the organization has to exist before anything else. In the console: open localhost, port three thousand, and sign in as the owner. The password is in the .env file in your instance folder. You land on Your organizations.

If you used gtm setup, your first organization already exists. To make another, use the Create organization card, type a name, and you're in. Anyone signed in can create one, and you invite teammates by email, with a role.

Or ask your agent: nothing yet. No key exists to carry the request, so this one is a person's step.

Now the wall. Everything you store is separated per organization, and the database enforces it, not the application. Every table that holds customer data sits under Postgres row-level security, forced even for the table's owner. The application connects as a database role that cannot bypass those rules.

So a query made for one organization sees only that organization's rows. Your data stays yours.

### Move two: the model key

Step two clears your red line: the model key. In the console: Integrations, then Connections, then the Models category. Pick Anthropic and paste your key.

The key is sealed with envelope encryption under your master key, and it's live without a restart. A key you've saved but not tested reads configured but unverified, so click Test. A key you add here also wins over any instance wide key in the environment.

Or ask your agent: "Which model provider is live". It reads the readiness answer, and it never takes the key itself, because secrets never pass through an agent. Run gtm doctor again, and the model line reads live.

### Move three: the agent key

Step three gives Claude an identity of its own. In the console: Settings, then Developer. The page is titled Connect Claude Code or Codex. Choose your coding agent, name it, and set an expiry. Ninety days is the default.

Then choose what it may do. Full GTM engineer is the Claude Code preset. It configures nearly everything you can. Approval, signing, key creation, OAuth sign ins and the Dry Mode switch stay with people. The approve permission can't be granted to a key at all.

Click Create agent key. The key is shown once. The command line does the same with gtm token create. Pro move: the real limit is the narrowest of three, the key's scopes, the agent's scopes, and your own current role. Lose a role, and your agents shrink with you.

Or ask your agent: "Create an agent key for yourself and connect to this organization". It mints the key in one call with your owner session, so your session token and password never land in the transcript.

### Move four: connect it

Step four connects the folder. Put the key in an environment variable named GTMOS_AGENT_TOKEN, never in a file. The .mcp.json holds only a reference to that variable.

Then run gtm init with the API address and the key. Mind this one. Restart Claude Code from that same terminal, because it reads the variable only at startup. Run /mcp, and the gtmos server should show connected. If a key ever lands in a file, revoke it on the Developer page or with gtm token revoke.

Claude now has a small set of tools: describe, query, get, search, act and approvals. Reads run directly. Anything that leaves the building is proposed, and a person approves.

Check before you ask for anything else. Ask your agent: "Which organization and key am I connected to". The answer names the agent, the organization and the key's scopes. If it names the wrong organization, stop and fix it.

Every action is logged against the agent, the key and the person behind it. In the console: Settings, then Audit log. Or ask your agent: "Show me the audit entries for this key".

### The first asks

Now the first asks. Say: "Start the GTM OS setup". Claude reads where setup stands and resumes at the current step, following the onboarding skill one screen at a time.

Then say: "Initialise the onboarding agents". That means the onboarding agent and the ops copilot, from the ops agents pack. Enabling a pack is a proposal, and a different owner or admin approves it. In the console: Settings, Packages, then Approvals. Claude gives you the approval number.

### The objection

A careful engineer will say: an agent with a key into my customer data? The key reads and proposes, and it can't approve. Three limits cap it, it expires, and the database keeps every query inside one organization.

### Recap and close

Checkpoint: Create the organization, add the model key, mint a narrow agent key, connect over MCP. Your data sits behind a wall, and your agent holds a key that can never approve.

Your agent now has a private organization and its first tasks. Next: the onboarding steps, six screens that turn your answers into definitions.

## Ask your agent

- "Which model provider is live?"
- "Create an agent key for yourself and connect to this organization."
- "Which organization and key am I connected to?"
- "Show me the audit entries for this key."
- "Start the GTM OS setup."
- "Initialise the onboarding agents."

The agent proposes and reports an approval id. A different person approves in the console.

Next clip: The onboarding steps.
