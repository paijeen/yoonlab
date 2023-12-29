//변수 -> 저장하는면 제공, 주로 var
var circleScale = 0; 

//함수 -> 기능적인면 제공
function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#79BD8F");
	noCursor();
}

function draw() {
	if(mouseY > windowHeight * 0 && mouseY < windowHeight * 0.33){
		background("#FFFF9D");
	}

	else if(mouseY > windowHeight * 0.33 && mouseY < windowHeight * 0.66){
		background("#BEEB9F");
	}

	else{
		background("#79BD8F");
	}

	if(mouseIsPressed){
		circleScale = circleScale + 3;
	}

	if(circleScale > 500){
		circleScale = 0;	
	}

		noFill();
		stroke("aqua")
		strokeWeight(10);
		//ellipse(windowWidth * 0.5, windowHeight * 0.5, 300, 300);
		ellipse(mouseX, mouseY, circleScale, circleScale);
}