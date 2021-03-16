// Only change code below this line
function switchCase(letter) {
    
    switch (letter) {
        case "a":
            animals = "antelope";
            break;
        case "b":
            animals = "bird";
            break;
        case "c":
            animals = "cat";
            break;
    
        default:
            animals = "stuff";
            break;
    }

    return animals;
}
console.log(switchCase("cad"));
// Only change code bellow this line
module.exports = switchCase;