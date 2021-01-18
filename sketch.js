var dustbinleft,dustbinright,dustbincentre;
var ball;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	dustbinCentre = new Dustbin(650,height-20, 200, 20);
	dustbinLeft = new Dustbin(550,height-75,20,100);
	dustbinRight = new Dustbin(750,height-75,20,100);

	ball = new Ball(200,450,40);

	ground = new Ground(width/2,height,1200,10);

	//Create the Bodies Here.

	Engine.run(engine);
  
}

function draw() {
  	rectMode(CENTER);
	background(0);

	dustbinCentre.display();
	dustbinLeft.display();
	dustbinRight.display();

	ball.display();
	
	ground.display();

	drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x : 50, y : -55});
	}
}