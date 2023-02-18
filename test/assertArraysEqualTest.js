const assertArraysEqual = require('../assertArraysEqual');
let eqArrays = require('../eqArrays');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 5], [1, 2, 3]", () => {
    assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
  });
});