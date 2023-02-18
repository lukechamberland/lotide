const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if ((Array.isArray(first[i]) || Array.isArray(second[i])) && eqArrays(first[i], second[i]) === false) {
      return false;
    } else if (Array.isArray(first[i]) || Array.isArray(second[i])) {
      eqArrays(first[i], second[i]);
    } else if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

const eqArrays2 = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const without = function(items, itemsToRemove) {
  const array = [];
    for (const item of items) {
      if (!itemsToRemove.includes(item)) {
        array.push(item);
      }
    }
    return array;
  }

  module.exports = without;