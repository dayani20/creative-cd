let playerX =200;
let playerY =200;
let squareX =10
let squareY =10
let enemyX =10
let enemyY=10
function setup() {
  createCanvas(400, 400);
}

function draw() {
      drawbackground('🥰');

  if(playerX + 10 >= squareX &&  playerX - 20 <= squareX)  { if(playerY +9 >= squareY &&playerY -20 <= squareY)   {
   // this all only happens when we're touching the square
   
    
    squareX = Math.random() * width;
  squareY = Math.random() * height;
     
    }}
    square( squareX,squareY,10)
  circle(playerX,playerY,20);
  
  squareX = squareX + Math.random() * -2 + 1;
  squareY= squareY + Math.random() * -2 + 1;
  
  if(keyIsDown(LEFT_ARROW)) {
    playerX =playerX -1;

  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX +1;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY =playerY -1;
  }

  if (keyIsDown(DOWN_ARROW)) {
    playerY =playerY +1;
  }
  }

function drawBackground(backgroundText){
  for(let count = 0; count <100; count = count + 1)
  
text(backgroundTex, Math.radom() *width, Math.random()* height);
}

function getMovementAmount(){
  let randomNumber =Mathrandom();
  
  if(randomNumber >0.5) {
    // // move right
    return Math.random()*squarespeed;
  }else{
    // // move left
    return Math.random() * squarespeed * -1;
  }
    
  }
  