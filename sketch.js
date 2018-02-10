var stars = [];
var speed;

function setup() {
    createCanvas(300, 300);
    for (var i = 0; i < 400; i++) {
        stars.push(new Star())
    }
}

function draw() {
    speed = map(mouseX, 0, width, 1, 15);
    background(0);
    translate(width / 2, height / 2);
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}

function mousePressed() {

}