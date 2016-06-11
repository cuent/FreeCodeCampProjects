var min = 1;
var sec = 59;

setInterval(function () {


    if (min > -1 && sec >= 0) {
        console.log("min=" + min + "_sec=" + sec);

    }

    if (sec < 0) {
        min--;
        sec = 59;
    } else {
        sec--;
    }


}, 1000);