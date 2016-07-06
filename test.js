var loc = player.getLocation();

var block = worldedit.createBlock("stone plate");
worldedit.setBlock(loc.add(2,0,0), block);
worldedit.setCommandBlock(loc.add(3,0,0), "summon Zombie");

worldedit.setMobSpawner(loc.add(-3,0,0), "Pig");