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

let gamestart; //-declares variable to remember the time for when the game starts
let gametime; //-declares variable that remembers how long the player survives after the keypressed function.

/*Declares the ratio between
 xspeed and yspeed for shapes
 it remebers the relationship between the horizontal(up and down)
 and the vertical(left and right) speeds of the shapes,
 i also used it to help increase the shapes speed while keeping the movement the same.*/
let ratio;

/*declares a varible that remebers which screen should show,
start would mean it will display the start screen, play would mean
the actual game and game over would be the game over screen after the player loses. */
let gameState = "start";

//creates a variable for the canvas(the area where the game will be displayed)
let gameCanvas;

//circle variables
let circleX = 300; //the circles horizontal position.
let circleY = 200; //the circles vertical position.
let circleXSpeed = 3; //controls how fast the circle moves horizontally.
let circleYSpeed = 2; //controls how fast it moves vertically. 

//square variables
let squareX = 150; //the squares horizontal position.
let squareY = 300; //the squares vertical position.
let squareXSpeed = 2; //controls how fast the square moves horizontally.
let squareYSpeed = 3; //controls how fast the square moves vertically.

//triangle variables
let triangleX = 400; //the triangles horizontal position.
let triangleY = 400; //the triangles vertical position.
let triangleXSpeed = -3; //controls how fast the triangle moves horiztonally.(-3 makes it move left)
let triangleYSpeed = 2; //controls how fast the triangle moves vertically.(2 makes it move down)

//the color variables, they decide the starting colors of the shapes.
let circleColor = "yellow";
let squareColor = "green";
let triangleColor = "blue";

//this will run before the game starts.
function preload(){
/*will look through files to load picture,
 will save and load as the variable i choice, static*/
static = loadImage("images/static.png.jpg");
}

/*custom functions for the streamers,
streamerX is the value that tells the function where to draw
the streamer horizontally.*/
function StreamerDrawer(StreamerX) {
  stroke("purple");
  strokeWeight(5);
  noFill();
  circle(StreamerX, 1, 80); /*streamerx decides its horiztonal position,
  1 decides its vertical position, 80 is its diameter.*/
}

/*does the same thing but draws the streamers
on the bottom of the screen instead of the top
like the other one does.*/
function drawerstreamerbottom(StreamerX) {
  stroke("purple");
  strokeWeight(5);
  noFill();
  circle(StreamerX, 600, 80);
}

//will run once the program goes live.
function setup() {
 createCanvas(600, 600); //creates game screen
 imageMode(CENTER); /*this will draw the pic
 in the middle*/
}

/*this function will continue while the game is running,
this also allows the shapes to move and the timer to count.*/
function draw() {
  //the black background
  background("black");

  /*this will calculate how long the player has been alive;
  "if" will check whether the condition is true.
  "gameState === "play"" checks if the player is currently playing.
  "millis()" will get the current time since the program server went live but in milliseconds.
  "-gamestart" subtracts the time when the player started.
  "gametime" will store the result.*/
  if (gameState === "play"){
    gametime = millis() - gamestart;
  }

  /*the start screen,
  the if statement will check if the game is still on the starting screen.*/
  if (gameState === "start") {
    textAlign(CENTER, CENTER); //aligns text in center.
    noStroke(); //no stroke for text

    fill("yellow"); //makes text yellow
    textSize(44); //sets the text size
    text("The Shape Game", 300, 220); //displays the games title position

    fill("white"); //makes text white
    textSize(22); //sets the text size
    text("click anywhere to start", 300, 300); //displays intructions for the game

    textSize(16); //displays text and its smaller intructions
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
    /*stops the rest of the draw
    function running from this point,
    also makes it go back to beginning.*/
    return;
  }

  //the game over screen
  if (gameState === "game over") //will check if the player has lost.
   {textAlign(CENTER, CENTER); //centers the text
    noStroke(); //removes outlines

    //displays the game over message in red
    fill("red"); 
    textSize(48);
    text("game Over", 300, 250);

    //displays the restart instructions
    fill("white");
    textSize(22);
    text("click to restart", 300, 320);

    /*-the timer's text size,
    -will display the players survival time,
    -divided by 1000 to convert the milliseconds into seconds
    -300, 370 decides where the timer appears on the screen*/
    textSize(15);
    text("time:" + (gametime / 1000), 300,370);


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

    return;/*stops the rest of the
    game from running and prevents the shapes
    from continuing to appear behind the game over screen.*/
  }

  //will display the image during game
  //i struggled alot on where to put this
  /*-tint will make the image faded.
  -image() displays the image.
  -static is the image that was loaded eariler.
  -300,300 is the center position.
  -600, 600 is the width and height. */
  tint(15);
  image(static, 300, 300, 600, 600);

    /*-sets the timers text size
    -will display the word "time:" along with the players time in seconds.
    -50, 50, is the postion it will appear. */
    textSize(15);
    text("time:" + (gametime / 1000).toFixed(1), 50,50);


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
  /*will divide the vertical speed by the horizontal speed and
  saves the result in "ratio".*/
  ratio = circleYSpeed / circleXSpeed;

  //will check if the circle is moving left or right.
  if (circleXSpeed < 0) { //checks if the circles horiztonal speed is negative. negative speed = moving left
    circleXSpeed = circleXSpeed - 0.01 * (gametime / 1000); // if the circle is moving left, this makes the speed more negative which means it moves faster to the left.
  } else { //if the circle isnt moving, it will do whatever is in the else statement instead.
    circleXSpeed = circleXSpeed + 0.01 * (gametime / 1000); //will add onto the circles speed, making it move faster to the right.
  }
/*-ratio will remember the relationship between the circles horiztonal and vertical speeds.
-circleXSpeef is thr circles updated horiztonal speed.
-mulitplying them will give the circle a new vertical speed.
-when the horixtonal speed increases the vertical speed changes too, but the circle keeps its movement. */
  circleYSpeed = ratio * circleXSpeed;
  circleX = circleX + circleXSpeed; //changes the circles horiztonal position using the horiztonal speed.
  circleY = circleY + circleYSpeed; //changes the circles vertical position using its vertical speed.
  //code above makes the circle actually move around the screen.
  
  //bouncing the circle
  if (circleX >= width - 45 || circleX <= 45) { //checks if the circle has reached the right or left side of the canvas.
    circleXSpeed = -circleXSpeed; //changes the horizontal speed to its opposite, making it bounce off the walls.
  }

  if (circleY >= height - 45 || circleY <= 45) { //checks if the circle has reached the bottom of top of the canvas.
    circleYSpeed = -circleYSpeed; //changes the vertical speed to its opposite, making it bounce off the walls.
  }

  //this is the circle
  fill(circleColor);
  stroke("purple");
  strokeWeight(3);
  circle(circleX, circleY, 90);

  //moving the square
  ratio = squareYSpeed / squareXSpeed; //calculates the relationship between the squares vertical and horiztonal speed.

  if (squareXSpeed < 0) { //checks if the square is moving left, negative = left.
    squareXSpeed = squareXSpeed - 0.01 * (gametime / 1000); //if the square is moving left, this will make the speed negative, making it move faster
  } else { //if the square doesnt move left, do whats in the else statement instead.
    squareXSpeed = squareXSpeed + 0.01 * (gametime / 1000); //adds to the horiztonal speed, making the square move faster to the right.
  }
  //these lines above will make the square speed up as the player survives longer.

  /*-"ratio" remebers the relationship between the squares horiztonal and vertical speed.
  -squareXSpeed is the new horizontal speed.
  -mulitplying them will calculate a new vertical speed. */
  squareYSpeed = ratio * squareXSpeed;
  squareX = squareX + squareXSpeed; //changes the squares horiztonal position using its horiztonal speed.
  squareY = squareY + squareYSpeed; //changes the squares vertical position using its vertical speed.
  //these 2 lines make the square move around the screen.

  
  //bouncing the square
  if (squareX >= width - 55 || squareX <= 0) {
    squareXSpeed = -squareXSpeed;
  } //This checks if the square reaches the right or left edge of the canvas. If it does, its horizontal speed is reversed so it bounces off the wall.

  if (squareY >= height - 55 || squareY <= 0) {
    squareYSpeed = -squareYSpeed;
  } //This checks if the square reaches the top or bottom edge of the canvas. If it does, its vertical speed is reversed so it bounces back in the opposite direction.

  //this is the square
  fill(squareColor);
  stroke("purple");
  strokeWeight(3);
  square(squareX, squareY, 55);

  //moving the triangle
  ratio = triangleYSpeed / triangleXSpeed; //This calculates the ratio between the triangle's vertical and horizontal speed. It helps the triangle keep moving diagonally when its speed increases.

  if (triangleXSpeed < 0) {
    triangleXSpeed = triangleXSpeed - 0.01 * (gametime / 1000);
  } else {
    triangleXSpeed = triangleXSpeed + 0.01 * (gametime / 1000);
  } //This gradually increases the triangle's horizontal speed as the player stays alive longer. The if and else make sure it speeds up in the direction it is already travelling.

  triangleYSpeed = ratio * triangleXSpeed; //This adjusts the triangle's vertical speed based on its new horizontal speed. It helps the triangle continue moving diagonally instead of only going up and down.
  triangleX = triangleX + triangleXSpeed; //This updates the triangle's horizontal position, making it move left or right.
  triangleY = triangleY + triangleYSpeed; //This updates the triangle's vertical position, making it move up or down.

  //bouncing the triangle
  if (triangleX >= width - 54 || triangleX <= 41) {
    triangleXSpeed = -triangleXSpeed;
  } //This checks if the triangle reaches the left or right edge of the canvas. If it does, its horizontal speed gets reversed, making it bounce off the wall.

  if (triangleY >= height - 88 || triangleY <= 80) {
    triangleYSpeed = -triangleYSpeed;
  } //This checks if the triangle reaches the top or bottom edge of the canvas. If it does, its vertical speed gets reversed, making it bounce back in the opposite direction.

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
  } //This checks if the mouse touches any of the three shapes. If it does, the game switches to the game over screen.

}

//starting and restarting the game itself
// same thing as the explaination labled
//*IMPORTANT*
function keyPressed() {
  if (keyCode === ENTER) {
    if (gameState === "start") {
      gameState = "play";
      gamestart = millis();
      gametime = 0;
    } else if (gameState === "game over") {
      resetGame();
    }
  } //This lets the player start the game by pressing ENTER or restart after losing.
}

//resetting the shapes with a
//custom function, kinda like the streamers
//its kinda like a recall function
function resetGame() {
  circleX = 100;
  circleY = 50;
  circleXSpeed = 3;
  circleYSpeed = 2;

  squareX = 50;
  squareY = 200;
  squareXSpeed = 2;
  squareYSpeed = 3;

  triangleX = 400;
  triangleY = 400;
  triangleXSpeed = -3;
  triangleYSpeed = 2;

  circleColor = "yellow";
  squareColor = "green";
  triangleColor = "blue";

  gamestart = millis();
  gametime = 0;
  gameState = "play";
} //This puts all the shapes back in their starting positions and speeds, resets their colors, and starts the timer again.

//changing colors and starting the game
// with the mouse like the top
function mousePressed() {
  if (gameState === "start") {
    gameState = "play";
    gamestart = millis();
    gametime = 0;
  } //This lets the player start the game by clicking instead of pressing ENTER.

  if (gameState === "game over") {
    resetGame();
  } //This restarts the game when the player clicks after losing.

  //random color changes
  circleColor = random(["red", "blue", "purple", "orange", "green"]);
  squareColor = random(["red", "blue", "purple", "orange", "green"]);
  triangleColor = random(["red", "blue", "purple", "orange", "green"]);
} //This randomly changes the colors of all three shapes whenever the player clicks.
