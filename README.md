# 자바스크립트로 만드는 마인크래프트

[Minecraft.js](https://github.com/gaiakeeper/Minecraft.js)는 Javascript로 Minecraft를 쉽게 확장할 수 있도록 하는 Forge 1.7.10 모드다. [Minecraft.js.modules](https://github.com/gaiakeeper/Minecraft.js.modules)은 Minecraft.js를 사용하는 예제와 모듈 라이브러리이다.

## 설치하기

1. Forge 1.7.10 모드 설치하기: [Minecraft Forge 1.7.10 다운로드 사이트](http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.7.10.html)에서 최신 버전(1.7.10 - 10.13.4.1614)을 설치한다. 이미 설치된 경우에는 다시 할 필요 없다.
2. 다운로드: [Minecraft.js.modules](https://github.com/gaiakeeper/Minecraft.js.modules)에서 GIT clone을 하거나 [ZIP 파일](https://github.com/gaiakeeper/Minecraft.js.modules/archive/master.zip)을 다운로드 하여 압축을 푼다.
3. Minecraft.js 모드 설치하기: 압축의 mods 폴더에 있는 모든 파일을 Minecraft mods 폴더(보통의 경우 ```%appdata%\.minecraft\mods```)에 복사한다.
    - minecraftjs-forge.1.7.10-SNAPSHOT-{version}.jar: Minecraft.js 모드
    - b77_1710f.jar: 한글 입력을 위한 모드
    - MythicalC v1.2.7.jar: Mythical 확장 모드
    - Level-Up-Mod-1.7.10.jar: Level Up 확장 모드(클래스/기술)
    - Zelda-Sword-Skills-Mod-1.7.10.jar: Zelda Sword 모드(기술)
4. Javascript 예제 및 모듈 라이브러리 설치하기: 압축을 푼 파일을 config\javascript 폴더(보통의 경우 ```%appdata%\.minecraft\config\javascript```)에 복사한다. config\javascript 폴더가 마인크래프트에서 실행되는 Javascript의 최상위 폴더이다.

## 던전 만들기

그림과 같은 모양의 던전을 만들어 보자.

![Alt text](/img/dungeon.png?raw=true "던전")

다음은 높이(baseY) 150에 던전을 만드는 프로그램이다(```test1.js```).
```
var baseY = 150;

// room
makeRoom(0, baseY, -10, 10, baseY + 4, 0);		// R1
makeRoom(-10, baseY, -10, -5, baseY + 4, 3);	// R2
makeRoom(-10, baseY, 6, 2, baseY + 4, 10);		// R3
makeRoom(5, baseY, 2, 10, baseY + 4, 10);		// R4

// path
makeRoom(-5, baseY, -10, 0, baseY + 1, -9);		// P1
makeRoom(-3, baseY, -10, -2, baseY + 1, 6);		// P2
makeRoom(-5, baseY, 2, 5, baseY + 1, 3);		// P3
makeRoom(-10, baseY, 3, -9, baseY + 1, 6);		// P4

function makeRoom(sx, sy, sz, ex, ey, ez){
	if ( sx > ex ){ var t = sx; sx = ex; ex = t; }
	if ( sy > ey ){ var t = sy; sy = ey; ey = t; }
	if ( sz > ez ){ var t = sz; sz = ez; ez = t; }
	
	var air = worldedit.createBlock('air');
	worldedit.fill(sx, sy, sz, ex, ey, ez, air);
	
	var torch_distance = 2;
	var torchY = sy + 2;
	if ( torchY > ey ) torchY = ey;
	
	for(var x = sx + 1; x < ex; x += torch_distance){
		worldedit.setTorch(x, torchY, sz, worldedit.facing_south, 'torch');
	}
	
	for(var x = ex - 1; x > sx; x -= torch_distance){
		worldedit.setTorch(x, torchY, ez, worldedit.facing_north, 'torch');
	}
	
	for(var z = sz + 1; z < ez; z += torch_distance){
		worldedit.setTorch(sx, torchY, z, worldedit.facing_east, 'torch');
	}
	
	for(var z = ez - 1; z > sz; z -= torch_distance){
		worldedit.setTorch(ex, torchY, z, worldedit.facing_west, 'torch');
	}
}
```

이렇게 만든 프로그램은 ```/js test1.js```로 실행할 수 있다. (10, 150, -10)으로 이동하여(```/tp 10 150 -10```) 던전이 잘 만들어 졌는지 확인해 보자.

## 게임 만들기

위에서 만든 던전에 몹을 모두 죽이면 다음 레벨로 올라가게 되는 게임을 만들어 보자.
다음은 레벨에 따라 더 많은 수의 몹(Zombie, Skeleton, Creeper)이 출현하도록 하는 프로그램이다(```test2.js```).

```
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
```

이렇게 만든 프로그램은 ```/js test2.js```로 실행할 수 있다(반드시 던전 안에서 실행해야 한다). 그러면 게임이 초기화 된다. 그리고, ```/js start();```로 게임을 시작시킬 수 있으며, ```/js stop();```으로 게임을 종료시킬 수 있다.

게임이 시작되면, 계속해서 level이 올라가면서 더 많은 수의 몹이 출현한다.

## 모듈 라이브러리 만들기

상기 예에서 던전을 만드는 기능과 게임 기능을 일반화된 모듈로 만들어서 쉽게 재사용할 수 있도록 할 수 있다.  modules 폴더에 있는 [dungeon.js](https://github.com/gaiakeeper/Minecraft.js.modules/blob/master/modules/dungeon.js), [game.js](https://github.com/gaiakeeper/Minecraft.js.modules/blob/master/modules/game.js)가 바로 그 예이다. examples 폴더에 있는 [testDungeonGame.js](https://github.com/gaiakeeper/Minecraft.js.modules/blob/master/examples/testDungeonGame.js)는 이미 만들어진 모듈을 이용해서 던전을 만들고, 게임을 진행하는 예이다.

## 다른 모드 이용하기

다른 모드도 쉽게 Javascript에서 사용할 수 있다. modules 폴더에 있는 [MLPMythical.js](https://github.com/gaiakeeper/Minecraft.js.modules/blob/master/modules/MLPMythical.js)는 MLPMythical 모드를 쉽게 사용할 수 있도록 하는 모듈이며, 이를 사용하는 방법은 [testMLPMythical.js](https://github.com/gaiakeeper/Minecraft.js.modules/blob/master/examples/testMLPMythical.js)을 참고하면 된다.

