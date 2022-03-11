let data = [
    { data: 100, median: 2 },
    { data: 100, median: 50 },
    { data: 100, median: 50 },
    { data: 100, median: 50 },
];

let chart01;


function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(50);

// Use line with dots
noFill();
    stroke(255);
    strokeWeight(5);
// line 
    beginShape();
    for(let i=0; i<data.length; i++){ 
        vertex(i * 60, data[i].median)
    }
    endShape();
// dots 
    fill(255, 0, 0);
    stroke(255);
    strokeWeight(1);
    for(let i=0; i<data.length; i++){
        ellipse(i * 60, data[i].median, 10, 10)
    }
  }