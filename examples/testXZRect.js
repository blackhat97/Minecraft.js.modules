var block = worldedit.createBlock('gold block');

// 현재 player의 위치를 획득한다.
var location = player.getLocation();
location = location.add(0,0,5);

worldedit.fill(location.add(10,0,0), location.add(20,20,5), block);
worldedit.planeX(location.add(0,0,0), location.add(10,20,5), block);
worldedit.planeX(location.add(0,20,5), location.add(10,0,10), block);

worldedit.planeX(location.add(0,0,0), location.add(-10,5,20), block);
worldedit.planeX(location.add(0,5,20), location.add(-10,0,40), block);
worldedit.fill(location.add(-10,0,0), location.add(-20,5,40), block);

location = location.add(5,0,-30);
worldedit.fill(location.add(0,0,10), location.add(5,20,20), block);
worldedit.planeZ(location.add(0,0,0), location.add(5,20,10), block);
worldedit.planeZ(location.add(5,20,0), location.add(10,0,10), block);

worldedit.planeZ(location.add(0,0,0), location.add(20,5,-10), block);
worldedit.planeZ(location.add(20,5,0), location.add(40,0,-10), block);
worldedit.fill(location.add(0,0,-10), location.add(40,5,-20), block);
