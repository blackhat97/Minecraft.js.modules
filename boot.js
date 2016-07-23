importPackage(Packages.com.gaiakeeper.minecraft);

air = worldedit.createBlock('air');

timer = require('timer');
game = require('game');
dungeon = require('dungeon');

LevelUp = require('LevelUp');
Mythical = require('MLPMythical');
AM2 = require('ArsMagica2');
CustomNPC = require('CustomNPC');

// utilities for all
function rand(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function log(msg){
	worldedit.log(msg);
}

function setHoeCommand(cmd){
	worldedit.setHoeCommand(cmd);
}

function setHoeToMakeDungeon(){
	setHoeCommand('dungeon.makeDirectedRoom(5, 4, 10)');
}

function setHoeToSpawn(npc){
	setHoeCommand('spawn' + npc + '(@);');
}

// CustomNPC
var spawnCrystal = CustomNPC.Models.spawnCrystal;
var spawnDragon = CustomNPC.Models.spawnDragon;
var spawnGolem = CustomNPC.Models.spawnGolem;
var spawnPony = CustomNPC.Models.spawnPony;
var spawnDwarf = CustomNPC.Models.spawnDwarf;
var spawnElf = CustomNPC.Models.spawnElf;
var spawnEnderchibi = CustomNPC.Models.spawnEnderchibi;
var spawnEnderman = CustomNPC.Models.spawnEnderman;
var spawnFurry = CustomNPC.Models.spawnFurry;
var spawnHuman = CustomNPC.Models.spawnHuman;
var spawnZombie = CustomNPC.Models.spawnZombie;
var spawnNaga = CustomNPC.Models.spawnNaga;
var spawnOrc = CustomNPC.Models.spawnOrc;
var spawnVillager = CustomNPC.Models.spawnVillager;

