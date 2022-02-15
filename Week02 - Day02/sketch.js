let chartWidth = 400;
let chartHeight = 400
let data = [30, 90, 120];

let scaledData = [];
let maxValue;


let spacing = 10;
let margin = 60;
let numTicks = 10;
let tickLength = 10
let tickSpacing = chartHeight / numTicks;
let tickValues = chartHeight / numTicks;

let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1))
let barWidth = availableWidth / data.length;

//console.log(barWidth)

function setup() {
    createCanvas(500, 500);
    background(0);
    maxVaule = max(data);


    for(let i=0; i<data.length; i++){
        let tempVal = data[i] *4;
        scaledData.push(tempVal)
    }
}

function draw() {
    background(0);

    translate(50, 450)

    stroke(255, 200)
    strokeWeight(2)
    line(0, 0, 0, -400)
    line(0, 0, 400, 0)




    for (let i = 0; i <= numTicks; i++) {
        //Ticks
        stroke(255, 200)
        strokeWeight(1)
        line(0, -i * tickSpacing, -tickLength, -i * tickSpacing)

        // Tick Values
        fill(255, 0, 0)
        noStroke()
        textSize(12)
        textAlign(RIGHT, CENTER)
        text(i * tickValues, -15, -i * tickValues)

    }

    translate(margin, 0)
    for (let i = 0; i < data.length; i++) {
        noStroke();
        fill(0, 255, 0)
        rect((barWidth + spacing) * i, 0, barWidth, -data[i])
    }
}