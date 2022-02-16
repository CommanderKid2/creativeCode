let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];



let data = [{ name: "Oranges", total: 23 },
    { name: "Bananas", total: 50 },
    { name: "Pears", total: 13 },
    { name: "Apples", total: 33 }
];

let listValues = data.map(function(x) { return x.total })


let chartWidth = 300;
let chartHeight = 300;

let spacing = 5;
let margin = 30;
let numTicks = 10;
let posX = 50;
let posY = 400;
let tickIncrements;
let maxValue;
let numPlaces = 0;

let showValues = true;
let showLabels = true;
let rotateLabels = true;

let colors;


let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

function setup() {
    createCanvas(800, 800);


    colour = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')]

    maxValue = max(listValues);
    tickIncrements = maxValue / numTicks;

}


function draw() {
    background(50);

    translate(posX, posY);


    drawAxis();
    drawTicks();
    drawHorizontalLine();
    drawRects();


    
}


function scaledData(num){
 // fuction a parmeameter (number) and scale it using the max and chartHeight
        return map(num, 0, maxValue, 0 , chartHeight);
}


function drawAxis(){
    //chart
        stroke(255, 180);
        line(0, 0, 0, -chartHeight); //y
        line(0, 0, chartWidth, 0); //x

}

function drawTicks(){
    for (let i = 0; i <= numTicks; i++) {
        //ticks
        stroke(255);
        strokeWeight(1)
        line(0, tickSpacing * -i, -10, tickSpacing * -i);

        //numbers (text)
        if (showValues) {

            fill(255, 200);
            noStroke();
            textSize(14);
            textAlign(RIGHT, CENTER);
            text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
        }
    }

}


function drawHorizontalLine(){
    for (let i = 0; i <= numTicks; i++) {
            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, tickSpacing * -i, chartWidth, tickSpacing * -i);
    }
}

function drawRects(){
    translate(margin, 0);
    for (let i = 0; i < data.length; i++) {
        let colorNumber = i % 4;

        //bars
        fill(colour[colorNumber]);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, scaledData(-data[i].total));

        //numbers (text)
        noStroke();
        fill(255);
        textSize(16);
        textAlign(CENTER, BOTTOM);
        text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, scaledData(-data[i].total));

        //text
        if (showLabels) {
            if (rotateLabels);
            push()
            noStroke();
            textSize(14);
            textAlign(LEFT, CENTER);
            translate(((barWidth + spacing) * i) + barWidth / 2, 10);
            rotate(PI / 2)
            text(data[i].name, 0, 0);
            pop()
        } else {

            noStroke();
            fill(255);
            textSize(14);
            textAlign(CENTER, BOTTOM);
            text(dataLabels[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
        }
    }

}
