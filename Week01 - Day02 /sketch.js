
function setup() {
    createCanvas(500,500) 
    background(0);
}


function draw() {
    drawBoxes(5, color,('magenta'));


}


function drawBoxes(numBoxes,storkeColor) {
    let boxSize = width/numBoxes;
    console.log(boxSize)
    fill (25,0,0)
    stroke('magenta')
    for(let j=0; j<numBoxes; j++){
            for (let i=0; i<numBoxes; i++){
                rect (boxSize*i, boxSize*j, boxSize,boxSize)
            }
    }
}