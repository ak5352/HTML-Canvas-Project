// Drawing 3

function setup() 
{
  createCanvas(600, 450);
  horse = loadImage('../Images/horse.png');
  
	s = "Horse Coloring Activity! LEFT and RIGHT click produce different colors.";
	fill(50);
	text(s, 125, 20, canvas.width, canvas.height);
}

function draw() 
{
	image(horse, 100, 50);
	
	if (mouseIsPressed) 
	{
		if (mouseButton == LEFT)
		{
			stroke(133, 87, 35);
			fill(133, 87, 35);
		}
		
		if (mouseButton == RIGHT)
		{
			stroke(185, 156, 107);
			fill(185, 156, 107);
		}
		
		strokeWeight(0.2);
		ellipseMode(CENTER);
		ellipse(mouseX, mouseY, 10, 10);
	}
 }
 
 
	
	
