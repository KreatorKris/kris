/*Kris M.
Title: A pastel floral pattern */

//canvas
function setup() {
  createCanvas(400, 400);
}


function draw() {
//background color
background(0,255,150);

//variables
let x = 20; //sets the starting horizontal position where the first flower will be drawn.(left to right)
while (x < width) { //copies the flowers until they reach across the canvas.
let y = 20; //sets the starting vertical position for the flowers in each new column.(up to down)
while (y < height) { //copies the flowers until they reach the bottom of canvas.

//flower pattern
//parts of the flower:

  //top petal
  stroke("black");
  strokeWeight(2);
  fill("pink");
  circle(x, y - 10, 20);

  //right petal
  fill("pink");
  circle(x + 10, y, 20);

  //bottom petal
  fill("pink");
  circle(x, y + 10, 20);

  //left petal
  fill("pink");
  circle(x - 10, y, 20);

  //middle
  fill("yellow");
  circle(x, y, 15);

  y = y + 80; //copies flowers down.
 }
  x = x + 80; //copies flowers to the right.
  }

  //line pattern vines
  let a = 55; // sets the variable for the starting positon of the vine.

  while (a < width) { //copies the vines across the canvas.
  stroke("green");
  strokeWeight(4);
  line(a, 10, a - 5, 50);
  line(a - 5, 50, a, 80);
  line(a - 5, 110, a, 80);
  line(a, 160, a - 5, 110);
  line(a - 5, 200, a, 160);
  line(a, 240, a - 5, 200);
  line(a - 5, 280, a, 240);
  line(a, 320, a - 5, 280);
  line(a - 5, 360, a, 320);

  //copies the vines to the right
  a = a + 80;
  }
}