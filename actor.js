//actor code
let xActor = 85;
let yActor = 366;
let collision = false;
let myPoints = 0;

function showActor(){
  image(actorImage, xActor, yActor, 30, 30);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canYouMove()){
      yActor +=3;
    }
  }
}

function checkCollision(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carsImage.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], carLenght, carHeight, xActor, yActor, 15);
    if (collision){
      returnActorToStartigPosition();
      collisionSound.play();
      if (pointsGreatThanZero()){
        myPoints -= 1;
      } 
    }
  }
}

function returnActorToStartigPosition(){
  yActor = 366;
}

function includesPoints(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0, 255, 127));
  text(myPoints, width / 5, 27);
}

function score(){
  if(yActor < 15){
    myPoints += 1;
    dotSound.play();
    returnActorToStartigPosition();
  }
}

function pointsGreatThanZero(){
  return myPoints > 0
}

function canYouMove(){
 return yActor < 366;
}