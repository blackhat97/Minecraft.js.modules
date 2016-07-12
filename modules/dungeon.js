importPackage(Packages.com.gaiakeeper.minecraft);

var air = worldedit.createBlock('air');
makeRoom = function(a1, a2, a3, a4, a5, a6){
	var r1, r2;
	if (a1 instanceof Location){
		r1 = a1;
		r2 = a2;
	}
	else {
		r1 = new Location(a1, a2, a3);
		r2 = new Location(a4, a5, a6);
	}
	
	var start = Location.min(r1, r2);
	var end = Location.max(r1, r2);

	worldedit.fill(start, end, air);
	
	// add torches
	var dy = end.y - start.y + 1;
	var torch_distance = 2;
	var torchY = start.y + 2;
	if (torchY > end.y) torchY = end.y;
	
	for(var x = start.x + torch_distance; x < end.x; x += torch_distance)
		worldedit.setTorch(x, torchY, start.z, worldedit.facing_south, 'torch');
	for(var x = end.x - torch_distance; x > start.x; x -= torch_distance)
		worldedit.setTorch(x, torchY, end.z, worldedit.facing_north, 'torch');
	for(var z = start.z + torch_distance; z < end.z; z += torch_distance)
		worldedit.setTorch(start.x, torchY, z, worldedit.facing_east, 'torch');
	for(var z = end.z - torch_distance; z > start.z; z -= torch_distance)
		worldedit.setTorch(end.x, torchY, z, worldedit.facing_west, 'torch');
	
	worldedit.log('room created - from ' + start + " to " + end);
};

// if width > 0, make room to the right
// otherwise make room to the left
makeDirectedRoom = function(width, height, depth){
	var p1 = player.getLocation();
	var p2 = player.getDirectedLocation((width>0)?(width-1):(width+1), height-1, depth-1);
	
	makeRoom(p1, p2);
};

exports.makeRoom = makeRoom;
exports.makeDirectedRoom = makeDirectedRoom;
