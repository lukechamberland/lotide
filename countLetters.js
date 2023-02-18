const countLetters = function(string) {
  // removes spaces
  let newString = string.split(" ").join('');
  //storing the final result
  let result = {};
  //looping through newString and checking if result is truthy or falsey
  for (let element of newString) {
    result[element] ? result[element] += 1 : result[element] = 1;
  }
  // returning the final result
  return result;
};

module.exports = countLetters;