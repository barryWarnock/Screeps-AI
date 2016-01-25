module.exports = function(creep) {
    var hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
    var target = null;
    for (var i = 0; i < hostiles.length; i++) {
        if (hostiles[i].owner.username != "Source Keeper") {
            target = hostiles[i];
            break;
        }
    }

    if (hostiles.length) {
        if (creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
        }
        return true;
    }
    else {
        return false;
    }
}
