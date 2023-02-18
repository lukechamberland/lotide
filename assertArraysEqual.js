const eqArrays = require('./eqArrays');
// checks if arrays are equal or not
const assertArraysEqual = function(actual, expected) {
  // interpolates if equal
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  // interpolates if not equal
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

module.exports = assertArraysEqual;