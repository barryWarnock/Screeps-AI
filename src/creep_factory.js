/*
takes the spawner to use, the body parts list, and the role
returns true on success
or an error object, {error_code, }
*/
module.exports = function(spawner, parts, role) {
    return spawner.createCreep(parts, null, {role: role});
}
