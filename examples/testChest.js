var player_location = player.getLocation();
var loc = player_location.add(2, 0, 0);

worldedit.setChest(loc, worldedit.facing_north, 'chest');
var inventory = worldedit.getChestInventory(loc);

var bow = worldedit.createItem('bow');
inventory.addItem(bow);

bow = worldedit.createItem('bow');
bow.enchant('unbreaking', 5);
bow.enchant('flame', 5);
inventory.addItem(bow);

var arrows = worldedit.createItem('arrow', 32);
inventory.setInSlot(5, arrows);

