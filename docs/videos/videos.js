/* Renders the series page and the clip page from videos.json. No dependencies. */
(function () {
  "use strict";
  var page = document.body.getAttribute("data-page");

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (attrs[k] === false || attrs[k] == null) return;
      else n.setAttribute(k, attrs[k] === true ? "" : attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function dur(s) { var m = Math.round(s / 60); return m + " min"; }
  function ready(c) { return !!c.mp4 && c.status !== "coming-soon"; }
  function watchHref(c) { return "watch.html?clip=" + pad(c.number); }

  function load() {
    return fetch("videos.json", { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error("videos.json " + r.status);
      return r.json();
    });
  }

  function poster(c, withLink) {
    var p = el("div", { "class": "poster" });
    if (c.poster) p.appendChild(el("img", { src: c.poster, alt: "", loading: "lazy" }));
    else p.appendChild(el("span", { "class": "num", "aria-hidden": "true", text: pad(c.number) }));
    p.appendChild(el("span", { "class": "dur", text: dur(c.durationSeconds) }));
    if (!ready(c)) p.appendChild(el("span", { "class": "soon", text: "Coming soon" }));
    else p.appendChild(el("span", { "class": "play", "aria-hidden": "true" }, [el("i")]));
    return p;
  }

  function tags(c) {
    return el("div", { "class": "tags" }, [
      el("span", { "class": "pill pill-ember", text: c.tier }),
      el("span", { "class": "pill", text: c.type })
    ]);
  }

  function card(c, data) {
    var isReady = ready(c);
    var body = el("div", { "class": "clip-body" }, [
      el("span", { "class": "no", text: "CLIP " + pad(c.number) + (isReady ? "" : "  ·  COMING SOON") }),
      el("h3", null, [isReady ? el("a", { href: watchHref(c), "class": "cover-link", text: c.title }) : document.createTextNode(c.title)]),
      el("p", { text: c.outcome }),
      tags(c)
    ]);
    var art = el("article", { "class": "clip" + (isReady ? " ready" : ""), id: "clip-" + pad(c.number) });
    if (isReady) {
      var cover = el("a", { "class": "cover", href: watchHref(c), tabindex: "-1", "aria-hidden": "true" }, [poster(c)]);
      art.appendChild(cover);
    } else art.appendChild(poster(c));
    art.appendChild(body);
    if (!isReady) art.setAttribute("aria-label", "Clip " + c.number + ", " + c.title + ", coming soon");
    return art;
  }

  /* ---------- series page ---------- */
  function series(data) {
    var clips = data.clips;
    var partsEl = document.getElementById("parts");
    var state = { tier: "All", type: "All", available: false };

    var total = clips.reduce(function (a, c) { return a + c.durationSeconds; }, 0);
    var nReady = clips.filter(ready).length;
    var ac = document.getElementById("avail-count"); if (ac && nReady) ac.textContent = nReady + " of " + clips.length + " clips are";
    var stats = document.getElementById("stats");
    [clips.length + " clips", "about " + (Math.round(total / 360) / 10) + " hours", nReady + " published, " + (clips.length - nReady) + " coming soon"].forEach(function (t) {
      stats.appendChild(el("span", { "class": "pill", text: t }));
    });

    /* ladder */
    var ladder = document.getElementById("ladder");
    data.parts.forEach(function (p, i) {
      var count = clips.filter(function (c) { return c.part === p.part; });
      var rd = count.filter(ready).length;
      ladder.appendChild(el("li", null, [el("a", { href: "#part-" + p.part, style: "--i:" + i, "data-part": p.part }, [
        el("span", { "class": "pt", text: "Part " + p.part }),
        el("span", { "class": "lv", text: p.level }),
        el("span", { "class": "tt", text: p.title }),
        el("span", { "class": "ct", text: rd + " of " + count.length })
      ])]));
    });
    document.getElementById("ladder-nav").hidden = false;

    /* start here */
    var path = document.getElementById("path");
    var mins = 0;
    (data.startHere || []).forEach(function (n) {
      var c = clips.filter(function (x) { return x.number === n; })[0];
      if (!c) return;
      mins += Math.round(c.durationSeconds / 60);
      var ok = ready(c);
      var meta = dur(c.durationSeconds) + (ok ? "" : ", coming soon");
      var inner = [
        el("span", { "class": "pic" }, [
          c.poster ? el("img", { "class": "bg", src: c.poster, alt: "", loading: "lazy" }) : null,
          el("span", { "class": "shade", "aria-hidden": "true" })
        ].filter(Boolean)),
        el("span", { "class": "txt" }, [
          el("span", { "class": "n", text: String(n) }),
          el("span", null, [el("b", { text: c.title }), el("span", { "class": "m", text: meta })])
        ])
      ];
      var card = ok ? el("a", { "class": "pcard", href: watchHref(c), "aria-label": n + ". " + c.title + ", " + meta }, inner) : el("div", { "class": "pcard" }, inner);
      path.appendChild(el("li", { "class": ok ? "ready" : "soon" }, [card]));
    });
    document.getElementById("start-min").textContent = String(mins);
    document.getElementById("start").hidden = false;

    /* filters */
    var f = document.getElementById("filters");
    function group(label, key, values) {
      var g = el("div", { "class": "fgroup", role: "group", "aria-label": label }, [el("span", { "class": "lab", text: label })]);
      values.forEach(function (v) {
        var b = el("button", { type: "button", "class": "chip", "aria-pressed": String(state[key] === v), text: v });
        b.addEventListener("click", function () {
          state[key] = v;
          Array.prototype.forEach.call(g.querySelectorAll("button"), function (x) { x.setAttribute("aria-pressed", String(x.textContent === v)); });
          draw();
        });
        g.appendChild(b);
      });
      f.appendChild(g);
    }
    group("Tier", "tier", ["All", "Core", "Depth", "Reference"]);
    group("Type", "type", ["All", "Concept", "Tutorial", "Mixed"]);
    var av = el("button", { type: "button", "class": "chip", "aria-pressed": "false", text: "Published only" });
    av.addEventListener("click", function () {
      state.available = !state.available; av.setAttribute("aria-pressed", String(state.available)); draw();
    });
    f.appendChild(el("div", { "class": "fgroup" }, [av]));
    f.hidden = false;

    function draw() {
      partsEl.textContent = "";
      var shown = 0;
      data.parts.forEach(function (p) {
        var list = clips.filter(function (c) {
          return c.part === p.part && (state.tier === "All" || c.tier === state.tier) &&
            (state.type === "All" || c.type === state.type) && (!state.available || ready(c));
        });
        if (!list.length && (state.tier !== "All" || state.type !== "All" || state.available)) return;
        shown += list.length;
        var sec = el("section", { "class": "part", id: "part-" + p.part, "aria-labelledby": "ph-" + p.part }, [
          el("div", { "class": "part-h" }, [
            el("h2", { id: "ph-" + p.part, text: "Part " + p.part + ": " + p.title }),
            el("span", { "class": "lv", text: "Level " + p.part + ", " + p.level })
          ]),
          el("p", { "class": "part-blurb", text: p.blurb || "" })
        ]);
        var grid = el("div", { "class": "clips" });
        list.forEach(function (c) { grid.appendChild(card(c, data)); });
        sec.appendChild(grid);
        partsEl.appendChild(sec);
      });
      if (!shown) partsEl.appendChild(el("p", { "class": "empty", text: "No clips match these filters yet. Clips are published as they are recorded." }));
    }
    draw();

    /* highlight the ladder step in view */
    if ("IntersectionObserver" in window) {
      var links = ladder.querySelectorAll("a");
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.id.replace("part-", "");
          Array.prototype.forEach.call(links, function (a) {
            if (a.getAttribute("data-part") === id) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      Array.prototype.forEach.call(document.querySelectorAll(".part"), function (s) { io.observe(s); });
    }
  }

  /* ---------- clip page ---------- */
  function parseVtt(text) {
    var cues = [], blocks = text.replace(/\r/g, "").split(/\n\n+/);
    blocks.forEach(function (b) {
      var lines = b.split("\n"), i = 0;
      while (i < lines.length && lines[i].indexOf("-->") < 0) i++;
      if (i >= lines.length) return;
      var m = lines[i].match(/(?:(\d+):)?(\d+):(\d+)[.,](\d+)/);
      if (!m) return;
      var t = (+(m[1] || 0)) * 3600 + (+m[2]) * 60 + (+m[3]);
      cues.push({ t: t, text: lines.slice(i + 1).join(" ").replace(/<[^>]+>/g, "") });
    });
    return cues;
  }
  function stamp(t) { return Math.floor(t / 60) + ":" + pad(Math.floor(t % 60)); }

  function watch(data) {
    var root = document.getElementById("root");
    var q = new URLSearchParams(location.search).get("clip") || "";
    var n = parseInt(q, 10);
    var idx = -1;
    data.clips.forEach(function (c, i) { if (c.number === n) idx = i; });
    if (idx < 0) {
      document.title = "Clip not found | GTM OS video series";
      root.appendChild(el("div", { "class": "panel" }, [el("h1", { text: "That clip does not exist", style: "font-size:1.8rem;margin-bottom:10px" }), el("p", null, ["Pick one from the ", el("a", { href: "index.html", text: "series page" }), "."])]));
      return;
    }
    var c = data.clips[idx], part = data.parts.filter(function (p) { return p.part === c.part; })[0];
    document.title = "Clip " + c.number + ": " + c.title + " | GTM OS video series";
    document.getElementById("crumbs").appendChild(document.createTextNode(" / Part " + c.part + ": " + part.title + " / Clip " + c.number));

    var left = el("div");
    var video = null;
    if (ready(c)) {
      /* The MP4 may be an absolute release-asset URL on another origin. No crossorigin attribute is set on
         purpose: the video plays without CORS, and the captions (c.vtt) are same-origin files in the repo. */
      video = el("video", { controls: true, preload: "metadata", playsinline: true, poster: c.poster || false, "aria-label": c.title });
      var src = el("source", { src: c.mp4, type: "video/mp4" });
      video.appendChild(src);
      var failed = false;
      function showMissing() {
        if (failed) return; failed = true;
        var note = el("div", { "class": "panel", role: "alert", style: "margin-top:12px" }, [
          el("h2", { text: "The video file is not available yet" }),
          el("p", null, ["The player could not load this clip. It is hosted as a release file and may not be published yet. The transcript and the prompts on this page work now."]),
          el("p", null, [el("a", { href: c.mp4, text: "Open the video file directly" })])
        ]);
        left.insertBefore(note, left.firstChild.nextSibling);
      }
      src.addEventListener("error", showMissing);
      video.addEventListener("error", showMissing);
      if (c.vtt) video.appendChild(el("track", { kind: "captions", srclang: "en", label: "English", src: c.vtt, "default": true }));
      var tools = el("div", { "class": "player-tools" }, [el("span", { text: "Speed" })]);
      [0.75, 1, 1.25, 1.5, 2].forEach(function (s) {
        var b = el("button", { type: "button", "class": "chip", "aria-pressed": String(s === 1), text: s + "x" });
        b.addEventListener("click", function () {
          video.playbackRate = s;
          Array.prototype.forEach.call(tools.querySelectorAll("button"), function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        });
        tools.appendChild(b);
      });
      tools.appendChild(el("span", { "class": "hintk", text: "Space play, arrows seek 5s, C captions, F full screen" }));
      left.appendChild(el("div", { "class": "player" }, [video, tools]));
      document.addEventListener("keydown", function (e) {
        var t = e.target.tagName;
        if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT" || e.metaKey || e.ctrlKey || e.altKey) return;
        if (t === "BUTTON" || t === "A") { if (e.key !== "c" && e.key !== "f") return; }
        if (e.key === "ArrowLeft") { video.currentTime = Math.max(0, video.currentTime - 5); e.preventDefault(); }
        else if (e.key === "ArrowRight") { video.currentTime += 5; e.preventDefault(); }
        else if (e.key === " " && t !== "VIDEO") { video.paused ? video.play() : video.pause(); e.preventDefault(); }
        else if (e.key === "c" || e.key === "C") { var tr = video.textTracks[0]; if (tr) tr.mode = tr.mode === "showing" ? "hidden" : "showing"; }
        else if (e.key === "f" || e.key === "F") { if (document.fullscreenElement) document.exitFullscreen(); else if (video.requestFullscreen) video.requestFullscreen(); }
      });
    } else {
      left.appendChild(el("div", { "class": "player" }, [el("div", { "class": "coming" }, [el("div", null, [
        el("div", { "class": "num", "aria-hidden": "true", text: pad(c.number) }),
        el("h2", { text: "Coming soon" }),
        el("p", { text: "This clip is not recorded yet. The prompts on this page already work, so you can try the idea with your agent today." })
      ])])]));
    }
    left.appendChild(el("h1", { text: c.title }));
    left.appendChild(el("p", { "class": "outcome", text: c.outcome }));
    left.appendChild(el("div", { "class": "meta" }, [
      el("span", { "class": "pill pill-ember", text: c.tier }), el("span", { "class": "pill", text: c.type }),
      el("span", { "class": "pill", text: dur(c.durationSeconds) }), el("span", { "class": "pill", text: "Part " + c.part + ", " + part.level })
    ]));

    var side = el("div");
    /* ask your agent */
    var ask = el("section", { "class": "panel", "aria-labelledby": "ask-h" }, [
      el("h2", { id: "ask-h", text: "Ask your agent" }),
      el("p", { text: "Paste into Claude Code, Codex or any MCP agent connected to your organization." })
    ]);
    (c.prompts || []).forEach(function (p) {
      var box = el("div", { "class": "prompt" }, [document.createTextNode(p)]);
      box.appendChild(el("button", { type: "button", "class": "copy", "data-copy": p, "aria-label": "Copy prompt: " + p, text: "Copy" }));
      ask.appendChild(box);
    });
    if (!(c.prompts || []).length) ask.appendChild(el("p", { text: "No prompts for this clip." }));
    side.appendChild(ask);

    /* transcript */
    var tr = el("section", { "class": "panel", "aria-labelledby": "tr-h" }, [el("h2", { id: "tr-h", text: "Transcript" })]);
    var trBody = el("div", { "class": "transcript", tabindex: "0", role: "region", "aria-labelledby": "tr-h" });
    tr.appendChild(trBody);
    side.appendChild(tr);

    var grid = el("div", { "class": "watch" }, [left, side]);
    var prev, next;
    if (ready(c)) { /* from a published clip, step to the neighbouring published clips only */
      for (var a = idx - 1; a >= 0 && !prev; a--) if (ready(data.clips[a])) prev = data.clips[a];
      for (var b = idx + 1; b < data.clips.length && !next; b++) if (ready(data.clips[b])) next = data.clips[b];
    } else { prev = data.clips[idx - 1]; next = data.clips[idx + 1]; }
    var pager = el("nav", { "class": "pager", "aria-label": "Previous and next clip" }, [
      prev ? el("a", { href: watchHref(prev) }, [el("small", { text: "Previous, clip " + prev.number }), document.createTextNode(prev.title)]) : el("a", { href: "index.html" }, [el("small", { text: "Start" }), document.createTextNode("All clips")]),
      next ? el("a", { href: watchHref(next) }, [el("small", { text: "Next, clip " + next.number }), document.createTextNode(next.title)]) : el("a", { href: "index.html" }, [el("small", { text: "End" }), document.createTextNode("All clips")])
    ]);
    root.appendChild(grid);
    root.appendChild(pager);

    function fill() {
      if (c.transcript && !/\.md$/i.test(c.transcript)) {
        fetch(c.transcript).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
          trBody.appendChild(el("pre", { text: t }));
        }, vttFallback);
      } else vttFallback();
    }
    function vttFallback() {
      if (!c.vtt) { trBody.appendChild(el("p", { text: ready(c) ? "The transcript is not published yet." : "The transcript is published with the clip." })); return; }
      fetch(c.vtt).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
        parseVtt(t).forEach(function (cue) {
          var b = el("button", { type: "button", "class": "ts", text: stamp(cue.t), "aria-label": "Jump to " + stamp(cue.t) });
          b.addEventListener("click", function () { if (video) { video.currentTime = cue.t; video.play(); } });
          trBody.appendChild(el("p", null, [b, document.createTextNode(cue.text)]));
        });
      }, function () { trBody.appendChild(el("p", { text: "The transcript is not available." })); });
    }
    fill();
  }

  load().then(function (data) {
    if (page === "series") series(data); else if (page === "watch") watch(data);
  }).catch(function () {
    var host = document.getElementById("parts") || document.getElementById("root");
    if (host) host.appendChild(el("p", { "class": "empty", text: "The clip list could not be loaded. Serve this folder over http, or open videos.json directly." }));
  });
})();
