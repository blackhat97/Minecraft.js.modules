// 현재 player의 위치를 획득한다.
var playerLocation = player.getLocation();

var stone = worldedit.createBlock('stone');
var gold = worldedit.createBlock('gold');
var diamond = worldedit.createBlock('diamond');
var emerald = worldedit.createBlock('emerald');

var woodenDoor = worldedit.createBlock('wooden door');
var ironDoor = worldedit.createBlock('iron door');

var location = playerLocation.add(-1,0,3);
worldedit.setBlock(location.add(0,0,0), stone);
worldedit.setBlock(location.add(0,1,0), stone);
worldedit.setBlock(location.add(0,2,0), stone);
worldedit.setBlock(location.add(1,2,0), stone);
worldedit.setBlock(location.add(2,2,0), stone);
worldedit.setBlock(location.add(2,1,0), stone);
worldedit.setBlock(location.add(2,0,0), stone);
worldedit.setDoor(location.add(1,0,0), woodenDoor, worldedit.facing_south);

location = playerLocation.add(-1,0,-3);
worldedit.setBlock(location.add(0,0,0), gold);
worldedit.setBlock(location.add(0,1,0), gold);
worldedit.setBlock(location.add(0,2,0), gold);
worldedit.setBlock(location.add(1,2,0), gold);
worldedit.setBlock(location.add(2,2,0), gold);
worldedit.setBlock(location.add(2,1,0), gold);
worldedit.setBlock(location.add(2,0,0), gold);
worldedit.setDoor(location.add(1,0,0), woodenDoor, worldedit.facing_north);

location = playerLocation.add(3,0,-1);
worldedit.setBlock(location.add(0,0,0), diamond);
worldedit.setBlock(location.add(0,1,0), diamond);
worldedit.setBlock(location.add(0,2,0), diamond);
worldedit.setBlock(location.add(0,2,1), diamond);
worldedit.setBlock(location.add(0,2,2), diamond);
worldedit.setBlock(location.add(0,1,2), diamond);
worldedit.setBlock(location.add(0,0,2), diamond);
worldedit.setDoor(location.add(0,0,1), woodenDoor, worldedit.facing_east);

location = playerLocation.add(-3,0,-1);
worldedit.setBlock(location.add(0,0,0), emerald);
worldedit.setBlock(location.add(0,1,0), emerald);
worldedit.setBlock(location.add(0,2,0), emerald);
worldedit.setBlock(location.add(0,2,1), emerald);
worldedit.setBlock(location.add(0,2,2), emerald);
worldedit.setBlock(location.add(0,1,2), emerald);
worldedit.setBlock(location.add(0,0,2), emerald);
worldedit.setDoor(location.add(0,0,1), ironDoor, worldedit.facing_west);
