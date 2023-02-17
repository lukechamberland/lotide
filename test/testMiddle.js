const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assertArraysEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});