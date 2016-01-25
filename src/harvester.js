module.exports = function(creep) {
    var sources = creep.room.find(FIND_SOURCES_ACTIVE);

    if (sources.length) {
        if (creep.carry.energy == creep.carryCapacity) {
            var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
            if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        }
        else {
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        return true;
    }
    else {
        return false;
    }
}
