

let ball = {};
ball.width =45;
ball.x = 10;
ball.y = 15;
ball.delta_x = 1;
ball.delta_y = 2;
ball.scale_x = 3;
ball.scale_y = 1;

function setup() {
    createCanvas(800, 400);
    background('white');
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 6) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill (random(50));
    ellipse(ball.x, ball.y, ball.width, ball.width);

    fill('159');
    textSize(25);
    text('Awesome', 340, 260);
    textFont('Georgia');




}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
