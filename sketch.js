var level1, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, backgroundIMG
var player, playerIMG, fire, fireIMG, gameState, firegroup
var level2, obstacle6, obstacle7, obstacle8
function preload(){
  backgroundIMG = loadImage("images/bg.jpg");
  playerIMG = loadAnimation("images/anim1.png","images/anim2.png","images/anim3.png","images/anim4.png","images/anim5.png","images/anim6.png","images/anim7.png","images/anim8.png" );
  fireIMG = loadAnimation("images/fire1.png", "images/fire2.png", "images/fire3.png");
}

function setup() {
  createCanvas(1200,800);
  gameState = "start"
  level1 = createSprite(400, 200, 1200, 20);
  firegroup = new Group();
  for(var i=255; i<800; i+=50){
    fire = createSprite(i, 172);
  fire.addAnimation("label", fireIMG);
  fire.scale = 0.25;
  fire.setCollider("circle", 0, 0, 5);
  //for(var i = 0; i<11; i++){
    firegroup.add(fire);
  //}
  }
 
  
  
  obstacle1 = createSprite(200, 175, 50, 50);
  obstacle2 = createSprite(350, 150, 50, 100);
  obstacle3 = createSprite(500, 165, 50, 75);
  obstacle4 = createSprite(650, 145, 50, 125);
  obstacle5 = createSprite(800, 175, 50, 50);
  level2 = createSprite(700, 400, 1000, 20);
  obstacle6 = createSprite(800, 375, 50, 50);
  obstacle7 = createSprite(650, 375, 50, 50);
  obstacle8 = createSprite(500, 375, 50, 50);
  level3 = createSprite(400, 600, 1200, 20);
  level4 = createSprite(700, 790, 1500, 20);
  player = createSprite(50,125);
  player.addAnimation("running", playerIMG);
  player.scale = 0.35;
  player.setCollider("rectangle", 0, 0, 50, 150);
  
  

}

function draw() {
  background(backgroundIMG);  
  if(gameState === "start"){
    player.debug = true;
    fire.debug = true;
  if(keyIsDown(UP_ARROW)){
    player.velocityY = -8.5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x +=5;
  }

  if(firegroup.isTouching(player)){
    gameState = "over";
    console.log(gameState);
  }
  

  player.velocityY += 0.8;
  }
  player.collide(level1);
  player.collide(level2);
  player.collide(level3);
  player.collide(level4);
  player.collide(obstacle1);
  player.collide(obstacle2);
  player.collide(obstacle3);
  player.collide(obstacle4);
  player.collide(obstacle5);
  drawSprites();
  fill("red");
  text(mouseX+"  "+mouseY, 50, 700);
}