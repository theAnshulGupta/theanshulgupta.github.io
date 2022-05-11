$("#credits-secret").hide();
document.body.addEventListener("mousemove", (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set("#cursor", {
    x: mouseX,
    y: mouseY,
  });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
});

var offset = 25;
var delay = 200;

$(window).scroll(function () {
  if ($(this).scrollTop() > offset) {
    // $("#info").fadeOut(delay);
    $("#oldSite").fadeOut(delay);
    $("#credits").fadeOut(delay);
    $("#credits-secret").fadeIn(delay);
  } else {
    // $("#info").fadeIn(delay);
    $("#oldSite").fadeIn(delay);
    $("#credits").fadeIn(delay);
    $("#credits-secret").fadeOut(delay);
  }
});

(function ($) {
  "use strict";

  //Switch dark/light

  $(".switch").on("click", function () {
    if ($("body").hasClass("light")) {
      $("body").removeClass("light");
      $(".switch").removeClass("switched");
    } else {
      $("body").addClass("light");
      $(".switch").addClass("switched");
    }
  });

  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var duration = 200;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
