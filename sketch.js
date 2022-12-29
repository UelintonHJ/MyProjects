function setup() {
  createCanvas(500, 400);
  trackSound.loop();
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnCarStartingPosition();
  checkCollision();
  includesPoints();
  score();
}

