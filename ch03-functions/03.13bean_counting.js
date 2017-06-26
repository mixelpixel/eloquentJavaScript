// http://eloquentjavascript.net/03_functions.html#h_3rsiDgC2do

// count the times the capital lett 'B' appears in a string

// version 1
function countBs(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'B')
      counter +=1;
  }
  return counter;
}

// version 2 - Why doesn't this work??
// function countBs(string) {
//   var counter = 0;
//   string.forEach(function (letter, index) {
//     if (letter === 'B')
//       counter +=1;
//   });
//   return counter;
// }

console.log(countBs("BBC")); // <--- 2

// write a function called countChar that behaves like countBs, except it takes
// a second argument that indicates the character that is to be counted 

// version 1
function countChar(string, letter) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter)
      counter +=1;
  }
  return counter;
}

console.log(countChar("kakkerlak", "k")); // <--- 4
