var wins = 0;
var losses = 0;
var randomCrystal
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystals = [];
var randomnumberBucket;
var isClicked = false;
var targetGoal;
var score = 0;
var i;

$(document).ready(function() {

    newgame();

    $(".btnCrystal1").unbind("click").click(function() {
        addtoscore(0);
        $(".pCrystal1").text(crystals[0]);
        setTimeout(function() {
            $(".pCrystal1").text("Hidden");
        }, timervalue());
    });

    $(".btnCrystal2").unbind("click").click(function() {
        addtoscore(1);
        $(".pCrystal2").text(crystals[1]);
        setTimeout(function() {
            $(".pCrystal2").text("Hidden");
        }, timervalue());
    });

    $(".btnCrystal3").unbind("click").click(function() {
        addtoscore(2);
        $(".pCrystal3").text(crystals[2]);
        setTimeout(function() {
            $(".pCrystal3").text("Hidden");
        }, timervalue());
    });

    $(".btnCrystal4").unbind("click").click(function() {
        addtoscore(3);
        $(".pCrystal4").text(crystals[3]);
        setTimeout(function() {
            $(".pCrystal4").text("Hidden");
        }, timervalue());
    });

    function newCrystal() {
        //math for generating random number.
        var choice = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        console.log(choice);
        return choice;
    }

    function newgame() {
        //Generate a random value between 1 and 12 to each crystal.
        crystals[0] = newCrystal();
        crystals[1] = newCrystal();
        crystals[2] = newCrystal();
        crystals[3] = newCrystal();
        //New Target Number
        generateNewTargetGoal();
    }

    function timervalue() {
        return 1000;
    }

    function generateNewTargetGoal() {
        targetGoal = Math.floor(Math.random() * (120 - 19)) + 19;
        $(".targetnumber").text("Target Number: " + targetGoal.toString());
    }

    function addtoscore(crystalclicked) {
        score = score + crystals[crystalclicked];
        updatescore(score);
        console.log(score);
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
    }

});