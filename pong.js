//little ball variables
let xLittleBall = 300;
let yLittleBall = 200;
let diameter = 13;
let ray = diameter / 2;

//little ball speed
let speedXLittleBall = 6;
let speedYLittleBall = 6;

//racket variables
let xRacket = 5;
let yRacket = 150;
let racketWidth = 10;
let racketHeight = 90;

//opponent's variables
let xOpponentRacket = 585;
let yOpponentRacket = 150;
let OpponentYSpeed;

let collided = false;

//score
let myPoints = 0;
let opponentPoints = 0;

//game sounds
let racket;
let point;
let soudtrack;

function preload(){
  soundtrack = loadSound("trilha.mp3");
  point = loadSound("ponto.mp3");
  racket = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  soundtrack.loop();
}

function draw() {
  background(0);
  showLittleBall();
  moveLittleBall();
  checkBumpEdge();
  showRacket(xRacket, yRacket);
  moveMyRacket();
  //checkCollisionRacket();
  checkRacketCollision(xRacket, yRacket);
  showRacket(xOpponentRacket, yOpponentRacket);
  moveOpponentRacket();
  checkRacketCollision(xOpponentRacket, yOpponentRacket);
  includeScore();
  score();
}

function showLittleBall(){
  circle(xLittleBall, yLittleBall, diameter);
}

function moveLittleBall(){
   xLittleBall += speedXLittleBall;
   yLittleBall += speedYLittleBall;
}

function checkBumpEdge(){
   if (xLittleBall + ray > width || xLittleBall - ray < 0){
    speedXLittleBall *= -1;
  }
  if (yLittleBall + ray > height || yLittleBall - ray < 0){
    speedYLittleBall *= -1;
  }
}

function showRacket(x,y){
    rect(x, y, racketWidth, racketHeight);
  }

function moveMyRacket(){
  if (keyIsDown(UP_ARROW)){
    yRacket -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRacket += 10;
  }
}

function checkCollisionRacket(){
 if (xLittleBall - ray < xRacket + racketWidth && yLittleBall - ray < yRacket + racketHeight && yLittleBall + ray > yRacket){
   speedXLittleBall *= -1;
   racket.play();
   
 } 
}

function checkRacketCollision(x,y){
  collided = collideRectCircle(x, y, racketWidth, racketHeight, xLittleBall, yLittleBall, ray);
  if (collided){
    speedXLittleBall *= -1;
    racket.play();
  }
}

function moveOpponentRacket(){
   if (keyIsDown(87)){
    yOpponentRacket -= 10;
  }
   if (keyIsDown(83)){
    yOpponentRacket += 10;
  }
}

function includeScore(){
  stroke("white")
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(150, 10, 40, 20);
  fill("white");
  text(myPoints, 170, 26);
  fill(color(255,140,0))
  rect(450, 10, 40, 20);
  fill("white");
  text(opponentPoints, 470, 26);
}

function score(){
  if(xLittleBall > 590){
    myPoints += 1;
    point.play();
  }
  if(xLittleBall < 10){
    opponentPoints += 1;
    point.play();
  }
}
