const assertEqual = function(actual, expected) {
  if (actual.length == expected.length && Array.isArray(actual) === Array.isArray(expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}

assertEqual(['hello'], ['hello'])