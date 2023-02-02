const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};