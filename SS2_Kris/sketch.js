//Kris M.
//Title: Primary Pop
//tap with mouse to make the color blue
//tap with key to make the color pink

let x=80;
let y=450;

function setup() {
  createCanvas(600, 600);
}
function draw () {
  background (500,500,0)

circle (x,y,40)
x=x+5
circle (mouseX,mouseY,100)
rect (mouseX, mouseY, 50)


}



function mousePressed() {
  fill (0,150,255)
}
function keyPressed(){
fill ("pink")

}
