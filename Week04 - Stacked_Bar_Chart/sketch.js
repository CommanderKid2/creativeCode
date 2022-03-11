let data01 = [
    { name: "Ireland", total: 100, values: [30, 20, 50]},
    { name: "UK", total: 100, values: [20, 10, 70]},
    { name: "Spain", total: 100, values: [12, 38, 50]},
    { name: "Germany", total: 100, values: [39, 41, 20]},
    { name: "Lithiuna", total: 100, values: [31, 11, 58]},
    { name: "Ukraine", total: 100, values: [25, 42, 33]},
    { name: "Poland", total: 100, values: [18, 31, 51]},
    { name: "Lativa", total: 100, values: [62, 12, 26]}
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
    createCanvas(1200, 900);

    chart01 = new BarChart(data01)
    chart01.chartWidth = 400;
    chart01.chartHeight = 600;
    chart01.posX = 100;
    chart01.posY = 700;
 

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