//global variables
let xPos = 0;
let yPos =0
let size =40;
let myColor;

// setup() only runs once//
function setup() {
  createCanvas(innerWidth, innerHeight);
  cnv.parent("#sketch-parent");
  background(255, 100, 255)
  myColor = color(0, 255, 0);
  let cnv = createCanvas(400, 400)

  noCursor();
}



// draw() runs 60 times a sec (or whatever you set it to)//
function draw() {
  //background(255, 255, 100);
  
  fill(mouseX, mouseY, 255);
  stroke(255, 255, 0);
  strokeWeight(1)
  ellipse(xPos, yPos, size, size);
  
  xPos+=10
  
  print(xPos)
  
  if(xPos > width) {
    xPos =0;
    yPos= random(height)
    myColor = color(random(255))
  }
}