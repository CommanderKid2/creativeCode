class BarChart{
    constructor(_data){
        this.data = _data;

        this.chartHeight = 200;
        this.chartWidth = 200;
        this.spacing = 10;
        this.margin = -10;
        this.numTicks = 10;
        this.posX = 100;
        this.posY = 300;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0.1;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.tickbelow;

        this.showValues = true; //show values above
        this.showLabels = true; //rotate values
        this.rotateLabels = true; //show name

        this.title2="% of population vaccinated";

        this.title="Age";
        this.fontSize = 25;
        this.textFont = ('Roboto');
        this.chartWidthAge = 400;
        this.chartHeightAge = -120;

        this.colors = [color('#fab1a0'), color('#ff7675'), color('#e17055'), color('#d63031'), color('#81ecec'), color('#74b9ff'), color('#00cec9'), color('#00cec9')];


        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(){
        this.tickSpacing = this.chartWidth / this.numTicks; //space between ticks on  the left 
        this.availableHeight = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barHeight = this.availableHeight / this.data.length; //bar width
        //this.tickbelow = this.chartHeight / this.numTicks; //space between ticks on the below (need help)********
    }

    calculateMaxValue(){
        let listValues = this.data.map(function(x) {return x.total});
        this.maxValue = max(listValues);
        this.tickIncrements = (this.maxValue / this.numTicks);
    }
    


    render(){
    push()
    translate(this.posX, this.posY);
    this.drawAxis();
    this.drawTicks();
    this.drawHorizontalTicks();
    this.drawRects();
    this.titleCovid();
    // this.titleAge();
    //this.drawVerticalTicks();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartWidth);
    }
    
    titleCovid(){
        fill('#3498db');
        textSize(this.fontSize);
        textAlign(CENTER, BOTTOM);
        text(this.title2, this.chartWidth / 3, -this.chartHeight - 60);
        textFont(); //not work with font
        rotate(PI / 5);
    }

    drawAxis(){
        stroke(255, 180);
        strokeWeight(2);
        line(0, 0, 0, -this.chartHeight); //x
        line(0, 0, this.chartWidth, 0); //y
        
    }

    drawTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //ticks
            stroke(255);
            strokeWeight(1);
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10);
    
            //numbers (text)
            fill(255);
            noStroke();
            textSize(15);
            textAlign(CENTER, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 15);
        }
    }
    
    drawHorizontalTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //horizontal lines
            stroke(255);
            strokeWeight(0.2);
            line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartHeight);
        }
    }

    drawRects(){
        push();
        rotate(PI / 2)
        translate(this.margin, 0);
        for(let i=0; i<this.data.length; i++){
            let colorNumber = i % 8;
            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barHeight + this.spacing) * -i, 0, -this.barHeight, this.scaledData(-this.data[i].total));
    
            //numbers (text)
            if(this.showValues){
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].total, ((-this.barHeight + -this.spacing) * i) + -this.barHeight / 2, this.scaledData(-this.data[i].total));
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    rotate(PI / -2)
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(RIGHT, CENTER);
    
                    translate(-this.barHeight + -5 / 1, ((-this.barHeight + -this.spacing) * i));
                    //rotate(PI / -5);
                    text(this.data[i].name, 0, -9);
                    pop();
                }    else{
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barHeight + this.spacing) * i) + this.barHeight / 2, 20);
                }
                
            }
        }
        pop();
    }

}
