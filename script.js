(function () {
  var root = document.documentElement;

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    localStorage.setItem("lang", lang);
  }

  var saved = localStorage.getItem("lang");
  setLang(saved || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en"));

  document.getElementById("lang-toggle").addEventListener("click", function () {
    setLang(root.getAttribute("data-lang") === "en" ? "zh" : "en");
  });

  document.getElementById("yr").textContent = new Date().getFullYear();

  var tabs = document.querySelectorAll(".tab");
  var views = document.querySelectorAll(".view");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = "view-" + tab.dataset.view;
      tabs.forEach(function (t) { t.classList.toggle("active", t === tab); });
      views.forEach(function (v) { v.classList.toggle("active", v.id === id); });
      document.body.classList.toggle("hide-news", tab.dataset.view !== "home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  var bibBtn = document.getElementById("bibtex-toggle");
  var bib = document.getElementById("bibtex");
  bibBtn.addEventListener("click", function () { bib.hidden = !bib.hidden; });
})();
