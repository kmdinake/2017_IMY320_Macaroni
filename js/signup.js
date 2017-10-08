var skills = [
  {
    index: 0,
    name: "The Graphics Guy ",
    color: "#383375",
    description: "Hello  my name is Joey I'm the graphics guy ;)."
  },
  {
    index: 1,
    name: "The Programmer",
    color: "#5A2F43",
    description:
      "The names Joe. I'm the brains of the group, I do all the real work while the other guys draw images," +
      "give themselves meaningless title n hover aroud others work stations and pick out sounds from asset stores."
  },
  {
    index: 2,
    name: "The Sound Guy",
    color: "#594722",
    description:
      "I spend most of my time playing online games and download songs the day before the deadline :), i love being the sound guy."
  },
  {
    index: 3,
    name: "The team coordinator",
    color: "#594722",
    description:
      "Hey I'm Joey the group coordinator please ignore my colleage, he seems to believe code is all there is to a have successful project"
  }
];

var sliderOBj;

var dataText = [
  "Hello  my name is Joey I'm the graphics guy ;)",
  "Before the dust settled a new regime was born and it proceeded to take the Earth and remains of the Earth and it kept the spirits of man down. After years of planning and preparation, a broken man haunted by memories of the Old Earth and unanswered questions",
  "Our hero sets out to go to the Heart of Toria and tries to save the world after receiving actionable intelligence about the base location of the regime that ascended as the Old Earth fell to the ashes. With the Heart of Toria being rumored to be impenetrable to normal men.Our noble hero chased whispers of a man, who is said to have built the impenetrable walls of Toria a hacker time once knew as Phase to enlist alongside noble soldiers in his strike at the Heart of Toria. "
];

$(document).ready(function() {
  var Slider = function(skills) {
    this.skills = skills;
    this.first = true;
    this.nextTargetIndex = 1;
    this.currTargetIndex = 0;
    this.prevTargetIndex = 0;
    this.elemNum = 11;

    this.viewState = function() {
      console.log("The slider state");
      console.log("=================");
      console.log("");
      console.log("prevTargetIndex == " + this.prevTargetIndex);
      console.log("currTargetIndex == " + this.currTargetIndex);
      console.log("nextTargetIndex == " + this.nextTargetIndex);
      console.log(" ");
      console.log("=================");
    };

    this.addSkill = function(pos) {
      //this.currTargetIndex is not update in this function but in the addTitle()

      if (pos == "back") {
        $("div.skill-slider").append(
          '<div class="skill next-skill new-skill"><img class="skill_img" src="img/JoeFlat' +
            '.png" /><h1></h1></div>'
        );
        this.inc("p", 1);
      } else if (pos == "front") {
        $("div.skill-slider").prepend(
          '<div class="skill next-skill new-skill"><img class="skill_img" src="img/JoeFlat' +
            '.png" /><h1></h1></div>'
        );
        this.inc("n", -1);
      }
    };

    this.inc = function(num, v) {
      if (num == "c") {
        if (v >= 1) {
          this.currTargetIndex = (this.currTargetIndex + v) % this.elemNum;
          return this.currTargetIndex;
        } else {
          if (this.currTargetIndex == 0) {
            this.currTargetIndex += this.elemNum - 1;
          }
          return this.currTargetIndex--;
        }
      } else if (num == "p") {
        if (v >= 1) {
          this.prevTargetIndex = (this.prevTargetIndex + v) % this.elemNum;
          return this.prevTargetIndex;
        } else {
          if (this.prevTargetIndex == 0) {
            this.prevTargetIndex += this.elemNum - 1;
          }
          return this.prevTargetIndex--;
        }
      } else if (num == "n") {
        if (v >= 1) {
          this.nextTargetIndex = (this.nextTargetIndex + v) % this.elemNum;
          return this.nextTargetIndex;
        } else {
          if (this.nextTargetIndex == 0) {
            this.nextTargetIndex += this.elemNum - 1;
          }
          return this.nextTargetIndex--;
        }
      }
    };

    this.animatedNext = function() {
      this.viewState();
      $("div.skill.prev-skill").animate(
        { width: "0%" },
        {
          duration: 1000,
          complete: function() {
            $(".toBeDeleted").remove();
          }
        }
      );
      $("div.skill.prev-skill").addClass("toBeDeleted");

      $("div.skill.current-skill").addClass("headerToBeRemoved");
      $("div.skill.current-skill").animate(
        { width: "20%" },
        {
          duration: 1000,
          complete: function() {
            $("div.skill.headerToBeRemoved h3").animate(
              { opacity: 0 },
              {
                duration: 600,
                complete: function() {
                  $("div.skill.headerToBeRemoved h3").remove();
                }
              }
            );
          }
        }
      );

      $("div.skill.current-skill").toggleClass("prev-skill");
      $("div.skill.current-skill").toggleClass("current-skill");

      $("div.skill.next-skill").animate({ width: "40%" }, 1000);
      $("div.skill.next-skill").toggleClass("current-skill");
      this.addTitle("next");

      $("div.skill.next-skill").toggleClass("next-skill");
      this.addSkill("back");
      $("div.skill.new-skill").animate({ width: "20%" }, 1000);
      $("div.skill.new-skill").toggleClass("new-skill");
    };

    this.addTitle = function(direction) {
      if (direction == "next") {
        var i = this.inc("c", 1);
        $("div.skill.current-skill").append(
          "<h3>" + this.skills[i % skills.length].name + "</h3>"
        );
      } else if (direction == "prev") {
        var i = this.inc("c", -1) - 1;
        $("div.skill.current-skill").append(
          "<h3 style='color:" +
            this.skills[i].color +
            ";'>" +
            this.skills[i].name +
            "</h3>"
        );
      }
    };

    this.animatedPrev = function() {
      //current next skill is delete
      //start
      this.viewState();
      $("div.skill.next-skill").animate(
        { width: "0%" },
        {
          duration: 1000,
          complete: function() {
            $(".toBeDeleted").remove();
          }
        }
      );
      $("div.skill.next-skill").addClass("toBeDeleted");
      //end

      //position curr as next
      //start
      $("div.skill.current-skill").addClass("headerToBeRemoved");
      $("div.skill.current-skill").animate(
        { width: "20%" },
        {
          duration: 1000,
          complete: function() {
            $("div.skill.headerToBeRemoved h3").animate(
              { opacity: 0 },
              {
                duration: 600,
                complete: function() {
                  $("div.skill.headerToBeRemoved h3").remove();
                }
              }
            );
          }
        }
      );
      //current skill becomes the next skill
      $("div.skill.current-skill").toggleClass("next-skill");
      $("div.skill.current-skill").toggleClass("current-skill");
      //end

      //prev skill becomes new curr skill
      $("div.skill.prev-skill").animate({ width: "40%" }, 1000);
      $("div.skill.prev-skill").toggleClass("current-skill");
      $("div.skill.prev-skill").toggleClass("prev-skill");
      this.addTitle("prev");

      // $("div.skill.next-skill").toggleClass("next-skill");
      this.addSkill("front");
      $("div.skill.new-skill").animate({ width: "20%" }, 1000);
      $("div.skill.new-skill").toggleClass("new-skill");
    };
  };
  sliderOBj = new Slider(skills);
  sliderOBj.viewState();

  $(".arrow-left").click(function() {
    StartTextAnimation(this.prevTargetIndex);
    console.log("XXXxxxxxxxxxxxxxxx");
    sliderOBj.animatedPrev();
  });

  $(".arrow-right").click(function() {
    StartTextAnimation(this.nextTargetIndex);
    sliderOBj.animatedNext();
  });
});

var member = 0;
var timeOut;
function myTypeWriter() {
  StartTextAnimation(0);
}

// type one text in the typwriter
// keeps calling itself until the text is finished
// start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
  if (typeof skills[i] == "undefined") {
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
    typeWriter(skills[i].description, 0, function() {
      // after callback (and whole text has been animated), start next text
      StartTextAnimation(i + 1);
    });
  }
}

function typeWriter(text, i, fnCallback) {
  // chekc if text isn't finished yet
  if (i < text.length) {
    document.querySelector("div.typewrite").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
    // wait for a while and call this function again for next character
    //});
    timeOut = setTimeout(function() {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  } else if (typeof fnCallback == "function") {
    // text finished, call callback if there is a callback function
    // call callback after timeout

    sliderOBj.animatedNext();
    if (this.nextTargetIndex == 3) {
      StartTextAnimation(3);
    }
    /*else*/
    setTimeout(fnCallback, 700);
  }
}
