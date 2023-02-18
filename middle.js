const middle = function(array) {
  // makes sure the array length is at least 3
  if (array.length <= 2) {
    return [];
    // if the array length is even returns the middle 2 numbers
  } else if (array.length % 2 === 0) { 
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  // if array length is odd return the one middle number
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;