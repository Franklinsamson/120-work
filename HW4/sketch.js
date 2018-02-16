// setup function
  function setup() {
      //create a canvas to draw on
      createCanvas (600, 800);
}

function draw() {

    // background
    background( 'yellow' );

    /* ***************************** */
    /* MAIN SANDBOX */
    /* ***************************** */
    push();

    // set the grid center( x:0, y:0 )
    // to canvas center
    translate( 300, 400 );


    /* ***************************** */
    /* ARMS */
    /* ***************************** */
    push();
    translate( 0, -75 );


    // left arm

    rotate( PI );

    stroke( 'rgba(158, 0, 0, 1.0)' );
    strokeWeight( 50 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'rgb(133, 94, 0)' );
    strokeWeight( 75 );
   point( -200, -200 );

   // right arm

   rotate( PI );
   stroke( 'rgba(158, 0, 0, 1.0)' );
   strokeWeight( 50 );
   line( -140, 0, -200, -100 );
   line( -200, -100, -200, -200 );

   // hand
   stroke( 'rgb(133, 94, 0)' );
   strokeWeight( 75 );
   point( -200, -200 );

   pop(); // ARMS END


   /* ***************************** */
   /* BODY */
   /* ***************************** */
   push();

   // main shirt rectangle
   fill('white');
   rect(-150, -100, 300, 300, 0, 90, 45, 150 );


   // orange short stripes
   push();
   fill( 'orange' );
    translate(-150, -100);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    pop();

    // red shirt stripes
    push();
    fill( 'rgba(158, 0, 0, 1.0)' );
    translate(-150, -100);
    rect(0, 0, 30, 280);
    translate(87, 0);
    rect(0, 0, 30, 280);
    translate(87, 0);
    rect(0, 0, 30,280);
    translate(87, 0);
    rect(0, 0, 30, 280);
    pop();

    // button
    fill('black');
    ellipse( 0, -41, 15 );
    fill('black');
    ellipse( 0, 0, 15 );
    fill('black');
    ellipse( 0, 41, 15 );
    fill('black');
    ellipse( 0, 81, 15 );
    fill('black');
    ellipse( 0, 121, 15 );
    fill('black');
    ellipse( 0, 161, 15 );




    pop(); // BODY END!


    /* ***************************** */
    /* LEGS */
    /* ***************************** */
    push();
   translate( 0, 200 );

   // left leg
   fill( 'blue' );
   triangle( -130, 0, 0, 0, -150, 500 );
   // right leg
   scale( -1, 1 );
   triangle( -130, 0, 0, 0, -150, 500 );
   pop(); // LEGS END


   /* ***************************** */
   /* HEAD */
   /* ***************************** */
   push();
   translate( 0, -175 );

   fill( 'rgb(133, 94, 0)' );
   ellipse( 0, 0, 200, 200 );

   // mouth
   fill('red');
   arc(
       0,
       50,
       100,
       60,
       radians(350),
       radians(190),
       PIE
   );


   // nose
   fill('beige');
   triangle( -40, 10, 30, 20, -30, 20 );

   // eyes
   // left
   push();
   translate( -60, -40 );

   fill(255);
   ellipse( 0, 0, 40, 35 );
   noFill();
   fill( 'rgb(133, 94, 0)' );
   ellipse( 0, 0,15 );
   fill( 'black' );
   ellipse( 0, 0, 5 );

   fill( 'black' );
   quad( 40, -40, 35, -30, -50, -10, -45, -30 );
   pop();

   // right
   push();
   translate( 60, -40 );

   fill(255);
   ellipse( 0, 0, 40, 35 );
   noFill();
   fill( 'rgb(133, 94, 0)' );
   ellipse( 0, 0,15 );
   fill( 0 );
   ellipse( 0, 0, 5 );
   fill( 'black' );
   quad( -40, -40, -35, -30, 50, -10, 45, -30 );
   pop();

   pop(); // HEAD END




   pop();
}
