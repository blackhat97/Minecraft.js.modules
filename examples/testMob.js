var mob = worldedit.createMob('zombie');

var sword = worldedit.createItem('iron sword');
mob.setHand(sword);

mob.setHelmet(worldedit.createItem('iron helmet'));
mob.addEffect('fire resistance', 5, 600);	

var loc = player.getLocation();
worldedit.spawnMob(loc.add(5, 0, 0), mob);