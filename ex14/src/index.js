// Only change code below this line
function myForLoop1(params) {
  var evenNumbers = "0";
  for (var i = 2; i <= 8; i++) {
    if (i % 2 === 0) {
      evenNumbers += ", ";
      evenNumbers += i;
    }
  }
  return evenNumbers;
}

function myForLoop2() {
  var evenInverseNumbers = "8";
  for (var i = 6; i >= 0; i--) {
    if (i % 2 === 0) {
      evenInverseNumbers += ", ";
      evenInverseNumbers += i;
    }
  }
  return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2,
};
