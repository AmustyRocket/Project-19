var space, spaceImg;
var meteor,meteorImg,meteorGroup;
var spaceship,spaceshipImg;
var gamestate = "play";
var score = 0;
var Gameover,GameoverImg;
var restart,restartImg;




function preload(){
spaceImg = loadImage("space.png");
spaceshipImg = loadImage("spaceship.png");
meteorImg = loadImage("meteor.png");
GameoverImg = loadImage("Gamover.jpg");
restartImg = loadImage("restart.png");
meteorGroup = new Group();

}

function setup() {
createCanvas(400,400);
space = createSprite(204.8,100,);
space.addImage("space",spaceImg);

spaceship = createSprite(150,150,50,50);
spaceship.addImage("spacehsip",spaceshipImg);
spaceship.velocityY = 1;
spaceship.scale = 0.1;

Gameover = createSprite(120,150);
Gameover.addImage("Gamover",GameoverImg);
Gameover.scale = 0.5;
Gameover.visible = false;

restart = createSprite(100,150);
restart.addImage("restart",restartImg);
restart.scale = 0.5;
restart.visible = false;


 
}

function draw() {
    background(200);
    if(gamestate==="play")
    {
        

        space.velocityY = -(4 + 4*score/100);

        score = score + Math.round(getFrameRate()/60);

        if(space.y>200)
        {
            space.y = 150
        }
        if(keyDown("space"))                  
    {
      spaceship.velocityY = -7; 
    }
    spaceship.velocityY += 0.9;
    if(keyDown("RIGHT_ARROW"))
    {
        spaceship.x+=7;
    }
    if(keyDown("LEFT_ARROW"))
    {
        spaceship.x+= -7;
    }
    if(spaceship.y>600||meteorGroup.isTouching(spaceship))
    {
        gamestate = "end";
    }
    }
    spawnMeteors();
    drawSprites();
}
if(gamestate === "end")
{
   Gameover.visible = true;
   restart.visible = true;

   if(mousePressedOver(restart)) 
   {
    reset();
  }
}

function reset(){
    gameState = PLAY;
    gameOver.visible = false;                                                 
    restart.visible = false;
    meteorGroup.destroyEach();
    score = 0;

}
function spawnMeteors()
{ 
    if(frameCount%90=== 0)
    {      meteor = createSprite(Math.round(random(100,300)),-50);
      meteor.addImage(meteorImg);
      meteor.velocityY = 2;
      meteor.lifetime = 280;
      meteor.scale=0.5;
      meteorGroup.add(meteor);
    }      
}