let chartWidth = 400;
let chartHeight = 400
let data = [30, 90, 180, 50];
let dataLabels = ["red", "blue", "green", "orange" ]

let scaledData = [];
let maxValue;


let spacing = 10;
let margin = 60;
let numTicks = 10;
let tickLength = 10
let tickIncrements;

let tickSpacing = chartHeight / numTicks;
let tickValues = chartHeight / numTicks;

let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1))
let barWidth = availableWidth / data.length;

//console.log(barWidth)

function setup() {
    createCanvas(500, 500);
    background(0);

    maxValue = max(data);
    tickIncrements = Math.round(maxValue / numTicks);

    for(let i=0; i<data.length; i++){
        let tempVal = map(data[i], 0, max(data), 0, chartHeight);
        scaledData.push(tempVal)
    }
}

function draw() {
    background(0);

    translate(50, 450)

    stroke(255, 200)
    strokeWeight(2)
    line(0, 0, 0, -chartHeight)
    line(0, 0, chartWidth, 0)




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
        text(i * tickIncrements, -15, -i * tickValues)

    }

    translate(margin, 0)
    for (let i = 0; i < scaledData.length; i++) {
        noStroke();
        fill(0, 255, 0)
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i])


        noStroke()
        fill(255)
        textSize(17)
        textAlign(CENTER,CENTER)
        text(data[i], ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i] - 10)

        noStroke()
        fill(255)
        textSize(17)
        textAlign(CENTER,CENTER)
        text(dataLabels[i], ((barWidth + spacing) * i) + barWidth / 2,10)
    }
}