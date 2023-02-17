const assertEqual = require('./assertEqual')

const head = function(thisArray) {
  return thisArray[0]
}
assertEqual(head([5,6,7]),5)
assertEqual(head(["Basketball", "Steak", "Lighthouse"]), "Labs");

module.exports = head.js