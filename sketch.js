let x = 50;
let y = 50
let dir =1;
let vel=1;
 
function setup() {
 createCanvas(400, 300);
 background(0,0,0);
stroke (255);
 
}
 
 function draw() {
 
   background(0,0,0);
   fill (random (0, 255), random (0,255), random (0,255));
   ellipse(x, 150, 50, 50);
 
x = x + (vel * dir);
 
if (x > width) {
 dir = -1
}
 
if (x < 0) {
 dir = 1
}

fill (random (0, 255), random (0,255), random (0,255));
ellipse(200, y, 50, 50);

y = y + (vel * dir);
 
if (y > height) {
 dir = -1

}
 
if (y < 0) {
 dir = 1

}


 }
