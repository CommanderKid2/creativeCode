let data01 = [
    { name: "20-29", total: 0.2},
    { name: "30-39", total: 0.4 },
    { name: "40-49", total: 0.8},
    { name: "50-59", total: 2},
    { name: "60-69", total: 9},
    { name: "70-79", total: 26  },
    { name: "80-89", total: 30 },
    { name: "90+", total: 25 }
];

let data02 = [
    { name: "20-29", total: 0.4},
    { name: "30-39", total: 0.6 },
    { name: "40-49", total: 1.7 },
    { name: "50-59", total: 5 },
    { name: "60-69", total: 11 },
    { name: "70-79", total: 24 },
    { name: "80-89", total: 24 },
    { name: "90+", total: 15 }
];





let Italy_chart;
let UK_chart_case;

function setup() {
    createCanvas(1800, 1200);

    Italy_chart = new Italy_chart_Chart(data01);
    Italy_chart.chartWidth = 600;
    Italy_chart.chartHeight = 900;
    Italy_chart.posX = 125;
    Italy_chart.posY = 1000;

    UK_chart_case = new UK_Chart(data02);
    UK_chart_case.chartWidth = 600;
    UK_chart_case.chartHeight = 700;
    UK_chart_case.posX = 150;
    UK_chart_case.posY = 1000;

    noLoop()

}


function draw() {
    scale(0.6);
    background(0);
    Italy_chart.updateValues();
    Italy_chart.render();

    UK_chart_case.updateValues();
    UK_chart_case.render();


}