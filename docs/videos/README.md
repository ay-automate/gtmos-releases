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
