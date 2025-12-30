var says = [
  "Pick a game and have fun 🎮",
  "Fast loading, clean layout.",
  "Tip: Use the search to find games quickly.",
  "New games added over time.",
  "Play on desktop or mobile.",
  "Need help? Check the Emulator page.",
  "Remember to take breaks.",
  "Use Settings to switch themes."
];

function splashText() {
  const el = document.querySelector(".Index-SplashText");
  if (!el) return;
  el.textContent = says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  splashText();
});
