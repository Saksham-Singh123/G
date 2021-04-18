const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
var gameState = "Play";
var engine,world,canvas,
hero,ground1,Cons; 

function preload() {
}
function setup() {
   createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  hero = new Hero(200,200,50,50);
  ground1 = new Ground(200,550,500,500);
  Cons = new Fly(hero.body,{x:220,y:180});
}
function draw() {
  background("white");
  hero.display();
  ground1.display();
  Cons.display();

}
function mouseDragged(){
  if(gameState !="launched" ){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  Cons.power();
  gameState = "launched";
}

