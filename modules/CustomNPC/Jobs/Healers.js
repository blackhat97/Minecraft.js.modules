exports.PowerHealer = function(npc){
	npc.setJob(2);
	
	var job = npc.getJobInterface();
	job.setRange(5);
	job.setSpeed(10);
};

exports.RangeHealer = function(npc){
	npc.setJob(2);
	
	var job = npc.getJobInterface();
	job.setRange(10);
	job.setSpeed(5);
};

