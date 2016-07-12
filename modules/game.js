var level = 0;
var tid1 = 0, tid2 = 0;
var timer = require("timer");
var min, max;
var mobs = ['Zombie', 'Skeleton', 'Creeper'];

var minMPL = 5;
var maxMPL = 10;

var setMobsPerLevel = function(min, max){
	minMPL = min;
	maxMPL = max;
};

var init = function(){
	// disable all spawing mobs
	var gamerules = worldedit.getGameRules();
	gamerules.setKeepInventoryEnabled(true);
	
	gamerules.setMobSpawningEnabled(false);
	gamerules.setAnimalSpawningEnabled(false);
	gamerules.setNPCSpawningEnabled(false);
	
	gamerules.setPVPAllowed(false);

	gamerules.setExplosionEnabled(false);
	gamerules.setBreakBlockEnabled(false);
	
	// kill all entities
	worldedit.killAllMobs();
	worldedit.killAllEntities();
};

var setPos = function(x, y, z){
	if ( x == undefined ){
		var loc = player.getLocation();
		x = loc.x;
		y = loc.y;
		z = loc.z;
	}
	
	if ( min == undefined ){
		min = new Location(x, y, z);
	}
	else { 
		if (min.x > x) min.x = x;
		if (min.y < y) min.y = y;
		if (min.z > z) min.z = z;
	}

	if ( max == undefined ){
		max = new Location(x, y, z);
	}
	else {
		if (max.x < x) max.x = x;
		if (max.y < y) max.y = y;
		if (max.z < z) max.z = z;
	}
};

var rand = function(_min, _max){
	return Math.floor(Math.random()*(_max - _min + 1)) + _min;
};

var nextLevel = function(){
	level ++;
	
	var number = rand(level * minMPL, level * maxMPL);
	for(var i=0; i<number; i++){
		var x, y = min.y, z;
		do {
			x = rand(min.x, max.x);
			z = rand(min.z, max.z);
		} while(!worldedit.checkBlockIfAir(x, y, z));

		var m = worldedit.createMob(mobs[rand(0, mobs.length - 1)]);
		worldedit.spawnMob(x, y, z, m);
	}
	
	worldedit.log("LEVEL " + level + " started!!!");
};

var timer_func = function timer_func(){
	var count = worldedit.countAllMobs();
	if (count > 0){
		worldedit.log(count + " MOBs left!!!");
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
};

var start = function(){
	level = 0;
	nextLevel();
	
	tid1 = timer.setInterval(timer_func, 5000);
};

var stop = function(){
	if (tid1 > 0) tid1 = timer.clearInterval(tid1);
	if (tid2 > 0) tid2 = timer.clearInterval(tid2);
};

exports.init = init;
exports.start = start;
exports.stop = stop;
exports.nextLevel = nextLevel;
exports.setPos = setPos;
exports.setMobsPerLevel = setMobsPerLevel;
