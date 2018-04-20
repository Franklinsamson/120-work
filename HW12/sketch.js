let balls = [];
const numOfBalls = 80;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(1000, 1000);

    // create a new ball object of class type "Ball"
    let init_x = 30;
    let init_y = 40;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
        // move the starting position over
        // This is to ensure that the balls do not start
        // "on top" of each other
        init_x += 200;
        if (init_x > width) {
            init_x = 60;
            init_y += 300;
        }
    }
}

function draw() {
    background('black');

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}






//////////////////////////////////////////////////
//      BALL CLASS
//////////////////////////////////////////////////
class Ball {
    constructor(x, y, size) {
        this.color = 'blue';
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-7, 8);
        this.deltaY = random(-9, 5);
        this.size = random(20, 40);
        this.rad = this.size / 2;

    }

    display() {
        push();
        stroke(20)
        //fill color
        fill(this.color);
        //position of the ball
        translate(this.posX, this.posY);
        ellipse(10, 5, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'purple';
        }

        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'red';
        }
    }


    ballCheck(otherBalls, myId) {
        for (let n = 0; n < otherBalls.length; n++) {
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // inverted colors
                    if( this.color == 'purple') {
                        this.color = 'orange';
                    } else {
                        this.color = 'black';
                    }
                }
            }
        }
    }
}
