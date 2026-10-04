/*Kris M.
Title: Moving Shapes
Concept: Random shapes moving
out of the canvas.
*/


//Declaring the variables
/* Instead of declaring all together
 like SS3, here, will be seperate.*/

// circle
let circleX = 300;
let circleY = 200;
let circleXSpeed = 3;
let circleYSpeed = 2;

//sqaure
let squareX = 150;
let squareY = 300;
let squareXSpeed = 2;
let squareYSpeed = 3;

//triangle
let triangleX = 400;
let triangleY = 400;
let triangleXSpeed = -3;
let triangleYSpeed = 2;


//custom functions for the streamers
function StreamerDrawer(StreamerX){
  stroke("purple");
  strokeWeight(5);
  fill(0,0)
  circle(StreamerX,1,80)
}

 function drawerstreamerbottom(StreamerX){
  stroke("purple");
  strokeWeight(5);
  fill(0,0)
circle(StreamerX,600,80)
  


 }




function setup() {
  createCanvas(600, 600);
  
}
 
function draw (){
  //The purple streamers
 background("white");
 StreamerDrawer(40);
 StreamerDrawer(120);
 StreamerDrawer(200);
 StreamerDrawer(280);
 StreamerDrawer(360);
 StreamerDrawer(440);
 StreamerDrawer(520);
 StreamerDrawer(600);

 drawerstreamerbottom(40);
 drawerstreamerbottom(120);
 drawerstreamerbottom(200);
 drawerstreamerbottom(280);
 drawerstreamerbottom(360);
 drawerstreamerbottom(440);
 drawerstreamerbottom(520);
 drawerstreamerbottom(600);

  //moving the circle
  circleX = circleX + circleXSpeed;
  circleY = circleY + circleYSpeed;

  //bouncing the circle
  if (circleX >= width -45 || circleX <= 45 ) {
    circleXSpeed = -circleXSpeed;
  }
  
  if (circleY >= height - 45 || circleY <= 45) {
    circleYSpeed = -circleYSpeed;
  }
  
  //these are the shapes and their colors.
   fill("yellow");
    circle(circleX, circleY, 90);
  fill("green")
  square(squareX, squareY, 55);
  fill("blue")
  triangle(triangleX, triangleY - 80, triangleX - 41, triangleY + 8, triangle + 54, triangleY + 8);
}
 








