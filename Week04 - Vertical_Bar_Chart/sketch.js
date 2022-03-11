let data01 = [
    { name: "Italy", total: 156 },
    { name: "Turkey", total: 95 },
    { name: "Germany", total: 124 },
    { name: "Russia", total: 350 },
    { name: "United Kingdom", total: 162 },
    { name: "Barzil", total: 653 },
    { name: "India", total: 515 },
    { name: "United States", total: 960 }
];

// let data02 = [
//     { name: "0-9", total: 7 },
//     { name: "10-19", total: 33 },
//     { name: "20-29", total: 53 },
//     { name: "30-40", total: 64 }
// ];


let chart01;
// let chart02;

function setup() {
    createCanvas(900, 1200);

    chart01 = new BarChart(data01);
    chart01.chartWidth = 600;
    chart01.chartHeight =900;
    chart01.posX = 100;
    chart01.posY = 1000;
 

    // chart02 = new BarChart(data02)
    // chart02.chartWidth = 400;
    // chart02.chartHeight = 600
    // chart02.posX = 700;
    // chart02.posY = 700;
    // chart02.updateValues();

}


function draw() {
    background(0);
    chart01.updateValues();
    chart01.render();
    // chart02.render();
}