var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600,400,200,100);
  movingRect = createSprite(100,100,100,200);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}