// Drawing 2

function setup() 
{
  createCanvas(600, 450);
  crab = loadImage('../Images/crab.png');
  
  s = "LEFT and RIGHT click the crab to see pixel manipulation in action!";
  fill(50);
  text(s, 125, 20, canvas.width, canvas.height);
}

function draw() 
{
	image(crab, 20, 70);
	
	if (mouseIsPressed) 
	{
		if (mouseButton == LEFT)
		{	
			loadPixels();
			var d = pixelDensity();
			
			var imageLength = 4 * (width * d) * (height * d);
			
			for (var i = 0; i < imageLength; i+=4) 
			{
			  pixels[i] = 255 - pixels[i];
			  pixels[i+1] = 105 - pixels[i+1];
			  pixels[i+2] = 0 - pixels[i+2];
			}
			
			updatePixels();
		}
		
		if (mouseButton == RIGHT)
		{
			loadPixels();
			var d = pixelDensity();
			
			var imageLength = 4 * (width * d) * (height * d);
			
			for (var i = 0; i < imageLength; i+=4) 
			{
				if (pixels[i] == 255 && pixels[i+1] == 255 && pixels[i+2] == 255)
				{
					pixels[i] = 255;
					pixels[i+1] = 105;
					pixels[i+2] = 0;
				}
			  
			}
			
			updatePixels();
		}
	}
}