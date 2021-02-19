
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var box1,ground;

function setup() {
  
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(400,200,70,70);
  box2 = new Box(350,100,50,50);

  ground = new Ground(400,375);
 /* var ballOptions = {

    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20, ballOptions);
  World.add(world,ball);*/

}

function draw() {
  
  background(0);  
  
  Engine.update(engine);

box1.display();
box2.display();

ground.display();

  
  /*ellipseMode(RADIUS); 
  ellipse(ball.position.x, ball.position.y, 20, 20);*/
}