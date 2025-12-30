const protocolThingy = window.location.protocol + "//" + window.location.host;

function create(urlThingyHere) {
  const url = urlThingyHere;
  if (!url) return;

  const win = window.open("about:blank", "_blank");
  if (!win) return;

  win.document.title = "New Tab";
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";

  const iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.referrerPolicy = "no-referrer";
  iframe.src = url;

  win.document.body.appendChild(iframe);
}

function WidgetBot() {
  create(protocolThingy + "/Assests/Others/WidgetBot.html");
}

// Kept for backward-compat with existing onclick handlers.
// Opens the current site in a clean new tab without redirects.
function RailinAboutBlank() {
  create(protocolThingy + "/");
}

function createCustom() {
  let UrlTingy = (document.getElementById("textInputThingy") || {}).value || "";
  UrlTingy = UrlTingy.trim();
  if (!UrlTingy) return;

  if (!UrlTingy.startsWith("http://") && !UrlTingy.startsWith("https://")) {
    UrlTingy = "https://" + UrlTingy;
  }
  create(UrlTingy);
}
