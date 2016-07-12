var block = worldedit.createBlock('gold block');

// (0, 4, 0)에서부터 (4, 4, 0)까지 5개 블럭을 바꾼다.
worldedit.setBlock(0, 4, 0, block);
worldedit.setBlock(1, 4, 0, block);
worldedit.setBlock(2, 4, 0, block);
worldedit.setBlock(3, 4, 0, block);
worldedit.setBlock(4, 4, 0, block);

//위의 반복적인 프로그램을 for문장으로 바꾸면 다음과 같다.
for(var x=0; x<5; x++){		// x가 0부터 5보다 작을때까지, 하나씩 증가하면서 실행한다.
	worldedit.setBlock(x, 4, 0, block);
}
// 이렇게 하면,
// (0, 4, 0)부터 (4, 4, 0)까지의 직선을 block으로 채운다.