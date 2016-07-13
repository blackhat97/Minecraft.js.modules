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
