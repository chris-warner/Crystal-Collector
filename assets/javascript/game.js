var wins;
var losses;
var randomCrystal
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystals = [];
var RandomNumberBucket;
var isClicked = false;
var targetGoal;
var score;

$(document).ready(function() {

    newgame();

    $(".btnCrystal1").click(function() {
        $(this).text(crystals[0]);
        setTimeout(function() {
            $(".btnCrystal1").text("");
        }, 5000);
    });

    $(".btnCrystal2").click(function() {
        $(this).text(crystals[1]);
        setTimeout(function() {
            $(".btnCrystal2").text("");
        }, 5000);
    });

    $(".btnCrystal3").click(function() {
        $(this).text(crystals[2]);
        setTimeout(function() {
            $(".btnCrystal3").text("");
        }, 5000);
    });

    $(".btnCrystal4").click(function() {
        $(this).text(crystals[3]);
        setTimeout(function() {
            $(".btnCrystal4").text("");
        }, 5000);
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

});

function generateNewTargetGoal() {
    targetGoal = Math.floor(Math.random() * (120 - 19)) + 19;
    $(".targetnumber").text("Target Number: " + targetGoal.toString());
}