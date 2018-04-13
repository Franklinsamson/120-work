let homeboy = [];
let number_of_homies = 60;

var COL = 0;

function setup() {
    // createCanvas(windowWidth, 400);
    createCanvas(windowWidth, 400);
    bg_color = color('grey');

    for (let i = 0; i < number_of_homies; i++) {
        homeboy.push( new floatinghomeboy() );
    }
}

function draw() {
  background(COL);
    COL = map(mouseX, 0, windowWidth, 0, windowHeight );


    for (var i = 0; i < homeboy.length; i++) {
        homeboy[i].frame();
    }
}





/////////////////////////////////////////
//      Floating homeboy Class
/////////////////////////////////////////

/**
 * Floating homeboy Class.
 *
 */
class floatinghomeboy {

    constructor() {
        this.size_w = random(30, 100);
        this.size_h = random(20, 80);
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.move_x = random(-2, 2);
        this.move_y = random(-2, 2);
        this.body_color = color(random(60), random(100), random(215));
        this.size_w = this.size_w;
        this.size_h = this.size_h;
        this.eye_x = this.size_w * 0.190;
        this.eye_y = this.size_h * 0.40 * -1;
        this.eye_size = this.size_w * 0.1;
        this.feet_x = this.size_w * 0.9 + (this.size_w * 0.25);
        this.feet_y = this.size_h * 0.82;
        this.feet_w = this.size_w * 0.55;
        this.feet_h = this.size_h * 0.4;
        this.left_foot_angle = 0;
        this.right_foot_angle = -6;
        this.foot_angle_delta = random(3);
        this.foot_angle_max = -20;
        this.active_foot = 0;
    }

    // method per frame to update floatinghomeboy
    frame() {
        this.feetAngle();
        this.display();
        this.move();
    }

    display() {

        push();

        translate(this.loc_x, this.loc_y);
        fill(this.body_color);

        rect(60, 60, this.size_w, this.size_h);

        // eyes
        fill('black');
        triangle(-this.eye_x, this.eye_y, this.eye_size, this.eye_size);
        ellipse(this.eye_x, this.eye_y, this.eye_size, this.eye_size);

        // feet
        push();
        rotate(PI * (this.right_foot_angle * 0.01));
        translate(this.feet_x, this.feet_y);
        scale(1, 1);
        arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
        pop();
        push();
        rotate(PI * -(this.left_foot_angle * 0.01));
        translate(-this.feet_x, this.feet_y);
        scale(1, 1);
        arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
        pop();

        pop();
    }

    feetAngle() {

        if (this.active_foot === 2) {
            this.left_foot_angle -= this.foot_angle_delta;
            if (this.left_foot_angle <= this.foot_angle_max) {
                this.foot_angle_delta *= -1;
            }
            if (this.left_foot_angle >= 0) {
                this.active_foot = 1;
                this.foot_angle_delta *= -1;
            }
        } else if (this.active_foot === 1) {
            this.right_foot_angle -= this.foot_angle_delta;
            if (this.right_foot_angle <= this.foot_angle_max) {
                this.foot_angle_delta *= -1;
            }
            if (this.right_foot_angle >= 0) {
                this.active_foot = 0;
                this.foot_angle_delta *= 1;
            }
        }

        //
    }

    move() {
        this.loc_x += this.move_x;
        this.loc_y += this.move_y;

        if (this.loc_x >= width) {
            this.move_x *= -1;
            this.loc_x = width - abs(this.move_x);
        } else if (this.loc_x <= 0) {
            this.move_x *= -1;
            this.loc_x = abs(this.move_x);
        } else if (this.loc_y >= height) {
            this.move_y *= -1;
            this.loc_y = height - abs(this.move_y);
        } else if (this.loc_y <= 0) {
            this.move_y *= -1;
            this.loc_y = abs(this.move_y);
        }
    }
}
