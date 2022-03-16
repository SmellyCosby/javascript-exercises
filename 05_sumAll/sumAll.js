const sumAll = function(x, y) {
  let totalSum = 0;
  
  if (typeof(x) != 'number' || typeof(y) != 'number') {
    return 'ERROR';
  } else if (x < 0 || y < 0) {
    return 'ERROR';
  } else {  
    if (x < y) {
      for (i = x; i <= y; i++) {
        totalSum += i;
      }
    } else {
      for (i = y; i <= x; i++) {
        totalSum += i;
      }
    }
      return totalSum;
  }
}

// Do not edit below this line
module.exports = sumAll;
