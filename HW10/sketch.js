let smileys = [];
let t = 5;

function setup(){
    createCanvas( 1000, 600 );

    // create a bunch of random, sine movement smileys
    for (var i = 0; i < 5; i++) {

        // add new smiley objs to the array
        smileys.push(
            {
                period: { x: random(75, 200), y: random(40, 215) },
                maxSize: random(10),
                maxDist: {
                    x: random(width/4),
                    y: random(height/4)
                },
                pos: {
                    x: random(width),
                    y: random(height)
                }
            } //
        );
    }
}

function draw() {

    background('grey');


       let numToDraw = map( mouseX, 2, width, 1, smileys.length );
       for ( let i = 0; i < numToDraw; i++ ) {

           drawSmiley( smileys[i], t );
       }


       t++;

   }


   function drawSmiley( smiley, time ) {

       let x = sinePos( smiley.period.x, time );
       let y = sinePos( smiley.period.y, time );

       let pos_x = x * smiley.maxDist.x + smiley.pos.x;
       let pos_y = y * smiley.maxDist.y + smiley.pos.y;


       smileyFace(
           pos_x,
           pos_y,
           x * smiley.maxSize,
           y * smiley.maxSize
           );
       }



       function smileyFace( pos_x, pos_y, scale_x, scale_y ) {
           push();

           translate( pos_x, pos_y );
           scale( scale_x, scale_y );


           stroke( 30 );
           fill('blue');
           noStroke();
           fill( 60, 255 );
           ellipse( -10, -20, 60 );
           ellipse( 10, -30, 10 );

           pop();
       }



       function sinePos( timeScale, time ) {
           let val = sin( TWO_PI * time/timeScale );
           return val;
  }
