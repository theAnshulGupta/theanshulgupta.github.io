let progress = document.getElementById("scroll");
let p = document.getElementById("percent");
let max = document.body.scrollHeight - window.innerHeight;
let change = (window.pageYOffset / max) * 100;

window.onresize = function (event) {
  max = document.body.scrollHeight - window.innerHeight;
  change = (window.pageYOffset / max) * 100;
};

// console.log(change);
if (change == 0) {
  p.innerHTML = Math.round(change) + "%";
}

window.onscroll = function () {
  change = (window.pageYOffset / max) * 100;
  progress.style.height = change + "%";
  //   p.innerHTML = "Page Scrolled " + Math.round(change) + "%";
  p.innerHTML = Math.round(change) + "%";
};

const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark",
};

const theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;
