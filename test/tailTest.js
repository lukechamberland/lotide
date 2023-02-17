const tail  = require('../tail');
const assertArraysEqual = require('../assertArraysEqual')


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assertArraysEqual(tail([1, 2, 3]), [2, 3]);
  });
});