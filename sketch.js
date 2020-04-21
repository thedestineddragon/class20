var movinrect,fixedrect; 



function setup() {
  createCanvas(800,400);
 fixedrect=  createSprite(400, 200, 50, 50);
 movinrect = createSprite(600,200,50,50); 
fixedrect.shapeColor="purple";
movinrect.shapeColor= "orange";
movinrect.debug=true;
fixedrect.debug=true;
}

function draw() {
  background(0);
movinrect.x=World.mouseX;
movinrect.y=World.mouseY;
if(movinrect.x-fixedrect.x<movinrect.width/2+fixedrect.width/2&&
  fixedrect.x-movinrect.x<movinrect.width/2+fixedrect.width/2&&
  fixedrect.y-movinrect.y<movinrect.height/2+fixedrect.height/2&&
  movinrect.y-fixedrect.y<movinrect.height/2+fixedrect.height/2
  ){
  fixedrect.shapeColor="green";
movinrect.shapeColor= "red";
}
else {
  fixedrect.shapeColor="purple";
  movinrect.shapeColor= "orange";
}
  drawSprites();
}