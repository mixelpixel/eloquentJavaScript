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

// nodejs process to get user input
//per: https://stackoverflow.com/a/32276364/5225057
function prompt(question, callback) {
  var stdin  = process.stdin,
      stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function(data) {
    callback(data.toString().trim());
  });
};

// Use case
prompt('What\'s your name? ', function (input) {
  console.log("Your name is " + input);
  process.exit();
})
