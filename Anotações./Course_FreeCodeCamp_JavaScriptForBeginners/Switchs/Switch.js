//Switch - Example.

function CaseInSwitch(val) {
    var Answer = '';
    switch (val) {
        case "a":
            Answer = 'Alpha';
            break;
        case "b":
            Answer = 'Beta';
            break;
        case "c":
            Answer = 'Gama';
            break;
        case "d":
            Answer = 'Delta';
            break;
        default:
            Answer = 'stuff'
            break;
    }
    return Answer;
}
console.log(CaseInSwitch("d"));