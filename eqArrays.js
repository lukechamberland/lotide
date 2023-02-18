const eqArrays = function(first, second) {
  // if argument lengths are not equal returns false
  if (first.length !== second.length) {
    return false;
  }
  // loop campares if first and second are both arrays and if each element of the array is equal
  for (let i = 0; i < first.length; i++) {
    if ((Array.isArray(first[i]) || Array.isArray(second[i])) && eqArrays(first[i], second[i]) === false) {
      return false;
    } else if (Array.isArray(first[i]) || Array.isArray(second[i])) {
      eqArrays(first[i], second[i]);
    } else if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
module.exports = eqArrays;