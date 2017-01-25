var cwidth = 800;
var cheight = 600;
var rows = 300;
var cols = 400;
var cellheight = cheight / rows;
var cellwidth = cwidth / cols;
var directions = ["L2", "L3", "L3", "L4", "R1", "R2", "L3", "R3", "R3", "L1", "L3", "R2", "R3", "L3", "R4", "R3", "R3", "L1", "L4", "R4", "L2", "R5", "R1", "L5", "R1", "R3", "L5", "R2", "L2", "R2", "R1", "L1", "L3", "L3", "R4", "R5", "R4", "L1", "L189", "L2", "R2", "L5", "R5", "R45", "L3", "R4", "R77", "L1", "R1", "R194", "R2", "L5", "L3", "L2", "L1", "R5", "L3", "L3", "L5", "L5", "L5", "R2", "L1", "L2", "L3", "R2", "R5", "R4", "L2", "R3", "R5", "L2", "L2", "R3", "L3", "L2", "L1", "L3", "R5", "R4", "R3", "R2", "L1", "R2", "L5", "R4", "L5", "L4", "R4", "L2", "R5", "L3", "L2", "R4", "L1", "L2", "R2", "R3", "L2", "L5", "R1", "R1", "R3", "R4", "R1", "R2", "R4", "R5", "L3", "L5", "L3", "L3", "R5", "R4", "R1", "L3", "R1", "L3", "R3", "R3", "R3", "L1", "R3", "R4", "L5", "L3", "L1", "L5", "L4", "R4", "R1", "L4", "R3", "R3", "R5", "R4", "R3", "R3", "L1", "L2", "R1", "L4", "L4", "L3", "L4", "L3", "L5", "R2", "R4", "L2"];
var index = 0;

function setup(){
	createCanvas(cwidth, cheight);
	background(0);

	p = new Player(150, 150);
	xposlabel = createElement('p', 'x: ' + p.pos.x);
 	xposlabel.position(820, 0);

 	yposlabel = createElement('p', 'y: ' + p.pos.y);
 	yposlabel.position(820, 30);

	frameRate(2);
	
}

function draw(){
	background(0);
	stroke(0, 255, 0, 50);
	//strokeWeight(1);
	for (i = 0; i < cols; i++){
		line(i * cellwidth, 0, i * cellwidth, height);
	}

	for (i = 0; i < rows; i++){
		line(0, i * cellheight, width, i * cellheight);
	}

	p.move(directions[index].substring(0, 1), directions[index].substring(1));

	p.show();

	xposlabel.html('x: ' + Math.round(p.pos.x));
	yposlabel.html('y: ' + Math.round(p.pos.y));

	if (index < directions.length - 1){
		index++;
	}
}

function getSteps(start, end){

}