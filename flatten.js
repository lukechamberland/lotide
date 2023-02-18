const flatten = function(array) {
  // final results
  let secondArray = [];
  // loops through the given array
  array.forEach(function(firstElement) {
    // if the element is an array push each element to secondArray
    if (Array.isArray(firstElement)) {
      firstElement.forEach(function(secondElement) {
        secondArray.push(secondElement);
      });
    } else {
      // if not an array push the element to secondArray
      secondArray.push(firstElement);
    }
  });
  return secondArray;
};

module.exports = flatten;