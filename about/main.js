const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#scroll", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#percent", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#path", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

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
