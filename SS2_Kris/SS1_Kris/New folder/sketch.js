const canvasSize = 700;
function setup() {
  createCanvas(700, 700);
}

function draw() {
background("blue")

let houseLeft = 10;
let houseTop = 50;
let houseSize = 100;
let roofIn = 20;
let houseRight = houseLeft + houseSize;
square (houseLeft, houseTop, houseSize);
fill("red");
quad (houseLeft, houseTop,
    houseRight, houseTop,
    houseRight - roofIn, houseTop - roofRin,
    houseLeft + roofIn, houseTop - roofIn)



}
