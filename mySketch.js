var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
class Ball{//一顆球
	constructor(args){ //為一個初始值  //args.r是接受參數值
		this.r = args.r || random(50)//若再new ball的地方有傳值，則採用傳送的值，若無，則用隨機random
		this.p = args.p //{x:random(width), y:random(height)}//圓的位置
		this.v = {x:random(-1,1), y:random(-1,1)}//圓移動的速度
		this.a = args.a|| {x:o, y:0}
		this.color =random(colors)
	}
	draw() //繪製
	{
		push()
		  translate(this.p.x, this.p.y) //將圓心點轉換到現在的座標值
		  fill(this.color)
		  ellipse(0, 0, this.r)
		  ellipse(-this.r/2, -this.r/2, this.r/2)
		  ellipse(this.r/2, -this.r/2, this.r/2)
	    fill(255)
		  arc(0, 0, this.r/2,this.r/2,0,PI) // this.r/2,this.r/2是為了讓他的半徑和圓一樣
	    fill(0) //黑色的眼珠
		  arc(0, 0, this.r/3, this.r/3,0, PI)
		pop()
	}
	update(){ //運作的動作
		this.p.x+=this.v.x
		this.p.y+=this.v.y	
		this.v.x= this.v.x+ this.a.x
		this.v.y= this.v.y+ this.a.y
		if(this.p.y>height){
			this.v.y= -abs(this.v.y)
		}
	}
}

var ball
var balls = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0; i<10; i++){//產生200個圓
	 ball = new Ball({
		      a:{x:0, y:0.1},
		      r:50,
		      p:{x:width/2,y:height/2}})//產生一個新的Ball class元件
	 balls.push(ball)
	}
}

function draw() {
	background(100)
	for(var i=0; i<balls.length; i++){
		let ball = balls[i]
	  ball.draw()
		ball.update()
	}
	
}