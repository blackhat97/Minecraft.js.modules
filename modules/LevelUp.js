importPackage(Packages.assets.levelup);

var SKILL_XP = 12;
var CLASS_NONE = 0;

var getClassBonus = function(){
	return ClassBonus.bonusPoints;
};

var getSkillMax = function(){
	return ClassBonus.maxSkillPoints;
};

var setSkillMax = function(value){
	ClassBonus.maxSkillPoints = value;
};

var getSkill = function(skill){
	return PlayerExtendedProperties.getSkillFromIndex(player.getPlayer(), skill);
};

var setSkill = function(skill, value){
	var map = PlayerExtendedProperties.getSkillMap(player.getPlayer());
	map.put(ClassBonus.skillNames[skill], new java.lang.Integer(value));
};

var addSkill = function(skill, value){
	var map = PlayerExtendedProperties.getSkillMap(player.getPlayer());
	var current = Number(map.get(ClassBonus.skillNames[skill]));
	map.put(ClassBonus.skillNames[skill], new java.lang.Integer(current + value));
};

var resetSkill = function(){
	var map = PlayerExtendedProperties.getSkillMap(player.getPlayer());

	var used = 0;
	var zero = new java.lang.Integer(0);
	for(var i = 0; i<=SKILL_XP; i++){
		used += Number(map.get(ClassBonus.skillNames[i]));
		map.put(ClassBonus.skillNames[i], zero);
	}
	worldedit.log('used: ' + used);
	
	map.put(ClassBonus.skillNames[SKILL_XP], new java.lang.Integer(used));
	
	Packages.assets.levelup.LevelUp.refreshValues([true, true, true]);
};

var getClass = function(){
	return PlayerExtendedProperties.getPlayerClass(player.getPlayer());
};

var setClass = function(c){
	PlayerExtendedProperties.setPlayerClass(player.getPlayer(), c);
};

var resetClass = function(){
	setClass(CLASS_NONE);
	resetSkill();
};

var getSkillPoint = function(){
	return getSkill(SKILL_XP);
};

var setSkillPoint = function(value){
	setSkill(SKILL_XP, value);
};

var addSkillPoint = function(value){
	addSkill(SKILL_XP, value);
};

exports.SKILL_MINING		 = 0;
exports.SKILL_SWORD		 	 = 1;
exports.SKILL_DEFENSE		 = 2;
exports.SKILL_WOODCUTTING	 = 3;
exports.SKILL_SMELTING		 = 4;
exports.SKILL_ARCHERY		 = 5;
exports.SKILL_ATHLETICS		 = 6;
exports.SKILL_COOKING		 = 7;
exports.SKILL_SNEAKING		 = 8;
exports.SKILL_FARMING		 = 9;
exports.SKILL_FISHING		 = 10;
exports.SKILL_DIGGING		 = 11;

exports.CLASS_NONE			 = CLASS_NONE;
exports.CLASS_MINER			 = 1;
exports.CLASS_WARRIOR		 = 2;
exports.CLASS_ARTISAN		 = 3;
exports.CLASS_SPELUNKER		 = 4;
exports.CLASS_SCOUT		 	 = 5;
exports.CLASS_FARMER		 = 6;
exports.CLASS_ARCHAEOLOGIST	 = 7;
exports.CLASS_ASSASSIN		 = 8;
exports.CLASS_LUMBERJACK	 = 9;
exports.CLASS_HERMIT		 = 10;
exports.CLASS_ZEALOT		 = 11;
exports.CLASS_FISHERMAN		 = 12;
exports.CLASS_FREELANCE		 = 13;

exports.getClassBonus = getClassBonus;
exports.getSkillMax = getSkillMax;
exports.setSkillMax = setSkillMax;
exports.getClass = getClass;
exports.setClass = setClass;
exports.resetClass = resetClass;
exports.getSkill = getSkill;
exports.setSkill = setSkill;
exports.addSkill = addSkill;
exports.resetSkill = resetSkill;
exports.getSkillPoint = getSkillPoint;
exports.setSkillPoint = setSkillPoint;
exports.addSkillPoint = addSkillPoint;
