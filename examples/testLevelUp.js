var LevelUp = require('LevelUp');

worldedit.log('skill MINING: ' + LevelUp.getSkill(LevelUp.SKILL_MINING));
worldedit.log('skill SWORD: ' + LevelUp.getSkill(LevelUp.SKILL_SWORD));
worldedit.log('skill DEFENSE: ' + LevelUp.getSkill(LevelUp.SKILL_DEFENSE));
worldedit.log('skill WOODCUTTING: ' + LevelUp.getSkill(LevelUp.SKILL_WOODCUTTING));
worldedit.log('skill SMELTING: ' + LevelUp.getSkill(LevelUp.SKILL_SMELTING));
worldedit.log('skill ARCHERY: ' + LevelUp.getSkill(LevelUp.SKILL_ARCHERY));
worldedit.log('skill ATHLETICS: ' + LevelUp.getSkill(LevelUp.SKILL_ATHLETICS));
worldedit.log('skill COOKING: ' + LevelUp.getSkill(LevelUp.SKILL_COOKING));
worldedit.log('skill SNEAKING: ' + LevelUp.getSkill(LevelUp.SKILL_SNEAKING));
worldedit.log('skill FARMING: ' + LevelUp.getSkill(LevelUp.SKILL_FARMING));
worldedit.log('skill FISHING: ' + LevelUp.getSkill(LevelUp.SKILL_FISHING));
worldedit.log('skill DIGGING: ' + LevelUp.getSkill(LevelUp.SKILL_DIGGING));

worldedit.log('skill point: ' + LevelUp.getSkillPoint());
LevelUp.addSkillPoint(10);
worldedit.log('skill point: ' + LevelUp.getSkillPoint());

worldedit.log('class(0: NONE, MINER, WARRIOR, ..., 13: FREELANCE): ' + LevelUp.getClass());

