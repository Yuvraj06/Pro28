
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree, boy, treeI, boyI, ground;


function preload()
{
	treeI = loadImage("tree.png");
	boyI = loadImage("boy.png");

	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = createSprite(800,400);
	tree.addImage("image",treeI);
	tree.scale = 0.4

	ground = createSprite(500,590,1000,20);
	ground.shapeColor="green";

	boy = createSprite(200,500);
	boy.addImage("ima",boyI)
	boy.scale = 0.15;

	mango = new Mango(800,200);
	mango2 = new Mango(900,250);
	mango3 = new Mango(850,300);
	mango4 = new Mango(760,270);
	mango5 = new Mango(600,300);
	mango6 = new Mango(720,360);
	mango7 = new Mango(950,340);

	stone = new Stone(125,420);

	sling = new Slingshot(stone.body, {x:125,y:410});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  drawSprites();

  sling.display();

	mango .display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	detectCollision(stone,mango);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);


  stone.display();

  textSize(40)
  stroke(255);
  text("press 'Space' to get another chance", 10, 50)
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(stone.body);
		Matter.Body.setPosition(stone.body,{x:125,y:410});
    }
}

function detectCollision(s,m){

	mbp = m.body.position
	sbp = s.body.position

	var distance = dist(sbp.x,sbp.y,mbp.x,mbp.y);

	if(distance<=65){
		Matter.Body.setStatic(m.body,false);
	}

	

}


