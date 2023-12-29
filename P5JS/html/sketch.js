//변수 -> 저장하는면 제공
var number;
number = 5 + 5;
alert(number);

number = 3;
alert(number);

number = number * 100;
alert(number);

alert(2 != 2);
// == 는 양쪽 두개가 같은지
// != 는 양쪽 두개가 다른지, !는 부정으로 쓰임

alert(2 <= 1);
// <= >= 부등호를 오른쪽에 둔다.

//함수 -> 기능적인면 제공
function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#ee33dd");

	fill(200);
	stroke(255);
	strokeWeight(10);
	rect(50, 50, 100, 100);
	fill(0);
	noFill();
	stroke(255);
	strokeWeight(20);
	ellipseMode("corner");
	ellipse(500, 500, number, number);
}

function draw() {
	if (mouseIsPressed) fill(0);
	else fill(245);
	stroke(255, 0, 0);
	strokeWeight(2);
	noStroke();
	rect(windowWidth - mouseX, windowHeight - mouseY, 20, 20);
	rect(windowWidth - mouseX, mouseY, 20, 20);
	rect(mouseX, mouseY, 20, 20);
	rect(mouseX, windowHeight - mouseY, 20, 20);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}