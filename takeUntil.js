const takeUntil = function(array, callback) {
  newArray = [];
  // loop through array
  for (let element of array) {
    // push false arguments to newArray
    if (callback(element) === false) {
       newArray.push(element);
    } else {
      return newArray;
    }
  }
  // return the new array
  return newArray;
}

module.exports = takeUntil;