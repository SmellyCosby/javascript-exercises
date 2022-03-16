//const removeFromArray = function(arr, removedValue) {
//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === removedValue) {
//      arr.splice(i, 1);
//    }
//  }
//  return arr;
// };

const removeFromArray = function(arr, ...args) {
  args.forEach((arg) => {
    let index = arr.indexOf(arg);
      if (index > -1) {
        arr.splice(index, 1);
      }
    });
    return arr;
  }

// Do not edit below this line
module.exports = removeFromArray;
