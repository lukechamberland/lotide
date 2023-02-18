const countOnly = function(allItems, itemsToCount) {
  // new object that will contain count that the given object listed
  const results = {};
  // loops through allItems
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

    return results;
  }
}

module.exports = countOnly;