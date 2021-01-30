const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var back

function preload() {
//preload the images here
back = loadImage("Image/GamingBackground.png");

}

function setup() {
  createCanvas(1920, 800);

  engine = Engine.create();
  world = engine.world;

  land = new Ground(600, 500, 1200, 8);

  myHero = new Hero(300, 400);

  rope = new Fly(myHero.body, {x: 300, y: 100});

  box1 = new Block(580, 490);
  box2 = new Block(580, 430);
  box3 = new Block(580, 350);
  box4 = new Block(580, 270);
  box5 = new Block(580, 190);
  box6 = new Block(580, 110);
  box7 = new Block(580, 30);

  box8 = new Block(670, 490);
  box9 = new Block(670, 430);
  box10 = new Block(670, 350);
  box11 = new Block(670, 270);
  box12 = new Block(670, 190);
  box13 = new Block(670, 110);

  box14 = new Block(760, 490);
  box15 = new Block(760, 430);
  box16 = new Block(760, 350);
  box17 = new Block(760, 270);
  box18 = new Block(760, 190);
  box19 = new Block(760, 110);
  box20 = new Block(760, 30);
  box21 = new Block(760, -30);

  box22 = new Block(850, 490);
  box23 = new Block(850, 430);
  box24 = new Block(850, 350);
  box25 = new Block(850, 270);
  box26 = new Block(850, 190);

  monstor = new Monster(1100, 100)
  

}

function draw() {
  background(back);

  Engine.update(engine);

  land.display(); 
  myHero.display();
  rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  if(monstor.body.position.y<=400)
  {
  monstor.display();
  }
  else
  {
  monstor.change();
  }



}

function mouseDragged(){
  Matter.Body.setPosition(myHero.body, {x: mouseX, y: mouseY});
}

