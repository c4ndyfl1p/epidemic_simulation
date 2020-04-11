let bubbles = []



function setup() {
  createCanvas(600, 400);

  // bubble1 = new Bubble(200,200,50);
  // bubble2 = new Bubble(300,200,50);

  for(let i = 0; i <10; i++){
	let x = random(width);
  	let y = random(height);
  	bubbles[i] = new Bubble(x,y,20);
  }
 
}

function draw() {
  background(0);

  
	// if (bubble1.intersects(bubble2)){
	// 	background(200, 0, 100);	
	// } 


  // bubble1.move();
  // bubble1.show();
  // bubble2.move();
  // bubble2.show();

  // for (let i = 0; i< bubbles.length; i++){
  // 	bubbles[i].move();
  // 	bubbles[i].show(); 
  // } 

  for (b of bubbles){
  	b.move();
  	b.show();
  	for(other of bubbles){
  		if (b !== other && b.intersects(other)) {
  			b.changeColor(100);
  		}
	}
  }
  
}

class Bubble {
  constructor(x, y, r  ){
  	this.x = x;
  	this.y = y;
  	this.r = r; 
  	this.brightness = 0;
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

  changeColor(bright){
  	this.brightness = bright;
  }

 
  

  move(){
  	this.x = this.x + random(-5,5);
  	this.y = this.y + random(-5,5);

  }

  show(){
  	stroke(255);
  	strokeWeight(1);
  	//noFill();
  	fill(this.brightness), 125;
  	ellipse(this.x, this.y, this.r*2)
  }


}