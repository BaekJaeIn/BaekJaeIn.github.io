/* =========================================================
   백재인 · Resume — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ----- Theme (light/dark) with persistence ----- */
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var stored = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var initial = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ----- Tabs ----- */
  var tabBar = document.getElementById("tabs");
  var tabs = Array.prototype.slice.call(tabBar.querySelectorAll(".tab"));
  var indicator = tabBar.querySelector(".tab-indicator");
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));

  function moveIndicator(tab) {
    indicator.style.width = tab.offsetWidth + "px";
    indicator.style.transform = "translateX(" + (tab.offsetLeft - 6) + "px)";
  }

  function activate(name, push) {
    tabs.forEach(function (t) {
      var on = t.dataset.tab === name;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      if (on) moveIndicator(t);
    });
    panels.forEach(function (p) {
      var on = p.id === name;
      p.classList.toggle("is-active", on);
      p.hidden = !on;
    });
    if (push && history.replaceState) {
      history.replaceState(null, "", "#" + name);
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activate(tab.dataset.tab, true);
    });
  });

  // Keyboard navigation (left/right arrows)
  tabBar.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    var idx = tabs.findIndex(function (t) { return t.classList.contains("is-active"); });
    idx += e.key === "ArrowRight" ? 1 : -1;
    if (idx < 0) idx = tabs.length - 1;
    if (idx >= tabs.length) idx = 0;
    tabs[idx].focus();
    activate(tabs[idx].dataset.tab, true);
  });

  /* ----- Init: respect URL hash, place indicator ----- */
  var hash = location.hash.replace("#", "");
  var start = tabs.some(function (t) { return t.dataset.tab === hash; }) ? hash : "about";
  activate(start, false);

  // Reposition indicator after fonts load / on resize
  window.addEventListener("load", function () {
    var active = tabBar.querySelector(".tab.is-active");
    if (active) moveIndicator(active);
  });
  window.addEventListener("resize", function () {
    var active = tabBar.querySelector(".tab.is-active");
    if (active) moveIndicator(active);
  });

  /* ----- Footer year ----- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
