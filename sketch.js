const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function preload(){
  snow_img = loadAnimation("Snow/tile000.png","Snow/tile001.png",
  "Snow/tile002.png","Snow/tile003.png","Snow/tile004.png")
}

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  GROUND = new Ground(300,585,580,10);
  Border_1 = new Ground(300,595,600,10);
  Border_2 = new Ground(5,300,10,600);
  Border_3 = new Ground(300,5,600,10);
  Border_4 = new Ground(595,300,10,600);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-60, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  //Snow = createSprite(200,200,50,50);
  //Snow.addAnimation("falling",snow_img);

  drawSprites();

  push();
  textSize(75);

  fill(255,0,0);
  stroke(255,0,0);
  text("P",50,100);

  fill(0,255,0);
  stroke(0,255,0);
  text("L",135,175);

  fill(0,0,255);
  stroke(0,0,255);
  text("I",220,250);

  fill(255,0,0);
  stroke(255,0,0);
  text("N",305,325);

  fill(0,255,0);
  stroke(0,255,0);
  text("K",390,400);

  fill(0,0,255);
  stroke(0,0,255);
  text("O",475,475);

  pop();

  fill(255);
  GROUND.display();
  fill("brown");
  stroke("brown");
  Border_1.display();
  Border_2.display();
  Border_3.display();
  Border_4.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(260, 340), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}