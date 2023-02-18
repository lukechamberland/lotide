const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let secondArray = [];
  array.forEach(function(firstElement) {
    if (Array.isArray(firstElement)) {
      firstElement.forEach(function(secondElement) {
        secondArray.push(secondElement);
      });
    } else {
      secondArray.push(firstElement);
    }
  });
  return secondArray;
};

module.exports = flatten;