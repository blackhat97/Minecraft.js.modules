// ROLE - 0: None, 1: Trader, 2: Follower, 3: Bank, 4: Transporter, 5: Postman, 6: Companion
exports.None = 0;
exports.Trader = 1;
exports.Follower = 2;
exports.Bank = 3;
exports.Transporter = 4;
exports.Postman = 5;
exports.Companion = 6;

var TraderInterface = function(npc){
	this._npc = npc;
	this._role = npc._npc.roleInterface;
};

TraderInterface.prototype.setTradeItemInSlot = function(slot, item1, item2, item3){
	if (item1 != null)
		this._role.inventoryCurrency.func_70299_a(slot, item1.getItemStack());
	if (item2 != null)
		this._role.inventoryCurrency.func_70299_a(slot+18, item2.getItemStack());
	if (item3 != null)
		this._role.inventorySold.func_70299_a(slot, item3.getItemStack());
};

TraderInterface.prototype.setIgnoreDamage = function(value){
	this._role.ignoreDamage = value;
};

TraderInterface.prototype.setIgnoreNBT = function(value){
	this._role.ignoreNBT = value;
};

var TransporterInterface = function(npc){
	this._npc = npc;
	this._role = npc._npc.roleInterface;
};

TransporterInterface.prototype.setLocation = function(arg1, arg2, arg3, arg4){
	var loc, name;

	if ( arg1 instanceof Location){
		loc = arg1;
		name = arg2;
	}
	else {
		loc = new Location(arg1, arg2, arg3);
		name = arg4;
	}

	var controller = TransportController.getInstance();
	var tloc = controller.getTransport(name);
	if (tloc == null){
		tloc = new TransportLocation();
		tloc.posX = loc.x;
		tloc.posY = loc.y;
		tloc.posZ = loc.z;
		tloc.name = name;
//			tloc.type = 0;
//			tloc.dimension = 0;
		var nbt = tloc.writeNBT();
		tloc = controller.saveLocation(1, nbt, player.getPlayer(), this._npc._npc);
	}
	else {
		tloc.posX = loc.x;
		tloc.posY = loc.y;
		tloc.posZ = loc.z;
		controller.setLocation(tloc);
	}
	
	this._role.setTransport(tloc);
};

exports.TraderInterface = TraderInterface;
exports.TransporterInterface = TransporterInterface;

exports.Traders = require('./Traders');
