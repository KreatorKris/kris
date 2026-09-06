/*Kris M.
Title: A Sunny Day
Concept: A nostagic drawing that
everyone has drawn at least
once in their life.

*/
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0,150,5000);

/*this is the sun*/
  strokeWeight(20);
  stroke("orange")
fill("yellow")
circle(560,60,200);
line(450,150,350,250)
line(375,50,250,50)
line(555,190,555,290)

/*this is the tree*/
strokeWeight(8);
stroke("black")
fill("brown")
rect(0,194,100,230);
strokeWeight(5)
stroke(0,100,0)
fill("green")
rect(0,100,100,100)
rect(0,150,150,150)
rect(35,65,150,150)
rect(0,25,150,150)

/*apples in tree*/
strokeWeight(3)
stroke(100,0,0)
fill("red")
circle(100,295,25)
circle(150,165,25)
circle(60,75,25)
circle(40,207,25)


/*this is the line that 
seperates the sky and
 the grass*/
strokeWeight(15);
fill("yellow");
strokeWeight(10);
stroke("black");
line(600,430,0,430);

/*grass*/
strokeWeight(6);
stroke("green");
fill("green");
rect(0,435,600,300);
}
