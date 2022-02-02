


function setup() {
    createCanvas(500,500)
    background(0);
}


function draw() {
    drawBoxes(50);
}


function drawBoxes(numBoxes) {
    let boxSize = width/numBoxes;
    console.log(boxSize)
    fill (255,0,0)
    stroke(255)
    for(let j=0; j<numBoxes; j++){
            for (let i=0; i<numBoxes; i++){
                rect (boxSize*i, boxSize*j, boxSize,boxSize)
            }
    }
}