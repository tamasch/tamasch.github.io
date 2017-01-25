function Player(col, row){
	this.pos = createVector(col, row);
	this.direction = 0;

	this.move = function(dir, steps){
		if (dir == "L"){
			this.direction -= 90;
		}
		else {
			this.direction += 90;
		}

		var v = p5.Vector.fromAngle(radians(this.direction));
		v.setMag(steps);
		this.pos.add(v);

		/*switch(this.direction) {
			case direction % TWO_PI == 0:
				this.pos.y -= steps;
				break;
			case direction % HALF_PI:
				this.pos.x += steps;
				break;
			case direction % PI:
				this.pos.y += steps;
				break;
			case direction % 3 * TWO_PI:
				this.pos.x -= steps;
				break;
		}*/
	}

	//this.turn = function(direction){
	//
	//}

	this.show = function(){
		stroke(255);
		strokeWeight(1);
		//triangle(this.pos.x * cellwidth, this.pos.y * cellheight, this.pos.x * cellwidth + cellwidth, this.pos.y * cellheight, this.pos.x * cellwidth + cellwidth / 2, (this.pos.y - 1)	* cellheight);
		rect(this.pos.x * cellwidth - cellwidth, this.pos.y * cellheight - cellheight, cellwidth, cellheight);
	}
}