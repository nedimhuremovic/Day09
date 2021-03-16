// Write code below this line
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
// Write code above this line
    return animals;
}
console.log(switchCase("a")); // Change this line
module.exports = switchCase;