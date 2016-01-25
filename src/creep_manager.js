var creep_factory = require("creep_factory");

var desiredBuilders = 2;
var desiredHarvesters = 3;
var desiredKeepers = 1;
var desiredSoldiers = 5;
var desiredArchers = 2;

module.exports = function () {

    var builders = 0;
    var harvesters = 0;
    var keepers = 0;
    var archers = 0;
    var soldiers = 0;
    for (var name in Game.creeps) {
        var role = Game.creeps[name].memory.role;
        switch(role) {
            case "builder":
                builders++;
                break;
            case "harvester":
                harvesters++;
                break;
            case "keeper":
                keepers++;
                break;
            case "archer":
                archers++;
                break;
            case "soldier":
                soldiers++;
                break;
        }
    }
    if (harvesters < desiredHarvesters) {
        var errCode = creep_factory(Game.spawns.Spawn1,[WORK,WORK,MOVE,CARRY], "harvester");
        if (errCode == OK) {
            harvesters++;
        }
    }
    else if (soldiers < desiredSoldiers) {
        var errCode = creep_factory(Game.spawns.Spawn1,[MOVE,MOVE,ATTACK], "soldier");
        if (errCode == OK) {
            soldiers++;
        }
    }
    else if (builders < desiredBuilders) {
        var errCode = creep_factory(Game.spawns.Spawn1,[WORK,MOVE,MOVE,CARRY], "builder");
        if (errCode == OK) {
            builders++;
        }
    }
    else if (keepers < desiredKeepers) {
        var errCode = creep_factory(Game.spawns.Spawn1,[WORK,WORK,MOVE,CARRY], "keeper");
        if (errCode == OK) {
            keepers++;
        }
    }
    else if (archers < desiredArchers) {
        var errCode = creep_factory(Game.spawns.Spawn1,[MOVE,RANGED_ATTACK], "archer");
        if (errCode == OK) {
            archers++;
        }
    }
    console.log("missing "+(desiredHarvesters-harvesters)+" harvesters")
    console.log("missing "+(desiredBuilders-builders)+" builders")
    console.log("missing "+(desiredKeepers-keepers)+" keepers")
    console.log("missing "+(desiredArchers-archers)+" archers")
    console.log("missing "+(desiredSoldiers-soldiers)+" soldiers")
}
