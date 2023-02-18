const assertEqual = function(actual, expected) {
  // simply checks if two arguments are equal
  if (actual === expected) {
    // interpolates them if they are equal
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    //interpolates them if they are not equal
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}


module.exports = assertEqual;