const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const countLetters = function(string) {
  let newString = string.split(" ").join('');
  let result = {};
  for (let element of newString) {
    result[element] ? result[element] += 1 : result[element] = 1;
  }
  return result;
};

module.exports = countLetters