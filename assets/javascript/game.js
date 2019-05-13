var wins = 0;
var losses = 0;
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var targetGoal;
var score = 0;

$(document).ready(function() {

//Crystal Constructor
var Crystal = function crystal (crystal){
    this.hiddenValue = newCrystal();
    this.timer = function timer() {
    $(crystal).text(this.hiddenValue);
        setTimeout(function() {
        $(crystal).text("Hidden");
        }, timervalue());
    };
}

var crystal1 = new Crystal( ".pCrystal1" );
var crystal2 = new Crystal( ".pCrystal2" );
var crystal3 = new Crystal( ".pCrystal3" );
var crystal4 = new Crystal( ".pCrystal4" );

      newgame();

      $(".btnCrystal1").click(function() {
          addtoscore(crystal1.hiddenValue);
          crystal1.timer();
      });

    $(".btnCrystal2").click(function() {
        addtoscore(crystal2.hiddenValue);
        crystal2.timer();
    });

    $(".btnCrystal3").click(function() {
        addtoscore(crystal3.hiddenValue);
        crystal3.timer();
    });

    $(".btnCrystal4").click(function() {
        addtoscore(crystal4.hiddenValue);
        crystal4.timer();
    });

    function newCrystal() {
        //math for generating random number.
        var choice = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        return choice;
    }

    function newgame() {
        //Generate a random value between 1 and 12 to each crystal.
        generateNewTargetGoal();
        //generate new crystals
        crystal1 = new Crystal( ".pCrystal1" );
        crystal2 = new Crystal( ".pCrystal2" );
        crystal3 = new Crystal( ".pCrystal3" );
        crystal4 = new Crystal( ".pCrystal4" );
    }

    function timervalue() {
        return 1000;
    }

    function generateNewTargetGoal() {
        targetGoal = Math.floor(Math.random() * (120 - 19)) + 19;
        $(".targetnumber").text("Target Number: " + targetGoal.toString());
    }

    function addtoscore(crystalclicked) {
        score = score + crystalclicked ;
        updatescore(score);
        if (score === targetGoal) {
            wingame();
        }
        if (score > targetGoal) {
            losegame();
        }
    }

    function updatescore(inputvalue1) {
        $(".ptotalscore").text("Your total score is: " + inputvalue1.toString());
    }

    function wingame() {
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
    }

    function losegame() {
        losses++;
        $(".losses").text("losses: " + losses.toString());
        reset();
    }

    function reset() {
        score = 0;
        generateNewTargetGoal();
        updatescore(0);
        newCrystal();
        newgame();
    }
});