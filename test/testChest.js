var player_location = player.getLocation();
var loc = player_location.add(2, 0, 0);

var block = worldedit.createBlock('chest');
worldedit.setBlock(loc, block);

var bow = worldedit.createItem('bow');
bow.enchant('unbreaking', 5);
bow.enchant('flame', 5);

var arrows = worldedit.createItem('arrow', 32);

var chest = worldedit.getChest(loc);
chest.addItem(bow);
chest.addItem(bow);
chest.setInSlot(5, arrows);

