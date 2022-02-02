let boxWidth =20;
let boxHeight =20;
let spacing= 5;
let numBoxes= 10;
let xOffset= 10;
let yOffset= 10;



function setup(){
    createCanvas(500,500)
    background(0);
}

function draw(){
    drawBoxes();
}


function drawBoxes(){
    fill (254,0,0)
    noStroke()
    for(let i=0; i<numBoxes; i++){
        let totalSpace=boxWidth+ spacing;
        rect (i*totalSpace + xOffset, yOffset,boxWidth,boxHeight)
    }
}


function clap(startNum, endNum){
    let loopCount = endNum-startNum
    for (let i=0; i<num; i++){
        console.log("Hi" + (startNum+i))
    }

    return "Done";
}

function addMeUp(num01, num02){
    let total = num01 + num02;
    console.log("all my work is done")
    return total;
}