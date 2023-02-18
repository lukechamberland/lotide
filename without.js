const without = function(items, itemsToRemove) {
  const array = [];
    for (const item of items) {
      if (!itemsToRemove.includes(item)) {
        array.push(item);
      }
    }
    return array;
  }

  module.exports = without;