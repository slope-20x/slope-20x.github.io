// Ad-friendly options: theme only (no title/icon cloaking, no panic redirects)
(function () {
  try {
    const theme = localStorage.getItem("theme");
    if (theme && theme !== "default") {
      document.body.setAttribute("class", theme);
    } else {
      document.body.removeAttribute("class");
    }
  } catch (e) {
    // ignore
  }
})();
