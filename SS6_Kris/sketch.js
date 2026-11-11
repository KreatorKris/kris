/*Kris M.
Title: The process of putting up a christmas tree
Instructions: 


*/

//declaring variables
let x = []
let y = []

function setup() {
createCanvas(500, 500);
}


function draw() {
background(255, 195, 0);
  
//the tree
  noStroke()
  fill("green"); //color of tree
  triangle(160, 150, 250, 50, 330, 150); //top
  triangle(100, 250, 250, 100, 400, 250); //middle
  triangle(60, 350, 250, 200, 440, 350); //bottom

//the tree trunk
  noStroke()
  fill(100, 20, 0);
  square(200, 350, 100);

//the star
  noStroke();
  fill("yellow");
//top point
  triangle(250, 5, 235, 45, 265, 45);

//upper right point
  triangle(290, 30, 255, 45, 265, 60);

//lower right point
  triangle(280, 75, 255, 55, 250, 70);

//lower left point
  triangle(220, 75, 250, 55, 250, 70);

//upper left point
  triangle(210, 30, 245, 45, 235, 60);

//fill in middle
  circle(250, 50, 25);


//ornaments
  strokeWeight(2)
  stroke("black")
  line(40, 60, 40, 45);
  fill("red");
  circle(40, 60, 20);

//more ornaments
  noStroke();
  fill("red");

for (let i = 0; i < x.length; i++){
circle(x[i], y[i], 20);}
}
 

//add ornaments when mouse is pressed
function mousePressed() {
 x.push(mouseX);
y.push(mouseY);
}

//delete ornaments when a key is pressed
function keyPressed() {
x.pop();
y.pop();
}