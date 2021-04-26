
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1Object;
var dustbin1;
var ground;
var dustbin2;
var dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paper1Object = new Paper(100,570,40);
	dustbin1 = new Dustbin(500,580,200,20);
	ground = new Ground(400,600,800,20);
  dustbin2 = new Dustbin(400,550,20,100);
  dustbin3 = new Dustbin(600,550,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  paper1Object.display();
  dustbin1.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();

  
  keyPressed();
 

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1Object.body,paper1Object.body.position,{x:5,y:-15});
    Matter.Body.setStatic(paper1Object.body, false);
  }
}



