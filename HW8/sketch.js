
function setup() {
	createCanvas( windowWidth, 500);
	noStroke();
}

function draw() {
	let numPerRow = 20;
	let circleSize = 15;
	let pad = width / numPerRow;
	let y = circleSize;

	background(0);

	for ( let x = circleSize; x < width; x += pad) {
rotate(radians);
    fill( 255, 200, random(255) );
		rect( x, y, circleSize, circleSize );
	}

  y += pad;
for ( let x = circleSize; x < width; x += pad) {
  fill( 255, 240, random(255) );
  ellipse( x, y, circleSize, circleSize );
}

for ( let y = circleSize; y < height; y += pad) {
  for ( let x = circleSize; x < width; x += pad) {
    fill( 255, 180, random(255) );
    ellipse( x, y, circleSize, circleSize );
  }

  for ( let y = circleSize; y < height; y += pad) {
  for ( let x = circleSize; x < width; x += pad) {
    fill( 255, 5, random(255) );
    rect( x, y, circleSize, circleSize );
  }
}
}


}
