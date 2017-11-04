// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

//TASK 1
//how many total bottles can be obtained with a given starting number of bottles
// WORKS

//TASK 2
//have the program take the initial investment value as an arg from the command line
// WORKS

//TASK 3
//Include in the output how many bottles earned from exchanging from empties and caps.
// WORKS

//TASK 4
//Include an output of how many empties/caps are remaining
var args = process.argv;
var initialInvestment = Array.from(args[2]);

function totalNumberOfBottles(investment) {
  var initialInvestment = Number(investment.join(""));
  var totalBottles = Math.floor(initialInvestment / 2);
  var currentBottles = Math.floor(initialInvestment / 2);
  var currentCaps = currentBottles;
  console.log('INITIAL INVESTMENT: $' + initialInvestment);

  var bottlesFromEmpties = 0;
  var bottlesFromCaps = 0;

  var convertCapsToMoreBottles = function (caps) {
    if (caps < 4) {
      return;
    }
    // var capsToConvert = caps - (caps % 4);
    // var newBottles = (capsToConvert / 4)
    // currentCaps -= capsToConvert;
    // currentCaps += newBottles;
    // currentBottles += newBottles;
    // totalBottles += newBottles;

    currentCaps -= 4;
    currentCaps++;
    currentBottles++;
    totalBottles++;
    bottlesFromCaps++;
    // console.log("Added another bottle using caps, total: " + totalBottles);
}

   var convertEmptiesToMoreBottles = function (empties) {
    if (empties < 2) {
      return;
    }
    // var emptiesToConvert = empties - (empties % 2);
    // var newBottles = (emptiesToConvert / 2)
    // currentBottles -= emptiesToConvert;
    // currentBottles += newBottles;
    // currentCaps += newBottles;
    // totalBottles += newBottles;

    currentBottles -= 2;
    currentCaps++;
    currentBottles++;
    totalBottles++;
    bottlesFromEmpties++;
    // console.log("Added another bottle using empties, total: " + totalBottles);

  }

  var getMoreBottles = function (caps, empties) {
    if (caps < 4 && empties < 2) {
      return;
    }
    convertCapsToMoreBottles(caps);
    convertEmptiesToMoreBottles(empties);
    getMoreBottles(currentCaps, currentBottles);
  }

  getMoreBottles(currentCaps, currentBottles);
  console.log('TOTAL BOTTLES: ' + totalBottles);
  console.log('REMAINING BOTTLES: ' + currentBottles);
  console.log('REMAINING CAPS: ' + currentCaps);
  console.log('TOTAL EARNED:');
  console.log('  BOTTLES: ' + bottlesFromEmpties);
  console.log('  CAPS: ' + bottlesFromCaps);
  return totalBottles;
}

totalNumberOfBottles(initialInvestment);

// totalNumberOfBottles(10);
// totalNumberOfBottles(20);
// totalNumberOfBottles(30);
// totalNumberOfBottles(40);
// totalNumberOfBottles(50);


/*
5 => 5 empties, 5 caps 5total
-4 empties => +2 total, +2 empty, +2 cap
=> 3emp, 7cap, 7tot
-4cap => +1 tot, +1 emp, +1 cap
=> 4emp, 4cap, 8tot
-4 emp => +2 total, +2 empty, +2cap
=> 2emp, 6cap, 10tot
-4 cap => +1 tot, +1 emp, +1cap
=> 3emp, 3cap, 11tot
-2 emp => +1 tot, +1 emp, +1cap
=> 2emp, 4cap, 12tot
-2 emp => +1 tot, +1 emp, +1cap
=> 1emp, 5cap, 13 tot;
-4 cap => +1 tot, +1 emp, +1cap
=> 2emp, 2cap, 14 tot;
-2 empt => +1 tot, +1 emp, +1cap
=> 1emp, 3cap, 15tot
*/