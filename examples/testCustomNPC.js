var loc = player.getLocation();

var npc1 = CustomNPC.createNPC(CustomNPC.Models.OrcMale);
npc1.setName('Orc');
npc1.setJob(CustomNPC.Jobs.Healers.PowerHealer);
npc1.spawn(loc.add(2, 0, 2));

var npc2 = CustomNPC.createNPC(CustomNPC.Models.OrcFemale);
npc2.setName('Orc Female');
npc2.setRole(CustomNPC.Roles.Traders.SampleTrader);
var role2 = npc2.getRoleInterface();
role2.setTradeItemInSlot( 7,
		worldedit.createItem('golden apple', 1),
		null,
		worldedit.createItem('apple', 32)
);
npc2.spawn(loc.add(-2, 0, -2));


var npc3 = CustomNPC.createNPC(CustomNPC.Models.WolfGreyFurryFemale);
npc3.setName('WolfGreyFurryFemale');
npc3.setRole(CustomNPC.Roles.Transporter);
npc3.getRoleInterface().setLocation(loc, 'POINT_' + loc.x + '_' + loc.z);
npc3.spawn(loc.add(-2, 0, 0));

var npc4 = CustomNPC.createNPC(CustomNPC.Models.ArsMagica2.EarthGuardian);
npc4.setName('EarthGuardian');
npc4.setJob(CustomNPC.Jobs.Healer);
var job4 = npc4.getJobInterface();
job4.setSpeed(10);
job4.setRange(2);
npc4.spawn(loc.add(0, 0, 2));


