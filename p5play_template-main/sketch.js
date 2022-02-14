var box;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  
}

function draw() 
{
  background(30);

  

  if(keyIsDown(RIGHT_ARROW)){
    //box.x = box.x + 5;
  background ("red");
}
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 0;
  background ("yellow")}
  if(keyIsDown(UP_ARROW)){
    box.y = box.y + 0;
  background ("green")}
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y - 0;
  background ("blue")
    
  } 

  drawSprites();
}