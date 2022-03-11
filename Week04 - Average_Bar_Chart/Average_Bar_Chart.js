class Average_Bar_Chart{
    constructor(_data){
        this.data = _data;

        this.chartHeight = 200;
        this.chartWidth = 200;
        this.spacing = 20;
        this.margin = 50;
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

        this.title2="Covid Numbers of Death World List";

        this.title="Country";
        this.fontSize = 30;
        this.textFont = ('Roboto');
        this.chartWidthAge = 600;
        this.chartHeightAge = -150;

        this.colors = [color('#fab1a0'), color('#ff7675'), color('#e17055'), color('#d63031'), color('#81ecec'), color('#74b9ff'), color('#00cec9'), color('#00cec9')];


        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(){
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar width
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
    // this.drawHorizontalTicks2();
    this.drawRects();
    this.drawRects2();
    this.titleAge();
    this.titleCovid();
    this.lineDot();
    //this.drawVerticalTicks();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 4, this.chartHeight);
    }
    
    drawAxis(){
        stroke(255, 180);
        strokeWeight(2);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
        
    }
    
    titleAge(){
        fill('#ecf0f1');
        textSize(this.fontSize);
        textAlign(CENTER, BOTTOM);
        text(this.title, this.chartWidthAge / 2, -this.chartHeightAge - 20);
        textFont(); //not work with font
    }

    titleCovid(){
        fill('#2ecc71');
        textSize(this.fontSize);
        textAlign(CENTER, BOTTOM);
        text(this.title2, this.chartWidth / 2, -this.chartHeight - 20);
        textFont(); //not work with font
        rotate(PI / 5);
    }

    drawTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //ticks
            stroke(255);
            strokeWeight(1);
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);
    
            //numbers (text)
            fill(255);
            noStroke();
            textSize(15);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
        }
    }
    
    drawHorizontalTicks(){
            for(let i=0; i<=this.numTicks; i++){
                //horizontal lines
                stroke(255);
                strokeWeight(0.2);
                line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
            }
    }


    drawVerticalTicks(){
        for(let i=0; i<=this.barWidth; i++){
            //Vertical lines
            stroke(2);
            strokeWeight(5);
            line(0, this.tickSpacing * -i, this.chartWidth, this.barWidth * -i);
        }
}

    drawRects(){
        push();
        translate(this.margin, 0);
        for(let i=0; i<this.data.length; i++){
            let colorNumber = i % 8;
            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaledData(-this.data[i].total));
    
            //numbers (text)
            if(this.showValues){
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledData(-this.data[i].total));
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(255);
                    textSize(21);
                    textAlign(LEFT, CENTER);
    
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                    rotate(PI / 5);
                    text(this.data[i].name, 0, 0);
                    pop();
                }    else{
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
                
            }
        }
        pop();
    }

    drawRects2 (){
        push();
        translate(this.margin, 0);
        for(let i=0; i<this.data.length; i++){
            let colorNumber = i % 8;
            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaledData(-this.data[i].total)); 

            //numbers (text)
            if(this.showValues){
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledData(-this.data[i].total));
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(255);
                    textSize(21);
                    textAlign(LEFT, CENTER);
    
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                    rotate(PI / 5);
                    text(this.data[i].name, 0, 0);
                    pop();
                }    else{
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
                
            }
        }
        pop();
    }


    lineDot(){
        // Use line with dots
        noFill();
        stroke(255);
        strokeWeight(5);
    // line 
        beginShape();
        for(let i=0; i<this.data.length; i++){ 
            vertex(i * 60, -this.scaledData(this.data[i].median))
        }
        endShape();
    // dots 
        fill(255, 0, 0);
        stroke(255);
        strokeWeight(1);
        for(let i=0; i<this.data.length; i++){
            ellipse(i * 60, -this.scaledData((this.data[i].median)), 10, 10)
        }
    }
}
