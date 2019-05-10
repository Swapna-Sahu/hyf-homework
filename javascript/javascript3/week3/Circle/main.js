class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke();
    }
}

//  Drawing the circle first happens when we call the draw method with random x,y,radius and color
let randomX = Math.floor((Math.random() * 400) + 100);
let randomY = Math.floor((Math.random() * 400) + 100);
let randomR = Math.floor((Math.random() * 100) + 20);
let randomFillColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
let c1 = new Circle(randomX, randomY, randomR, 0, 2 * Math.PI, randomFillColor);
//c1.draw();

// Creating a circle after half second on the screen
setInterval(() => {
    let randomX = Math.floor((Math.random() * 450) + 100);
    let randomY = Math.floor((Math.random() * 400) + 100);
    let randomR = Math.floor((Math.random() * 50) + 20);
    let randomFillColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    let newCircle = new Circle(randomX, randomY, randomR, 0, 2 * Math.PI, randomFillColor);
    newCircle.draw();
}, 500);


function mouseOver() {
    var x = event.clientX;
    var y = event.clientY;
    let newCircle = new Circle(x,y,20, 0, 2 * Math.PI, '#0000FF');
    newCircle.draw();
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("mouse_status").innerHTML = coords;
  }
  
  function mouseOut() {
    document.getElementById("mouse_status").innerHTML= "Oustside of Canvas";
  }

  function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    return x,y
  }