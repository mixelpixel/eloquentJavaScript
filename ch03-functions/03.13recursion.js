// http://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy

// recursively determine if a positive integer is odd or even

// version 1
// function isEven(number) {
//   if (number === 0)
//     return true;
//   else if (number === 1)
//     return false;
//   else
//     return isEven(number - 2);
// }

// version 2
// function isEven(number) {
//   if (number == 0)
//     return true;
//   else if (number == 1)
//     return false;
//   else
//     return isEven(number - 2);
// }

// version 3 - handling negative numbers
// function isEven(number) {
//   if (number < 0)
//     if (number == 0)
//       return true;
//     else if (number == -1)
//       return false;
//     else
//       return isEven(number + 2);
//   else if (number >= 0)
//     if (number == 0)
//       return true;
//     else if (number == 1)
//       return false;
//     else
//       return isEven(number - 2);
// }

// There's got to be a more elegant solution ...?

// version 4 - handling negative numbers
function isEven(number) {
  if (number < 0)
    // number = -number
    number *= -1
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else
    return isEven(number - 2);
}

console.log(isEven(50)); // <---- true
console.log(isEven(75)); // <---- false
console.log(isEven(-1)); // <---- false
console.log(isEven(-1234));// <-- true
