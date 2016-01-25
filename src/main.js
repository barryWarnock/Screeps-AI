//change test
var creep_do = require("creep_do");
var harvest = require("harvester");
var build = require("builder");
var keep_controller = require("keeper");
var archer_fight = require("archer");
var soldier_fight = require("soldier");
var patrol = require("patrol");


var manage_creeps = require("creep_manager");

module.exports.loop = function() {
    console.log("start tick")
    manage_creeps();
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        var role = creep.memory.role;

        if (role == "harvester") {
            creep_do(creep, [harvest, build, keep_controller]);
        }
        else if (role == "builder") {
            creep_do(creep, [build, keep_controller, harvest]);
        }
        else if (role == "keeper") {
            creep_do(creep, [keep_controller, build, harvest]);
        }
        else if (role == "archer") {
            creep_do(creep, [archer_fight, patrol]);
        }
        else if (role == "soldier") {
            creep_do(creep, [soldier_fight, patrol]);
        }
    }
    console.log("end tick")
}
