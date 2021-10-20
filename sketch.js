var r;
var b;
var g;

class Button {
  constructor(x_, y_, r_) {
    // Location and size
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y-70) < this.r+40;
  }

  
  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(200,110,110);
    } else {
      fill(200,100,100);
    }
    stroke(0);
    strokeWeight(0);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y-70, this.r+40, this.r+40);
  }
}

let alarm;
let button;

function setup() {
  createCanvas(400, 400);

  soundFormats('mp3');
  alarm = loadSound('sound/alarm.mp3');
  
  button = new Button(width / 2, height / 2, 32);
  alarm.playMode('restart');
  
}

function draw() {
  background(255);
  button.display(mouseX, mouseY);
  
  r = random(255);
  g = random(100,200); 100 - 200
  b = random(100); 
  
  
  let s = 'DO NOT PRESS!!!';
textSize(60);
fill(50);
text(s, 80, 245, 300, 300);
}

function mousePressed() {
  // plays sound on click
  if (button.contains(mouseX, mouseY)) {
    alarm.play();
  
  function mousePressed() {
  if (alarm.isPlaying()) {
    alarm.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
    
   function mousePressed() {
  clicks ++;
}
    function mouseClicked() {
  if ( clicks === 2) {
    background(r,b,g);
  }
  }
}
}
  }
  
}


