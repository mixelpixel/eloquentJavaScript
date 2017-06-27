// http://eloquentjavascript.net/04_data.html#h_8ZspxiCEC/
function range (start, end) {
  rangeArray = new Array;
  for (var i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

console.log(range(1, 10)); // ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function sum (anArray) {
  sum = 0;
  for (var i = 0; i <= anArray.length; i++) {
    sum +=i;
  }
  return sum;
}

console.log(sum(range(1, 10))); // ---> 55
