importPackage(Packages.noppes.npcs.entity);
importPackage(Packages.noppes.npcs.client);
importPackage(Packages.noppes.npcs.constants);
importPackage(Packages.noppes.npcs.controllers);

var max_level = 40;
var level_health = [10,11,14,19,26,35,46,59,74,91,110,131,154,179,206,235,266,299,334,371,410,451,494,539,586,635,686,739,794,851,910,971,1034,1099,1166,1235,1306,1379,1454,1531,1610];
var level_damage = [2,2,2,2,3,4,5,6,8,10,12,14,16,18,21,24,27,30,34,38,42,46,50,54,59,64,69,74,80,86,92,98,104,110,117,124,131,138,146,154,162];

function rand(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

// name table
var nameTable = require('./CustomNPC/Names');

var createMob = function(name){
	var n = nameTable.lookup(name);
	if (n != null)
		return worldedit.createMob(n, 'customnpcs.');
	return null;
};

var createItem = function(name){
	var n = nameTable.lookup(name);
	if (n != null)
		return worldedit.createItem(n, 'customnpcs');
	return null;
};

var createBlock = function(name){
	var n = nameTable.lookup(name);
	if (n != null)
		return worldedit.createBlock(n, 'customnpcs');
	return null;
};

var createNPC = function(creator){
	if (creator instanceof Function){
		return creator();
	}
	else {
		var npc = createMob(creator);
		return new NPC(npc.getEntity());
	}
};

var NPC = function(npc){
	this._npc = npc;
	if (npc instanceof Mob){
		this._npc = npc.getEntity();
	}
	
	if ( this._npc instanceof EntityCustomNpc ){
		this.model = this._npc.modelData;
	}
	this.display = this._npc.display;
	this.stats = this._npc.stats;
	this.ai = this._npc.ai;
	this.inventory = this._npc.inventory;
	this.advanced = this._npc.advanced;
	this.script = this._npc.script;
};

NPC.prototype.getMob = function(name){
	return new Mob(this._npc);
};

// show - 0: 보임, 1: 숨김, 2: 공격시 보임
NPC.prototype.setName = function(name, show){
	this.display.name = name;
	if ( show == undefined ){
		show = 0;		// default
	}
	this.display.showName = show;
};

NPC.prototype.setTitle = function(title){
	this.display.title = title;
};

NPC.prototype.setRole = function(role){
	if (role instanceof Function){
		return role(this);
	}
	else {
		this.advanced.setRole(role);
	}
};

NPC.prototype.getRoleInterface = function(){
	switch(this.advanced.role){
		case EnumRoleType.Trader :
			return new exports.Roles.TraderInterface(this);
		case EnumRoleType.Transporter :
			return new exports.Roles.TransporterInterface(this);
	}
	return this._npc.roleInterface;
};

NPC.prototype.getFaction = function(){
	return this._npc.getFaction();
};

// faction - 0: friendly, 1: neutral, 2: aggressive
NPC.prototype.setFaction = function(faction, attackOtherFactions, defendFaction){
	this._npc.setFaction(faction);
	
	if (attackOtherFactions != undefined)
		this._npc.advanced.attackOtherFactions = attackOtherFactions;

	if (defendFaction != undefined)
		this._npc.advanced.defendFaction = defendFaction;
};

//level = <base>+d<add>
NPC.prototype.makeLevel = function(level){
	var numbers = level.split("+d");
	var base_level = Number(numbers[0]);
	var add = Number(numbers[1]);	

	this.setLevel(rand(base_level, base_level + add));
};

NPC.prototype.setLevel = function(level){
	this._npc.stats.maxHealth = rand(level_health[level-1], level_health[level]);
	this._npc.stats.healthRegen = this._npc.stats.maxHealth * 5 / 100 + 1;
	this._npc.stats.attackStrength = rand(level_damage[level-1], level_damage[level]);
	this._npc.inventory.minExp = 2 * level_damage[level-1] + level_health[level-1] / 3;
	this._npc.inventory.maxExp = 2 * level_damage[level] + level_health[level] / 3;
	
	this._npc.inventory.items.put(java.lang.Integer.valueOf(0), createItem('wooden coin', level).getItemStack());
	this._npc.inventory.dropchance.put(java.lang.Integer.valueOf(0), java.lang.Integer.valueOf(30));
	this._npc.inventory.items.put(java.lang.Integer.valueOf(1), createItem('wooden coin', level).getItemStack());
	this._npc.inventory.dropchance.put(java.lang.Integer.valueOf(1), java.lang.Integer.valueOf(20));
	this._npc.inventory.items.put(java.lang.Integer.valueOf(2), createItem('iron coin', level).getItemStack());
	this._npc.inventory.dropchance.put(java.lang.Integer.valueOf(2), java.lang.Integer.valueOf(10));

	var money = this._npc.inventory.minExp + this._npc.inventory.maxExp;
	if (money>50){
		this._npc.inventory.items.put(java.lang.Integer.valueOf(3), createItem('bronze coin', level).getItemStack());
		this._npc.inventory.dropchance.put(java.lang.Integer.valueOf(3), java.lang.Integer.valueOf(10));
	}
	if (money>100){
		this._npc.inventory.items.put(java.lang.Integer.valueOf(4), createItem('gold coin', level).getItemStack());
		this._npc.inventory.dropchance.put(java.lang.Integer.valueOf(4), java.lang.Integer.valueOf(10));
	}
	if (money>500){
		this._npc.inventory.items.put(java.lang.Integer.valueOf(5), createItem('emerald coin', level).getItemStack());
		this._npc.inventory.dropchance.put(java.lang.Integer.valueOf(5), java.lang.Integer.valueOf(10));
	}
	if (money>500){
		this._npc.inventory.items.put(java.lang.Integer.valueOf(6), createItem('diamond coin', level).getItemStack());
		this._npc.inventory.dropchance.put(java.lang.Integer.valueOf(6), java.lang.Integer.valueOf(5));
	}
};

NPC.prototype.setBoss = function(){
	this._npc.display.showBossBar = 1;		// boss
	
	this._npc.stats.maxHealth *= 2;
	this._npc.inventory.minExp *= 2;
	this._npc.inventory.maxExp *= 4;
	
	this._npc.stats.resistances.knockback = 1.5;
	this._npc.stats.resistances.arrow = 1.3;
	this._npc.stats.resistances.playermelee = 1.1;
	this._npc.stats.resistances.explosion = 1.5;
};

NPC.prototype.setJob = function(job){
	if (job instanceof Function){
		return job(this);
	}
	else {
		this.advanced.setJob(job);
	}
};

NPC.prototype.getJobInterface = function(){
	switch(this.advanced.job){
		case EnumJobType.Healer :
			return new exports.Jobs.HealerInterface(this);
	}
	return this._npc.jobInterface;
};

NPC.prototype.spawn = function(arg1, arg2, arg3){
	if ( arg1 instanceof Location ){
		worldedit.spawnMob(arg1, new Mob(this._npc));
	}
	else {
		worldedit.spawnMob(arg1, arg2, arg3, new Mob(this._npc));
	}
};

NPC.prototype.print = function(){
	// model data
	if ( this._npc instanceof EntityCustomNpc ){
		worldedit.log('Model Data');
		worldedit.log('\tEntity class: ' + this.model.entityClass);
		worldedit.log('\tHead scale: ' + this.model.head.scaleX + ', ' + this.model.head.scaleY + ', ' + this.model.head.scaleZ);
		worldedit.log('\tBody scale: ' + this.model.body.scaleX + ', ' + this.model.body.scaleY + ', ' + this.model.body.scaleZ);
		worldedit.log('\tArms scale: ' + this.model.arms.scaleX + ', ' + this.model.arms.scaleY + ', ' + this.model.arms.scaleZ);
		worldedit.log('\tLegs scale: ' + this.model.legs.scaleX + ', ' + this.model.legs.scaleY + ', ' + this.model.legs.scaleZ);
	}
	
	// display
	worldedit.log('Display Data');
	worldedit.log('\tname: ' + this.display.name);
	worldedit.log('\ttitle: ' + this.display.title);
	worldedit.log('\tshowName: ' + this.display.showName);
	worldedit.log('\tshowBossBar: ' + this.display.showBossBar);
	worldedit.log('\tmodelSize: ' + this.display.modelSize);
	worldedit.log('\tskinType: ' + this.display.skinType);
	worldedit.log('\ttexture: ' + this.display.texture);
	worldedit.log('\tcloak texture: ' + this.display.cloakTexture);
	worldedit.log('\tglow texture: ' + this.display.glowTexture);
	worldedit.log('\tvisible: ' + this.display.visible);
	worldedit.log('\tdisableLivingAnimation: ' + this.display.disableLivingAnimation);

	// stats
	worldedit.log('Stats');
	worldedit.log('\tattackSpeed: ' + this._npc.stats.attackSpeed);
	worldedit.log('\tattackRange: ' + this._npc.stats.attackRange);
	worldedit.log('\tknockback: ' + this._npc.stats.knockback);
	worldedit.log('\tminDelay: ' + this._npc.stats.minDelay);
	worldedit.log('\tmaxDelay: ' + this._npc.stats.maxDelay);
	worldedit.log('\trangedRange: ' + this._npc.stats.rangedRange);
	worldedit.log('\tfireRate: ' + this._npc.stats.fireRate);
	worldedit.log('\tburstCount: ' + this._npc.stats.burstCount);
	worldedit.log('\tshotCount: ' + this._npc.stats.shotCount);
	worldedit.log('\taccuracy: ' + this._npc.stats.accuracy);
	worldedit.log('\taggroRange: ' + this._npc.stats.aggroRange);
	worldedit.log('\tpotionType: ' + this._npc.stats.potionType);
	worldedit.log('\tpotionDuration: ' + this._npc.stats.potionDuration);
	worldedit.log('\tpotionAmp: ' + this._npc.stats.potionAmp);
	worldedit.log('\tmaxHealth: ' + this._npc.stats.maxHealth);
	worldedit.log('\trespawnTime: ' + this._npc.stats.respawnTime);
	worldedit.log('\tspawnCycle: ' + this._npc.stats.spawnCycle);
	worldedit.log('\thideKilledBody: ' + this._npc.stats.hideKilledBody);
	worldedit.log('\tcanDespawn: ' + this._npc.stats.canDespawn);
	worldedit.log('\tresistances: ' + this._npc.stats.resistances);
	worldedit.log('\timmuneToFire: ' + this._npc.stats.immuneToFire);
	worldedit.log('\tpotionImmune: ' + this._npc.stats.potionImmune);
	worldedit.log('\tcanDrown: ' + this._npc.stats.canDrown);
	worldedit.log('\tburnInSun: ' + this._npc.stats.burnInSun);
	worldedit.log('\tnoFallDamage: ' + this._npc.stats.noFallDamage);
	worldedit.log('\thealthRegen: ' + this._npc.stats.healthRegen);
	worldedit.log('\tcombatRegen: ' + this._npc.stats.combatRegen);
	worldedit.log('\tpDamage: ' + this._npc.stats.pDamage);
	worldedit.log('\tpImpact: ' + this._npc.stats.pImpact);
	worldedit.log('\tpSize: ' + this._npc.stats.pSize);
	worldedit.log('\tpSpeed: ' + this._npc.stats.pSpeed);
	worldedit.log('\tpArea: ' + this._npc.stats.pArea);
	worldedit.log('\tpDur: ' + this._npc.stats.pDur);
	worldedit.log('\tpPhysics: ' + this._npc.stats.pPhysics);
	worldedit.log('\tpXlr8: ' + this._npc.stats.pXlr8);
	worldedit.log('\tpGlows: ' + this._npc.stats.pGlows);
	worldedit.log('\tpExplode: ' + this._npc.stats.pExplode);
	worldedit.log('\tpRender3D: ' + this._npc.stats.pRender3D);
	worldedit.log('\tpSpin: ' + this._npc.stats.pSpin);
	worldedit.log('\tpStick: ' + this._npc.stats.pStick);
	worldedit.log('\tpEffect: ' + this._npc.stats.pEffect);
	worldedit.log('\tpTrail: ' + this._npc.stats.pTrail);
	worldedit.log('\tpEffAmp: ' + this._npc.stats.pEffAmp);
	worldedit.log('\tString fireSound: ' + this._npc.stats.fireSound);
	worldedit.log('\taimWhileShooting: ' + this._npc.stats.aimWhileShooting);
	worldedit.log('\tcreatureType: ' + this._npc.stats.creatureType);
	worldedit.log('\tattackInvisible: ' + this._npc.stats.attackInvisible);
	
	// Advanced
	worldedit.log('Advanced Data');
	worldedit.log('\tinteractLines: ' + this._npc.advanced.interactLines);
	worldedit.log('\tworldLines: ' + this._npc.advanced.worldLines);
	worldedit.log('\tattackLines: ' + this._npc.advanced.attackLines);
	worldedit.log('\tkilledLines: ' + this._npc.advanced.killedLines);
	worldedit.log('\tkillLines: ' + this._npc.advanced.killLines);
	worldedit.log('\tidleSound: ' + this._npc.advanced.idleSound);
	worldedit.log('\tangrySound: ' + this._npc.advanced.angrySound);
	worldedit.log('\thurtSound: ' + this._npc.advanced.hurtSound);
	worldedit.log('\tdeathSound: ' + this._npc.advanced.deathSound);
	worldedit.log('\tstepSound: ' + this._npc.advanced.stepSound);
	worldedit.log('\tfactions: ' + this._npc.advanced.factions);
	worldedit.log('\trole: ' + this._npc.advanced.role);
	worldedit.log('\tjob: ' + this._npc.advanced.job);
	worldedit.log('\tdisablePitch: ' + this._npc.advanced.disablePitch);

	// AI
	worldedit.log('AI');
	worldedit.log('\tonAttack: ' + this._npc.ai.onAttack);
	worldedit.log('\tdoorInteract: ' + this._npc.ai.doorInteract);
	worldedit.log('\tfindShelter: ' + this._npc.ai.findShelter);
	worldedit.log('\tdistanceToMelee: ' + this._npc.ai.distanceToMelee);
	worldedit.log('\tcanFireIndirect: ' + this._npc.ai.canFireIndirect);
	worldedit.log('\tcanSwim: ' + this._npc.ai.canSwim);
	worldedit.log('\treactsToFire: ' + this._npc.ai.reactsToFire);
	worldedit.log('\tavoidsWater: ' + this._npc.ai.avoidsWater);
	worldedit.log('\tavoidsSun: ' + this._npc.ai.avoidsSun);
	worldedit.log('\treturnToStart: ' + this._npc.ai.returnToStart);
	worldedit.log('\tdirectLOS: ' + this._npc.ai.directLOS);
	worldedit.log('\tcanLeap: ' + this._npc.ai.canLeap);
	worldedit.log('\tcanSpr: ' + this._npc.ai.canSpr);
	worldedit.log('\tstopAndInteract: ' + this._npc.ai.stopAndInteract);
	worldedit.log('\ttacticalVariant: ' + this._npc.ai.tacticalVariant);
	worldedit.log('\tuseRangeMelee: ' + this._npc.ai.useRangeMelee);
	worldedit.log('\ttacticalRadius: ' + this._npc.ai.tacticalRadius);
	worldedit.log('\tanimationType: ' + this._npc.ai.animationType);
	worldedit.log('\tstandingType: ' + this._npc.ai.standingType);
	worldedit.log('\tmovingType: ' + this._npc.ai.movingType);
	worldedit.log('\tnpcInteracting: ' + this._npc.ai.npcInteracting);
	worldedit.log('\torientation: ' + this._npc.ai.orientation);
	worldedit.log('\tbodyOffsetX: ' + this._npc.ai.bodyOffsetX);
	worldedit.log('\tbodyOffsetY: ' + this._npc.ai.bodyOffsetY);
	worldedit.log('\tbodyOffsetZ: ' + this._npc.ai.bodyOffsetZ);
	worldedit.log('\twalkingRange: ' + this._npc.ai.walkingRange);
	worldedit.log('\tstartPos: ' + this._npc.ai.startPos);
	worldedit.log('\tmovingPos: ' + this._npc.ai.movingPos);
	worldedit.log('\tmovingPattern: ' + this._npc.ai.movingPattern);
	worldedit.log('\tmovingPause: ' + this._npc.ai.movingPause);
	worldedit.log('\tignoreCobweb: ' + this._npc.ai.ignoreCobweb);
	
	// faction
	worldedit.log('\tfaction: ' + this._npc.getFaction().name);
	worldedit.log('\tattackOtherFactions: ' + this._npc.advanced.attackOtherFactions);
	worldedit.log('\tdefendFaction: ' + this._npc.advanced.defendFaction);
}

exports.createMob = createMob;
exports.createItem = createItem;
exports.createBlock = createBlock;
exports.createNPC = createNPC;

exports.NPC = NPC;

exports.Models = require('./CustomNPC/Models');
exports.Roles = require('./CustomNPC/Roles');
exports.Jobs = require('./CustomNPC/Jobs');
