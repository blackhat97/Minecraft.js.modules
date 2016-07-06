var gamerules = worldedit.getGameRules();

gamerules.set("doMobSpawning", false);
gamerules.set("doMobLoot", false);

var doFireTick = gamerules.get("doFireTick");
player.print("doFireTick: " + doFireTick);

var mobGriefing = gamerules.get("mobGriefing");
player.print("mobGriefing: " + mobGriefing);

var keepInventory = gamerules.get("keepInventory");
player.print("keepInventory: " + keepInventory);

var doMobSpawning = gamerules.get("doMobSpawning");
player.print("doMobSpawning: " + doMobSpawning);

var doMobLoot = gamerules.get("doMobLoot");
player.print("doMobLoot: " + doMobLoot);

var doTileDrops = gamerules.get("doTileDrops");
player.print("doTileDrops: " + doTileDrops);

var commandBlockOutput = gamerules.get("commandBlockOutput");
player.print("commandBlockOutput: " + commandBlockOutput);

var naturalRegeneration = gamerules.get("naturalRegeneration");
player.print("naturalRegeneration: " + naturalRegeneration);

var doDaylightCycle = gamerules.get("doDaylightCycle");
player.print("doDaylightCycle: " + doDaylightCycle);
