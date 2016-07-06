//---------------------------------------------------------------------------------------
// main program

// '/js test.js arg1 arg2 arg3 ...' 이렇게 입력하면,
// args[0] = 'test.js' <-- 파일 이름이고,
// args[1] = 'arg1'
// args[2] = 'arg2'
// args[3] = 'arg3'
// ... 이다.
// 이 경우에는 arg1이 block이름이므로
var block = worldedit.createBlock(args[1]);

// (0, 4, 0)가 Air인 경우에만 block을 바꾼다.
worldedit.setBlockIfAir(0, 4, 0, block);

// (1, 4, 0)의 block을 바꾼다.
worldedit.setBlock(1, 4, 0, block);

// (5, 4, 5)부터 (10, 8, 15)까지를 채운다.
worldedit.fill(5, 4, 5, 10, 8, 15, block);

// (12, 4, 5)부터 (20, 8, 15)까지 평면을 만든다.
worldedit.drawXRect(12, 4, 5, 20, 8, 15, block);

// (20, 8, 15)부터 (12, 4, 25)까지 평면을 만든다.
worldedit.drawXRect(20, 8, 15, 12, 4, 25, block);

// 현재 player의 위치를 획득한다.
var location = player.getLocation();
location = location.add(0,0,5);

worldedit.drawZRect(location.add(0,0,0), location.add(5,20,10), block);
worldedit.drawZRect(location.add(5,20,0), location.add(10,0,10), block);

// player에게 chat message를 보낸다.
player.print('Hello');

