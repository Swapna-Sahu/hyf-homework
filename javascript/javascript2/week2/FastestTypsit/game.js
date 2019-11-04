var timeLimit = 0;
var s = 0;
var l = 0;
var reset = false,
timeoutId = null;


// getTimeLimit is called when u pressed start game button
function getTimeLimit() {
    var timeLimit = document.getElementById("time").value;
    timeLimit = timeLimit * 1000;
    setTimeout(function () { alert("Time Out !"); winnerColor(); }, timeLimit);
    var audio = document.getElementById('music').play();
    audio();
}

// gameFunc is the logic of game
function gameFunc() {
    var x = event.which || event.keyCode;
    if (x == 115) {
        s = s + 1;
        document.getElementById("demo").innerHTML = "Count for s: " + s;
    }
    if (x == 108) {
        l = l + 1;
        document.getElementById("demo1").innerHTML = "Count for l: " + l;
    }
    if (s > l) {
        document.getElementById("win").innerHTML = "Winner is : s";

    } else if (l > s) {

        document.getElementById("win").innerHTML = "Winner is : l";
    } else {
        document.getElementById("win").innerHTML = "Draw";
    }

}

// restFunction is for button reset 
var restFunction = function () {
    document.getElementById("time").value = null;
    document.getElementById("game_area").value = null;
    document.getElementById("demo").innerHTML = "Count for s: " + 0;
    document.getElementById("demo1").innerHTML = "Count for l: " + 0;
    document.getElementById("win").innerHTML = null;
    document.getElementById('letter_s').style.backgroundColor = 'rgb(135, 193, 216)';
    reset = true;
    clearTimeout(timeoutId);
    timeoutId = null;
};

// countdwon function 
var download = function () {
    reset = false;
    var timeleft = document.getElementById("time").value;
    var downloadTimer = setInterval(function () {
        if (reset) {
            clearInterval(downloadTimer);
        } else {
            timeleft -= 1;
            document.getElementById("countdown").innerHTML =
                timeleft + " seconds remaining";

            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                audioPause();
                document.getElementById("countdown").innerHTML = "Finished";
            }
        }
    }, 1000);
};
function audioPause() {
    var audiopause = document.getElementById('music').pause();
    audiopause();
}

// winning team background color
function winnerColor() {
    if (s > l) { document.getElementById('letter_s').style.backgroundColor = 'yellow'; }
    if (s < l) { document.getElementById('letter_l').style.backgroundColor = 'yellow'; }   
    
    var audio = document.getElementById('celebrate').play();
    audio();    
}
