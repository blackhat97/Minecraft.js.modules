var block = worldedit.createBlock(args[1]);

// (0, 4, 0)에서부터 (4, 4, 0)까지 5개 블럭을 바꾼다.
for(var x=0; x<5; x++){
	worldedit.setBlock(x, 4, 0, block);
}

// (0, 4, 1)에서부터 (4, 4, 1)까지 5개 블럭을 바꾼다.
for(var x=0; x<5; x++){
	worldedit.setBlock(x, 4, 1, block);
}

// (0, 4, 2)에서부터 (4, 4, 2)까지 5개 블럭을 바꾼다.
for(var x=0; x<5; x++){
	worldedit.setBlock(x, 4, 2, block);
}

// (0, 4, 3)에서부터 (4, 4, 3)까지 5개 블럭을 바꾼다.
for(var x=0; x<5; x++){
	worldedit.setBlock(x, 4, 3, block);
}


//위의 반복적인 프로그램을 for문장으로 바꾸면 다음과 같다.
for(var z=0; z<4; z++){		// z가 0부터 4보다 작을때까지, 하나씩 증가하면서 실행한다.
	for(var x=0; x<5; x++){
		worldedit.setBlock(x, 4, z, block);
	}
}
// 이렇게 하면,
// (0, 4, 0)부터 (4, 4, 3)까지의 평면을 block으로 채운다.