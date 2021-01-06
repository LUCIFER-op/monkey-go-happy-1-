const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var log;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,250,60,60);
   


    log = new Log (900, 280, 20, );
    log2 = new Log (900, 270, 260, PI/2);
    log3 = new Log (850, 280, 100, );
    

    

    ground = new Ground(600,height,1200,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle); 
    box1.display();
  
   
    log.display();
    log2.display();
    log3.display();
    
    ground.display();
}