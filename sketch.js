var sunimg, mercuryimg, venusimg, earthimg, marsimg, jupiterimg, saturnimg, uranusimg, neptuneimg,
  galaxyimg;
var sun, mercy, venus, earth, mars, jupiter, saturn, uranus, neptune, galaxy;
var x;
function preload() {
  sunimg = loadImage("sun.png");
  mercuryimg = loadImage("mercury.png");
  venusimg = loadImage("venus.png");
  earthimg = loadImage("earth.png");
  marsimg = loadImage("mars.png");
  jupiterimg = loadImage("jupiter.png");
  saturnimg = loadImage("saturn.png");
  uranusimg = loadImage("uranus.png");
  neptuneimg = loadImage("neptune.png");
  galaxyimg = loadImage("galaxy.png");
}
function setup() {
  createCanvas(1500, 750);
  sun = createSprite(750, 375, 10, 10);
  mercy = createSprite(750, 360, 10, 10);
  venus = createSprite(750, 320, 10, 10);
  earth = createSprite(750, 280, 10, 10);
  mars = createSprite(750, 240, 10, 10);
  jupiter = createSprite(750, 200, 10, 10);
  saturn = createSprite(750, 160, 10, 10);
  uranus = createSprite(750, 120, 10, 10);
  neptune = createSprite(750, 80, 10, 10);
  
  sun.addImage(sunimg);
  mercy.addImage(mercuryimg);
  venus.addImage(venusimg);
  earth.addImage(earthimg);  
  mars.addImage(marsimg);
  jupiter.addImage(jupiterimg);
  saturn.addImage(saturnimg);
  uranus.addImage(uranusimg);
  neptune.addImage(neptuneimg);
  


  mercy.rotateToDirection = true;
  mercy.rotation = 400;
  mercy.velocityX = 3;

  venus.rotateToDirection = true;
  venus.rotation = 400;
  venus.velocityX = 3;

  earth.rotateToDirection = true;
  earth.rotation = 400;
  earth.velocityX = 3;

  mars.rotateToDirection = true;
  mars.rotation = 400;
  mars.velocityX = 3;

  jupiter.rotateToDirection = true;
  jupiter.rotation = 400;
  jupiter.velocityX = 3;

  saturn.rotateToDirection = true;
  saturn.rotation = 400;
  saturn.velocityX = 3;

  uranus.rotateToDirection = true;
  uranus.rotation = 400;
  uranus.velocityX = 3;

  neptune.rotateToDirection = true;
  neptune.rotation = 400;
  neptune.velocityX = 3;

  x = 0;
  sun.scale = 0.08;
  mercy.scale = 0.1;
  venus.scale = 0.1;
  earth.scale = 0.2;
  mars.scale = 0.08;
  jupiter.scale = 0.5;
  saturn.scale = 0.4;
  uranus.scale = 0.2;
  neptune.scale = 0.4;
}
function draw() {

  background("black");
  sun.addImage(sunimg);
  mercy.rotation = mercy.rotation + 1.3;
  venus.rotation = venus.rotation + 1.2;
  earth.rotation = earth.rotation + 1.1;
  mars.rotation = mars.rotation + 1;
  jupiter.rotation = jupiter.rotation + 0.9;
  saturn.rotation = saturn.rotation + 0.8;
  uranus.rotation = uranus.rotation + 0.7;
  neptune.rotation = neptune.rotation + 0.6;
  if (World.frameCount % 60 == 0) {
    sun.scale += 0.04;
  }
  if (sun.isTouching(mercy)) {
    mercy.destroy();
    x += 1;
  }
  if (sun.isTouching(venus)) {
    venus.destroy();
    x += 1;
  }
  if (sun.isTouching(earth)) {
    earth.destroy();
    x += 1;
  }
  if (sun.isTouching(mars)) {
    mars.destroy();
    x += 1;
  }
  if (sun.isTouching(jupiter)) {
    jupiter.destroy();
    x += 1;
  }
  if (sun.isTouching(saturn)) {
    saturn.destroy();
    x += 1;
  }
  if (sun.isTouching(uranus)) {
    uranus.destroy();
    x += 1;
  }
  if (sun.isTouching(neptune)) {
    neptune.destroy();
    x += 1;
  }
  if (x == 8) {
    sun.visible = false;

    background(galaxyimg);



  }
  drawSprites();

}