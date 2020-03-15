
var r = 0;
var g = 0;
var b=0;



function setup(){

  createCanvas(1200,1200);
}


function draw(){
  
  
  fill("black");
  textSize(16);
  text("move the ball to change the color",500,50);
  ellipse(mouseX,200,50,50);
 
  
}
//this function is called whenever user moves the mouse
function mouseMoved() 
{
  r=Math.round(random(0,256));
  g=Math.round(random(0,256));
  b=Math.round(random(0,256));
  background(r,g,b);
}