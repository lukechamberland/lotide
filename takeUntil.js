const takeUntil = function(array, callback) {
  newArray = [];
  for (let element of array) {
    if (callback(element) === false) {
       newArray.push(element);
    } else {
      return newArray;
    }
  }
  return newArray;
}

module.exports = takeUntil;