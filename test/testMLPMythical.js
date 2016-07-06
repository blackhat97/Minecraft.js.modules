var mythical = require('MLPMythical');

var mob = mythical.createMob('arctic scorpion');
var loc = player.getLocation();
worldedit.spawnMob(mob, loc.add(10, 0, 10));

var item = mythical.createItem('twilicorn pick');
player.setHand(item);

var block = mythical.createBlock('bone block');
var woodenDoor = worldedit.createBlock('wooden door');

var loc = loc.add(0,0,2);
worldedit.setBlock(loc.add(0,0,0), block);
worldedit.setBlock(loc.add(0,1,0), block);
worldedit.setBlock(loc.add(0,2,0), block);
worldedit.setBlock(loc.add(1,2,0), block);
worldedit.setBlock(loc.add(2,2,0), block);
worldedit.setBlock(loc.add(2,1,0), block);
worldedit.setBlock(loc.add(2,0,0), block);
worldedit.setDoor(loc.add(1,0,0), woodenDoor, worldedit.facing_south);