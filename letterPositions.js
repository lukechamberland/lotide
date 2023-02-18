const letterPositions = function(finalSentance) {
  //changes to an array
  let newSentance = finalSentance.split('');
  let results = {};
  // returns the position of each occurance of the letter as an array
  newSentance.forEach(function(letter, i) {
    if (letter !== " ") {
      results[letter] ? results[letter].push(i) : results[letter] = [i];
    }
  });
  // returns the final results
  return results;
};

module.exports = letterPositions;