let img;
function preload() {
  img = loadImage("shrek.png");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("#11151c");
  translate(width / 2, height / 2);
  rotate(-90);

  sc = second();
  mn = minute();
  hr = hour();
  noFill();
  stroke("#d66853");
  strokeWeight(10);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke("#7d4e57");
  strokeWeight(8);
  let minuteAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 230, 230, 0, minuteAngle);

  stroke("#364156");
  strokeWeight(6);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngle);

  push();
  strokeWeight(10);
  stroke("#d66853");
  rotate(secondAngle);
  line(0, 0, 150, 0);
  pop();

  push();
  strokeWeight(8);
  stroke("#7d4e57");
  rotate(minuteAngle);
  line(0, 0, 115, 0);
  pop();

  push();
  stroke("#364156");
  strokeWeight(6);
  rotate(hourAngle);
  line(0, 0, 100, 0);
  pop();
  push();
  rotate(90);
  image(img, -20, -20, 40, 40);
  pop();
}
