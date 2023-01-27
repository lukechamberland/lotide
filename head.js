const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}

const head = function(thisArray) {
  return thisArray[0]
}
assertEqual(head([5,6,7]),5)
assertEqual(head(["Basketball", "Steak", "Lighthouse"]), "Labs");