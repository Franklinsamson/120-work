//defining variables
var COL = 0;
var X = 0;
var Y = 175;
var angle = 0;



function setup() {
createCanvas(windowWidth, windowHeight);

}

function draw() {
  // background
  background(COL);
    COL = map(mouseX, 0, windowWidth, 0, windowHeight );

  // yellow ellipse
fill('yellow');
ellipse (X, 200, 80, 80);
X = X + .12;
translate( X, mouseY)

// red ellipse
fill('red');
ellipse(X, Y, 30, 10);
X = X + .19;
translate(mouseX, mouseY);

// purple ellipse
fill('purple');
ellipse(X, 10, 69, 10);
X = X + .19;
rotate( radians(mouseY));

// orange ellipse
fill('orange');
ellipse(X, 125, 300, 60);
X = X + .14;



//rectangle
fill('brown');
rect( mouseX, mouseY, 50, 50);
rotate( radians(angle));

function mousePressed() {

}




}
