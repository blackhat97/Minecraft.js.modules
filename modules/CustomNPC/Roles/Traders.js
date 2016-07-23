// ROLE - 0: None, 1: Trader, 2: Follower, 3: Bank, 4: Transporter, 5: Postman, 6: Companion


///////////////////////////////////// TRADERS /////////////////////////////////////

exports.SampleTrader = function(npc){
	npc.setRole(1);
	
	var role = npc.getRoleInterface();
	role.setIgnoreDamage(true);
//	role.setIgnoreNBT(true);
	
	role.setTradeItemInSlot( 0,
			worldedit.createItem('wooden sword'),
			worldedit.createItem('stone sword'),
			worldedit.createItem('iron sword')
	);
	role.setTradeItemInSlot( 1,
			worldedit.createItem('apple', 32),
			worldedit.createItem('gold block'),
			worldedit.createItem('golden apple')
	);
	role.setTradeItemInSlot( 2,
			worldedit.createItem('apple', 64),
			null,
			worldedit.createItem('golden apple')
	);
};