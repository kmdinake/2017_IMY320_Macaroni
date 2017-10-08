var dataText = [
  "One day there was virus that hit the earth and changed mankind as we know it. All the old cultures,traditions and ideas that we believed to be our reality was reduced to a single term “ Old Earth”.",
  "Before the dust settled a new regime was born and it proceeded to take the Earth and remains of the Earth and it kept the spirits of man down. After years of planning and preparation, a broken man haunted by memories of the Old Earth and unanswered questions",
  "Our hero sets out to go to the Heart of Toria and tries to save the world after receiving actionable intelligence about the base location of the regime that ascended as the Old Earth fell to the ashes. With the Heart of Toria being rumored to be impenetrable to normal men.Our noble hero chased whispers of a man, who is said to have built the impenetrable walls of Toria a hacker time once knew as Phase to enlist alongside noble soldiers in his strike at the Heart of Toria. "
];

var member = 0;
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
    if (member == 2) {
    } else if (member == 3) {
    } else if (member == 4) {
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
  $(".btn-1").click(function() {
    window.location = "index.html";
  });
});
