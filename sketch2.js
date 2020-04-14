let bubbles = [] //bubble = person

mapSize_x = 600;
mapSize_y = 400;
maxDist = 10; //max distance a person can move in 1 refresh\
infectionValue = 125;
removalValue = 255;

function setup() {
  createCanvas(mapSize_x, mapSize_y);

  // bubble1 = new Bubble(200,200,50);
  // bubble2 = new Bubble(300,200,50);


  //creating n number of bubbles/people
  for(let i = 0; i <40; i++){
	let x = random(width-10);
  let y = random(height-10);
  bubbles[i] = new Bubble(x,y,10);
  } 

  //choosing  an infected bubble from all the bubbles 
  bad = bubbles[Math.floor(Math.random() * bubbles.length)];
}

function draw() {
  background(0);  
	// if (bubble1.intersects(bubble2)){
	// 	background(200, 0, 100);	
	// } 

  // for (let i = 0; i< bubbles.length; i++){
  // 	bubbles[i].move();
  // 	bubbles[i].show(); 
  // } 

  for (b of bubbles){
  	b.move();
  	b.show();
    bad.changeColorInfect();
    // for(other of bubbles){
    //   if (bad !== other && bad.intersects(other)) {
    //    other.changeColorInfect();
    //   }	

    for(i of bubbles){
      for(j of bubbles){
        if (i !== j && i.intersects(j)){
          if(i.brightness + j.brightness >= infectionValue && i.brightness + j.brightness < removalValue){
            i.changeColorInfect();
            j.changeColorInfect();
          }
        }
      }
    }
    //for(all the bubble){
    //if (any 2 bubbles with this.brightness > 255 intersect){ 
    //  changeColorInfect both
    //}

    //}


  //   }
  }  
}
class Bubble {
  constructor(x, y, r ){
  	this.x = x;
  	this.y = y;
  	this.r = r; 
  	this.brightness=0; //brightness = 0 :okay  brightness = 255 :infected
  }

  intersects(other){
  	let d = dist(this.x, this.y, other.x, other.y);
  	return (d < this.r + other.r);  	
  }
  // infect() : if a bubble/person is infected it changes color
  changeColorInfect(){
    this.brightness = infectionValue;    
    //this.brightness = removalvalue after x seconds og changeColorInfect;
    //var that = this;
    setTimeout(()=>{this.brightness = removalValue}, 5000)

    //setTimeout(changeColorRemove(){that.brightness = removalvalue;}, 5000); //this?
    //setInterval(function(){alert("Hello")},3000);
  }

  // changeColorRemove(){
  //   this.brightness = removedValue;
  // }

  
  move(){
    if (this.x < mapSize_x && this.x !== 0){
      this.x = this.x + random(-maxDist,maxDist);
    } 
    else if (this.x < this.r){
      this.x = this.x + random(maxDist)
    }
    else {this.x = this.x + random(-maxDist)}


    if (this.y < mapSize_y){
  	this.y = this.y + random(-maxDist,maxDist);
    }
    else if (this.y < this.r){
      this.y = this.y + random(maxDist)
    }
    else {this.y = this.y + random(-maxDist)}
  }

  show(){
  	stroke(255);
  	strokeWeight(1);
  	//noFill();
    fill(this.brightness)
  	
  	ellipse(this.x, this.y, this.r*2)
  }

  infect(){
    stroke(255);
    strokeWeight(1);
    //noFill();
    fill(this.brightness=255, 125);
    ellipse(this.x, this.y, this.r*2)
  }

}
