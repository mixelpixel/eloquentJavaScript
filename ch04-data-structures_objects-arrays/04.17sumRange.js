// http://eloquentjavascript.net/04_data.html#h_8ZspxiCEC/

function range(start, end) {
  rangeArray = new Array;
  for (var i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

console.log(range(1, 10)); // ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function arraySum(anArray) {
  arraySum = 0;
  for (var i = 0; i <= anArray.length; i++) {
    arraySum +=i;
  }
  return arraySum;
}

// console.log(arraySum(range(1, 10))); // ---> 55
// console.log(arraySum(range(1, 10))); // ---> 55

function stepRange(start, end, step) {
  if (step === undefined)
    step = 1;
  stepRangeArray = new Array;
  if (step < 0) {
    for (var i = start; i >= end; i += step) {
      stepRangeArray.push(i);
    } return stepRangeArray;
  } else if (step > 0) {
    for (var i = start; i <= end; i += step) {
      stepRangeArray.push(i);
    } return stepRangeArray;
  } else return start;
}

console.log(stepRange(1, 10));      // ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(stepRange(5, 2, -1));   // ---> [ 5, 4, 3, 2 ]
console.log(stepRange(1, 10, 2));   // ---> [ 1, 3, 5, 7, 9 ]
// console.log(arraySum(stepRange(1, 10))); // ---> 55
