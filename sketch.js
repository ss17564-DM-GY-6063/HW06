let xPos = [];
let yPos = [];
let yVel = 1.5;
let s0 = "In all the world There's nothing like The sound of falling snow The only noise I've ever known That makes the clocks move slow The only sound That sweeps away The din of city streets And wraps around In soft embrace Most everyone it meets A sound that’s not A sound at all A quiet soft and dear That comforts all The sleepy souls Who sit and watch and hear";

let words;

function preload() {
  mFont = loadFont("./Times New Roman.ttf");
  img1 = loadImage('snow3.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  words = s0.split(" ");
  for (let d = 0; d < words.length; d += 1) {
    xPos.push(random(width));
    yPos.push(random(-200, 200));
  }
}

function draw() {
  background(img1);
  randomSeed(100);
  noStroke();

    for (let d = 0; d < words.length; d++) {
      let word = words[d].toUpperCase();
      fill(255,255,255, random(100, 255));
      textSize(15);
      textFont(mFont);
    text(word, xPos[d], yPos[d]);

    // update
    yPos[d] = yPos[d] + yVel;

    // check
    if (yPos[d] > height) {
      xPos[d] = random(width);
      yPos[d] = random(-100, 100);
    }
  }
}