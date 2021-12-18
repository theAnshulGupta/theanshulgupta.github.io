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

particlesJS("particles-js", {
  particles: {
    number: { value: 202, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 8 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 119.88011988011988,
        size: 31.96803196803197,
        duration: 1.1988011988011988,
        opacity: 0.1998001998001998,
        speed: 3,
      },
      repulse: { distance: 207.79220779220782, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: false,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

function openTab(val) {
  var i;
  var x = document.getElementsByClassName("org");
  var y = document.getElementsByClassName("org-button");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.border = "none";
  }
  document.getElementById(val).style.display = "block";
  document.getElementById(val + "Button").style.borderBottom =
    "2px solid black";
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
