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
  gameCanvas = createCanvas(600, 600);
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

    //the purple streamers on the start screen
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

    return;
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

    //the purple streamers on the game over screen
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

    return;
  }

  //the purple streamers
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
  stroke("white");
  strokeWeight(10);
  line(mouseX, mouseY, mouseX + 25, mouseY);

  //checking if the mouse touches a shape
  /*(Found this in the calculation
  section of p5js reference)*/

  let hitCircle = dist(mouseX, mouseY, circleX, circleY) < 45;

  let hitSquare =
    mouseX >= squareX &&
    mouseX <= squareX + 55 &&
    mouseY >= squareY &&
    mouseY <= squareY + 55;

  let hitTriangle =
    mouseX >= triangleX - 41 &&
    mouseX <= triangleX + 54 &&
    mouseY >= triangleY - 80 &&
    mouseY <= triangleY + 8;

  //game over if the mouse touches a shape
  if (hitCircle || hitSquare || hitTriangle) {
    gameState = "game over";
    return;
  }
}

//starting and restarting the game
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

//changing colors and starting with the mouse
function mousePressed() {
  if (gameState === "start") {
    gameState = "play";
    return;
  }

  if (gameState === "game over") {
    resetGame();
    return;
  }

  //random color changes
  circleColor = random(["red", "blue", "purple", "orange", "green"]);
  squareColor = random(["red", "blue", "purple", "orange", "green"]);
  triangleColor = random(["red", "blue", "purple", "orange", "green"]);
}
