var mob = worldedit.createMob(args[1]);

var sword = worldedit.createItem('iron sword');
mob.setHand(sword);

mob.setHelmet(worldedit.createItem('iron helmet'));
mob.addEffect('fire resistance', 5, 600);	

var loc = player.getLocation();
worldedit.spawnMob(mob, loc.add(5, 0, 0));;