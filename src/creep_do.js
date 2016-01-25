/*
takes a creep and an array of functions sorted by importance
returns true if any of the functions completed succesfully
*/
module.exports = function(creep, functions) {
    var success = false;
    for (var i = 0; i < functions.length; i++) {
        var func = functions[i];
        if (func(creep)) {
            success = true;
            break;
        }
    }
    return success;
}
