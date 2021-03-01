
var fixedRect, movingRect;
var gameObject1, gameObject2;
var g3, g4;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(300, 100, 50, 50);
  gameObject1.shapeColor = "yellow";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "yellow";

  g3 = createSprite(100, 100, 50, 50);
  g3.shapeColor = "yellow";

  g4 = createSprite(10, 100, 50, 50);
  g4.shapeColor = "yellow";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1, movingRect)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "yellow"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



