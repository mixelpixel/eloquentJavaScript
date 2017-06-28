// http://eloquentjavascript.net/04_data.html#h_6xTmjj4Rf5

function reverseArray(anArray) {
  revArray = new Array;
  for (var i = anArray.length - 1; i >= 0; i--) {
    revArray.push(anArray[i])
  }
  return revArray;
}

console.log(reverseArray(["A", "B", "C"])); // ---> ["C", "B", "A"];
