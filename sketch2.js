var groundImg, ground;
var obstacle1Img, obstacle1;
var obstaclesGroup;
var obstacle2Img, obstacle2;
var car, carImg;
var gameState = "play"


function preload(){
  groundImg = loadImage("ground.jpg");
  carImg = loadImage("car.png");
  obstacle1Img = loadImage("obstacle1.png");
  obstacle2Img = loadImage("obstacle2.png");
}

function setup() {
  createCanvas(600,600);

  ground = createSprite(300,300);
  ground.addImage("ground",groundImg);
  ground.velocityY = 5;
  
  obstaclesGroup = new Group(); 
  
  car = createSprite(200,200,50,50);
  car.scale = 0.2;
  car.addImage("car", carImg);
  car.rotation=90
}


function draw() {
  background(255);
  drawSprites();
 if(ground.y > 400){
      ground.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        car.x = car.x - 10;
   
    }
    if(keyDown("right_arrow")){
  
          car.x = car.x + 10;  
      
    }
    if(keyDown("up_arrow")){
  
         car.y -= 10; 
      
    }

    if(keyDown("down_arrow")){
  
        car.y += 10;      
    }   

      ground.velocityY= +5;
    
      spawnObstacles(); 


    if(obstaclesGroup.isTouching(car) || car.y > 600){
      car.destroy;
      gameState = "end"
    }  

    }

  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fin del juego", 230,250)
    
  }
}

function spawnObstacles()
 {

  if (frameCount % 240 === 0) {
    var obstacle1 = createSprite(200, -50);
    var obstacle2 = createSprite(200,10);
    obstacle1.x=Math.round(random(200,400));
    obstacle2.x=Math.round(random(200,400));    

console.log(obstacle1.x);

    obstacle1.addImage(obstacle1Img);
    obstacle2.addImage(obstacle2Img);
    obstacle1.scale=0.1
    obstacle2.scale=0.1
    
    obstacle1.velocityY = 3;
    obstacle2.velocityY = 3;

    obstacle1.lifetime = 800;
    obstacle2.lifetime = 800;
   
    obstaclesGroup.add(obstacle1);
    obstaclesGroup.add(obstacle2);

  }
}

