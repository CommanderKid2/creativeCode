let data01 = [
    { name: "Oranges", total: 23 },
    { name: "Bananas", total: 34 },
    { name: "Pears", total: 23 },
    { name: "Apples", total: 18 }
];

// let data02 = [
//     { name: "Oranges", total: 223 },
//     { name: "Bananas", total: 134 },
//     { name: "Pears", total: 233 },
//     { name: "Apples", total: 118 }
// ];


let chart01;
let chart02;

function setup() {
    createCanvas(800, 800);

    chart01 = new BarChart(data01)
    chart01.chartWidth = 350;
    chart01.chartHeight = 400
    chart01.posX = 100;
    chart01.posY = 700;
 

    // chart02 = new BarChart(data02)
    // chart02.chartWidth = 200;
    // chart02.chartHeight = 200
    // chart02.posX = 550;
    // chart02.posY = 300;
    // chart02.updateValues();

}


function draw() {
    background(155);
    chart01.updateValues();
    chart01.render();
    // chart02.render();
}