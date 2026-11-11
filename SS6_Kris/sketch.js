/*Kris M.
Title: The process of putting up a christmas tree
Instructions: 


*/

//declaring variables, but these are the 2 arrays
let x = [] //stores the horiztonal position(left/right)
let y = [] //stores the vertical posistion(up/down)

function setup() { //runs once the sketch starts
createCanvas(500, 500); //the canvas
}


function draw(){
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
  for(let i = 0; i < x.length; i++) { /*the for loop repeats the code for every ornament in the arrays.
  "i" starts at 0 but increases by 1 each time until it reaches the number of ornaments.
  its like: i = what will happen, 0 = first ornament, 1 = second ornament, 2 = third ornament, etc..*/
  stroke("black");
  strokeWeight(2);
  line(x[i], y[i], x[i], y[i] - 15); //line uses x1, y1, x2, y2. -15 moves the end of the line 15 up.
  fill("red");
  circle(x[i], y[i], 20);} //will draw the red circle at the saved x and y position. 20 means 20 wide
}
/*NTS: the "for" loop goes through all the positions saved in the arrays and draws a circle&line for every ornament.*/


//add ornaments when mouse is pressed
function mousePressed() {
x.push(mouseX); //saves the mouses horiztonal positon in xray
y.push(mouseY); //saves the mouses verticl positon in the yray
}

//delete ornaments when a key is pressed
function keyPressed() {
x.pop(); //removes last saved position from xray
y.pop(); //removed last saved position from yray
}