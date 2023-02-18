const map = function(array, callback) {
  // final results stores in results
  const results = [];
  // looping through the array 
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = map;