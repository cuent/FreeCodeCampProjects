var min = 0;
var sec = 0;

var start = false; // used to start or finish the pomodoro clock.
var rest = false; // used for start/stop counting the rest time.

setInterval(function () {

    if (start) {
        if (min > -1 && sec >= 0) {
            updateScreen();
        } else {
            if (!rest && min == -1 && sec == 59) { // set rest time
                setTime(5, 0);
                rest = true;
            } else if (rest && min == -1 && sec == 59) { // stop pomodoro and update rest variable
                start = false;
                rest = false;
                setTime(25, 0);
                updateScreen();
            }
        }

        if (sec == 0) {
            min--;
            sec = 59;
        } else {
            sec--;
        }


    }

}, 1000);


$(document).ready(function () {
    setTime(25, 0);
    updateScreen();
});

$("#start").click(function () {
    start = true;
});


$("#stop").click(function () {
    start = false;
});


$("#reset").click(function () {
    setTime(25, 0);
    start = false;
    rest = false;
    updateScreen();
});

$("#upMin").click(function () {
    if (min < 120)
        min++;
    updateScreen();
});

$("#downMin").click(function () {
    if (min > 0) {
        min--;
        updateScreen();
    }
});

$("#upSec").click(function () {
    if (sec < 59) {
        sec++;
        updateScreen();
    }
});

$("#downSec").click(function () {
    if (sec > 0) {
        sec--;
        updateScreen();
    }
});

function setTime(min, sec) {
    this.min = min;
    this.sec = sec;
}

function updateScreen() {
    $("#screen").text((min.toString().length == 1 ? "0" + min : min) + ":" +
        (sec.toString().length == 1 ? "0" + sec : sec));
}