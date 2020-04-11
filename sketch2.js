let bubbles = []
mapSize_x = 600;
mapSize_y = 400;


function setup() {
  createCanvas(mapSize_x, mapSize_y);

  // bubble1 = new Bubble(200,200,50);
  // bubble2 = new Bubble(300,200,50);

  for(let i = 0; i <10; i++){
	let x = random(width);
  	let y = random(height);
  	bubbles[i] = new Bubble(x,y,20);
  }
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
    bad.infect();

    
    
  	for(other of bubbles){
  		if (bad !== other && bad.intersects(other)) {
  			other.infect();
  		}
	
   }
  }

  
}


class Bubble {
  constructor(x, y, r  ){
  	this.x = x;
  	this.y = y;
  	this.r = r; 
  	
  }



  intersects(other){
  	let d = dist(this.x, this.y, other.x, other.y);
  	return (d < this.r + other.r);
  	// if (    d < this.r + other.r   ){
  	// 	return true;
  	// }
  	// else{
  	// 	return false;
  	// }
  	
  }

  move(){
    if (this.x < mapSize_x){
      this.x = this.x + random(-5,5);
    } 
    else {this.x = this.x + 0}


    if (this.y < mapSize_y){
  	this.y = this.y + random(-5,5);
    }
    else {this.y = this.y + 0}
  }

  show(){
  	stroke(255);
  	strokeWeight(1);
  	noFill();
  	
  	ellipse(this.x, this.y, this.r*2)
  }

  infect(){
    stroke(255);
    strokeWeight(1);
    //noFill();
    fill(100,125);
    ellipse(this.x, this.y, this.r*2)
  }

}
