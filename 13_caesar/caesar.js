const caesar = function(phrase, shiftNum) {
  let encryptedPhrase = '';
  let phraseLetter;
  let alphaLow = 'abcdefghijklmnopqrstuvwyxz';
  let alphaUp = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ';
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  for  (i = 0; i < phrase.length; i++) {
    phraseLetter = phrase.substring(i, i + 1);
    if (!!phraseLetter.match(regex) == true || !!phraseLetter.match(' ') == true) {
      encryptedPhrase += phraseLetter;
    } else if (phraseLetter.toUpperCase() === phraseLetter) {
      shiftedLetterPosition = alphaUp.indexOf(phraseLetter) + shiftNum;
      if (shiftedLetterPosition > 25) {
        shiftedLetterPosition = shiftedLetterPosition - 26;
      }
      if (shiftedLetterPosition < 0) {
        shiftedLetterPosition = shiftedLetterPosition + 26;
       }           
      shiftedLetter = alphaUp.substring(shiftedLetterPosition, shiftedLetterPosition + 1);
      encryptedPhrase += shiftedLetter;
    } else {
        shiftedLetterPosition = alphaLow.indexOf(phraseLetter) + shiftNum;
        if (shiftedLetterPosition > 25) {
          shiftedLetterPosition = shiftedLetterPosition - 26;
        }
        if (shiftedLetterPosition < 0) {
          shiftedLetterPosition = shiftedLetterPosition + 26;
         } 
        shiftedLetter = alphaLow.substring(shiftedLetterPosition, shiftedLetterPosition + 1);
        encryptedPhrase += shiftedLetter;
    }
  }
  return encryptedPhrase;


};

// Do not edit below this line
module.exports = caesar;
