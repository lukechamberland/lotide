const findKeyByValue = function(object, value) {
  // loops through the obejct
  for (let key in object) {
    // returns the first key which is equal to the given value
    if (value === object[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;