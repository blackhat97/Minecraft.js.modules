var baseY = 150;
var mobs = ['Zombie', 'Skeleton', 'Creeper'];

var level = 0;
var tid1 = 0, tid2 = 0;
var timer = require("timer");
var min, max;

init();
setSpawnArea(-10, baseY, -10, 10, baseY, 10);

function init(){
	var gamerules = worldedit.getGameRules();
	gamerules.setKeepInventoryEnabled(true);
	
	// disable all spawing mobs
	gamerules.setMobSpawningEnabled(false);
	gamerules.setAnimalSpawningEnabled(false);
	gamerules.setNPCSpawningEnabled(false);
	
	gamerules.setPVPAllowed(false);

	gamerules.setExplosionEnabled(false);
	gamerules.setBreakBlockEnabled(false);
	
	// kill all entities
	worldedit.killAllMobs();
	worldedit.killAllEntities();
}

function setSpawnArea(sx, sy, sz, ex, ey, ez){
	if ( sx > ex ){ var t = sx; sx = ex; ex = t; }
	if ( sy > ey ){ var t = sy; sy = ey; ey = t; }
	if ( sz > ez ){ var t = sz; sz = ez; ez = t; }
	
	min = new Location(sx, sy, sz);
	max = new Location(ex, ey, ez);
}

function rand(_min, _max){
	return Math.floor(Math.random()*(_max - _min + 1)) + _min;
}

var timer_func = function(){
	var count = worldedit.countAllMobs();
	if (count > 0){
		worldedit.log(count + " MOBS left!!!");
	}
	else {
		tid1 = timer.clearInterval(tid1);
		worldedit.log("LEVEL " + level + " cleared!!!");
		worldedit.log(" In 30 seconds, nextLevel level will be started");
		
		tid2 = timer.setTimeout(function(){
				nextLevel();
			}, 30000);
	}
};

function spawnMob(){
	var x, y = min.y, z;
	do {
		x = rand(min.x, max.x);
		z = rand(min.z, max.z);
	} while(!worldedit.checkBlockIfAir(x, min.y, z));
	
	var m = worldedit.createMob(mobs[rand(0, mobs.length - 1)]);
	worldedit.spawnMob(x, min.y, z, m);
}

function nextLevel(){
	level ++;
	
	var air = worldedit.createBlock('air');
	var number = rand(level * 5, level * 10);
	for(var n=0; n<number; n++){
		spawnMob();
	}
	
	worldedit.log("LEVEL " + level + " started!!!");
	tid1 = timer.setInterval(timer_func, 5000);
}

function start(){
	level = 0;
	nextLevel();
}

function stop(){
	if (tid1 > 0) tid1 = timer.clearInterval(tid1);
	if (tid2 > 0) tid2 = timer.clearInterval(tid2);
}
