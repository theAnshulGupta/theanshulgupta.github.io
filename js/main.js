const text = document.querySelectorAll("#anshul path");
console.log(text);
for (let i = 0; i < text.length; i++) {
  var n = text[i].getTotalLength();
  console.log(n);
}

// contact
("use strict");

$(document).ready(function () {
  const $buttons = $(".demo__buttons");
  const $toggle = $(".demo__open-btn");
  let delay = 200;
  let steps = [];
  let open = false;

  let curStep = 0;

  for (let i = 0; i <= 3; i++) {
    steps[i] = "demo__step-" + i;
  }

  function setStep(index) {
    $buttons
      .removeClass("step-1 step-0 step-3 step-2")
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
      $buttons.removeClass("step-1 step-0 step-3 step-2");
      clearTimeout(lastTimeout);
      open = false;
      curStep = 0;
    }
  });
});
