Through-line: Local ports, one proxy as the only door, and a master key that never travels in a backup.

# Clip 41: Self-hosting on a server

## Transcript

### The hook and the promise

You extended GTM OS by definition, never by fork. Now put it on a server your team can reach and nobody else can. One command brings it up, and a reverse proxy is the only door.

By the end you'll have your instance on your own domain over HTTPS, with every application port closed.

### The stakes

Leo opens the console and API ports so the team can get in. That is how self hosted tools end up on a scanner's list. Reachable by the team is a different goal from reachable by everyone.

### Step one: keep the ports local

Step one, keep the ports local. On a server, gtm up keeps the ports on the local machine, like the database. Local means 127.0.0.1. That covers the console, the API and MCP. Nothing on the network reaches them directly, and that's deliberate. The address is one setting: GTMOS_BIND_ADDRESS.

To change it on purpose, set it in .env and run gtm up again. Or pass the bind flag when you create the instance. A private address serves a proxy on another host. And 0.0.0.0 opens every interface, so keep that behind a firewall. The .env value is kept. A flag on an existing instance is reported and ignored.

On an older instance, the first gtm up or gtm upgrade warns you before it changes anything: these ports become local only. It adds the setting to your .env. If people reach it by address and port, put a proxy in front. Or set 0.0.0.0 on purpose.

### Step two: the domain

Step two, the domain. Point one parent domain at the server. Give it one host name for the console and one for the API. Add one for MCP if outside agents need it. Open only ports 80 and 443 in the firewall.

### Step three: the public addresses

Step three, tell GTM OS where it lives. In .env, set the three public addresses: PUBLIC_API_URL, PUBLIC_CONSOLE_URL and PUBLIC_MCP_URL. Use https, with no trailing slash. For subdomains of one parent, also set GTMOS_COOKIE_DOMAIN, or the CRM screens fail to load. Then run gtm up. No rebuild is needed.

### Step four: the proxy

Step four, the proxy. Caddy is the shortest route to HTTPS. Write one block per host name that forwards to the local port. Caddy gets and renews the certificates for you. Then run caddy reload. The ports in the file are the host ports from .env, so use yours if you changed them.

nginx works too. Get certificates first, for example with certbot. Then add a server block per host that forwards to the same local ports. Pass the host and forwarded protocol headers, allow upgrades on the console, and redirect port 80 to HTTPS.

### Step five: check from both sides

Step five, check from outside and from inside. The API health address should answer ok. The console should return a page or a redirect to login. A socket listing should show only 127.0.0.1 for the application ports and the database. Seeing 0.0.0.0 means a port is exposed. Fix the bind address and run gtm up again. Or ask your agent: "Is this instance ready, and what is missing". Pro move: put that socket listing in your deploy checklist.

### Last: secrets and backups

Last, keep it safe. gtm up generates the secrets for you: the database password, the auth secret, the master key and the audit signing key, all written into .env. Keep that file out of version control, and readable only by the service account. The master key seals every stored credential. And GTMOS_LIVE must be true or false, because production images refuse to start without it.

Back up on a schedule. The script dumps every organization, but not the master key. Without it, every stored connection and token is lost on restore. So escrow the key separately. The dump isn't encrypted, so restrict the folder.

The updater is optional. gtm upgrade does the whole job from the command line. Install the updater with gtm updater install only if you want the Update now button.

### The objection

Someone on your team will say: a proxy is one more thing to run. It is, and it's the only thing facing the internet. It ends HTTPS. Everything behind it sits on local ports. So a firewall mistake doesn't expose the application.

One boundary. This clip covers one server, with Docker. A client's own cloud isn't covered, because the live apply isn't verified. Google Cloud and Azure aren't supported yet.

### Recap and close

Say it back: Keep the ports local, point a domain at one proxy, set the public addresses, and check from both sides. Then escrow the master key.

Your instance now sits on your own domain over HTTPS. It's closed to everything but the proxy, with secrets and backups handled. The next clip is Upgrading: moving to a new release without touching your data.

## Ask your agent

- "Is this instance ready, and what is missing?"

This clip is a command line tutorial; the agent path is a readiness check over MCP. Everything else here runs in a terminal on the server. The console has no server-install path: the CLI and docs/SELF-HOST.md are the real path for this clip.

Next clip: Upgrading.

## To verify before recording

- Exact warning text printed by gtm up and gtm upgrade: the guide says gtm up prints a warning when .env has no GTMOS_BIND_ADDRESS and adds the line with 127.0.0.1; plan 12b says both gtm up and gtm upgrade print it before changing anything. Capture the real output from the release build before recording, and confirm gtm upgrade prints it.
- Flag spelling gtm up --bind <addr> and the behaviour that a flag on an existing instance is reported and ignored (docs/SELF-HOST.md, SERVER section): confirm on the build.
- Default ports 3000 console, 3001 API, 3004 MCP, 5432 database on 127.0.0.1; host port variables CONSOLE_HOST_PORT, API_HOST_PORT, MCP_HOST_PORT. The narration names no port numbers except 80 and 443.
- Caddy and nginx examples are copied from docs/SELF-HOST.md (acme.com is the guide's fake domain). Test both on a real host before recording; the nginx example uses certbot certificates and shows blocks for the console and API, the MCP block is left as an exercise in the guide.
- The objection says the proxy is the only thing facing the internet and that a firewall mistake does not expose the application: this follows from the 127.0.0.1 default bind; confirm on a real host with the socket listing before recording.
- GTMOS_COOKIE_DOMAIN is required for subdomains of one parent (otherwise CRM screens fail with 401, per the guide). Confirm it is still set by gtm up or must be added by hand.
- GTMOS_LIVE must be true or false for production images (inventory): confirm the error text when it is missing.
- Backup script path is node infra/scripts/backup.mjs and the --include-master-key flag: the guide describes the repo path; confirm what a no clone gtm up install has available, and whether there is a CLI wrapper before showing the command.
- The updater is optional: gtm updater install behind Settings > Updates 'Update now', instance admins only. Confirm gtm upgrade from the CLI works without it.
- Unsupported or unverified deployment targets named as not covered: byoc live apply (unverified) and Google Cloud and Azure self-hosting (next release). The clip does not demonstrate them.
- The narration carries no version numbers, so nothing in the clip goes stale.
