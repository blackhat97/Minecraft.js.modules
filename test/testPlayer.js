player.print('Player Name: ' + player.getName());

// health
player.print('Max Health: ' + player.getMaxHealth());
player.setHealth(10);
player.print('After setHealth(10) - Health: ' + player.getHealth());
player.heal(5);
player.print('After heal(5) - Health: ' + player.getHealth());

// player.setLocation(20, 30, 20);
var loc = player.getLocation();
player.print('getLocation: ' + loc);
player.setSpawnPoint(loc);
player.print('getSpawnPoint: ' + player.getSpawnPoint());

player.setAbsorptionAmount(10);
player.print('getAbsorptionAmount: ' + player.getAbsorptionAmount());

player.setInvisible(true);
player.print('isInvisible: ' + player.getInvisible());
player.setInvisible(false);
player.print('isInvisible: ' + player.getInvisible());

player.print('getScore: ' + player.getScore());
player.setScore(20);
player.print('getScore: ' + player.getScore());
player.addScore(5);
player.print('getScore: ' + player.getScore());

// getScore, setScore, addScore
// getExperience, setExperience, addExperience, getExperienceTotal
// getExperienceLevel, setExperienceLevel, addExperienceLevel
player.print('getScore: ' + player.getScore());
player.print('getExperience: ' + player.getExperience());
player.print('getExperienceTotal: ' + player.getExperienceTotal());
player.print('getExperienceLevel: ' + player.getExperienceLevel());

// items
player.print('getHand(): ' + player.getHand());
player.print('getBoots(): ' + player.getBoots());
player.print('getLeggings(): ' + player.getLeggings());
player.print('getChestplate(): ' + player.getChestplate());
player.print('getHelmet(): ' + player.getHelmet());
player.print('getInventorySlotInHand(): ' + player.getInventorySlotInHand());

// effect
player.addEffect('speed', 10, 120);			// 10: amplifier, 120: seconds
// player.removeEffect('speed');
// player.removeAllEffects();


var bow = worldedit.createItem('bow');
bow.enchant('unbreaking', 10);
bow.enchant('sharpness', 10);
bow.enchant('flame', 10);
bow.enchant('power', 10);
bow.enchant('punch', 10);
bow.enchant('knockback', 10);
bow.enchant('infinity', 10);
player.setHand(bow);

var helmet = worldedit.createItem('diamond helmet');
helmet.enchant('unbreaking', 10);
helmet.enchant('protection', 10);
player.setHelmet(helmet);

var leggings = worldedit.createItem('diamond leggings');
leggings.enchant('unbreaking', 10);
leggings.enchant('protection', 10);
player.setLeggings(leggings);

var plate = worldedit.createItem('diamond chestplate');
plate.enchant('unbreaking', 10);
plate.enchant('protection', 10);
player.setChestplate(plate);

var boots = worldedit.createItem('diamond boots');
boots.enchant('unbreaking', 10);
boots.enchant('protection', 10);
player.setBoots(boots);

var sword = worldedit.createItem('diamond sword');
sword.enchant('unbreaking', 10);
sword.enchant('sharpness', 10);
sword.enchant('flame', 10);
sword.enchant('power', 10);
sword.enchant('punch', 10);
sword.enchant('knockback', 10);
sword.enchant('infinity', 10);

var inventory = player.getInventory();
inventory.addItem(sword);
