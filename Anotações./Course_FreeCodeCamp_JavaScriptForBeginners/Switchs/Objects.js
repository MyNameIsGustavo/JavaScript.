//Objects - Example.

function lookup (val) {
    var result = "";
    var lookup = {
    "Alpha":"Frank",
    "Bravo":"Boston",
    "Charlie":"Chicago",
    "Delta":"Denver",
    "Echo":"Easy",
    "Foxtrot":"Frank"
    };
    result = lookup[val];
    return result;
}
console.log(lookup("Alpha"));