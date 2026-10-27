/* Rollout banner. Reads window.GTMOS_RELEASE (assets/release-status.js). No dependencies, no requests.
   While published is false: a dismissible banner at the top of the page, and every element with
   data-rollout is shown. When true: nothing is shown. */
(function () {
  var r = window.GTMOS_RELEASE;
  if (!r || r.published !== false) return;
  var KEY = "gtmos-rollout-dismissed";
  function dismissed() { try { return sessionStorage.getItem(KEY) === "1"; } catch (e) { return false; } }
  function remember() { try { sessionStorage.setItem(KEY, "1"); } catch (e) {} }
  function init() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-rollout]"), function (n) { n.hidden = false; });
    if (dismissed() || document.getElementById("rollout-banner")) return;
    var css = document.createElement("style");
    css.textContent =
      "#rollout-banner{display:flex;gap:12px;align-items:flex-start;justify-content:center;padding:10px 16px;background:#fde6dc;color:#17181b;border-bottom:2px solid #b03816;font:500 14px/1.45 system-ui,-apple-system,'Segoe UI',Arial,sans-serif;position:relative;z-index:60}" +
      "#rollout-banner p{margin:0;max-width:60em}#rollout-banner b{font-weight:700}" +
      "#rollout-banner button{flex:none;border:1px solid #17181b;background:transparent;color:inherit;border-radius:999px;padding:3px 12px;font:600 13px system-ui,Arial,sans-serif;cursor:pointer}" +
      "#rollout-banner button:hover{background:#17181b;color:#fde6dc}#rollout-banner button:focus-visible{outline:3px solid #b03816;outline-offset:2px}" +
      "@media (prefers-color-scheme:dark){:root:not([data-theme='light']) #rollout-banner{background:#3a2117;color:#f3efe7;border-bottom-color:#ff8f6b}:root:not([data-theme='light']) #rollout-banner button{border-color:#f3efe7}:root:not([data-theme='light']) #rollout-banner button:hover{background:#f3efe7;color:#3a2117}}" +
      ":root[data-theme='dark'] #rollout-banner{background:#3a2117;color:#f3efe7;border-bottom-color:#ff8f6b}:root[data-theme='dark'] #rollout-banner button{border-color:#f3efe7}:root[data-theme='dark'] #rollout-banner button:hover{background:#f3efe7;color:#3a2117}";
    document.head.appendChild(css);
    var b = document.createElement("div");
    b.id = "rollout-banner"; b.setAttribute("role", "status");
    var p = document.createElement("p");
    var s = document.createElement("b"); s.textContent = "GTM OS " + r.version + " is rolling out. ";
    p.appendChild(s);
    p.appendChild(document.createTextNode("Until the " + r.version + " CLI and images appear on npm and the registry, the commands on this page install the previous release."));
    var x = document.createElement("button"); x.type = "button"; x.textContent = "Dismiss"; x.setAttribute("aria-label", "Dismiss the rollout notice");
    x.addEventListener("click", function () { remember(); b.parentNode && b.parentNode.removeChild(b); });
    b.appendChild(p); b.appendChild(x);
    document.body.insertBefore(b, document.body.firstChild);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
