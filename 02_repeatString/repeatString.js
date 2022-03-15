const repeatString = function(string, num) {
  if (num === 0) {
    return '';
  } else if (num < 0) {
    return "ERROR";
  }
  let newPhrase = string;
  for (let i = 1; i < num; i++) {
   newPhrase += string;
  }
  return newPhrase;
}

// Do not edit below this line
module.exports = repeatString;
