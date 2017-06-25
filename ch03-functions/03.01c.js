// http://eloquentjavascript.net/03_functions.html#c_YeYw47ylC5

// var power = function(base, exponent) {
//     var result = 1;
//     for (var count = 0; count < exponent; count++)
//       result *= base;
//     return result;
// };
//
// console.log(power(2, 10)); // <-- 1024

// prompt the user for a base and an exponent
// return the result of the base to the power of the exponent
// NOTE: requires `npm install prompt`
var baseInput     = prompt("please enter a number for the base of the exponential operator: ")
var exponentInput = prompt("please enter a number for the power of the exponential operator: ")

var power = function(base, exponent) {
  var result = 1;
  for (count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(Number(baseInput), Number(exponentInput));
