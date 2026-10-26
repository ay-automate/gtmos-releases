/* Shared behaviour: theme toggle and copy buttons. No dependencies. */
(function () {
  var KEY = "gtmos-theme";
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  var t = stored();
  if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);

  function current() {
    var a = document.documentElement.getAttribute("data-theme");
    if (a) return a;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-btn");
    if (btn) {
      var sync = function () {
        var d = current() === "dark";
        btn.setAttribute("aria-pressed", String(d));
        btn.setAttribute("aria-label", d ? "Switch to light theme" : "Switch to dark theme");
        btn.textContent = d ? "☀" : "☾";
      };
      sync();
      btn.addEventListener("click", function () {
        var n = current() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", n);
        save(n); sync();
      });
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-copy]");
      if (!b) return;
      var text = b.getAttribute("data-copy");
      var done = function () {
        var old = b.textContent; b.textContent = "Copied"; b.setAttribute("data-done", "");
        setTimeout(function () { b.textContent = old; b.removeAttribute("data-done"); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
      } else { fallback(text); done(); }
    });
    function fallback(text) {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }
  });
})();
