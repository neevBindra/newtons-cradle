
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	bobDiameter = 40

	//Create the Bodies Here.
	roof = new Platform(370,200,400,40)
	bob1 = new Bob(300,550,bobDiameter);
	bob2 = new Bob(350,550,bobDiameter);
	bob3 = new Bob(400,550,bobDiameter);
	bob4 = new Bob(450,550,bobDiameter);
	bob5 = new Bob(500,550,bobDiameter);
	
	//ropes
	rope1=new Rope(bob1.body,roof.body,-50*2,0)
	rope2=new Rope(bob2.body,roof.body,-25*2, 0)
	rope3=new Rope(bob3.body,roof.body,-0*2, 0)
	rope4=new Rope(bob4.body,roof.body,25*2, 0)
	rope5=new Rope(bob5.body,roof.body,50*2, 0)

console.log(roof.X);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode===32) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-260,y:0});

	}
}

