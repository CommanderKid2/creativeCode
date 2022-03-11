let data01 = [
    { name: "Italy", total: 156, median: 156 },
    { name: "Turkey", total: 95, median: 40},
    { name: "Germany", total: 124, median: 62 },
    { name: "Russia", total: 350, median: 125 },
    { name: "United Kingdom", total: 162, median: 61 },
    { name: "Barzil", total: 653, median: 350 },
    { name: "India", total: 515, median: 320},
    { name: "United States", total: 960, median: 400 }
];

let data02 = [
    { name: "Ireland", total: 100, values: [30, 20, 50]},
    { name: "UK", total: 100, values: [20, 10, 70]},
    { name: "Spain", total: 100, values: [12, 38, 50]},
    { name: "Germany", total: 100, values: [39, 41, 20]},
    { name: "Lithiuna", total: 100, values: [31, 11, 58]},
    { name: "Ukraine", total: 100, values: [25, 42, 33]},
    { name: "Poland", total: 100, values: [18, 31, 51]},
    { name: "Lativa", total: 100, values: [62, 12, 26]}
    ];
    

let data03 = [
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
    



let Average_Bar;
let Stacked_Bar;
let Horizonal_Bar;

function setup() {
    createCanvas(1800, 1200);

    Average_Bar = new Average_Bar_Chart(data01);
    Average_Bar.chartWidth = 600;
    Average_Bar.chartHeight =900;
    Average_Bar.posX = 100;
    Average_Bar.posY = 1000;


    Stacked_Bar = new Stacked_Bar_Chart(data02);
    Stacked_Bar.chartWidth = 600;
    Stacked_Bar.chartHeight =900;
    Stacked_Bar.posX = 1000;
    Stacked_Bar.posY = 1400;

    Horizonal_Bar = new Horizonal_Bar_Chart(data03);
    Horizonal_Bar.chartWidth = 600;
    Horizonal_Bar.chartHeight =900;
    Horizonal_Bar.posX = 100;
    Horizonal_Bar.posY = 1490;
 

}


function draw() {
    scale(0.75);
    background(0);
    Average_Bar.updateValues();

    Average_Bar.render();
    
    Stacked_Bar.render();

    Horizonal_Bar.render();
      }
