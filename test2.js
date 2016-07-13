var baseY = 150;
var mobs = ['Zombie', 'Skeleton', 'Creeper'];

var level = 0;
var tid1 = 0, tid2 = 0;
var timer = require("timer");
var min = player.getLocation();
var max = player.getLocation();

init();
setPos(-10, baseY, -10);
setPos(10, baseY, 10);

function init(){
	// disable all spawing mobs
	var gamerules = worldedit.getGameRules();
	gamerules.set("doMobSpawning", false);
	gamerules.set("keepInventory", true);
	
	worldedit.setSpawnAnimalEnabled(false);
	worldedit.setSpawnNPCEnabled(false);
	worldedit.setSpawnMobEnabled(false, false);

	worldedit.setPVPAllowed(false);

	worldedit.setExplosionEnabled(false);
	worldedit.setBreakBlockEnabled(false);
	
	// kill all entities
	worldedit.killAllMobs();
	worldedit.killAllEntities();
}

function setPos(x, y, z){
	if ( x == undefined ){
		loc = player.getLocation();
		x = loc.x;
		y = loc.y;
		z = loc.z;
	}
	
	if (min.x > x) min.x = x;
	if (max.x < x) max.x = x;
	if (min.z > z) min.z = z;
	if (max.z < z) max.z = z;
}

function rand(_min, _max){
	return Math.floor(Math.random()*(_max - _min + 1)) + _min;
}

function nextLevel(){
	level ++;
	
	var air = worldedit.createBlock('air');
	var number = rand(level * 5, level * 10);
	for(var i=0; i<number; i++){
		var x = rand(min.x, max.x);
		var z = rand(min.z, max.z);
		while(!worldedit.checkBlock(x, min.y, z, air)){
			x = rand(min.x, max.x);
			z = rand(min.z, max.z);
		}
		var m = worldedit.createMob(mobs[rand(0, mobs.length - 1)]);
		worldedit.spawnMob(x, min.y, z, m);
	}
	
	worldedit.log("LEVEL " + level + " started!!!");
}

var timer_func = function timer_func(){
	var count = worldedit.countAllMobs();
	if (count > 0){
		worldedit.log(count + " MOBS left!!!");
	}
	else {
		tid1 = timer.clearInterval(tid1);
		worldedit.log("LEVEL " + level + " cleared!!!");
		worldedit.log(" In 30 seconds, nextLevel level will be started");
		
		tid2 = timer.setTimeout(function(){
			tid2 = timer.clearTimeout(tid2);
			
			nextLevel();
			tid1 = timer.setInterval(timer_func, 5000);
		}, 30000);
	}		
}

function start(){
	level = 0;
	nextLevel();
	
	tid1 = timer.setInterval(timer_func, 5000);
}

function stop(){
	if (tid1 > 0) tid1 = timer.clearInterval(tid1);
	if (tid2 > 0) tid2 = timer.clearInterval(tid2);
}
