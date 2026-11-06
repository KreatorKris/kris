/*Kris M.
Title: A pastel floral pattern
intructions; press your mouse to make a darker spookier pattern appear,
otherwise if you dont: a more viberent and happier pattern is here to stay! */

//canvas
function setup() {
createCanvas(400, 370);
}


function draw() {
//checks if the mouse is pressed
if (mouseIsPressed) {

//dark grey background
background(50);

//line pattern vines
let a = 55; // sets the variable for the starting positon of the vine.
while (a < width) { //copies the vines across the canvas.

//the vines
stroke("black");
strokeWeight(4);
line(a - 25, 10, a - 30, 50);
line(a - 30, 50, a - 25, 80);
line(a - 30, 110, a - 25, 80);
line(a - 25, 160, a - 30, 110);
line(a - 30, 200, a - 25, 160);
line(a - 25, 240, a - 30, 200);
line(a - 30, 280, a - 25, 240);
line(a - 25, 320, a - 30, 280);
line(a - 30, 360, a - 25, 320);

//thorns on the black vines
for (let t = 30; t < 360; t = t + 40) { //copies the thorns down the vine.
fill("black");
noStroke();
triangle(a - 27, t, a - 42, t - 10, a - 29, t + 5); //left thorn
triangle(a - 27, t, a - 12, t - 10, a - 25, t + 5); //right thorn
}

/*copies the vines to the right.
to remember/explain in better words:
- everytime the loop finishes drawing 1 vine,
it adds +80 to "a", which changes the starting position of the next vine.
this also makes it repeat within the canvas instead of the vines being drawn ontop of each other.*/
a = a + 80;
}

//another flower pattern:
  //variables; b = x, c = y
  let b = 55; //sets the starting horizontal position of the flower.(left to right)
  while (b < width) { //copies the flowers across the canvas.
  let c = 60; //sets the starting vertical position of the flower.(up to down)
  while (c < height) { //copies the flowers down the canvas.

  //top right petal
  stroke("black");
  strokeWeight(2);
  fill("blue");
  circle(b + 7, c - 7, 15); //moves 7 right/up

  //bottom right petal
  circle(b + 7, c + 7, 15); //moves 7 right/down

  //bottom left petal
  circle(b - 7, c + 7, 15) //moves 7 left/down

  //top left petal
  circle(b - 7, c - 7, 15) //moves 7 left/up

  //middle
  fill("yellow");
  circle(b, c, 10);

  c = c + 80; //copies flowers 80 down.
  }
  b = b + 80; //copies flowers 80 right.
}

}

//if the mouse is not pressed, the original pattern appears
else {

//background color
background(0,255,150);

//variables
let x = 20; //sets the starting horizontal position where the first flower will be drawn.(left to right)
while (x < width) { //copies the flowers until they reach across the canvas.
let y = 20; //sets the starting vertical position for the flowers in each new column.(up to down)
while (y < height) { //copies the flowers until they reach the bottom of canvas.
//height and width is based off canvas size.

//flower pattern
// (+) = moving right/down, (-) = moving left/up
//parts of the flower:
  //top petal
  stroke("black");
  strokeWeight(2);
  fill("pink");
  circle(x, y - 10, 20); //moves 10 up

  //right petal
  fill("pink");
  circle(x + 10, y, 20); //moves 10 right

  //bottom petal
  fill("pink");
  circle(x, y + 10, 20); //moves 10 down

  //left petal
  fill("pink");
  circle(x - 10, y, 20); //moves 10 left

  //middle
  fill("yellow");
  circle(x, y, 15);

  y = y + 80; //copies flowers 80 down.
 }
  x = x + 80; //copies flowers 80 right.
  }

  //line pattern vines
  let a = 55; // sets the variable for the starting positon of the vine.
  while (a < width) { //copies the vines across the canvas.

  //the vines
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

  //leaves on the green vines
for (let t = 30; t < 360; t = t + 40) { //starts at 30 and adds 40 each time until it reaches 360. This copies the leaves down the vine.
stroke("green"); //sets the outline color of the leaves to green.
strokeWeight(1); //makes the outline thin.
fill("lightgreen"); //sets the inside color of the leaves to light green.

triangle(a - 3, t, a - 18, t - 12, a - 5, t + 5); //makes a triangle leaf on the left side of the vine.
triangle(a - 3, t, a + 12, t - 12, a - 1, t + 5); //makes a triangle leaf on the right side of the vine.

circle(a - 12, t - 7, 6); //makes a small round leaf on the left side of the vine.
circle(a + 6, t - 7, 6); //makes a small round leaf on the right side of the vine.
}

  /*copies the vines to the right.
  to remember/explain in better words:
  everytime the loop finishes drawing 1 vine,
  it adds +80 to "a", which changes the starting position of the next vine.
  this also makes it repeat within the canvas instead of the vines being drawn ontop of each other.*/
  a = a + 80;
  }
}

}