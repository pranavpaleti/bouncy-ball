const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
var myEngine,myWorld;
var ground;
var ball;
var ball2;
function setup() {
  createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world
    var ground_options ={
      isStatic:true
    }
    ground = Bodies.rectangle(200,395,400,10,ground_options);
    World.add(myWorld,ground);
    console.log(ground);
    var balloptions={
      restitution:0.8
    }
  
 ball=Bodies.circle(200,200,20,balloptions)
 World.add(myWorld,ball)
 var balloptions1={
   restitution:0.7
 }
 ball1=Bodies.circle(100,100,10,balloptions1)
 World.add(myWorld,ball1)
}

function draw() {
  background(0); 
  Engine.update(myEngine) 

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  ellipse(ball1.position.x,ball1.position.y,10,10);
}