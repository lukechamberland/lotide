let assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true for hello!, hello!", () => {
    assertEqual('hello!', 'hello!');
  });
  it("returns false for hello!, goodbye!", () => {
    assertEqual('hello!', 'goodbye!');
  });

});