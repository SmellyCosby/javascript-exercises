const findTheOldest = function(obj) {
  let birthYear;
  let deathYear;
  let age = [];
  let yearToday = new Date();


  for (i = 0; i < obj.length; i++) {
    if (obj[i].hasOwnProperty('yearOfDeath')) {
    birthYear = obj[i]['yearOfBirth'];
    deathYear = obj[i]['yearOfDeath'];
    personAge = deathYear - birthYear;
    age.push(personAge);
    } else {
      birthYear = obj[i]['yearOfBirth'];
      deathYear = yearToday.getFullYear();
      personAge = deathYear - birthYear;
      age.push(personAge);
    }
  }
  let oldestPerson = age.indexOf(Math.max(...age));
  return obj[oldestPerson];
}

// Do not edit below this line
module.exports = findTheOldest;


