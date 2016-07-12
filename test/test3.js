var block = worldedit.createBlock('gold block');


// (0, 4, 0)에서부터 (4, 4, 3)까지 5개 블럭을 바꾼다.
for(var z=0; z<4; z++){
	for(var x=0; x<5; x++){
		worldedit.setBlock(x, 4, z, block);
	}
}

// (0, 5, 0)에서부터 (4, 5, 3)까지 5개 블럭을 바꾼다.
for(var z=0; z<4; z++){
	for(var x=0; x<5; x++){
		worldedit.setBlock(x, 5, z, block);
	}
}

// (0, 6, 0)에서부터 (4, 6, 3)까지 5개 블럭을 바꾼다.
for(var z=0; z<4; z++){
	for(var x=0; x<5; x++){
		worldedit.setBlock(x, 6, z, block);
	}
}


//위의 반복적인 프로그램을 for문장으로 바꾸면 다음과 같다.
for(var y=4; y<7; y++){		// y가 4부터 7보다 작을 때까지, 하나씩 증가하면서 실행한다.
	for(var z=0; z<4; z++){
		for(var x=0; x<5; x++){
			worldedit.setBlock(x, y, z, block);
		}
	}
}
// 이렇게 하면,
// (0, 4, 0)부터 (4, 6, 3)까지의 공간을 block으로 채운다.
// 아래와 동일하다.
worldedit.fill(0, 4, 0, 4, 6, 3, block);