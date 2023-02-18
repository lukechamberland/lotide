const without = function(items, itemsToRemove) {
  // new array which will contain items - items to remove
  const array = [];
  // looping through the first array
  for (const item of items) {
    /* if itemsToRemove doesn't include 
    the given item from the loop, push it 
    to array */
    if (!itemsToRemove.includes(item)) {
      array.push(item);
    }
  }
  // return final array
  return array;
}

module.exports = without;