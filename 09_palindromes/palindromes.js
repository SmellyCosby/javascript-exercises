const palindromes = function (string) {
    let reverseArray = string.split('');
    let lastLetter;
    let reverseWord = '';

    for (i =reverseArray.length - 1; i >= 0; i--) {
        lastLetter = reverseArray.slice(i, i + 1);
        reverseWord += lastLetter;
    }
    let reverseWordNoPunctuation = reverseWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"", '');
    let reverseWordNoSpace = reverseWordNoPunctuation.replace(/\s/g, '');
    let stringNoPunc = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"", '');
    let stringNoSpace = stringNoPunc.replace(/\s/g, '');
    stringNoSpace = stringNoSpace.toLowerCase();
    reverseWordNoSpace = reverseWordNoSpace.toLowerCase();
   if (reverseWordNoSpace === stringNoSpace) {
       return true;
   } else {
       return false;
   }
}


// Do not edit below this line
module.exports = palindromes;