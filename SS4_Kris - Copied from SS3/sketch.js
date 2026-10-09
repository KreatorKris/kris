/*Kris M.
Title: Bouncing Shapes
Concept: Random shapes bouncing within the canvas.
Explaination for SS4; (incase i forget how to explain)
- This new project is based on my previous one from SS3,
but this is more modifted and actually what I had wanted before.
the code was inspired by the example 05-03 displayed during class
where the ball was bouncing within the canvas. I used the same idea of
changing the X and Y values to move my shapes, but i did mine one by one
in a specific order so i wouldnt get confused with the shapes.
i also used the "if" statements to make my shapes bounce when they reached
the end of the canvas, that was the hardest part because i kept getting the symbols
that we went over in class confused. With these ideas in mine, i used them to create my project;
a circle, square and a triangle bouncing within the canvas like those old tv / dvd screens.
*/

//Declaring the variables
/* Instead of declaring all together
 like SS3, here, will be seperate.*/

// circle variables
let circleX = 300;
let circleY = 200;
let circleXSpeed = 3;
let circleYSpeed = 2;

//square variables
let squareX = 150;
let squareY = 300;
let squareXSpeed = 2;
let squareYSpeed = 3;

//triangle variables
let triangleX = 400;
let triangleY = 400;
let triangleXSpeed = -3;
let triangleYSpeed = 2;

//the color variables
let circleColor= "yellow";
let squareColor= "green";
let triangleColor= "blue";


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
 /* this is going to be drawing very quickly, 
 which makes the shapes move*/
function draw (){
  //The purple streamers aka custom functions
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

  /*moving the circle, 
  x and y posistions are changed using
  the speed variables, along with where to draw it.
  (ALL OF THE SHAPES WORK THIS WAY!!!)*/
  circleX = circleX + circleXSpeed;
  circleY = circleY + circleYSpeed;

  //bouncing the circle
  if (circleX >= width -45 || circleX <= 45 ) {
    circleXSpeed = -circleXSpeed;
  }
  
  if (circleY >= height - 45 || circleY <= 45) {
    circleYSpeed = -circleYSpeed;
  }
  
  //this is the circle
  fill(circleColor);
   circle(circleX, circleY, 90);


  //moving the square
  squareX = squareX + squareXSpeed;
  squareY = squareY + squareYSpeed;

  //bouncing the square
  if (squareX >= width - 55 || squareX <= 0) {
    squareXSpeed = -squareXSpeed;
  }

  if ( squareY >= height - 55 || squareY <= 0) {
    squareYSpeed = -squareYSpeed;
  }
  //this is the square
   fill(squareColor)
  square(squareX, squareY, 55);
  

  //moving the triangle
  triangleX = triangleX + triangleXSpeed;
  triangleY = triangleY + triangleYSpeed;

  //bouncing the triangle
  if (triangleX >= width - 54 || triangleX <= 41) {
    triangleXSpeed = -triangleXSpeed;
  }

  if (triangleY >= height - 88 || triangleY <= 80) {
    triangleYSpeed = -triangleYSpeed;
  }

  fill(triangleColor)
  triangle(triangleX, triangleY - 80, triangleX - 41, triangleY + 8, triangleX + 54, triangleY + 8);
}
 /*when you press the mouse, each color of the shape will
 be randomized into different colors. 
 i looked up "random color changing p5js reference" and used the refrence
 that came up, but i had to use spefifc colors because the random cmd
 wasnt working. */ 
  function mousePressed(){
  circleColor = random(["red", "blue", "purple", "orange", "green"])
  squareColor = random(["red", "blue", "purple", "orange", "green"])
  triangleColor = random(["red", "blue", "purple", "orange", "green"])


}







