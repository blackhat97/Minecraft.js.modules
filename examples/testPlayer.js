worldedit.log('Player Name: ' + player.getName());

// health
worldedit.log('Max Health: ' + player.getMaxHealth());
player.setHealth(10);
worldedit.log('After setHealth(10) - Health: ' + player.getHealth());
player.heal(5);
worldedit.log('After heal(5) - Health: ' + player.getHealth());

// player.setLocation(20, 30, 20);
var loc = player.getLocation();
worldedit.log('getLocation: ' + loc);
player.setSpawnPoint(loc);
worldedit.log('getSpawnPoint: ' + player.getSpawnPoint());

player.setAbsorptionAmount(10);
worldedit.log('getAbsorptionAmount: ' + player.getAbsorptionAmount());

player.setInvisible(true);
worldedit.log('isInvisible: ' + player.getInvisible());
player.setInvisible(false);
worldedit.log('isInvisible: ' + player.getInvisible());

worldedit.log('getScore: ' + player.getScore());
player.setScore(20);
worldedit.log('getScore: ' + player.getScore());
player.addScore(5);
worldedit.log('getScore: ' + player.getScore());

// getScore, setScore, addScore
// getExperience, setExperience, addExperience, getExperienceTotal
// getExperienceLevel, setExperienceLevel, addExperienceLevel
worldedit.log('getScore: ' + player.getScore());
worldedit.log('getExperience: ' + player.getExperience());
worldedit.log('getExperienceTotal: ' + player.getExperienceTotal());
worldedit.log('getExperienceLevel: ' + player.getExperienceLevel());

// items
worldedit.log('getHand(): ' + player.getHand());
worldedit.log('getBoots(): ' + player.getBoots());
worldedit.log('getLeggings(): ' + player.getLeggings());
worldedit.log('getChestplate(): ' + player.getChestplate());
worldedit.log('getHelmet(): ' + player.getHelmet());
worldedit.log('getInventorySlotInHand(): ' + player.getInventorySlotInHand());

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

var helmet = worldedit.createItem('diamond_helmet');
helmet.enchant('unbreaking', 10);
helmet.enchant('protection', 10);
player.setHelmet(helmet);

var leggings = worldedit.createItem('diamond_leggings');
leggings.enchant('unbreaking', 10);
leggings.enchant('protection', 10);
player.setLeggings(leggings);

var plate = worldedit.createItem('diamond_chestplate');
plate.enchant('unbreaking', 10);
plate.enchant('protection', 10);
player.setChestplate(plate);

var boots = worldedit.createItem('diamond_boots');
boots.enchant('unbreaking', 10);
boots.enchant('protection', 10);
player.setBoots(boots);

var sword = worldedit.createItem('diamond_sword');
sword.enchant('unbreaking', 10);
sword.enchant('sharpness', 10);
sword.enchant('flame', 10);
sword.enchant('power', 10);
sword.enchant('punch', 10);
sword.enchant('knockback', 10);
sword.enchant('infinity', 10);

var inventory = player.getInventory();
inventory.addItem(sword);
