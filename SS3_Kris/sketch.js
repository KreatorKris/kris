/*Kris M.
Title: Bouncing Shapes
Concept: Random shapes bouncing randomly within the canvas.
*/

let x = 200, y = 200;
  let XSpeed = 3, ySpeed = 2;

function setup() {
  createCanvas(600, 600);
}


  background("grey");
 
 function draw() {
  //Motion
  x += xSpeed
  y += ySpeed
  
  //Bounce
  if (x < 0 || x > width) xSpeed *= -1;
  if (y < 0 || y > height) ySpeed *= -1;


  //these are the shapes
  circle(x + 250, y - 100, 90);
  square(x - 140, y - 125, 55);
  triangle(x, y - 80, x - 41, y + 8, x + 54, y + 8);
 }