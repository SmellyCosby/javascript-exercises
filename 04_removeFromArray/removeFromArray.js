const removeFromArray = function(arr, removedValue) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === removedValue) {
      arr.splice(i, 1);
    }
  }
  return arr;
  };

// Do not edit below this line
module.exports = removeFromArray;
