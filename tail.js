const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}
const tail = function(thisArray) {
  return thisArray.slice(0);
}
assertEqual(tail(['heyo', 33, 'yes', true], [33, 'yes', true]))