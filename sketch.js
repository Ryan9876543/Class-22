const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg, towerImg
var tower



function preload() {
 backgroundImg = loadImage("./assets/background.gif")
 towerImg = loadImage("./assets/tower.png")

}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world, ground);

 tower = Bodies.rectangle(80,200,160,310,options)
 World.add(world, tower)
 
}

function draw() {
  background(189);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 //push()
 //rectMode(CENTER)
 rect(tower.position.x, tower.position.y, 150, 150);
 //pop()
  
 image(backgroundImg,0,0,1200,600)
 image(towerImg,80,200,160,310)

 
   
}
