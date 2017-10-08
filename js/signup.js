var skills = [
  { index: 0, name: "The Graphics Guy ", color: "#383375" },
  { index: 1, name: "The Programmer", color: "#5A2F43" },
  { index: 2, name: "The Sound Guy", color: "#594722" },
  { index: 3, name: "The team coordinator", color: "#594722" }
];

$(document).ready(function() {
  var Slider = function(skills) {
    this.skills = skills;
    this.first = true;
    this.nextTargetIndex = 3;
    this.currTargetIndex = 1;
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

  var sliderOBj = new Slider(skills);

  sliderOBj.viewState();

  $(".arrow-left").click(function() {
    console.log("XXXxxxxxxxxxxxxxxx");
    sliderOBj.animatedPrev();
  });

  $(".arrow-right").click(function() {
    sliderOBj.animatedNext();
  });

  $("body").on("DOMMouseScroll mousewheel", function(event) {
    console.log("up");
    if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
      //alternative options for wheelData: wheelDeltaX & wheelDeltaY
      sliderOBj.animatedPrev();
    } else {
      sliderOBj.animatedNext();
    }
    //prevent page fom scrolling
    return false;
  });

  positionPin(2);
  $(".signup-progress-bar").click(function() {
    resetActive();
    $(this).addClass("active");
    curr = this;
    positionPin(determineProg(curr));
  });

  function resetActive() {
    $(".signup-progress-bar").removeClass("active");
  }

  function determineProg(bar) {
    var temp = 0;
    var allPositions = $(".signup-progress-bar");
    for (; allPositions[temp] != bar && temp < 4; temp++) {}
    return temp;
  }

  function positionPin(pos) {
    var newMarginLeft = 10 + pos * 20 + pos * 5;
    newMarginLeft = newMarginLeft + "%";
    $(".pin").animate({ marginLeft: newMarginLeft }, 700);
  }
});
