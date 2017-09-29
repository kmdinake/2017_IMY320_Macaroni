var dataText = [
  "One day there was virus that hit the earth and changed mankind as we know it. All the old cultures,traditions and ideas that we believed to be our reality was reduced to a single term “ Old Earth”.",
  "Before the dust settled a new regime was born and it proceeded to take the Earth and remains of the Earth and it kept the spirits of man down. After years of planning and preparation, a broken man haunted by memories of the Old Earth and unanswered questions",
  "Our hero sets out to go to the Heart of Toria and tries to save the world after receiving actionable intelligence about the base location of the regime that ascended as the Old Earth fell to the ashes. With the Heart of Toria being rumored to be impenetrable to normal men.Our noble hero chased whispers of a man, who is said to have built the impenetrable walls of Toria a hacker time once knew as Phase to enlist alongside noble soldiers in his strike at the Heart of Toria. "
];

var part = 0;
var timeOut;
function myTypeWriter() {
  StartTextAnimation(0);
}

// type one text in the typwriter
// keeps calling itself until the text is finished
// start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
  if (typeof dataText[i] == "undefined") {
    setTimeout(function() {
      StartTextAnimation(i);
    }, 20000);
  }
  // check if dataText[i] exists
  if (
    dataText[i] !== undefined &&
    dataText[i] !== null &&
    i < dataText[i].length
  ) {
    // text exists! start typewriter animation
    typeWriter(dataText[i], 0, function() {
      // after callback (and whole text has been animated), start next text
      StartTextAnimation(i + 1);
    });
  }
}

function typeWriter(text, i, fnCallback) {
  // chekc if text isn't finished yet
  if (i < text.length) {
    //   console.log(document.querySelectorAll("div.left.typewrite").length);
    document.querySelectorAll("div.left.typewrite").forEach(function(el) {
      el.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      // wait for a while and call this function again for next character
    });
    timeOut = setTimeout(function() {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  } else if (typeof fnCallback == "function") {
    // text finished, call callback if there is a callback function
    // call callback after timeout
    $(".row1").animate({ height: "0vh" });
    $(".row3").animate({ height: "0vh" });
    $(".row2").animate({ width: "0%" });
    if (part == 2) {
      $(".btn-2").click();
      $(".btn-3").click();
      console.log("part2 == 2");
    } else if (part == 3) {
      //     $('.row1').animate({height:"0vh"});
      //       $('.row3').animate({height:"0vh"});
      //         $('.sceneRight').animate({width:"0%"});

      $(".btn-3").click();
      $(".btn-4").click();
    } else if (part == 4) {
      $(".row1").animate({ height: "0vh" });
      $(".row3").animate({ height: "0vh" });
      $(".sceneRight").animate({ width: "0%" });

      $(".btn-4").click();
      $(".btn-1").click();
    }
    /*else*/
    // setTimeout(fnCallback, 700);
  }
}

window.onload = function() {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

$(document).ready(function() {
  var sceneTopFlag = false;
  var sceneSceneFlag = false;
  var sceneRightFlag = false;
  var sceneBottomFlag = false;

  $("body").on("DOMMouseScroll mousewheel", function(event) {
    console.log("up");
    if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
      //alternative options for wheelData: wheelDeltaX & wheelDeltaY
      $("#joey").css("transform", "scaleX(-1)");
      $("#joey").animate({ left: "-=10px" });
    } else {
      //   if(!locked)
      // up();
      $("#joey").css("transform", "scaleX(1)");
      $("#joey").animate({ left: "+=10px" });
    }
    //prevent page fom scrolling
    return false;
  });

  $(".btn-2").click(function() {
    if (timeOut != null) clearTimeout(timeOut);

    if (!sceneTopFlag) {
      openSceneTop();
      StartTextAnimation(0);
    } else closeSceneTop();

    sceneTopFlag = !sceneTopFlag;
    part = 2;
  });

  $(".btn-3").click(function() {
    if (timeOut != null) clearTimeout(timeOut);

    closeSceneBottom();

    if (!sceneBottomFlag) {
      StartTextAnimation(1);
      openSceneBottom();
    } else {
    }
    sceneBottomFlag = !sceneBottomFlag;
    part = 3;
  });

  $(".btn-4").click(function() {
    if (timeOut != null) clearTimeout(timeOut);

    if (!sceneRightFlag) {
      StartTextAnimation(2);
      openSceneRight();
      //            console.log("awe");
    } else {
      closeSceneRight();
    }
    sceneRightFlag = !sceneRightFlag;
    part = 4;
  });

  function openSceneTop() {
    $(".row1").animate({ height: "100vh" });
    closeMain();
  }

  function closeSceneTop() {
    $(".row1").animate({ height: "0vh" });
    openMain();
  }

  function openSceneBottom() {
    $(".row3").animate({ height: "100vh" });
    closeMain();
  }

  function closeSceneBottom() {
    $(".row3").animate({ height: "0vh" });
    openMain();
  }

  function openSceneRight() {
    $(".sceneRight").animate({ width: "100%" });
    $(".sceneOrigin").animate({ width: "0%" });

    $(".sceneRight").animate({ height: "100%" });
    $(".sceneOrigin").animate({ height: "0%" });
  }

  function closeSceneRight() {
    $(".sceneRight").animate({ width: "0%" });
    $(".sceneOrigin").animate({ width: "100%" });
    $(".sceneOrigin").animate({ height: "100%" });
    $(".sceneRight").animate({ height: "0%" });
    openMain();
  }

  function closeMain() {
    $("#main").animate({ height: "0vh" });
  }

  function openMain() {
    $("#main").animate({ height: "100vh" });
  }
});
