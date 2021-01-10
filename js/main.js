const text = document.querySelectorAll("#anshul path");
console.log(text);
for (let i = 0; i < text.length; i++) {
  var n = text[i].getTotalLength();
  console.log(n);
}

// contact
("use strict");

$(document).ready(function () {
  const $buttons = $(".social-home__buttons");
  const $toggle = $(".social-home__open-btn");
  let delay = 200;
  let steps = [];
  let open = false;

  let curStep = 0;

  for (let i = 0; i <= 3; i++) {
    steps[i] = "social-home__step-" + i;
    console.log(steps[i]);
  }

  function setStep(index) {
    $buttons
      .removeClass("step-0 step-1 step-3 step-2")
      .addClass("step-" + curStep);
  }

  let lastTimeout;

  function animate() {
    if (curStep >= 4) {
      curStep = 0;
      return;
    }

    open = true;
    setStep(curStep);
    curStep++;
    lastTimeout = setTimeout(animate, delay);
  }

  $toggle.on("click", function () {
    if (!open) animate();
    else {
      $buttons.removeClass("step-0 step-1 step-3 step-2");
      clearTimeout(lastTimeout);
      open = false;
      curStep = 0;
    }
  });
});

// let progress = document.getElementById("scroll");
// let p = document.getElementById("percent");
// let max = document.body.scrollHeight - window.innerHeight;
// let change = (window.pageYOffset / max) * 100;

// window.onresize = function (event) {
//   max = document.body.scrollHeight - window.innerHeight;
//   change = (window.pageYOffset / max) * 100;
// };

// // console.log(change);
// if (change == 0) {
//   p.innerHTML = Math.round(change) + "%";
// }

// window.onscroll = function () {
//   change = (window.pageYOffset / max) * 100;
//   progress.style.height = change + "%";
//   //   p.innerHTML = "Page Scrolled " + Math.round(change) + "%";
//   p.innerHTML = Math.round(change) + "%";
// };

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
