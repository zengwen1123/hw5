function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 20; i <= 380; i = i + 10) {
    var startX = 200;
    var startY = 200;
    var R = i;
    
		ellipseMode(CENTER)
		noFill()
		ellipse(startX, startY, R);
  }
}
