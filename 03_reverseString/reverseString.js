const reverseString = function(string) {
  let myArray = string.split('');
  let lastLetter;
  let reverseWord = '';

  for (let i = myArray.length - 1; i >= 0; i--) {
    lastLetter = myArray.slice(i, i + 1);
    reverseWord += lastLetter;
  }
  return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
