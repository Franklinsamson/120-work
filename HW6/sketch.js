//defining variables
var COL = 0;
var X = 0;
var Y = 175;
var angle = 0;




//c
function setup() {
createCanvas(windowWidth, windowHeight);



}


function draw() {

translate(random(1, width + 1), random(-500, height - 500));
quad(38, 31, 86, 20, 69, 63, 30, 76);

// background color changes as the mouse moves from left to right
noCursor();
background(COL);{}
  COL = map(mouseX, 5, windowWidth, 5, windowHeight );
    // draw a reference diagonal line
      stroke('red');
      line(0, height, width, 0);



      // draw a reference diagonal line
      stroke('white');
      line(0, height, width, 75);

      // draw a reference diagonal line
      stroke('blue');
      line(0, height, width, 150);

      // draw a reference diagonal line
      stroke('red');
      line(0, height, width, 225);

      // draw a reference diagonal line
      stroke('white');
      line(0, height, width, 300);

      // draw a reference diagonal line
      stroke('blue');
      line(0, height, width, 375);

  // pink ellipse
fill('pink');
ellipse (X, 500, 80, 80);
X = X + .12;
translate( X, mouseY)

// brown ellipse
fill('brown');
ellipse(X, Y, 30, 10);
X = X + .19;
translate(mouseX, Y);

// green ellipse
fill('green');
ellipse(X, 10, 69, 10);
X = X + .19;
rotate( radians(mouseY));

// lime ellipse
fill('lime');
ellipse(X, 7, 300, 60);
X = X + .14;




// bronn rectangle
fill('brown');
rect( mouseX, mouseY, 90, 46);
rotate( radians(angle));{
round(3);

}


ellipse(0, 50, 33, 33); // Left circle

push(); // Start a new drawing state
strokeWeight(5);
fill(204, 153, 0);
ellipse(33, 50, 33, 33); // Left-middle circle

push(); // Start another new drawing state
stroke(0, 102, 153);
ellipse(66, 50, 33, 33); // Right-middle circle
pop(); // Restore previous state

pop(); // Restore original state

ellipse(100, 50, 33, 33); // Right circle


var leftWall = 50;
var rightWall = 25;
var xm = mouseX;
var xc = constrain(mouseX, leftWall, rightWall);

stroke(150);
line(leftWall, 0, leftWall, height);
line(rightWall, 0, rightWall, height);





function mousePressed() {


}




}
