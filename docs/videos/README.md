# Video series: how to add a clip

The series page (`index.html`) and the clip page (`watch.html?clip=NN`) render from one file, `videos.json`. Adding a clip is a data edit. There is no build step.

## Add a clip

1. Put the files in `docs/videos/media/NN/` (NN is the clip number with two digits):
   - `clip.mp4` (H.264, 1080p, AAC audio)
   - `clip.vtt` (captions, required for every video)
   - `poster.jpg` (1280x720)
   - `transcript.txt` (optional; if missing, the transcript is built from the .vtt)
2. In `videos.json`, find the clip by `number` and fill the paths, relative to `docs/videos/`:

```json
"mp4": "media/01/clip.mp4",
"vtt": "media/01/clip.vtt",
"poster": "media/01/poster.jpg",
"transcript": "media/01/transcript.txt"
```

3. Commit. The clip leaves the "Coming soon" state as soon as `mp4` is not empty.

Fields per clip: `id`, `number`, `part` (1 to 6), `title`, `outcome` (one line), `durationSeconds`, `type` (Concept, Tutorial or Mixed), `tier` (Core, Depth or Reference), `mp4`, `vtt`, `poster`, `transcript`, `prompts[]` (the "Ask your agent" block, one copy button each). Clip numbers 15 and 30 are retired and stay unused so numbers never move. The "start here" path is `startHere` (clips 1, 2, 3, 4, 6, 9).

Paths are relative, so the site works under the `/gtmos-releases/` Pages subpath. The no-JS fallback on the series page is a static list of titles; it needs a hand edit only if a clip title or part changes.

## Where to host the MP4 files

Facts (GitHub Pages limits): the published site should stay under 1 GB, a single file may not exceed 100 MB (GitHub blocks pushes over 100 MB, and warns above 50 MB), and soft bandwidth is about 100 GB per month. A 3 minute 1080p H.264 clip encodes to about 8 to 15 MB.

- One clip is small (about 8 to 15 MB per 3 minutes, so 25 to 60 MB for the longest clips). The whole series of 41 clips is about 200 to 400 MB.
- Rule: commit an MP4 as a normal file only when it is under about 50 MB.

Recommendation for 41 clips: **keep the MP4 files in the repository as normal files, under `docs/videos/media/`, served by Pages.** The total (200 to 400 MB) fits inside the 1 GB site limit with room to spare, every file is far under 100 MB, relative paths work with no extra setup, and videos stay versioned together with their captions. Do not use Git LFS: GitHub Pages does not serve LFS objects (it serves the pointer file), so videos would break. If the series ever grows past about 800 MB or a clip passes 50 MB, move the MP4s to GitHub Release assets and put the release download URL in `mp4`; the page works with any absolute URL (captions must stay same-origin, so keep the .vtt in the repo).

Encode example: `ffmpeg -i in.mov -c:v libx264 -crf 24 -preset slow -vf scale=1920:-2 -c:a aac -b:a 96k -movflags +faststart clip.mp4`.

Note: every clip needs captions (`.vtt`). The player always loads them.
