
// JOB - 0: None, 1: Bard, 2: Healer, 3: Guard, 4: ItemGiver, 5: Follower, 6: Spawner, 7: Conversation, 8: ChunkLoader, 9: Puppet
exports.None = 0;
exports.Bard = 1;
exports.Healer = 2;
exports.Guard = 3;
exports.ItemGiver = 4;
exports.Follower = 5;
exports.Spawner = 6;
exports.Conversation = 7;
exports.ChunkLoader = 8;
exports.Puppet = 9;

var HealerInterface = function(npc){
	this._npc = npc;
	this._job = npc._npc.jobInterface;
};

HealerInterface.prototype.setSpeed = function(value){
	this._job.speed = value;
};

HealerInterface.prototype.setRange = function(value){
	this._job.range = value;
};

exports.HealerInterface = HealerInterface;

exports.Healers = require('./Healers');