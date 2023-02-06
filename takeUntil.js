const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (callback(element) === false) {
       newArray.push(element);
    } else {
      return newArray;
    }
  }
  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);