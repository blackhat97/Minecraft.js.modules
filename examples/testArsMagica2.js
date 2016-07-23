var inventory = player.getInventory();

var spell = AM2.createSpell('Projectile', ['firedamage']);
spell.setName('Fire Ball');
//spell.setIcon(80);
spell.setDamage(80);
inventory.addItem(spell);

/*

var skillNames = SkillManager.instance.getAllSkillNames();
log(skillNames);


importPackage(Packages.am2.playerextensions);


//BLUE,GREEN,RED,SILVER
var SkillPointTypes = Packages.am2.api.spell.enums.SkillPointTypes;

//NONE, AIR,LIGHTNING,ARCANE,FIRE,ENDER,EARTH,ICE,NATURE,WATER,LIFE
var Affinity = Packages.am2.api.spell.enums.Affinity;

var getSkillData = function(){
	return SkillData.For(player.getPlayer());
};

var skillData = getSkillData();

log("getSkillPoint[BLUE] = " + skillData.getSpellPoints(SkillPointTypes.BLUE));
log("getSkillPoint[GREEN] = " + skillData.getSpellPoints(SkillPointTypes.GREEN));
log("getSkillPoint[RED] = " + skillData.getSpellPoints(SkillPointTypes.RED));
log("getSkillPoint[SILVER] = " + skillData.getSpellPoints(SkillPointTypes.SILVER));
skillData.setSpellPoints(5, SkillPointTypes.BLUE);

log("getSkillPoint[BLUE] = " + skillData.getSpellPoints(SkillPointTypes.BLUE));
log("getSkillPoint[GREEN] = " + skillData.getSpellPoints(SkillPointTypes.GREEN));
log("getSkillPoint[RED] = " + skillData.getSpellPoints(SkillPointTypes.RED));
log("getSkillPoint[SILVER] = " + skillData.getSpellPoints(SkillPointTypes.SILVER));


// skillData.learn(id, type)...
// id - ISkillTreeEntry.getID()
// type - 0: shape, 1: component, 2: modifier, 3: talent

//knownShapes는 17개 이고, knownShapes[0] = 0, ... knownShapes[8] = 9, ...
var knownShapes = skillData.getKnownShapes();
for (var i=0; i<knownShapes.length; i++){
	log("knownShapes[" + i + "] = " + knownShapes[i]);
}

//knownComponents는 77개 이고, knownComponents[76] = 1023으로 순차적으로 증가한다.
var knownComponents = skillData.getKnownComponents();
for (var i=0; i<knownComponents.length; i++){
	log("KnownComponents[" + i + "] = " + knownComponents[i]);
}

//knownModifiers는 20개 이고, knownModifiers[19] = 5019으로 순차적으로 증가한다.
var knownModifiers = skillData.getKnownModifiers();
for (var i=0; i<knownModifiers.length; i++){
	log("knownModifiers[" + i + "] = " + knownModifiers[i]);
}

//knownTalents는 9개 이고, knownTalents[8] = 6009로 순차적으로 증가한다.
var knownTalents = skillData.getKnownTalents();
for (var i=0; i<knownTalents.length; i++){
	log("knownTalents[" + i + "] = " + knownTalents[i]);
}


var spell = worldedit.createItem('spellBase', 'arsmagica2');
player.setHand(spell);


*/

