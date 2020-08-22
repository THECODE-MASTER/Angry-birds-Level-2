const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    log2 = new Log(510,260,300, PI/2);
    box6 = new Box(400,320,70,70);
    box7 = new Box(620,320,70,70);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);
    pig6 = new Pig(500, 220);
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(780,120,150, PI/7.5);
    log5 = new Log(800,120,150, -PI/7.5);
    box8 = new Box(400,240,70,70);
    box9 = new Box(620,240,70,70);
    box10 = new Box(510,160,70,70);
    pig5 = new Pig(525, 350);
    log6 =  new Log(510,180,300, PI/2);
    log7 = new Log(500,120,150, PI/7.5);
    log8 = new Log(520,120,150, -PI/7.5);
    
    
    bird = new Bird(200,50);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  box10.display();
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box6.display();
    box7.display();
    log2.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    pig6.display();
   log7.display();
   log8.display();
    box5.display();
    log4.display();
    log5.display();
    box8.display();
    box9.display();
    log6.display();
    bird.display();
    pig5.display();
    platform.display();
    log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
        slingshot.attach(bird.body);
        gameState="onsling"
    }
}