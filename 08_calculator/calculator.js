const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(numArray) {
  let totalSum = 0;
  let arrayNum = 0;
  for (let i = 0; i < numArray.length; i++) {
    arrayNum = numArray.slice(i, i + 1);
    arrayNum = parseInt(arrayNum);
    totalSum += arrayNum;
  }
  return totalSum;
};

const multiply = function(numArray) {
  let finalMulti = 1;
  let arrayNum = 0;
  for (let i = 0; i < numArray.length; i++) {
    arrayNum = numArray.slice(i, i +1);
    arrayNum = parseInt(arrayNum);
    finalMulti *= arrayNum;
  }
  return finalMulti;
};

const power = function(num1, num2) {
  return num1 ** num2;
	
};

const factorial = function(num) {
  let factNum = 1;
  for (let i = 1; i <= num; i++) {
    factNum *= i;
  }
  return factNum;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


function print_my_arguments(/**/){
  var args = arguments;
  for(var i=0; i<args.length; i++){
      console.log(args[i]);
  }
};