var r;
var b;
var g;
var c = 0;


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
let spookmsg;

function setup() {
  createCanvas(400, 400);
  
  soundFormats('mp3');
  alarm = loadSound('sound/alarm.mp3');
  
  button = new Button(width / 2, height / 2, 32);
  alarm.playMode('restart');
  background(255);
  
  spookmsg = textSize (32)
  
  //dnp =  createDiv('DO NO PRESS')
 // dnp.position(80, 245, 300, 300);
  //dnp.size(60,60);
  //dnp.style('60', '60px');
  //was trying to get a text I can make go byebye but... F THAT SHIZ!
  
}

function draw() {
  
  button.display(mouseX, mouseY);
  
  r = random(255);
  g = random(100,200); 100 - 200
  b = random(100); 
  
  
  let s = 'DO NOT PRESS!!!';
textSize(60);
fill(50);
text(s, 80, 245, 300, 300);
stroke(50);
}

//function is called when user clicks
function mousePressed() {
  //add 1 to variable clicks
  c ++;
  
  if (c==2){
    click2();
  }
  else if(c==3){
    click3(); }

  else if (c==4){
    click4();}
 
  else if (c==5){
    click5();}
  
  else if (c==6){
    click6();}
  
  //console.log(c);
  
}

function click2(){
      background(0);
    console.log("black");
}
function click3(){
  background(255,0,0);
    console.log ("red");
    alarm.play();
}
function click4(){
  background(255,0,0);
    console.log("spooky words");
    spookmsg.text("warning system failing",10,50);
  spookmsg.text("failing",10,100);
}
function click5(){
  background (50);
}
function click6(){
  createCanvas(400,400);
  background (50)
  //dnp.hide();
  // tried to make byebye text trigger but poor little p5.js gets confused
}


