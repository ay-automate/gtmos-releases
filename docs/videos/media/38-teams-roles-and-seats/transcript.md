Through-line: Everyone gets the reach they were given, and nobody can widen their own.

# Clip 38: Teams, roles and seats

## Transcript

### The hook and the promise

Your first real send went out because a second person approved it. Now decide who that person is, and what everyone else can touch. Get it right once, and nobody can widen their own reach.

In this clip you'll know how members, role profiles, delegations and agent keys fit together, and what stops anyone from locking you out.

### The stakes

Leo hands Orbit a full access key in March and never looks at it again. By June an agency still has access, three people share one login, and the access list has no owner. Reach should be given on purpose, and checked.

### First: members and roles

First, members, because every other control hangs off a role. Invite people by email and give each one owner, admin or member. In the console: Settings, Members. Or ask your agent: "Who is on the team and what can each role do". Only owners and admins approve, and nobody approves their own work. A builder role exists for delegated agencies, and a service role for system accounts.

### Second: role profiles and seats

Second, role profiles, which turn a role into a seat. The built in ones are Operator, Ops lead, Exec and Engineer, and Exec is an admin without configuration, journey and send operations. Add your own with a base role, the operations it can never use, and the tiles and actions it sees first. A profile can only narrow a role, never widen it.

Each profile has a seat dashboard, so people open GTM OS on the work that's theirs. Ask your agent: "What does my seat dashboard show". A member's agents inherit the seat. So an agent working for an Exec can't send what the Exec can't send.

Assigning a seat is human only. Ask your agent: "Make Priya an Ops lead", and it names the screen and the button instead: Settings, Members, Profile. Power habit: put executives on the Exec profile, so they see the numbers and can't change configuration or send.

### Third: agencies

Third, agencies, which work through delegations. Your owner or admin grants an agency organization access, and the grant stays pending until an owner or admin approves it. The agency acts as a builder, never an owner, so it can build but can't approve its own work. In the console: Settings, Delegations. Or ask your agent: "Which agencies have access to our organization". Revoking takes two clicks, and the agency loses access on its next request.

### Fourth: sign in and agent keys

Fourth, sign in and keys. Signup can be closed. Invitations bring people in, and an allow list limits who can join. Google, Microsoft or your own SSO can handle the login. Setting up SSO is human only, so an agent can't point your login at a provider.

Agent keys connect Claude Code or Codex. In the console: Settings, Developer. Pick a preset, full GTM engineer, read write or read only, and an expiry, ninety days by default. The key is shown once. Or ask your agent: "Create an agent key for Sam", and it points you to that screen. Operator tip: give an agent the read only preset until a job needs more.

### Last: the guard under all of it

Last, the guard under all of it. An organization must always keep someone who can repair it. Removing the last owner, or narrowing a role so nobody can finish setup, is refused. And a profile can never deny the role operations themselves, so you can always fix a profile that went too far.

### The objection

The skeptic's line: an agent key is a back door. It isn't. A key's reach is the overlap of its own scopes, the agent's scopes, and the current role of the person who made it. Demote that person, and their keys shrink too. A key never gets the approve permission, and it can't create another key. The person who created it can't approve what it proposes. And it expires.

### What it connects to

Every role change, delegation and key lands in the audit log, under Settings, Audit log. A review reads from fact. Approvals, Safety and your dashboards all follow the seat.

One limit to plan for. A key never approves, and neither does the person behind it. So a team of one still needs a second person, or a second identity, as approver.

### Recap and close

In one pass: Members get roles, profiles narrow roles into seats, agencies come in by delegation, and keys expire. Everyone gets the reach they were given, and nobody can widen their own.

Your team has the reach it needs and no more, your agents inherit it, and the organization can always be repaired. Next up, Tutorial: your first month, where you read the results and tune from them.

## Ask your agent

- "Who is on the team and what can each role do?"
- "What does my seat dashboard show?"
- "Make Priya an Ops lead."
- "Which agencies have access to our organization?"
- "Create an agent key for Sam."

Reading the team, seats and delegations works over MCP. Assigning seats, creating keys and setting up single sign on are human only: the agent answers with the screen and the button to use in the console.

Next clip: Tutorial: your first month.

## To verify before recording

- Settings > Members: invite by email with owner, admin or member, pending invitations, the Profile column and the role profiles editor, and the last steward guard messages. Capture the labels from a live build.
- The builder and service roles: the inventory lists them (builder for a delegated agency, service for system accounts); confirm they are not offered in the invite dropdown (the page offers member, admin, owner).
- Built in profile names Operator, Ops lead, Exec and Engineer and their base roles (member, admin, admin minus config, journey and send operations, builder): confirm against roles.list on the build.
- Custom profile editor: base role, denied operations, seat dashboard KPIs and actions. The pro move (Exec profile for executives) relies on the built in Exec profile denying configuration, journey and send operations; confirm against roles.list.
- Seat dashboard on Mission Control follows the profile; a member's agents inherit the seat.
- SSO setup path: no console page was found in the members, packages or safety routes; sso.* is human only. The narration says only that setting it up is human only.
- Sign in layers: closed signup, invitations, allow list, Google and Microsoft sign in, OIDC SSO. Confirm which are on by default for a new organization; the clip says 'can be'.
- Agent keys: presets (Full GTM engineer, read write, read only), expiry default ninety days, shown once, never given the approve permission, a key cannot create a key. agent.create_key may propose an approval that a distinct human approves; confirm whether the console flow shows that before saying created.
- Key reach is the overlap of key scopes, agent scopes and the creating human's CURRENT role (FEATURE-INVENTORY section 4a). 'Demote that person and their keys shrink too' is the direct consequence of 'current role': confirm on a live build before recording.
- The person who creates an agent key cannot approve its proposals (M15): confirm the approval card wording.
- Delegations: grant is created pending and a client owner or admin approves it, role defaults to builder and never owner, revoke takes effect on the next request. Confirm the console flow (the inventory lists only the Delegations page with a two click revoke).
- Last steward protection: refusal code LAST_OWNER_NARROWING and the console guard for removal and role change; confirm message wording.
