const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, polygon1;
var platform1, platform2, sling;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  platform3 = new Ground(400, 395, 800, 10);
  platform1 = new Ground(400, 300, 125, 20);
  platform2 = new Ground(600, 200, 125, 20); 
  polygon1 = new polygon(100, 200, 30, 30);
  sling = new SlingShot(polygon1.body,{x: 100, y: 200});
  block1 = new block(400, 285);
  block2 = new block(430, 285);
  block3 = new block(370, 285);
  block4 = new block(385, 250);
  block5 = new block(415, 250);
  block6 = new block(400, 220);
  block7 = new block(600, 180);
  block8 = new block(630, 180);
  block9 = new block(570, 180);
  block10 = new block(585, 150);
  block11 = new block(615, 150);
  block12 = new block(600, 120);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

 platform1.display();
 platform2.display();
 platform3.display();
 polygon1.display();
 block1.display();
 block2.display();
 sling.display();
 block3.display();
 block4.display();
 
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x: mouseX, y: mouseY})  
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
  if(keyCode === 32){

  slingshot.attach(this.polygon);
  }
}