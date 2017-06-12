// Drawing 1
var x = 0;
var y = 0;
var speed = 2;
var xspeed = 2;

function setup() 
{
  createCanvas(600, 450);
  
  background = loadImage('../Images/background.jpg');
  giraffe = loadImage('../Images/giraffe.png');
 
}

function draw() 
{	
	image(background, 0, 0);
	image(giraffe, x, y);
	noStroke();
	
	s = "This is what a giraffe would look like in a spacecraft.";
	fill(50);
	text(s, 125, 20, canvas.width, canvas.height);
	
	y += speed;
	x += xspeed;
	 
	if ((y >= 450 - giraffe.height) || (y <= 0))
	{
		speed *= -1;
		
		if (( x >= 600 - giraffe.width) || (x <= 0))
		{
			xspeed *= -1;
		}
	}
	
	
	// set text color 
	fill(255);
}