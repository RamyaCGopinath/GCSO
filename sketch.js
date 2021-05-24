var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";
  wall = createSprite(1500, 200, 60, height);
  wall.shapeColor = "grey";


  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(0);  
  textSize(25);
  fill(255);
  text("Speed of the car = "+speed, 500, 25);
  text("Weight of the car = "+weight, 500, 55);
  if(car.x == 1445){
    if(deformation<100){
      car.shapeColor = "green";
      text("Quality of the car = ",500,200);
      fill("green");
      textSize(30);
      text("Very Good", 720, 200);
    }
  
    else if(deformation>=100 && deformation<180){
      car.shapeColor = "yellow";
      text("Quality of the car = ",500,200);
      fill("yellow");
      textSize(30);
      text("Okay", 720, 200);
    }
    else{
      car.shapeColor = "red";
      text("Quality of the car = ",500,200);
      fill("red");
      textSize(30);
      text("Very Bad", 720, 200);
    }
  }
  

  car.collide(wall);
  drawSprites();
}