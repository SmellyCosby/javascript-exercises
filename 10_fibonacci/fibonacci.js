const fibonacci = function(num) {
  let numArray = [1];
  let lastNum = 1;
  let secondLastNum = 0;

  if (num < 0) {
    return 'OOPS';
  } else {
    num = parseInt(num);

    for (let i = 1; i < num; i ++) {
      nextNum = lastNum + secondLastNum;
      lastNumHold = lastNum;
      lastNum = nextNum;
      secondLastNum = lastNumHold;
      numArray.push(nextNum);
  }
  return parseInt(numArray[numArray.length - 1]);
}

};

// Do not edit below this line
module.exports = fibonacci;
