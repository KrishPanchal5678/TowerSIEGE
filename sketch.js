const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;  
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25; 

var ground;

var slingshot;

var pent, pentImg;

var platform, platform2;

//var platIMG;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");

  pentImg = loadImage("sprites/Penta.png")

  //platIMG = loadImage("sprites/platform.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  /*ground = createSprite(400,400,1200,50);
  ground.addImage(platIMG);
  ground.debug = true;
  ground.scale = 1.25;

  platform = createSprite(650,150,250,25);
  platform.addImage(platIMG);
  platform.debug = true;
  platform.scale = 0.25;

  platform2 = createSprite(350,250,250,25);
  platform2.addImage(platIMG);
  platform2.debug = true;
  platform2.scale = 0.25;*/

  ground = new G(400,400,1200,50);

  ground = createSprite(400,400,1200,50);

  ground = createSprite(400,400,1200,50);
  pent = new Block(100, 200, 100, 60);
  //image(pentImg, 0, 0, 100, 100)
  
  
  slingshot = new SlingShot(pent.body,{x:100, y:200});

}

function draw() {
  background(backgroundImg);
    Engine.update(engine);
 
    //ground.display();
    pent.display();
    slingshot.display();
    //platform.display();
    //platform2.display();

    drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(pent.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}