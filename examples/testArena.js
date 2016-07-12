var loc = player.getLocation();

var start = loc.add(-25, -2, -25);
var end = loc.add(25, -2, 25);

var air = worldedit.createBlock('air');
var iron = worldedit.createBlock('iron block');
var glass = worldedit.createBlock('glass block');
var gold = worldedit.createBlock('gold block');
var diamond = worldedit.createBlock('diamond block');
var lava = worldedit.createBlock('lava');

// clear space (fill by air)
worldedit.fill(start.sub(20, 0, 20), end.add(20, 30, 20), air);

// floor
worldedit.fill(start, end, iron);

up(1);
worldedit.fill(start, end, iron);
worldedit.wall(start.add(2, 0, 2), end.sub(2, 0, 2), 3, lava);
worldedit.wall(start.add(15, 0, 15), end.sub(15, 0, 15), 1, lava);

// cross
worldedit.cross(start.add(1, 0, 1), end.sub(1, 0, 1), 3, diamond);

//wall
for (var i=0; i<5; i++){
	up(1); worldedit.wall(start, end, 3, iron);
	up(1); worldedit.wall(start, end, 1, glass);	
}
up(1); worldedit.wall(start, end, 5, gold);


down(10);
// buttons & command block
worldedit.setButton(loc.x - 1, start.y, start.z + 3, worldedit.facing_south, 'stone_button');
worldedit.setWallSign(loc.x - 1, start.y + 2, start.z + 3, worldedit.facing_south, ['hi 1', '', '', ''] );
worldedit.setCommandBlock(loc.x - 1, start.y - 1, start.z + 2, 'say @a hi 1');

worldedit.setButton(loc.x + 1, start.y, start.z + 3, worldedit.facing_south, 'stone_button');
worldedit.setWallSign(loc.x + 1, start.y + 2, start.z + 3, worldedit.facing_south, ['hi 2', '', '', ''] );
worldedit.setCommandBlock(loc.x + 1, start.y - 1, start.z + 2, 'say @a hi 2');

worldedit.setButton(loc.x - 1, start.y, end.z - 3, worldedit.facing_north, 'stone_button');
worldedit.setWallSign(loc.x - 1, start.y + 2, end.z - 3, worldedit.facing_north, ['hi 3', '', '', ''] );
worldedit.setCommandBlock(loc.x - 1, start.y - 1, end.z - 2, 'say @a hi 3');

worldedit.setButton(loc.x + 1, start.y, end.z - 3, worldedit.facing_north, 'stone_button');
worldedit.setWallSign(loc.x + 1, start.y + 2, end.z - 3, worldedit.facing_north, ['hi 4', '', '', ''] );
worldedit.setCommandBlock(loc.x + 1, start.y - 1, end.z - 2, 'say @a hi 4');

worldedit.setButton(start.x + 3, start.y, loc.z - 1, worldedit.facing_east, 'stone_button');
worldedit.setWallSign(start.x + 3, start.y + 2, loc.z - 1, worldedit.facing_east, ['hi 5', '', '', ''] );
worldedit.setCommandBlock(start.x + 2, start.y - 1, loc.z - 1, 'say @a hi 5');

worldedit.setButton(start.x + 3, start.y, loc.z + 1, worldedit.facing_east, 'stone_button');
worldedit.setWallSign(start.x + 3, start.y + 2, loc.z + 1, worldedit.facing_east, ['hi 6', '', '', ''] );
worldedit.setCommandBlock(start.x + 2, start.y - 1, loc.z + 1, 'say @a hi 6');

worldedit.setButton(end.x - 3, start.y, loc.z, worldedit.facing_west, 'wooden_button');
worldedit.setWallSign(end.x - 3, start.y + 2, loc.z, worldedit.facing_west, ['hi 7', '', '', ''] );
worldedit.setCommandBlock(end.x - 2, start.y - 1, loc.z, 'say @a hi 7');

function up(level){
	start = start.add(0, level, 0);
	end = end.add(0, level, 0);
}

function down(level){
	start = start.sub(0, level, 0);
	end = end.sub(0, level, 0);
}
