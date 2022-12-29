//car code

let xCars = [600, 600, 600, 300, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carLenght = 50;
let carHeight = 40;

function showCar(){
  for (let i = 0; i < carsImage.length; i++){
    image(carsImage[i], xCars[i], yCars[i], carLenght, carHeight);
  }
}

function moveCar(){
  for(let i = 0; i < carsImage.length; i++){
    xCars[i] -= speedCars[i];
  }
}
  
function returnCarStartingPosition(){
  for(let i = 0; i < carsImage.length; i++){
    if (passedTheWholeScreen(xCars[i])){
      xCars[i] = 600;
    }
   }
  }

function passedTheWholeScreen(xCars){
  return xCars < -50;
}
