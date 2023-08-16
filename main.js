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

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  $("body").css({ cursor: "default" });
  $(".cursor").css({ display: "none" });
} else {
}

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
var socialMediaSize = "20px";
$(document).ready(function () {
  $(document).mousemove(function () {
    if ($(".progress-wrap:hover").length != 0) {
      changeCursor(0, "#ffcc57", 20);
    } else if ($("a.github:hover").length != 0) {
      changeCursor(0, "#6a4a9b", 20);
    } else if ($("a.linkedin:hover").length != 0) {
      changeCursor(0, "#0072b1", 20);
    } else if ($("a.nav-link:hover").length != 0) {
      changeCursor(0, "#005ffe");
    } else if ($("a.dropdown-item:hover").length != 0) {
      changeCursor(0, "#171515");
    } else if ($("#m:hover").length != 0 || $(".Words:hover").length != 0) {
      changeCursor(0, "#fff", 30);
    } else if ($("a:hover").length != 0) {
      changeCursor(0);
    } else {
      changeCursor(1);
    }
  });
});

// $("#oldSite").hover(function () {
//   changeCursor(0);
// });

function changeCursor(val, bg = "#005ffe", size = "23px", border = "none") {
  if (val == 0) {
    $("#cursor").css({
      "background-color": bg,
      width: size,
      height: size,
      border: border,
    });
  } else {
    $("#cursor").css({
      "background-color": "#2128bd",
      border: "0",
      width: "30px",
      height: "30px",
      border: "none",
    });
  }
}
(function ($) {
  "use strict";

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

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  $("#cursor").css({
    display: "none",
  });
}

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

// change text in #info

if (window.mobileCheck()) {
  $("#cursor").css({
    display: "none",
  });
}

window.onscroll = function (e) {
  var scrollAmount = 40 - window.scrollY * 0.2;
  var changeAmount = 40;
  if (scrollAmount < 0) {
    changeAmount = 40 + scrollAmount;
    if (changeAmount < 0) {
      changeAmount = 0;
    }
    scrollAmount = 0;
  }
  $("#main").css({
    top: scrollAmount,
    paddingLeft: changeAmount,
    paddingRight: changeAmount,
  });
};

// $("#info").text(window.mobileCheck());
// console.log(window.mobileCheck());

let frame = 0;

let varying = "precision highp float; varying vec2 vPos;";

let vs = `${varying}
  attribute vec3 aPosition;
  void main() { vPos = (gl_Position = vec4(aPosition,1.0)).xy; }`;

let fs = `${varying}
  uniform float t;
    
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

  float cnoise(vec3 P){
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
  }
    
  void main() {
  
    vec3 bg = vec3(0.,0.70588235,0.84705882);
    vec3 mid = vec3(0.,0.46666667,0.71372549);
    vec3 top = vec3(0.68627451,0.90980392,0.95686275);
    float midSize = 5.;
    float topSize = 7.;
  
    float speed = t * .01;
    
    vec3 c = bg;
    
    float midNoise = cnoise(vec3(vPos.x * midSize, vPos.y * midSize, speed));
    if(.2 < midNoise && midNoise < .5) {
      c = mid;
    }
    if(.55 < midNoise && midNoise < .8) {
      c = mid;
    }
    
    
    float topNoise = cnoise(vec3((vPos.x * topSize), (vPos.y * topSize), speed));
    if(.4 < topNoise && topNoise < .6) {
      c = top;
    }
    if(.7 < topNoise && topNoise < .9) {
      c = top;
    }
    
    float color = cnoise(vec3(vPos.x * 5., vPos.y * 5., speed));
    gl_FragColor = vec4(vec3(c),1.0);
  }`;

let mandel;
function setup() {
  let parentDiv = select("#m"); // Select the div with id "m"
  let canvasWidth = parentDiv.width;
  let canvasHeight = parentDiv.height;

  mandel = createCanvas(canvasWidth, canvasHeight, WEBGL); // Create canvas with dimensions matching the parent div
  mandel.parent(parentDiv); // Append the canvas to the parent div
  mandel = createShader(vs, fs);
  shader(mandel);
  mandel.setUniform("t", frame);
}
function draw() {
  mandel.setUniform("t", frame);
  quad(-1, -1, 1, -1, 1, 1, -1, 1);
  frame++;
}
