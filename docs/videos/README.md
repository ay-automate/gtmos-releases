# Video series: how clips are published

The series page (`index.html`) and the clip page (`watch.html?clip=NN`) render from one file, `videos.json`. Adding a clip is a data edit plus a file upload. There is no build step.

## Where each file lives

| File | Where | Why |
|---|---|---|
| MP4 video | A file of the GitHub release **`videos-v1`** (asset name `<NN>-<slug>.mp4`) | The whole series is too big for GitHub Pages (about 1 GB site limit, 100 MB per file). Release assets have no such limit for this use. |
| Captions (`.vtt`) | In the repo, `docs/videos/media/<NN>-<slug>/captions.vtt` | Captions must be same-origin so the player can load them. Required for every clip. |
| Poster image | In the repo, `docs/videos/media/<NN>-<slug>/poster.jpg` (or `.png`) | Small, same-origin, versioned with the page. |
| Transcript | In the repo, `docs/videos/media/<NN>-<slug>/transcript.txt` | Same-origin. If it is missing, the page builds the transcript from the captions. |

`videos.json` points `mp4` at the absolute release URL and everything else at relative repo paths (paths relative to `docs/videos/`, so the site works under the `/gtmos-releases/` Pages subpath):

```json
"slug": "what-is-gtm-os",
"status": "published",
"mp4": "https://github.com/ay-automate/gtmos-releases/releases/download/videos-v1/01-what-is-gtm-os.mp4",
"vtt": "media/01-what-is-gtm-os/captions.vtt",
"poster": "media/01-what-is-gtm-os/poster.jpg",
"transcript": "media/01-what-is-gtm-os/transcript.txt",
"durationSeconds": 181,
"bytes": 12345678
```

A clip leaves the "Coming soon" state as soon as `mp4` is not empty. The player works with any absolute `mp4` URL. It sets no `crossorigin` attribute on the video, so the MP4 plays from the release host while the captions load from the same origin. If the file cannot be loaded (for example the release is still a draft), the page says so and keeps the transcript and prompts usable.

## Publish clips with the sync tool

The video engineer writes finished clips to `../gtmos-explainer/out/final/` (next to this repository) with a machine readable `clips.json`: `id`, `number`, `slug`, `title`, `durationSeconds`, `mp4`, `vtt`, `poster`, `transcript`, `bytes`, `sha256`. Then, from the repository root:

```bash
node tools/sync-videos.mjs                      # copy captions, posters and transcripts, update videos.json
node tools/sync-videos.mjs --src <dir>          # a different source folder (or set GTMOS_VIDEOS_OUT)
node tools/sync-videos.mjs --dry-run            # show what would change, write nothing
node tools/sync-videos.mjs --check              # verify the repo state, non-zero exit on a problem
node tools/sync-videos.mjs --check --src <dir>  # also verify the local MP4 files and sizes
```

What a sync does:

1. Copies each finished clip's captions, poster and transcript into `docs/videos/media/<NN>-<slug>/`.
2. Updates its entry in `videos.json`: `mp4` (release asset URL), `vtt`, `poster`, `transcript`, `status: "published"`, `durationSeconds`, `bytes`.
3. Keeps unfinished clips (no MP4 or no captions at the source) as coming soon.
4. Prints the exact `gh release create` and `gh release upload` commands for a **draft** release tagged `videos-v1` with all the MP4 files.

The tool never runs `gh` and never publishes. The release is always created as a draft. Run the printed commands yourself, check the draft, then publish it in the GitHub UI. The clips play only after the release is published, so publish the release before (or together with) the merge that flips the site public.

`--check` verifies that every referenced captions, poster and transcript file exists, that every MP4 URL is a `videos-v1` asset named `<NN>-<slug>.mp4` matching its media folder, and that coming-soon entries have no stray paths. Run it before every commit that touches `videos.json`.

## Fields per clip

`id`, `number`, `slug`, `part` (1 to 6), `title`, `outcome` (one line), `durationSeconds`, `type` (Concept, Tutorial or Mixed), `tier` (Core, Depth or Reference), `status`, `mp4`, `vtt`, `poster`, `transcript`, `bytes`, `prompts[]` (the "Ask your agent" block, one copy button each). Clip numbers 15 and 30 are retired and stay unused so numbers never move. The "start here" path is `startHere` (clips 1, 2, 3, 4, 6, 9).

The no-JS fallback on the series page is a static list of titles; it needs a hand edit only if a clip title or part changes.

## Do not

- Do not commit MP4 files to the repository, and do not use Git LFS (GitHub Pages serves the LFS pointer, not the video).
- Do not rename an asset after upload without re-running the sync: the name in `videos.json` must equal the asset name.

Encode example: `ffmpeg -i in.mov -c:v libx264 -crf 24 -preset slow -vf scale=1920:-2 -c:a aac -b:a 96k -movflags +faststart 01-what-is-gtm-os.mp4`.

## Current state of the clips

Hosted as assets of the `videos-v1` release. Every clip except 18 and 28 is available; the other entries in `videos.json` stay coming soon until they are recorded.

| Clip | Title | Duration | Size | Release asset |
|---|---|---|---|---|
| 01 | What is GTM OS | 2:43 | 15.8 MB | `01-what-is-gtmos.mp4` |
| 02 | First setup with Claude | 4:25 | 20.1 MB | `02-first-setup-with-claude.mp4` |
| 03 | Your first organization and your agent | 4:31 | 22.2 MB | `03-first-organization-and-agent.mp4` |
| 04 | The onboarding steps | 4:50 | 22.1 MB | `04-the-onboarding-steps.mp4` |
| 05 | Blueprints and motions | 4:15 | 20.3 MB | `05-blueprints-and-motions.mp4` |
| 06 | Connections and integrations | 4:19 | 22.1 MB | `06-connections-and-integrations.mp4` |
| 07 | Skills | 4:24 | 19.3 MB | `07-skills.mp4` |
| 08 | Predefined agents | 5:12 | 24.6 MB | `08-predefined-agents.mp4` |
| 09 | Tutorial: your first week | 5:15 | 25.5 MB | `09-tutorial-your-first-week.mp4` |
| 10 | Bring your data in | 5:30 | 24.5 MB | `10-bring-your-data-in.mp4` |
| 16 | Definitions as code and environments | 4:21 | 19.9 MB | `16-definitions-as-code.mp4` |

## Add the next clips

1. The video engineer writes the finished files and an updated `clips.json` to `../gtmos-explainer/out/final/`.
2. Run `node tools/sync-videos.mjs` and `node tools/sync-videos.mjs --check --src ../gtmos-explainer/out/final`.
3. Run the printed `gh release upload videos-v1 ... --clobber` command to add the new MP4 files to the existing release (the release is already created, so skip the `gh release create` line).
4. Commit `docs/videos/` and push. From a published clip, the previous and next links step to the neighbouring published clips only.
