var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1=createSprite(100,100,40,40)
  g1.shapeColor="green"
  g2=createSprite(300,100,40,40)
  g2.shapeColor="green"
  g3=createSprite(500,100,40,40)
  g3.shapeColor="green"
  g4=createSprite(700,100,40,40)
  g4.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  g1.x = World.mouseX;
  g1.y = World.mouseY;

  if(touching(g1,g2)){
    g1.shapeColor="blue"
    g2.shapeColor="blue"
  }
  else{
    g1.shapeColor="green"
    g2.shapeColor="green"
  }
  drawSprites();
}

