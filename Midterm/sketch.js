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

//Declares the image to be called static
let static;

//will be at the beginning to start/play
let gameState = "start";

//the canvas
let gameCanvas;

//circle variables
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
let circleColor = "yellow";
let squareColor = "green";
let triangleColor = "blue";

function preload(){
//will look through files to load picture
static = loadImage("images/static.png.jpg");
}

//custom functions for the streamers
function StreamerDrawer(StreamerX) {
  stroke("purple");
  strokeWeight(5);
  noFill();
  circle(StreamerX, 1, 80);
}

function drawerstreamerbottom(StreamerX) {
  stroke("purple");
  strokeWeight(5);
  noFill();
  circle(StreamerX, 600, 80);
}

function setup() {
 createCanvas(600, 600);
 imageMode(CENTER); //this will draw
 //the pic in the middle

}

function draw() {
  //the black background
  background("black");

  //the start screen
  if (gameState === "start") {
    textAlign(CENTER, CENTER);
    noStroke();

    fill("yellow");
    textSize(44);
    text("The Shape Game", 300, 220);

    fill("white");
    textSize(22);
    text("click anywhere to start", 300, 300);

    textSize(16);
    text("avoid the shapes while changing their colors", 300, 345);


    //the purple streamers on the start screen (copy1)
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
   
    return; //will rerun everything(hopefully,
    //this broke on me a few times)
  }

  //the game over screen
  if (gameState === "game over") {
    textAlign(CENTER, CENTER);
    noStroke();

    fill("red");
    textSize(48);
    text("game Over", 300, 250);

    fill("white");
    textSize(22);
    text("click to restart", 300, 320);

    //the purple streamers on the game over screen (copy2)
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
   
    return; // will rerun everything(hopefully,
    //this also broke on me a few times)
  }

  //will display the image during game
  //i struggled alot on where to put this lol
  tint(15);
  image(static, 300, 300, 600, 600);



  //the purple streamers
  //(NTS: make 2 copies above for the
  //start and finish screen)
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
  // (reminder: need to explain
  // better i keep forgetting ): )
  circleX = circleX + circleXSpeed;
  circleY = circleY + circleYSpeed;

  //bouncing the circle
  if (circleX >= width - 45 || circleX <= 45) {
    circleXSpeed = -circleXSpeed;
  }

  if (circleY >= height - 45 || circleY <= 45) {
    circleYSpeed = -circleYSpeed;
  }

  //this is the circle
  fill(circleColor);
  stroke("purple");
  strokeWeight(3);
  circle(circleX, circleY, 90);

  //moving the square
  squareX = squareX + squareXSpeed;
  squareY = squareY + squareYSpeed;

  //bouncing the square
  if (squareX >= width - 55 || squareX <= 0) {
    squareXSpeed = -squareXSpeed;
  }

  if (squareY >= height - 55 || squareY <= 0) {
    squareYSpeed = -squareYSpeed;
  }

  //this is the square
  fill(squareColor);
  stroke("purple");
  strokeWeight(3);
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

  //this is the triangle
  fill(triangleColor);
  stroke("purple");
  strokeWeight(3);
  triangle(
    triangleX, triangleY - 80,
    triangleX - 41, triangleY + 8,
    triangleX + 54, triangleY + 8
  );

  //small line that follows the mouse
  //(wanted to make this
  // move the shapes like that one game idk the name of
  //  but idk where the code for that is in p5js refs
  stroke("white");
  strokeWeight(10);
  line(mouseX, mouseY, mouseX + 25, mouseY);

  //if the mouse touches a shape
  //game will show game over screen
  
  /*(Found this in the calculation
  section of p5js reference while
  testing some stuff cuz nothing was working b4)
  
  NTS: this helps with detecting
  the collision of the shapes
  and mouse to see if they touch,
  which makes u lose the game

  *IMPORTANT*; 
  explaination incase future me forgets:
  this code checks if the mouse touches
  any of the shapes. if the mouse does,
  then the game will end. (The code itself
  checks the shapes seperatly for this) 
  It is an "if" statement so its like saying;
  "if the mouse touches one of the shapes,
  then its game over". The if will check inside
  the () and if its true then whatever is in {}
  becomes true. gameState = game over is
  just switching to the game over screen.
  REMINDER: the circle uses 45 bc i
  divided the diameter: 90/2 to get 45
  as the radius aka half,(geometry stuff) 
  the square stays 55 because thats
  both its width and height
  (also where if u hit the square
  the game ends)
  the triangle uses its own numbers
  bc of how its drawn and where the
  3 corners are so if u touch it aswell
  it will be game over
  */

  //game over if the mouse touches a shape
  if (dist(mouseX, mouseY, circleX, circleY) 
  < 45 || mouseX >= squareX &&
  mouseX <= squareX + 55 &&
  mouseY >= squareY &&
  mouseY <= squareY + 55 || mouseX >= triangleX - 41 &&
  mouseX <= triangleX + 54 &&
  mouseY >= triangleY - 80 &&
  mouseY <= triangleY + 8) {
  gameState = "game over";
  }

}

//starting and restarting the game itself
// same thing as the explaination labled
//*IMPORTANT*
function keyPressed() {
  if (keyCode === ENTER) {
 if (gameState === "start") {
  gameState = "play";
  } else if (gameState === "game over") {
  resetGame();
  }
  }
}

//resetting the shapes with a
//custom function, kinda like the streamers
//its kinda like a recall function
function resetGame() {
  circleX = 300;
  circleY = 200;
  circleXSpeed = 3;
  circleYSpeed = 2;

  squareX = 150;
  squareY = 300;
  squareXSpeed = 2;
  squareYSpeed = 3;

  triangleX = 400;
  triangleY = 400;
  triangleXSpeed = -3;
  triangleYSpeed = 2;

  circleColor = "yellow";
  squareColor = "green";
  triangleColor = "blue";

  gameState = "play";
}

//changing colors and starting the game
// with the mouse like the top
function mousePressed() {
  if (gameState === "start") {
    gameState = "play";
  }

  if (gameState === "game over") {
    resetGame();
  }

  //random color changes
  circleColor = random(["red", "blue", "purple", "orange", "green"]);
  squareColor = random(["red", "blue", "purple", "orange", "green"]);
  triangleColor = random(["red", "blue", "purple", "orange", "green"]);
}
