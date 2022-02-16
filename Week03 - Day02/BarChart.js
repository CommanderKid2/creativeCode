class BarChart{
    constructor(_data) {
    this.data = _data;
    this.chartWidth = 300;
    this.chartHeight = 300;
    this.spacing = 5;
    this.margin = 30;
    this.numTicks = 10;
    this.posX = 50;
    this.posY = 400;
    this.tickIncrements;
    this.maxValue;
    this.numPlaces = 0;
        
    this.showValues = true;
    this.showLabels = true;
    this.rotateLabels = true;
        
    this.colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];
        
    this.updateValues();
    this.calculateMaxValue();
    }   

    updateValues(){
        this.tickSpacing = this.chartHeight / this.numTicks; 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (data.length - 1)); 
        this.barWidth = this.availableWidth / this.data.length; 
    }

    calculateMaxValue(){
        let listValues = data.map(function(x) {return x.total});
        this.maxValue = max(listValues);
        this.tickIncrements = (maxValue / numTicks);
    }

    render(){
        background(50);

        translate(posX, posY);
    
    
        drawAxis();
        drawTicks();
        drawHorizontalLine();
        drawRects();
    }


    scaledData(num){
        // fuction a parmeameter (number) and scale it using the max and chartHeight
               return map(num, 0, maxValue, 0 , chartHeight);
       }
       
       
       drawAxis(){
           //chart
               stroke(255, 180);
               line(0, 0, 0, -chartHeight); //y
               line(0, 0, chartWidth, 0); //x
       
       }
       
       drawTicks(){
           for (let i = 0; i <= this.numTicks; i++) {
               //ticks
               stroke(255);
               strokeWeight(1)
               line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);
       
               //numbers (text)
               if (showValues) {
       
                   fill(255, 200);
                   noStroke();
                   textSize(14);
                   textAlign(RIGHT, CENTER);
                   text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
               }
           }
       
       }
       
       
       drawHorizontalLine(){
           for (let i = 0; i <= this.numTicks; i++) {
                   //horizontal line
                   stroke(255, 50);
                   strokeWeight(1)
                   line(0, this.tickSpacing * -i, chartWidth, this.tickSpacing * -i);
           }
       }
       
       drawRects(){
           translate(this.margin, 0);
           for (let i = 0; i < this.data.length; i++) {
               let colorNumber = i % 4;
       
               //bars
               fill(this.colour[colorNumber]);
               noStroke();
               rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaledData(-this.data[i].total));
       
               //numbers (text)
               noStroke();
               fill(255);
               textSize(16);
               textAlign(CENTER, BOTTOM);
               text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, scaledData(-data[i].total));
       
               //text
               if (this.showLabels) {
                   if (this.rotateLabels);
                   push()
                   noStroke();
                   textSize(14);
                   textAlign(LEFT, CENTER);
                   translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                   rotate(PI / 2)
                   text(this.data[i].name, 0, 0);
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
       
}
