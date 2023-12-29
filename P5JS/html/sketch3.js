var circleSize = 40;
var stratX;
var startY;
//이름은 마음대로 지으나, 되도록 동작을 설명하게 적어야,
// start X, Y는 x부터시작하는값, Y부터 시작하는 값을 설명

function setup(){
	createCanvas (windowWidth, windowHeight);
	background (235);

	stroke (255, 0, 0);
	strokeWeight (3);
	line (150, 150, windowWidth * 0.5, windowHeight * 0.5);
	//라인은 각각 (X, Y, X, Y) 앞의 xy에서 뒤의 xy까지 선을 긋는다.

	stroke (0);
	strokeWeight (20);
	point (windowWidth * 0.5, windowHeight * 0.5);
	// windowWidth * 곱하기, 창의 최대크기는 1이라 절반은
	//0.5, 3분할은 0.33, 0.66, 1이 편하다.
}


//mouseClicked는 Pressed 와 Released를 동시에,
//mousePressed는 눌렀을때, mouseReleased는 땠을때
function mousePressed(){
	startX = mouseX;
	startY = mouseY;
	stroke (0);
	strokeWeight (1);
	fill (255, 100, 50);
	ellipse (mouseX, mouseY, 40, 40);
}

function mouseReleased(){
	line(startX, startY, mouseX, mouseY)
	//라인은 각각 (X, Y, X, Y) 앞의 xy에서 뒤의 xy까지 선을 긋는다.
	stroke (0);
	strokeWeight (1);
	fill (100, 255, 50);
	ellipse (mouseX, mouseY, 40, 40);
	circleSize = 40;
}

function mouseDragged(){
	circleSize = circleSize + 1;
	console.log (mouseX + " " + mouseY);
	ellipse(mouseX, mouseY, circleSize, circleSize);
	// +와 " "는 마우스 X, Y를 분리시키기 위헤
	//콘솔창에 정보를 출력하는 함수
	//콘솔창에 마우스 드래그가 1로 표시되고 그것이 몇번 실행되었는지 기록
	//문장을 연할땐 +로
}