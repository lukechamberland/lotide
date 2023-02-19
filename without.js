const without = function(items, itemsToRemove) {
  const array = [];
  for (const item of items) {
    /* if itemsToRemove doesn't include 
    the given item from the loop, push it 
    to array */
    if (!itemsToRemove.includes(item)) {
      array.push(item);
    }
  }
  return array;
}

module.exports = without;