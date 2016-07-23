//additional models
exports.ArsMagica2 = require('./ArsMagica2');

exports.ClaireNagaFemale = function(){
	var npc = exports.NagaFemale();

	npc.setName('ClaireNagaFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/nagafemale/Claire.png';

	return npc;
};

exports.CreepSnakeNagaFemale = function(){
	var npc = exports.NagaFemale();

	npc.setName('CreepSnakeNagaFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/nagafemale/Creepsnake.png';

	return npc;
};

exports.EnderSnakeNagaFemale = function(){
	var npc = exports.NagaFemale();

	npc.setName('EnderSnakeNagaFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/nagafemale/Ender Snake.png';

	return npc;
};

exports.PinkNagaFemale = function(){
	var npc = exports.NagaFemale();

	npc.setName('PinkNagaFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/nagafemale/Naga Stephanie Pink.png';

	return npc;
};

exports.GenericOrcMale = function(){
	var npc = exports.OrcMale();

	npc.setName('GenericOrcMale', 2);
	var texture = "customnpcs:textures/entity/orcmale/GenericOrc1.png";
	var n = Math.ceil(Math.random() * 3);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.GiantOrcMale = function(){
	var npc = exports.OrcMale();

	npc.setName('GiantOrcMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/orcmale/Giant.png';

	return npc;
};

exports.GuardOrcMale = function(){
	var npc = exports.OrcMale();

	npc.setName('GuardOrcMale', 2);
	var texture = "customnpcs:textures/entity/orcmale/GuardOrc1.png";
	var n = Math.ceil(Math.random() * 2);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.LeatherArmoredOrcMale = function(){
	var npc = exports.OrcMale();

	npc.setName('LeatherArmoredOrcMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/orcmale/LeatherArmoredOrc.png';

	return npc;
};

exports.MercenaryOrcMale = function(){
	var npc = exports.OrcMale();

	npc.setName('MercenaryOrcMale', 2);
	var texture = "customnpcs:textures/entity/orcmale/MercenaryOrc1.png";
	var n = Math.ceil(Math.random() * 3);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.StrandedOrcOrcMale = function(){
	var npc = exports.OrcMale();

	npc.setName('StrandedOrcOrcMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/orcmale/StrandedOrc.png';

	return npc;
};

exports.BlondDwarfFemale = function(){
	var npc = exports.DwarfFemale();

	npc.setName('BlondDwarfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarffemale/BlondDwarf.png';

	return npc;
};

exports.GingerDwarfFemale = function(){
	var npc = exports.DwarfFemale();

	npc.setName('GingerDwarfFemale', 2);
	var texture = "customnpcs:textures/entity/dwarffemale/GingerDwarf.png";
	var n = Math.ceil(Math.random() * 2);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.SimoneDwarfFemale = function(){
	var npc = exports.DwarfFemale();

	npc.setName('SimoneDwarfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarffemale/Simone.png';

	return npc;
};

exports.AlbinoChibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('AlbinoChibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/AlbinoChibi.png';

	return npc;
};

exports.EnderGhostEnderchibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('EnderGhostEnderchibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/EnderGhost.png';

	return npc;
};

exports.FriendlyEnderchibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('FriendlyEnderchibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/FriendlyEnderchibi.png';

	return npc;
};

exports.IceEnderchibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('IceEnderchibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/IceEnderchibi.png';

	return npc;
};

exports.MrEnderchibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('MrEnderchibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/MrEnderchibi.png';

	return npc;
};

exports.MsEnderchibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('MsEnderchibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/MsEnderchibi.png';

	return npc;
};

exports.NetherChibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('NetherChibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/NetherChibi.png';

	return npc;
};

exports.Slenderchibi = function(){
	var npc = exports.Enderchibi();

	npc.setName('Slenderchibi', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderchibi/Slenderchibi.png';

	return npc;
};

exports.HerobrineZombieFemale = function(){
	var npc = exports.ZombieFemale();

	npc.setName('HerobrineZombieFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monsterfemale/Herobrine.png';

	return npc;
};

exports.DarkElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('DarkElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/DarkElfFemale.png';

	return npc;
};

exports.MageElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('MageElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/ElfMage.png';

	return npc;
};

exports.QueenElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('QueenElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/ElfQueen.png';

	return npc;
};

exports.QueenFormalElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('QueenFormalElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/ElfQueenFormal.png';

	return npc;
};

exports.SoldierElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('SoldierElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/ElfSoldier.png';

	return npc;
};

exports.SoldierHelmetElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('SoldierHelmetElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/ElfSoldierHelmet.png';

	return npc;
};

exports.WarriorElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('WarriorElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/ElfWarrior.png';

	return npc;
};

exports.WoodElfFemale = function(){
	var npc = exports.ElfFemale();

	npc.setName('WoodElfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elffemale/WoodElfFemale.png';

	return npc;
};

exports.BunnyFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('BunnyFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Bunny.png';

	return npc;
};

exports.DragonGreenFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('DragonGreenFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/DragonGreen.png';

	return npc;
};

exports.LeopardHunterFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('LeopardHunterFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Leopard Hunter.png';

	return npc;
};

exports.LeopardStrawHatFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('LeopardStrawHatFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Leopard Straw Hat.png';

	return npc;
};

exports.LeopardTraderFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('LeopardTraderFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Leopard Trader.png';

	return npc;
};

exports.LeopardWarriorFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('LeopardWarriorFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Leopard Warrior.png';

	return npc;
};

exports.LeopardFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('LeopardFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Leopard.png';

	return npc;
};

exports.ReaperFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('ReaperFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Reaper.png';

	return npc;
};

exports.SnowLeopardHunterFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('SnowLeopardHunterFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Snow Leopard Hunter.png';

	return npc;
};

exports.SnowLeopardStrawHatFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('SnowLeopardStrawHatFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Snow Leopard Straw Hat.png';

	return npc;
};

exports.SnowLeopardTraderFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('SnowLeopardTraderFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Snow Leopard Trader.png';

	return npc;
};

exports.SnowLeopardWarriorFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('SnowLeopardWarriorFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Snow Leopard Warrior.png';

	return npc;
};

exports.SnowLeopardFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('SnowLeopardFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/SnowLeopard.png';

	return npc;
};

exports.TigerHunterFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('TigerHunterFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Tiger Hunter.png';

	return npc;
};

exports.TigerStrawHatFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('TigerStrawHatFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Tiger Straw Hat.png';

	return npc;
};

exports.TigerTraderFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('TigerTraderFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Tiger Trader.png';

	return npc;
};

exports.TigerWarriorFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('TigerWarriorFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Tiger Warrior.png';

	return npc;
};

exports.TigerFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('TigerFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/Tiger.png';

	return npc;
};

exports.WolfBlackFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBlackFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBlack.png';

	return npc;
};

exports.WolfBlackHunterFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBlackHunterFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBlackHunter.png';

	return npc;
};

exports.WolfBlackSteamPunkFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBlackSteamPunkFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBlackSteamPunk.png';

	return npc;
};

exports.WolfBlackTraderFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBlackTraderFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBlackTrader.png';

	return npc;
};

exports.WolfBlackWarriorFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBlackWarriorFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBlackWarrior.png';

	return npc;
};

exports.WolfBrownFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBrownFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBrown.png';

	return npc;
};

exports.WolfBrownHunterFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBrownHunterFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBrownHunter.png';

	return npc;
};

exports.WolfBrownSteamPunkFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBrownSteamPunkFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBrownSteamPunk.png';

	return npc;
};

exports.WolfBrownTraderFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBrownTraderFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBrownTrader.png';

	return npc;
};

exports.WolfBrownWarriorFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfBrownWarriorFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfBrownWarrior.png';

	return npc;
};

exports.WolfGreyFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfGreyFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfGrey.png';

	return npc;
};

exports.WolfGreyHunterFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfGreyHunterFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfGreyHunter.png';

	return npc;
};

exports.WolfGreySteampunkFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfGreySteampunkFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfGreySteampunk.png';

	return npc;
};

exports.WolfGreyTraderWolfFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfGreyTraderWolfFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfGreyTraderWolf.png';

	return npc;
};

exports.WolfGreyWarriorFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfGreyWarriorFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfGreyWarrior.png';

	return npc;
};

exports.WolfLightGreyFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfLightGreyFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfLightGrey.png';

	return npc;
};

exports.WolfLightGreyHunterFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfLightGreyHunterFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfLightGreyHunter.png';

	return npc;
};

exports.WolfLightGreyModelSteamPunkFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfLightGreyModelSteamPunkFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfLightGreyModelSteamPunk.png';

	return npc;
};

exports.WolfLightGreyWarriorFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfLightGreyWarriorFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfLightGreyWarrior.png';

	return npc;
};

exports.WolfLightGreyraderFurryMale = function(){
	var npc = exports.FurryMale();

	npc.setName('WolfLightGreyraderFurryMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furrymale/WolfLightGreyrader.png';

	return npc;
};

exports.AloePony = function(){
	var npc = exports.Pony();

	npc.setName('AloePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Aloe.png';

	return npc;
};

exports.AppleBloomPony = function(){
	var npc = exports.Pony();

	npc.setName('AppleBloomPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Apple Bloom.png';

	return npc;
};

exports.AppleJackWithHatPony = function(){
	var npc = exports.Pony();

	npc.setName('AppleJackWithHatPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Applejack (with hat).png';

	return npc;
};

exports.AppleJackPony = function(){
	var npc = exports.Pony();

	npc.setName('AppleJackPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Applejack.png';

	return npc;
};

exports.BatPonyDeeDeePony = function(){
	var npc = exports.Pony();

	npc.setName('BatPonyDeeDeePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Bat Pony Dee Dee.png';

	return npc;
};

exports.BatPonyEchoPony = function(){
	var npc = exports.Pony();

	npc.setName('BatPonyEchoPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Bat Pony Echo.png';

	return npc;
};

exports.BatPonyosinaPony = function(){
	var npc = exports.Pony();

	npc.setName('BatPonyosinaPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Bat Ponyosina.png';

	return npc;
};

exports.BerryPunchPony = function(){
	var npc = exports.Pony();

	npc.setName('BerryPunchPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Berry Punch.png';

	return npc;
};

exports.BigMacPony = function(){
	var npc = exports.Pony();

	npc.setName('BigMacPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Big Mac.png';

	return npc;
};

exports.BlueberryMuffinPony = function(){
	var npc = exports.Pony();

	npc.setName('BlueberryMuffinPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Blueberry Muffin.png';

	return npc;
};

exports.BonBonPony = function(){
	var npc = exports.Pony();

	npc.setName('BonBonPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Bon Bon.png';

	return npc;
};

exports.BrollyPony = function(){
	var npc = exports.Pony();

	npc.setName('BrollyPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Brolly.png';

	return npc;
};

exports.CaramelPony = function(){
	var npc = exports.Pony();

	npc.setName('CaramelPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Caramel.png';

	return npc;
};

exports.CarrotTopPony = function(){
	var npc = exports.Pony();

	npc.setName('CarrotTopPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Carrot Top.png';

	return npc;
};

exports.CheerileePony = function(){
	var npc = exports.Pony();

	npc.setName('CheerileePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Cheerilee.png';

	return npc;
};

exports.CherriesJubileePony = function(){
	var npc = exports.Pony();

	npc.setName('CherriesJubileePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Cherries Jubilee.png';

	return npc;
};

exports.CherryPony = function(){
	var npc = exports.Pony();

	npc.setName('CherryPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Cherry.png';

	return npc;
};

exports.ChocolateSunPony = function(){
	var npc = exports.Pony();

	npc.setName('ChocolateSunPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Chocolate Sun.png';

	return npc;
};

exports.CloudKickerPony = function(){
	var npc = exports.Pony();

	npc.setName('CloudKickerPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Cloud Kicker.png';

	return npc;
};

exports.ColgatePony = function(){
	var npc = exports.Pony();

	npc.setName('ColgatePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Colgate.png';

	return npc;
};

exports.CrescentPony = function(){
	var npc = exports.Pony();

	npc.setName('CrescentPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Crescent.png';

	return npc;
};

exports.DJPon3Pony = function(){
	var npc = exports.Pony();

	npc.setName('DJPon3Pony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP DJ Pon3.png';

	return npc;
};

exports.DerpyHoovesPony = function(){
	var npc = exports.Pony();

	npc.setName('DerpyHoovesPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Derpy Hooves.png';

	return npc;
};

exports.DoctorWhoovesPony = function(){
	var npc = exports.Pony();

	npc.setName('DoctorWhoovesPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Doctor Whooves.png';

	return npc;
};

exports.EndlessCloudsPony = function(){
	var npc = exports.Pony();

	npc.setName('EndlessCloudsPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Endless Clouds.png';

	return npc;
};

exports.FluttershyPony = function(){
	var npc = exports.Pony();

	npc.setName('FluttershyPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Fluttershy.png';

	return npc;
};

exports.GoldenHarvestPony = function(){
	var npc = exports.Pony();

	npc.setName('GoldenHarvestPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Golden Harvest.png';

	return npc;
};

exports.HeartstringsPony = function(){
	var npc = exports.Pony();

	npc.setName('HeartstringsPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Heartstrings.png';

	return npc;
};

exports.HollyDashPony = function(){
	var npc = exports.Pony();

	npc.setName('HollyDashPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Holly Dash.png';

	return npc;
};

exports.LemonHeartsPony = function(){
	var npc = exports.Pony();

	npc.setName('LemonHeartsPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Lemon Hearts.png';

	return npc;
};

exports.LemonTartPony = function(){
	var npc = exports.Pony();

	npc.setName('LemonTartPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Lemon Tart.png';

	return npc;
};

exports.LotusPony = function(){
	var npc = exports.Pony();

	npc.setName('LotusPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Lotus.png';

	return npc;
};

exports.LyraPony = function(){
	var npc = exports.Pony();

	npc.setName('LyraPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Lyra.png';

	return npc;
};

exports.NorthPolePony = function(){
	var npc = exports.Pony();

	npc.setName('NorthPolePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP North Pole.png';

	return npc;
};

exports.NurseRedheartPony = function(){
	var npc = exports.Pony();

	npc.setName('NurseRedheartPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Nurse Redheart.png';

	return npc;
};

exports.OctaviaPony = function(){
	var npc = exports.Pony();

	npc.setName('OctaviaPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Octavia.png';

	return npc;
};

exports.OrangeBoxPony = function(){
	var npc = exports.Pony();

	npc.setName('OrangeBoxPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Orange Box.png';

	return npc;
};

exports.OrangeWaferPony = function(){
	var npc = exports.Pony();

	npc.setName('OrangeWaferPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Orange Wafer.png';

	return npc;
};

exports.OrchidDewPony = function(){
	var npc = exports.Pony();

	npc.setName('OrchidDewPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Orchid Dew.png';

	return npc;
};

exports.PegasusGuardPony = function(){
	var npc = exports.Pony();

	npc.setName('PegasusGuardPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Pegasus Guard.png';

	return npc;
};

exports.PinkiePiePony = function(){
	var npc = exports.Pony();

	npc.setName('PinkiePiePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Pinkie Pie.png';

	return npc;
};

exports.PrincessCelestiaPony = function(){
	var npc = exports.Pony();

	npc.setName('PrincessCelestiaPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Princess Celestia.png';

	return npc;
};

exports.PrincessLunaS2Pony = function(){
	var npc = exports.Pony();

	npc.setName('PrincessLunaS2Pony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Princess Luna S2.png';

	return npc;
};

exports.RainbowDashPony = function(){
	var npc = exports.Pony();

	npc.setName('RainbowDashPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Rainbow Dash.png';

	return npc;
};

exports.RaindropPony = function(){
	var npc = exports.Pony();

	npc.setName('RaindropPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Raindrop.png';

	return npc;
};

exports.RarityPony = function(){
	var npc = exports.Pony();

	npc.setName('RarityPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Rarity.png';

	return npc;
};

exports.RoseluckPony = function(){
	var npc = exports.Pony();

	npc.setName('RoseluckPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Roseluck.png';

	return npc;
};

exports.RoyGBowPony = function(){
	var npc = exports.Pony();

	npc.setName('RoyGBowPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Roy G Bow.png';

	return npc;
};

exports.ScootalooPony = function(){
	var npc = exports.Pony();

	npc.setName('ScootalooPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Scootaloo.png';

	return npc;
};

exports.SoarinPony = function(){
	var npc = exports.Pony();

	npc.setName('SoarinPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Soarin.png';

	return npc;
};

exports.SparklerPony = function(){
	var npc = exports.Pony();

	npc.setName('SparklerPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Sparkler.png';

	return npc;
};

exports.SpitfirePony = function(){
	var npc = exports.Pony();

	npc.setName('SpitfirePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Spitfire.png';

	return npc;
};

exports.StarSparklePony = function(){
	var npc = exports.Pony();

	npc.setName('StarSparklePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Star Sparkle.png';

	return npc;
};

exports.SweetieBellePony = function(){
	var npc = exports.Pony();

	npc.setName('SweetieBellePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Sweetie Belle.png';

	return npc;
};

exports.TrixiePony = function(){
	var npc = exports.Pony();

	npc.setName('TrixiePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Trixie.png';

	return npc;
};

exports.TwilightSparklePony = function(){
	var npc = exports.Pony();

	npc.setName('TwilightSparklePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Twilight Sparkle.png';

	return npc;
};

exports.UnderDWeatherPony = function(){
	var npc = exports.Pony();

	npc.setName('UnderDWeatherPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Under D Weather.png';

	return npc;
};

exports.UnicornGuardPony = function(){
	var npc = exports.Pony();

	npc.setName('UnicornGuardPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Unicorn Guard.png';

	return npc;
};

exports.VelvetHoovesPony = function(){
	var npc = exports.Pony();

	npc.setName('VelvetHoovesPony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/MineLP Velvet Hooves.png';

	return npc;
};

exports.NormalHorsePony = function(){
	var npc = exports.Pony();

	npc.setName('NormalHorsePony', 2);
	npc.display.texture = 'customnpcs:textures/entity/ponies/NormalHorse.png';

	return npc;
};

exports.Crystal = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.EntityNpcCrystal(worldedit.getWorld()));

	npc.setName('Crystal', 2);
	npc.setFaction(0, true, true);
	npc.makeLevel('10+d10');
	npc.ai.movingType = EnumMovingType.Standing;

	return npc;
};

exports.Dragon = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.EntityNpcDragon(worldedit.getWorld()));

	npc.setName('Dragon', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('20+d10');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;
	npc.setBoss();

	return npc;
};

exports.Golem = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.EntityNPCGolem(worldedit.getWorld()));

	npc.setName('Golem', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('12+d6');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;
	npc.setBoss();

	return npc;
};

exports.Pony = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.EntityNpcPony(worldedit.getWorld()));

	npc.setName('Pony', 2);
	npc.setFaction(1);
	npc.makeLevel('1+d1');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.DwarfFemale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCDwarfFemale(worldedit.getWorld()));

	npc.setName('DwarfFemale', 2);
	npc.setFaction(1);
	npc.makeLevel('6+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.DwarfMale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCDwarfMale(worldedit.getWorld()));

	npc.setName('DwarfMale', 2);
	npc.setFaction(1);
	npc.makeLevel('8+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.ElfFemale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCElfFemale(worldedit.getWorld()));

	npc.setName('ElfFemale', 2);
	npc.setFaction(1);
	npc.makeLevel('6+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.ElfMale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCElfMale(worldedit.getWorld()));

	npc.setName('ElfMale', 2);
	npc.setFaction(1);
	npc.makeLevel('8+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.Enderchibi = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNpcEnderchibi(worldedit.getWorld()));

	npc.setName('Enderchibi', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('8+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.Enderman = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCEnderman(worldedit.getWorld()));

	npc.setName('Enderman', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('10+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.FurryFemale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCFurryFemale(worldedit.getWorld()));

	npc.setName('FurryFemale', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('2+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.FurryMale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCFurryMale(worldedit.getWorld()));

	npc.setName('FurryMale', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('4+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.HumanMale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCHumanMale(worldedit.getWorld()));

	npc.setName('HumanMale', 2);
	npc.setFaction(1);
	npc.makeLevel('1+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.ZombieFemale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNpcMonsterFemale(worldedit.getWorld()));

	npc.setName('ZombieFemale', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('4+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.ZombieMale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNpcMonsterMale(worldedit.getWorld()));

	npc.setName('ZombieMale', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('6+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.NagaFemale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNpcNagaFemale(worldedit.getWorld()));

	npc.setName('NagaFemale', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('8+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.OrcFemale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCOrcFemale(worldedit.getWorld()));

	npc.setName('OrcFemale', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('6+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.OrcMale = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCOrcMale(worldedit.getWorld()));

	npc.setName('OrcMale', 2);
	npc.setFaction(2, true, true);
	npc.makeLevel('8+d4');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.Villager = function(){
	var npc = new CustomNPC.NPC(new Packages.noppes.npcs.entity.old.EntityNPCVillager(worldedit.getWorld()));

	npc.setName('Villager', 2);
	npc.setFaction(0, true, true);
	npc.makeLevel('10+d10');
	npc.ai.movingType = EnumMovingType.Wandering;
	npc.ai.npcInteracting = false;

	return npc;
};

exports.BlackDragon = function(){
	var npc = exports.Dragon();

	npc.setName('BlackDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/BlackDragon.png';

	return npc;
};

exports.BlueDragon = function(){
	var npc = exports.Dragon();

	npc.setName('BlueDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/BlueDragon.png';

	return npc;
};

exports.CyanDragon = function(){
	var npc = exports.Dragon();

	npc.setName('CyanDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/CyanDragon.png';

	return npc;
};

exports.GoldenDragon = function(){
	var npc = exports.Dragon();

	npc.setName('GoldenDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/GoldenDragon.png';

	return npc;
};

exports.GrayDragon = function(){
	var npc = exports.Dragon();

	npc.setName('GrayDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/GrayDragon.png';

	return npc;
};

exports.GreenDragon = function(){
	var npc = exports.Dragon();

	npc.setName('GreenDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/GreenDragon.png';

	return npc;
};

exports.MagentaDragon = function(){
	var npc = exports.Dragon();

	npc.setName('MagentaDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/MagentaDragon.png';

	return npc;
};

exports.OrangeDragon = function(){
	var npc = exports.Dragon();

	npc.setName('OrangeDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/OrangeDragon.png';

	return npc;
};

exports.PurpleDragon = function(){
	var npc = exports.Dragon();

	npc.setName('PurpleDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/PurpleDragon.png';

	return npc;
};

exports.RedDragon = function(){
	var npc = exports.Dragon();

	npc.setName('RedDragon', 2);
	var texture = "customnpcs:textures/entity/dragon/RedDragon.png";
	var n = Math.ceil(Math.random() * 2);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.SkeletonDragon = function(){
	var npc = exports.Dragon();

	npc.setName('SkeletonDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/Skeleton Dragon.png';

	return npc;
};

exports.YellowDragon = function(){
	var npc = exports.Dragon();

	npc.setName('YellowDragon', 2);
	npc.display.texture = 'customnpcs:textures/entity/dragon/YellowDragon.png';

	return npc;
};

exports.GenericOrcFemale = function(){
	var npc = exports.OrcFemale();

	npc.setName('GenericOrcFemale', 2);
	var texture = "customnpcs:textures/entity/orcfemale/GenericFemaleOrc1.png";
	var n = Math.ceil(Math.random() * 3);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.GuardOrcFemale = function(){
	var npc = exports.OrcFemale();

	npc.setName('GuardOrcFemale', 2);
	var texture = "customnpcs:textures/entity/orcfemale/GuardFemaleOrc1.png";
	var n = Math.ceil(Math.random() * 2);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.LeatherArmoredOrcFemale = function(){
	var npc = exports.OrcFemale();

	npc.setName('LeatherArmoredOrcFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/orcfemale/LeatherArmoredFemaleOrc.png';

	return npc;
};

exports.MercenaryOrcFemale = function(){
	var npc = exports.OrcFemale();

	npc.setName('MercenaryOrcFemale', 2);
	var texture = "customnpcs:textures/entity/orcfemale/MercenaryFemaleOrc1.png";
	var n = Math.ceil(Math.random() * 3);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.BeardedDwarfFemale = function(){
	var npc = exports.DwarfMale();

	npc.setName('BeardedDwarfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/BeardedDwarf.png';

	return npc;
};

exports.BlacksmithDwarfFemale = function(){
	var npc = exports.DwarfMale();

	npc.setName('BlacksmithDwarfFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Blacksmith.png';

	return npc;
};

exports.KingDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('KingDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/DwarfKing.png';

	return npc;
};

exports.StatueDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('StatueDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/DwarfStatue.png';

	return npc;
};

exports.BlackSmithDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('BlackSmithDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Dwarf_Blacksmith.png';

	return npc;
};

exports.KeeperDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('KeeperDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Dwarf_Keeper.png';

	return npc;
};

exports.LeaderDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('LeaderDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Dwarf_Leader.png';

	return npc;
};

exports.ElderlyDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('ElderlyDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/ElderlyDwarf.png';

	return npc;
};

exports.GingerKingDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('GingerKingDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/GingerKing.png';

	return npc;
};

exports.GingerKnightDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('GingerKnightDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/GingerKnight.png';

	return npc;
};

exports.GoblinDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('GoblinDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Goblin.png';

	return npc;
};

exports.HighClassDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('HighClassDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/High_Class_Dwarf.png';

	return npc;
};

exports.HobbitDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('HobbitDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Hobbit.png';

	return npc;
};

exports.MinerDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('MinerDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Miner.png';

	return npc;
};

exports.MoustachedDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('MoustachedDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/MoustachedDwarf.png';

	return npc;
};

exports.OneEyeblindDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('OneEyeblindDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/One_Eye_blind_Dwarf.png';

	return npc;
};

exports.SimonDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('SimonDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Simon.png';

	return npc;
};

exports.SomeDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('SomeDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/SomeDwarf.png';

	return npc;
};

exports.VikingDwarfMale = function(){
	var npc = exports.DwarfMale();

	npc.setName('VikingDwarfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/dwarfmale/Viking.png';

	return npc;
};

exports.CastleKnightGolem = function(){
	var npc = exports.Golem();

	npc.setName('CastleKnightGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Castle Knight.png';

	return npc;
};

exports.EnderBruteGolem = function(){
	var npc = exports.Golem();

	npc.setName('EnderBruteGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Ender Brute.png';

	return npc;
};

exports.IronGolem = function(){
	var npc = exports.Golem();

	npc.setName('IronGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Iron Golem.png';

	return npc;
};

exports.LoaderGolem = function(){
	var npc = exports.Golem();

	npc.setName('LoaderGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Loader.png';

	return npc;
};

exports.NetherGolem = function(){
	var npc = exports.Golem();

	npc.setName('NetherGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Nether Golem.png';

	return npc;
};

exports.PoliceGolem = function(){
	var npc = exports.Golem();

	npc.setName('PoliceGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Police Golem.png';

	return npc;
};

exports.SandMonsterGolem = function(){
	var npc = exports.Golem();

	npc.setName('SandMonsterGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Sand Monster.png';

	return npc;
};

exports.SecuritronV2Golem = function(){
	var npc = exports.Golem();

	npc.setName('SecuritronV2Golem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Securitron V2.png';

	return npc;
};

exports.StoneGuardianGolem = function(){
	var npc = exports.Golem();

	npc.setName('StoneGuardianGolem', 2);
	npc.display.texture = 'customnpcs:textures/entity/golem/Stone Guardian.png';

	return npc;
};

exports.ArcticHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('ArcticHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/ArcticSteve.png';

	return npc;
};

exports.BodyguardHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('BodyguardHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/BodyguardSteve.png';

	return npc;
};

exports.CamoRadioHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('CamoRadioHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/CamoRadioSteve.png';

	return npc;
};

exports.CamoSpecOpsHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('CamoSpecOpsHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/CamoSpecOpsSteve.png';

	return npc;
};

exports.CamoHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('CamoHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/CamoSteve.png';

	return npc;
};

exports.CasualHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('CasualHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/CasualSteve.png';

	return npc;
};

exports.ChefHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('ChefHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/ChefSteve.png';

	return npc;
};

exports.DoctorHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('DoctorHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/DoctorSteve.png';

	return npc;
};

exports.ElderlyHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('ElderlyHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/ElderlySteve.png';

	return npc;
};

exports.EvilGoldKnightHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('EvilGoldKnightHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/Evil_Gold_Knight.png';

	return npc;
};

exports.FireHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('FireHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/FireSteve.png';

	return npc;
};

exports.GangsterHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('GangsterHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/GangsterSteve.png';

	return npc;
};

exports.GuardHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('GuardHumanMale', 2);
	var texture = "customnpcs:textures/entity/humanmale/GuardSteve.png";
	var n = Math.ceil(Math.random() * 2);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.KingHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('KingHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/King.png';

	return npc;
};

exports.KingHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('KingHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/KingSteve.png';

	return npc;
};

exports.KnightHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('KnightHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/KnightSteve.png';

	return npc;
};

exports.KungFuHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('KungFuHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/KungFuSteve.png';

	return npc;
};

exports.LondonGuardHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('LondonGuardHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/LondonGuard.png';

	return npc;
};

exports.MageHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('MageHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/MageSteve.png';

	return npc;
};

exports.MailmanHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('MailmanHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/MailmanSteve.png';

	return npc;
};

exports.McDHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('McDHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/McDSteve.png';

	return npc;
};

exports.MercenaryHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('MercenaryHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/MercenarySteve.png';

	return npc;
};

exports.MinerHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('MinerHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/MinerSteve.png';

	return npc;
};

exports.PinstripesHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('PinstripesHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/PinstripesSteve.png';

	return npc;
};

exports.PriestHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('PriestHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/PriestSteve.png';

	return npc;
};

exports.PrisonerHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('PrisonerHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/PrisonerSteve.png';

	return npc;
};

exports.RaggedyBardHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('RaggedyBardHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/RaggedyBardSteve.png';

	return npc;
};

exports.RobesBlackHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('RobesBlackHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/RobesBlackSteve.png';

	return npc;
};

exports.RobesBrownHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('RobesBrownHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/RobesBrownSteve.png';

	return npc;
};

exports.RobesWhiteHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('RobesWhiteHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/RobesWhiteSteve.png';

	return npc;
};

exports.SteampunkHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('SteampunkHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/SteampunkSteve.png';

	return npc;
};

exports.TownsmanHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TownsmanHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/TownsmanSteve.png';

	return npc;
};

exports.TraderHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TraderHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/TraderSteve.png';

	return npc;
};

exports.TribeBoyHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TribeBoyHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/TribeBoy.png';

	return npc;
};

exports.TribeElderHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TribeElderHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/TribeElder.png';

	return npc;
};

exports.TribeHunterHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TribeHunterHumanMale', 2);
	var texture = "customnpcs:textures/entity/humanmale/TribeHunter1.png";
	var n = Math.ceil(Math.random() * 2);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.TribeKimbaHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TribeKimbaHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/TribeKimba.png';

	return npc;
};

exports.TribeManHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TribeManHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/TribeMan.png';

	return npc;
};

exports.TuxedoHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('TuxedoHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/TuxedoSteve.png';

	return npc;
};

exports.VillagerOldHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('VillagerOldHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/VillagerOldSteve.png';

	return npc;
};

exports.VillagerHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('VillagerHumanMale', 2);
	var texture = "customnpcs:textures/entity/humanmale/VillagerSteve.png";
	var n = Math.ceil(Math.random() * 2);
	if( n>1 ){
		if(texture.search('1') == -1){
			texture = texture.substr(0, texture.length - 4) + n + '.png';
		}
		else {
			texture = texture.replace('1',n);
		}
	}
	npc.display.texture = texture;

	return npc;
};

exports.WaiterHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('WaiterHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/WaiterSteve.png';

	return npc;
};

exports.WhiteknightHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('WhiteknightHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/White_knight.png';

	return npc;
};

exports.WizardHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('WizardHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/WizardSteve.png';

	return npc;
};

exports.WoundedHumanMale = function(){
	var npc = exports.HumanMale();

	npc.setName('WoundedHumanMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/humanmale/WoundedSteve.png';

	return npc;
};

exports.ClassyZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('ClassyZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Classy_Zombie.png';

	return npc;
};

exports.DeathZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('DeathZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Death.png';

	return npc;
};

exports.DemonSalesmanZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('DemonSalesmanZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/DemonSalesman.png';

	return npc;
};

exports.DesertZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('DesertZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/DesertZombie.png';

	return npc;
};

exports.DisfiguredZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('DisfiguredZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/DisfiguredZombie.png';

	return npc;
};

exports.EnderMageZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('EnderMageZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/EnderMage.png';

	return npc;
};

exports.FleshZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('FleshZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Flesh.png';

	return npc;
};

exports.FrozenCorpseZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('FrozenCorpseZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/FrozenCorpse.png';

	return npc;
};

exports.GhostKingZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('GhostKingZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Ghost King.png';

	return npc;
};

exports.GhostGreyZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('GhostGreyZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/GhostGrey.png';

	return npc;
};

exports.GhostRedZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('GhostRedZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/GhostRed.png';

	return npc;
};

exports.GhostYellowZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('GhostYellowZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/GhostYellow.png';

	return npc;
};

exports.HerobrineZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('HerobrineZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Herobrine.png';

	return npc;
};

exports.OgreZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('OgreZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Ogre.png';

	return npc;
};

exports.SandMonsterZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('SandMonsterZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/SandMonster.png';

	return npc;
};

exports.SecuritronZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('SecuritronZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Securitron.png';

	return npc;
};

exports.SkullMageZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('SkullMageZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Skull_Mage.png';

	return npc;
};

exports.StoneGolemZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('StoneGolemZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/StoneGolem.png';

	return npc;
};

exports.TecZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('TecZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/TecZombie.png';

	return npc;
};

exports.UndeadKingZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('UndeadKingZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Undead King.png';

	return npc;
};

exports.UndeadMonsterZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('UndeadMonsterZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/Undead_Monster.png';

	return npc;
};

exports.ZombieBloodyZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('ZombieBloodyZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/ZombieBloody.png';

	return npc;
};

exports.ZombieMageZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('ZombieMageZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/ZombieMage.png';

	return npc;
};

exports.ZombieSteveZombieMale = function(){
	var npc = exports.ZombieMale();

	npc.setName('ZombieSteveZombieMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/monstermale/ZombieSteve.png';

	return npc;
};

exports.ApparationEnderman = function(){
	var npc = exports.Enderman();

	npc.setName('ApparationEnderman', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderman/Apparation.png';

	return npc;
};

exports.EnderMageEnderman = function(){
	var npc = exports.Enderman();

	npc.setName('EnderMageEnderman', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderman/Ender Mage.png';

	return npc;
};

exports.SlendermanEnderman = function(){
	var npc = exports.Enderman();

	npc.setName('SlendermanEnderman', 2);
	npc.display.texture = 'customnpcs:textures/entity/enderman/Slenderman.png';

	return npc;
};

exports.BunnyFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('BunnyFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/BunnyFemale.png';

	return npc;
};

exports.LeopardFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('LeopardFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Leopard Female.png';

	return npc;
};

exports.LeopardHunterFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('LeopardHunterFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Leopard Hunter Female.png';

	return npc;
};

exports.LeopardStrawHatFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('LeopardStrawHatFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Leopard Straw Hat Female.png';

	return npc;
};

exports.LeopardTraderFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('LeopardTraderFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Leopard Trader Female.png';

	return npc;
};

exports.LeopardWarriorFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('LeopardWarriorFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Leopard Warrior Female.png';

	return npc;
};

exports.SnowLeopardHunterFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('SnowLeopardHunterFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Snow Leopard Female Hunter.png';

	return npc;
};

exports.SnowLeopardStrawHatFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('SnowLeopardStrawHatFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Snow Leopard Female Straw Hat.png';

	return npc;
};

exports.SnowLeopardTraderFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('SnowLeopardTraderFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Snow Leopard Female Trader.png';

	return npc;
};

exports.SnowLeopardWarriorFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('SnowLeopardWarriorFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Snow Leopard Female Warrior.png';

	return npc;
};

exports.SnowLeopardFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('SnowLeopardFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Snow Leopard Female.png';

	return npc;
};

exports.TigerHunterFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('TigerHunterFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Tiger Female Hunter.png';

	return npc;
};

exports.TigerStrawHatFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('TigerStrawHatFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Tiger Female Straw Hat.png';

	return npc;
};

exports.TigerTraderFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('TigerTraderFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Tiger Female Trader.png';

	return npc;
};

exports.TigerWarriorFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('TigerWarriorFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Tiger Female Warrior.png';

	return npc;
};

exports.TigerFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('TigerFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/Tiger Female.png';

	return npc;
};

exports.WolfBlackFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBlackFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBlack.png';

	return npc;
};

exports.WolfBlackHunterFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBlackHunterFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBlackHunter .png';

	return npc;
};

exports.WolfBlackSteampunkFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBlackSteampunkFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBlackSteampunk.png';

	return npc;
};

exports.WolfBlackTraderFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBlackTraderFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBlackTrader.png';

	return npc;
};

exports.WolfBlackWarriorFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBlackWarriorFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBlackWarrior.png';

	return npc;
};

exports.WolfBrownFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBrownFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBrown.png';

	return npc;
};

exports.WolfBrownHunterFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBrownHunterFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBrownHunter.png';

	return npc;
};

exports.WolfBrownSteampunkFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBrownSteampunkFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBrownSteampunk.png';

	return npc;
};

exports.WolfBrownTraderFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBrownTraderFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBrownTrader.png';

	return npc;
};

exports.WolfBrownWarriorFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfBrownWarriorFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfBrownWarrior.png';

	return npc;
};

exports.WolfGreyFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfGreyFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfGrey.png';

	return npc;
};

exports.WolfGreyHunterFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfGreyHunterFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfGreyHunter.png';

	return npc;
};

exports.WolfGreySteampunkFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfGreySteampunkFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfGreySteampunk.png';

	return npc;
};

exports.WolfGreyTraderFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfGreyTraderFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfGreyTrader.png';

	return npc;
};

exports.WolfGreyWarriorFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfGreyWarriorFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfGreyWarrior.png';

	return npc;
};

exports.WolfLightGreyFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfLightGreyFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfLightGrey.png';

	return npc;
};

exports.WolfLightGreyHunterFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfLightGreyHunterFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfLightGreyHunter.png';

	return npc;
};

exports.WolfLightGreySteampunkFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfLightGreySteampunkFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfLightGreySteampunk.png';

	return npc;
};

exports.WolfLightGreyTraderFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfLightGreyTraderFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfLightGreyTrader.png';

	return npc;
};

exports.WolfLightGreyWarriorFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('WolfLightGreyWarriorFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/WolfLightGreyWarrior.png';

	return npc;
};

exports.AngelBlondeFurryFemale = function(){
	var npc = exports.FurryFemale();

	npc.setName('AngelBlondeFurryFemale', 2);
	npc.display.texture = 'customnpcs:textures/entity/furryfemale/angelblonde.png';

	return npc;
};

exports.BlondElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('BlondElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/BlondElf.png';

	return npc;
};

exports.BloodElfMale2 = function(){
	var npc = exports.ElfMale();

	npc.setName('BloodElfMale2', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Blood_Elf.png';

	return npc;
};

exports.BloodMageElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('BloodMageElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Blood_Elf_Mage.png';

	return npc;
};

exports.DarkCitizenElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('DarkCitizenElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/DarkElfCitizen.png';

	return npc;
};

exports.DarkKnightElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('DarkKnightElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Dark_Elf Knight.png';

	return npc;
};

exports.DarkLibrarianElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('DarkLibrarianElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Dark_Elf Librarian.png';

	return npc;
};

exports.DarkElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('DarkElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Dark_Elf.png';

	return npc;
};

exports.KnightElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('KnightElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/ElfKnight.png';

	return npc;
};

exports.AsassinElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('AsassinElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Elf_Asassin_2.png';

	return npc;
};

exports.EngineerElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('EngineerElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Engineer_Elf.png';

	return npc;
};

exports.ForestElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('ForestElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/ForestElf.png';

	return npc;
};

exports.HighClassKnightElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('HighClassKnightElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/High_Class_Knight_Elf.png';

	return npc;
};

exports.LinkElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('LinkElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/Link.png';

	return npc;
};

exports.WoodElfMale = function(){
	var npc = exports.ElfMale();

	npc.setName('WoodElfMale', 2);
	npc.display.texture = 'customnpcs:textures/entity/elfmale/WoodElf.png';

	return npc;
};

exports.BeardedVillager = function(){
	var npc = exports.Villager();

	npc.setName('BeardedVillager', 2);
	npc.display.texture = 'customnpcs:textures/entity/villagers/Bearded.png';

	return npc;
};

exports.CompanionVillager = function(){
	var npc = exports.Villager();

	npc.setName('CompanionVillager', 2);
	npc.display.texture = 'customnpcs:textures/entity/villagers/Companion.png';

	return npc;
};

exports.FisherVillager = function(){
	var npc = exports.Villager();

	npc.setName('FisherVillager', 2);
	npc.display.texture = 'customnpcs:textures/entity/villagers/Fisher.png';

	return npc;
};

exports.OldFarmerVillager = function(){
	var npc = exports.Villager();

	npc.setName('OldFarmerVillager', 2);
	npc.display.texture = 'customnpcs:textures/entity/villagers/OldFarmer.png';

	return npc;
};

exports.ShopKeeperVillager = function(){
	var npc = exports.Villager();

	npc.setName('ShopKeeperVillager', 2);
	npc.display.texture = 'customnpcs:textures/entity/villagers/shopkeeper.png';

	return npc;
};

exports.AquaCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('AquaCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/AquaCrystal.png';

	return npc;
};

exports.AquaCrystalFloating = function(){
	var npc = exports.Crystal();

	npc.setName('AquaCrystalFloating', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/AquaCrystalFloating.png';

	return npc;
};

exports.BankCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('BankCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/Bank.png';

	return npc;
};

exports.BurningCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('BurningCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/BurningCrystal.png';

	return npc;
};

exports.BurningCrystalFloating = function(){
	var npc = exports.Crystal();

	npc.setName('BurningCrystalFloating', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/BurningCrystalFloating.png';

	return npc;
};

exports.CorruptCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('CorruptCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/CorruptCrystal.png';

	return npc;
};

exports.CorruptCrystalFloating = function(){
	var npc = exports.Crystal();

	npc.setName('CorruptCrystalFloating', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/CorruptFloatingCrystal.png';

	return npc;
};

exports.CrystalBlackFloating = function(){
	var npc = exports.Crystal();

	npc.setName('CrystalBlackFloating', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/CrystalBlackFloating.png';

	return npc;
};

exports.ElectricCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('ElectricCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/ElectricCrystal.png';

	return npc;
};

exports.ElectricCrystalFloating = function(){
	var npc = exports.Crystal();

	npc.setName('ElectricCrystalFloating', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/ElectricCrystalFloating.png';

	return npc;
};

exports.ElementalLavaCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('ElementalLavaCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/Elemental Lava.png';

	return npc;
};

exports.ElementalPsycicCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('ElementalPsycicCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/Elemental Psycic.png';

	return npc;
};

exports.EnderCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('EnderCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/EnderCrystal.png';

	return npc;
};

exports.EnderCrystalFloating = function(){
	var npc = exports.Crystal();

	npc.setName('EnderCrystalFloating', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/EnderFloatingCrystal.png';

	return npc;
};

exports.MCKBrCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('MCKBrCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/MCKBr.png';

	return npc;
};

exports.MarioNoteBlockCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('MarioNoteBlockCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/MarioNoteBlock.png';

	return npc;
};

exports.NatureCrystal = function(){
	var npc = exports.Crystal();

	npc.setName('NatureCrystal', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/NatureCrystal.png';

	return npc;
};

exports.NatureCrystalFloating = function(){
	var npc = exports.Crystal();

	npc.setName('NatureCrystalFloating', 2);
	npc.display.texture = 'customnpcs:textures/entity/crystal/NatureCrystalFloating.png';

	return npc;
};

exports.Crystals = [
	exports.Crystal,
	exports.AquaCrystal,
	exports.AquaCrystalFloating,
	exports.BankCrystal,
	exports.BurningCrystal,
	exports.BurningCrystalFloating,
	exports.CorruptCrystal,
	exports.CorruptCrystalFloating,
	exports.CrystalBlackFloating,
	exports.ElectricCrystal,
	exports.ElectricCrystalFloating,
	exports.ElementalLavaCrystal,
	exports.ElementalPsycicCrystal,
	exports.EnderCrystal,
	exports.EnderCrystalFloating,
	exports.MCKBrCrystal,
	exports.MarioNoteBlockCrystal,
	exports.NatureCrystal,
	exports.NatureCrystalFloating,
];

exports.randomCrystal = function(){
	return exports.Crystals[rand(0, exports.Crystals.length - 1)];
}

exports.spawnCrystal = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomCrystal()).spawn(loc);
}

exports.Dragons = [
	exports.Dragon,
	exports.BlackDragon,
	exports.BlueDragon,
	exports.CyanDragon,
	exports.GoldenDragon,
	exports.GrayDragon,
	exports.GreenDragon,
	exports.MagentaDragon,
	exports.OrangeDragon,
	exports.PurpleDragon,
	exports.RedDragon,
	exports.SkeletonDragon,
	exports.YellowDragon,
];

exports.randomDragon = function(){
	return exports.Dragons[rand(0, exports.Dragons.length - 1)];
}

exports.spawnDragon = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomDragon()).spawn(loc);
}

exports.Golems = [
	exports.Golem,
	exports.CastleKnightGolem,
	exports.EnderBruteGolem,
	exports.IronGolem,
	exports.LoaderGolem,
	exports.NetherGolem,
	exports.PoliceGolem,
	exports.SandMonsterGolem,
	exports.SecuritronV2Golem,
	exports.StoneGuardianGolem,
];

exports.randomGolem = function(){
	return exports.Golems[rand(0, exports.Golems.length - 1)];
}

exports.spawnGolem = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomGolem()).spawn(loc);
}

exports.Ponys = [
	exports.Pony,
	exports.AloePony,
	exports.AppleBloomPony,
	exports.AppleJackWithHatPony,
	exports.AppleJackPony,
	exports.BatPonyDeeDeePony,
	exports.BatPonyEchoPony,
	exports.BatPonyosinaPony,
	exports.BerryPunchPony,
	exports.BigMacPony,
	exports.BlueberryMuffinPony,
	exports.BonBonPony,
	exports.BrollyPony,
	exports.CaramelPony,
	exports.CarrotTopPony,
	exports.CheerileePony,
	exports.CherriesJubileePony,
	exports.CherryPony,
	exports.ChocolateSunPony,
	exports.CloudKickerPony,
	exports.ColgatePony,
	exports.CrescentPony,
	exports.DJPon3Pony,
	exports.DerpyHoovesPony,
	exports.DoctorWhoovesPony,
	exports.EndlessCloudsPony,
	exports.FluttershyPony,
	exports.GoldenHarvestPony,
	exports.HeartstringsPony,
	exports.HollyDashPony,
	exports.LemonHeartsPony,
	exports.LemonTartPony,
	exports.LotusPony,
	exports.LyraPony,
	exports.NorthPolePony,
	exports.NurseRedheartPony,
	exports.OctaviaPony,
	exports.OrangeBoxPony,
	exports.OrangeWaferPony,
	exports.OrchidDewPony,
	exports.PegasusGuardPony,
	exports.PinkiePiePony,
	exports.PrincessCelestiaPony,
	exports.PrincessLunaS2Pony,
	exports.RainbowDashPony,
	exports.RaindropPony,
	exports.RarityPony,
	exports.RoseluckPony,
	exports.RoyGBowPony,
	exports.ScootalooPony,
	exports.SoarinPony,
	exports.SparklerPony,
	exports.SpitfirePony,
	exports.StarSparklePony,
	exports.SweetieBellePony,
	exports.TrixiePony,
	exports.TwilightSparklePony,
	exports.UnderDWeatherPony,
	exports.UnicornGuardPony,
	exports.VelvetHoovesPony,
	exports.NormalHorsePony,
];

exports.randomPony = function(){
	return exports.Ponys[rand(0, exports.Ponys.length - 1)];
}

exports.spawnPony = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomPony()).spawn(loc);
}

exports.DwarfFemales = [
	exports.DwarfFemale,
	exports.BlondDwarfFemale,
	exports.GingerDwarfFemale,
	exports.SimoneDwarfFemale,
];

exports.randomDwarfFemale = function(){
	return exports.DwarfFemales[rand(0, exports.DwarfFemales.length - 1)];
}

exports.spawnDwarfFemale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomDwarfFemale()).spawn(loc);
}

exports.DwarfMales = [
	exports.DwarfMale,
	exports.BeardedDwarfFemale,
	exports.BlacksmithDwarfFemale,
	exports.KingDwarfMale,
	exports.StatueDwarfMale,
	exports.BlackSmithDwarfMale,
	exports.KeeperDwarfMale,
	exports.LeaderDwarfMale,
	exports.ElderlyDwarfMale,
	exports.GingerKingDwarfMale,
	exports.GingerKnightDwarfMale,
	exports.GoblinDwarfMale,
	exports.HighClassDwarfMale,
	exports.HobbitDwarfMale,
	exports.MinerDwarfMale,
	exports.MoustachedDwarfMale,
	exports.OneEyeblindDwarfMale,
	exports.SimonDwarfMale,
	exports.SomeDwarfMale,
	exports.VikingDwarfMale,
];

exports.randomDwarfMale = function(){
	return exports.DwarfMales[rand(0, exports.DwarfMales.length - 1)];
}

exports.spawnDwarfMale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomDwarfMale()).spawn(loc);
}

exports.ElfFemales = [
	exports.ElfFemale,
	exports.DarkElfFemale,
	exports.MageElfFemale,
	exports.QueenElfFemale,
	exports.QueenFormalElfFemale,
	exports.SoldierElfFemale,
	exports.SoldierHelmetElfFemale,
	exports.WarriorElfFemale,
	exports.WoodElfFemale,
];

exports.randomElfFemale = function(){
	return exports.ElfFemales[rand(0, exports.ElfFemales.length - 1)];
}

exports.spawnElfFemale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomElfFemale()).spawn(loc);
}

exports.ElfMales = [
	exports.ElfMale,
	exports.BlondElfMale,
	exports.BloodElfMale2,
	exports.BloodMageElfMale,
	exports.DarkCitizenElfMale,
	exports.DarkKnightElfMale,
	exports.DarkLibrarianElfMale,
	exports.DarkElfMale,
	exports.KnightElfMale,
	exports.AsassinElfMale,
	exports.EngineerElfMale,
	exports.ForestElfMale,
	exports.HighClassKnightElfMale,
	exports.LinkElfMale,
	exports.WoodElfMale,
];

exports.randomElfMale = function(){
	return exports.ElfMales[rand(0, exports.ElfMales.length - 1)];
}

exports.spawnElfMale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomElfMale()).spawn(loc);
}

exports.Enderchibis = [
	exports.Enderchibi,
	exports.AlbinoChibi,
	exports.EnderGhostEnderchibi,
	exports.FriendlyEnderchibi,
	exports.IceEnderchibi,
	exports.MrEnderchibi,
	exports.MsEnderchibi,
	exports.NetherChibi,
	exports.Slenderchibi,
];

exports.randomEnderchibi = function(){
	return exports.Enderchibis[rand(0, exports.Enderchibis.length - 1)];
}

exports.spawnEnderchibi = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomEnderchibi()).spawn(loc);
}

exports.Endermans = [
	exports.Enderman,
	exports.ApparationEnderman,
	exports.EnderMageEnderman,
	exports.SlendermanEnderman,
];

exports.randomEnderman = function(){
	return exports.Endermans[rand(0, exports.Endermans.length - 1)];
}

exports.spawnEnderman = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomEnderman()).spawn(loc);
}

exports.FurryFemales = [
	exports.FurryFemale,
	exports.BunnyFurryFemale,
	exports.LeopardFurryFemale,
	exports.LeopardHunterFurryFemale,
	exports.LeopardStrawHatFurryFemale,
	exports.LeopardTraderFurryFemale,
	exports.LeopardWarriorFurryFemale,
	exports.SnowLeopardHunterFurryFemale,
	exports.SnowLeopardStrawHatFurryFemale,
	exports.SnowLeopardTraderFurryFemale,
	exports.SnowLeopardWarriorFurryFemale,
	exports.SnowLeopardFurryFemale,
	exports.TigerHunterFurryFemale,
	exports.TigerStrawHatFurryFemale,
	exports.TigerTraderFurryFemale,
	exports.TigerWarriorFurryFemale,
	exports.TigerFurryFemale,
	exports.WolfBlackFurryFemale,
	exports.WolfBlackHunterFurryFemale,
	exports.WolfBlackSteampunkFurryFemale,
	exports.WolfBlackTraderFurryFemale,
	exports.WolfBlackWarriorFurryFemale,
	exports.WolfBrownFurryFemale,
	exports.WolfBrownHunterFurryFemale,
	exports.WolfBrownSteampunkFurryFemale,
	exports.WolfBrownTraderFurryFemale,
	exports.WolfBrownWarriorFurryFemale,
	exports.WolfGreyFurryFemale,
	exports.WolfGreyHunterFurryFemale,
	exports.WolfGreySteampunkFurryFemale,
	exports.WolfGreyTraderFurryFemale,
	exports.WolfGreyWarriorFurryFemale,
	exports.WolfLightGreyFurryFemale,
	exports.WolfLightGreyHunterFurryFemale,
	exports.WolfLightGreySteampunkFurryFemale,
	exports.WolfLightGreyTraderFurryFemale,
	exports.WolfLightGreyWarriorFurryFemale,
	exports.AngelBlondeFurryFemale,
];

exports.randomFurryFemale = function(){
	return exports.FurryFemales[rand(0, exports.FurryFemales.length - 1)];
}

exports.spawnFurryFemale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomFurryFemale()).spawn(loc);
}

exports.FurryMales = [
	exports.FurryMale,
	exports.BunnyFurryMale,
	exports.DragonGreenFurryMale,
	exports.LeopardHunterFurryMale,
	exports.LeopardStrawHatFurryMale,
	exports.LeopardTraderFurryMale,
	exports.LeopardWarriorFurryMale,
	exports.LeopardFurryMale,
	exports.ReaperFurryMale,
	exports.SnowLeopardHunterFurryMale,
	exports.SnowLeopardStrawHatFurryMale,
	exports.SnowLeopardTraderFurryMale,
	exports.SnowLeopardWarriorFurryMale,
	exports.SnowLeopardFurryMale,
	exports.TigerHunterFurryMale,
	exports.TigerStrawHatFurryMale,
	exports.TigerTraderFurryMale,
	exports.TigerWarriorFurryMale,
	exports.TigerFurryMale,
	exports.WolfBlackFurryMale,
	exports.WolfBlackHunterFurryMale,
	exports.WolfBlackSteamPunkFurryMale,
	exports.WolfBlackTraderFurryMale,
	exports.WolfBlackWarriorFurryMale,
	exports.WolfBrownFurryMale,
	exports.WolfBrownHunterFurryMale,
	exports.WolfBrownSteamPunkFurryMale,
	exports.WolfBrownTraderFurryMale,
	exports.WolfBrownWarriorFurryMale,
	exports.WolfGreyFurryMale,
	exports.WolfGreyHunterFurryMale,
	exports.WolfGreySteampunkFurryMale,
	exports.WolfGreyTraderWolfFurryMale,
	exports.WolfGreyWarriorFurryMale,
	exports.WolfLightGreyFurryMale,
	exports.WolfLightGreyHunterFurryMale,
	exports.WolfLightGreyModelSteamPunkFurryMale,
	exports.WolfLightGreyWarriorFurryMale,
	exports.WolfLightGreyraderFurryMale,
];

exports.randomFurryMale = function(){
	return exports.FurryMales[rand(0, exports.FurryMales.length - 1)];
}

exports.spawnFurryMale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomFurryMale()).spawn(loc);
}

exports.HumanMales = [
	exports.HumanMale,
	exports.ArcticHumanMale,
	exports.BodyguardHumanMale,
	exports.CamoRadioHumanMale,
	exports.CamoSpecOpsHumanMale,
	exports.CamoHumanMale,
	exports.CasualHumanMale,
	exports.ChefHumanMale,
	exports.DoctorHumanMale,
	exports.ElderlyHumanMale,
	exports.EvilGoldKnightHumanMale,
	exports.FireHumanMale,
	exports.GangsterHumanMale,
	exports.GuardHumanMale,
	exports.KingHumanMale,
	exports.KingHumanMale,
	exports.KnightHumanMale,
	exports.KungFuHumanMale,
	exports.LondonGuardHumanMale,
	exports.MageHumanMale,
	exports.MailmanHumanMale,
	exports.McDHumanMale,
	exports.MercenaryHumanMale,
	exports.MinerHumanMale,
	exports.PinstripesHumanMale,
	exports.PriestHumanMale,
	exports.PrisonerHumanMale,
	exports.RaggedyBardHumanMale,
	exports.RobesBlackHumanMale,
	exports.RobesBrownHumanMale,
	exports.RobesWhiteHumanMale,
	exports.SteampunkHumanMale,
	exports.TownsmanHumanMale,
	exports.TraderHumanMale,
	exports.TribeBoyHumanMale,
	exports.TribeElderHumanMale,
	exports.TribeHunterHumanMale,
	exports.TribeKimbaHumanMale,
	exports.TribeManHumanMale,
	exports.TuxedoHumanMale,
	exports.VillagerOldHumanMale,
	exports.VillagerHumanMale,
	exports.WaiterHumanMale,
	exports.WhiteknightHumanMale,
	exports.WizardHumanMale,
	exports.WoundedHumanMale,
];

exports.randomHumanMale = function(){
	return exports.HumanMales[rand(0, exports.HumanMales.length - 1)];
}

exports.spawnHumanMale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomHumanMale()).spawn(loc);
}

exports.ZombieFemales = [
	exports.ZombieFemale,
	exports.HerobrineZombieFemale,
];

exports.randomZombieFemale = function(){
	return exports.ZombieFemales[rand(0, exports.ZombieFemales.length - 1)];
}

exports.spawnZombieFemale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomZombieFemale()).spawn(loc);
}

exports.ZombieMales = [
	exports.ZombieMale,
	exports.ClassyZombieMale,
	exports.DeathZombieMale,
	exports.DemonSalesmanZombieMale,
	exports.DesertZombieMale,
	exports.DisfiguredZombieMale,
	exports.EnderMageZombieMale,
	exports.FleshZombieMale,
	exports.FrozenCorpseZombieMale,
	exports.GhostKingZombieMale,
	exports.GhostGreyZombieMale,
	exports.GhostRedZombieMale,
	exports.GhostYellowZombieMale,
	exports.HerobrineZombieMale,
	exports.OgreZombieMale,
	exports.SandMonsterZombieMale,
	exports.SecuritronZombieMale,
	exports.SkullMageZombieMale,
	exports.StoneGolemZombieMale,
	exports.TecZombieMale,
	exports.UndeadKingZombieMale,
	exports.UndeadMonsterZombieMale,
	exports.ZombieBloodyZombieMale,
	exports.ZombieMageZombieMale,
	exports.ZombieSteveZombieMale,
];

exports.randomZombieMale = function(){
	return exports.ZombieMales[rand(0, exports.ZombieMales.length - 1)];
}

exports.spawnZombieMale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomZombieMale()).spawn(loc);
}

exports.NagaFemales = [
	exports.NagaFemale,
	exports.ClaireNagaFemale,
	exports.CreepSnakeNagaFemale,
	exports.EnderSnakeNagaFemale,
	exports.PinkNagaFemale,
];

exports.randomNagaFemale = function(){
	return exports.NagaFemales[rand(0, exports.NagaFemales.length - 1)];
}

exports.spawnNagaFemale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomNagaFemale()).spawn(loc);
}

exports.OrcFemales = [
	exports.OrcFemale,
	exports.GenericOrcFemale,
	exports.GuardOrcFemale,
	exports.LeatherArmoredOrcFemale,
	exports.MercenaryOrcFemale,
];

exports.randomOrcFemale = function(){
	return exports.OrcFemales[rand(0, exports.OrcFemales.length - 1)];
}

exports.spawnOrcFemale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomOrcFemale()).spawn(loc);
}

exports.OrcMales = [
	exports.OrcMale,
	exports.GenericOrcMale,
	exports.GiantOrcMale,
	exports.GuardOrcMale,
	exports.LeatherArmoredOrcMale,
	exports.MercenaryOrcMale,
	exports.StrandedOrcOrcMale,
];

exports.randomOrcMale = function(){
	return exports.OrcMales[rand(0, exports.OrcMales.length - 1)];
}

exports.spawnOrcMale = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomOrcMale()).spawn(loc);
}

exports.Villagers = [
	exports.Villager,
	exports.BeardedVillager,
	exports.CompanionVillager,
	exports.FisherVillager,
	exports.OldFarmerVillager,
	exports.ShopKeeperVillager,
];

exports.randomVillager = function(){
	return exports.Villagers[rand(0, exports.Villagers.length - 1)];
}

exports.spawnVillager = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomVillager()).spawn(loc);
}

exports.Dwarfs = exports.DwarfMales.concat(exports.DwarfFemales);

exports.randomDwarf = function(){
	return exports.Dwarfs[rand(0, exports.Dwarfs.length - 1)];
}

exports.spawnDwarf = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomDwarf()).spawn(loc);
}

exports.Elfs = exports.ElfMales.concat(exports.ElfFemales);

exports.randomElf = function(){
	return exports.Elfs[rand(0, exports.Elfs.length - 1)];
}

exports.spawnElf = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomElf()).spawn(loc);
}

exports.Furries = exports.FurryMales.concat(exports.FurryFemales);

exports.randomFurry = function(){
	return exports.Furries[rand(0, exports.Furries.length - 1)];
}

exports.spawnFurry = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomFurry()).spawn(loc);
}

exports.Humans = exports.HumanMales;

exports.randomHuman = function(){
	return exports.Humans[rand(0, exports.Humans.length - 1)];
}

exports.spawnHuman = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomHuman()).spawn(loc);
}

exports.Zombies = exports.ZombieMales.concat(exports.ZombieFemales);

exports.randomZombie = function(){
	return exports.Zombies[rand(0, exports.Zombies.length - 1)];
}

exports.spawnZombie = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomZombie()).spawn(loc);
}

exports.Nagas = exports.NagaFemales;

exports.randomNaga = function(){
	return exports.Nagas[rand(0, exports.Nagas.length - 1)];
}

exports.spawnNaga = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomNaga()).spawn(loc);
}

exports.Orcs = exports.OrcMales.concat(exports.OrcFemales);

exports.randomOrc = function(){
	return exports.Orcs[rand(0, exports.Orcs.length - 1)];
}

exports.spawnOrc = function(loc){
	if(loc == undefined) loc = player.getLocation();
	return CustomNPC.createNPC(exports.randomOrc()).spawn(loc);
}

