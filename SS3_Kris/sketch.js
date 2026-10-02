/*Kris M.
Title: Moving Shapes
Concept: Random shapes moving
out of the canvas.
*/


//Declaring the variables
let x = 200, y = 200;
  let XSpeed = 3;
  let YSpeed = 2;
 
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

function mousePressed(){
 /*using the mouse button to click makes the
 shapes go in a random
 direction and speed*/
  XSpeed = random(-10,10);
  YSpeed = random(-10,10);
  x = mouseX;
  y = mouseY;
}


function setup() {
  createCanvas(600, 600);
  
}
 
function draw (){
  //The purple streamers
 background("black");
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
  //Motion
  x = x + XSpeed;
  y = y + YSpeed;
  
  
  

 
  //these are the shapes and their colors.
   fill("yellow");
    circle(x + 250, y - 100, 90);
  fill("green")
  square(x - 140, y - 125, 55);
  fill("blue")
  triangle(x, y - 80, x - 41, y + 8, x + 54, y + 8);
}
 








