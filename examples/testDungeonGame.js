var baseY = 150;
var roomY = baseY + 4;
var tunnelY = baseY + 2;

function makeRoom(x1, z1, x2, z2){
	dungeon.makeRoom(x1, baseY, z1, x2, roomY, z2);
}

function makeTunnel(x1, z1, x2, z2){
	dungeon.makeRoom(x1, baseY, z1, x2, tunnelY, z2);
}

function makeDungeon(){
	// make rooms
	makeRoom(-45,-35,45,-30);			//1
	makeRoom(-20,-30,-15,-15);			//2
	makeRoom(-40,-10,-30,10);			//3
	makeRoom(-25,15,-10,25);			//4
	makeRoom(-45,30,45,35);				//5
	makeRoom(20,15,40,25);				//6
	makeRoom(0,0,15,10);				//7
	makeRoom(-25,-10,5,-5);				//8
	makeRoom(10,-20,15,-5);				//9
	makeRoom(20,-20,35,-15);			//10
	makeRoom(30,-10,40,10);				//11
	
	//maketunnels
	makeTunnel(-45,-30,-44,30);			//a
	makeTunnel(-45,-25,-20,-23);		//b
	makeTunnel(-31,-30,-30,-10);		//c
	makeTunnel(-45,20,-25,23);			//d
	makeTunnel(-30,0,0,1);				//e
	makeTunnel(-20,-15,-19,15);			//f
	//makeTunnel(-20,-5,-19,15);		//g merged into f
	makeTunnel(-5,-5,-3,30);			//h
	makeTunnel(-15,25,-13,30);			//i
	makeTunnel(-10,20,20,21);			//j
	makeTunnel(0,10,1,30);				//k
	makeTunnel(14,-5,15,0);				//l
	makeTunnel(-15,-16,10,-15);			//m
	makeTunnel(3,-30,5,-10);			//n
	makeTunnel(25,-30,28,-20);			//o
	makeTunnel(35,-20,45,-19);			//p
	makeTunnel(15,5,30,6);				//q
	makeTunnel(20,-15,21,15);			//r
	makeTunnel(39,10,40,30);			//s
	// makeTunnel(39,25,40,30);			//t merged into s
	makeTunnel(40,20,45,21);			//u
	makeTunnel(43,-30,45,30);			//v
}

function init(){
	game.init();
	
	game.setPos(-45, baseY, -35);
	game.setPos(45, baseY, 35);
	
	game.setMobsPerLevel(5, 8);
}

function start(){
	game.start();
}

function stop(){
	game.stop();
}
