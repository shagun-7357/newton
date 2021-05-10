
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bd=40

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(375,100,250,20)

	bob1=new Bob(300,300,20,20)
	bob2=new Bob(340,300,20,20)
	bob3=new Bob(380,300,20,20)
	bob4=new Bob(420,300,20,20)
	bob5=new Bob(460,300,20,20)

	c1=new Chain(bob1.body, roof.body, -80,0)
	c2=new Chain(bob2.body, roof.body, -40,0)
	c3=new Chain(bob3.body, roof.body, 0,0)
	c4=new Chain(bob4.body, roof.body, bd*1,0)
	c5=new Chain(bob5.body, roof.body, bd*2,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  c1.display()
  c2.display()
  c3.display()
  c4.display()
  c5.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-45})
	}
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:45,y:45})
	}

}



