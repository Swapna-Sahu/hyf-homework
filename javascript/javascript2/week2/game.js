var timeLimit = 0;
var s = 0;
var l = 0;
var reset = false,
timeoutId = null;



function getTimeLimit() {
    var audio = document.getElementById('music').play();
    audio();
    var timeLimit = document.getElementById("time").value;
    timeLimit = timeLimit * 1000;
    timeoutId = setTimeout(logOut, timeLimit);
}

var logOut = function () {
    alert("Time Out !");
   /* var music1 = document.getElementById('music').stop();
    music1();*/
    
};

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
        
        document.getElementById('letter_s').style.backgroundColor = 'yellow';
        document.getElementById("win").innerHTML = "Winner is : s";
        
    } else if (l > s) {
        
        document.getElementById('letter_l').style.backgroundColor = 'yellow';
        document.getElementById("win").innerHTML = "Winner is : l";
    } else {
        document.getElementById("win").innerHTML = "Draw";
    }
   
}

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
                document.getElementById("countdown").innerHTML = "Finished";
            }
        }
    }, 1000);
};
