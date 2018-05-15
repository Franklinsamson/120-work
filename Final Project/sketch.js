var pong;

function setup(){
createCanvas(1200, 700);
pong = new Pong();
noCursor();
}

function draw(){
background('Purple');
pong.move();
pong.bounce();
pong.show();
pong.glide();
pong.appear();

}

class Pong {
  constructor() {
    //paddle data
    this.paddle_x_axis = 20;
    this.paddle_y_axis = height - 25;
    this.paddle_size_width = 150;
    this.paddle_size_height = 20;
    this.paddle_barrier_right = width - 50;
    this.paddle_barrier_left = 20;
    //paddle image
    this.show = function () {
      fill('blue');
      noStroke();
      rect(this.paddle_x_axis, this.paddle_y_axis,
        this.paddle_size_width, this.paddle_size_height);
    };
    //paddle location and trail
    this.glide = function () {
      this.paddle_x_axis = constrain(mouseX - (this.paddle_size_width / 5),
      this.paddle_barrier_left, this.paddle_barrier_right);
    };
    //ellispe data
    var fives = [-10, 10]
    this.ball_x_axis = width / 4;
    this.ball_y_axis = height / 4;
    this.ball_size = 50;
    this.ball_move_x_axis = random(fives);
    this.ball_move_y_axis = 10;
    this.ball_radius = this.ball_size / 20;

    //ellipse illustration
    this.appear = function (){
      fill('orange');
      noStroke();
      ellipse(this.ball_x_axis, this.ball_y_axis, this.ball_size, this.ball_size);
    };



    //ellispe limitation and motion
    this.move = function (){
      this.ball_x_axis += this.ball_move_x_axis;
      this.ball_y_axis += this.ball_move_y_axis;

        if (this.ball_x_axis >= width) {
          this.ball_move_x_axis *= -1;
          this.ball_x_axis = width - abs(this.ball_move_x_axis);
        }
        else if (this.ball_x_axis <= 0) {
          this.ball_move_x_axis *= -1;
          this.ball_x_axis = abs(this.ball_move_x_axis);
        }
        else if (this.ball_y_axis >= height) {
          this.ball_x_axis = width / 5;
          this.ball_y_axis = height / 5;
          this.ball_move_x_axis = random(fives);

        }
        else if (this.ball_y_axis <= -1) {
          this.ball_move_y_axis *= -1;
          this.ball_y_axis = abs(this.ball_move_y_axis);
        };
    //impact of paddle and ellipse

    this.bounce = function (){
      if (this.ball_x_axis + this.ball_size > this.paddle_x_axis &&
          this.ball_x_axis < this.paddle_x_axis + this.paddle_size_width &&
          this.ball_y_axis + this.ball_size + this.ball_move_y_axis > this.paddle_y_axis &&
          this.ball_y_axis + this.ball_move_y_axis < this.paddle_y_axis + this.paddle_size_height) {
          this.ball_move_y_axis *= - .5;
        };
      };
    };
  };
}
