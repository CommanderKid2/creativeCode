let data01 = [
    { name: "Ecuador", total: 82},
    { name: "Malaysia", total: 82 },
    { name: "Peru", total:83},
    { name: "Brazil", total: 83 },
    { name: "Italy", total: 83 },
    { name: "Canada", total: 85 },
    { name: "Australia", total: 86 },
    { name: "Cambodia", total: 87},
    { name: "Spain", total: 87 },
    { name: "Argentina", total:88},
    { name: "Chile", total: 92 },
    { name: "Cuba", total: 93 },
    { name: "Portugal", total: 95 },
    { name: "UAE", total: 99.0 }
];



let chart01;
// let chart02;

function setup() {
    createCanvas(1200, 900);

    chart01 = new BarChart(data01)
    chart01.chartWidth = 400;
    chart01.chartHeight = 400;
    chart01.posX = 100;
    chart01.posY = 700;
 

}


function draw() {
    background(0);
    chart01.updateValues();
    chart01.render();

}