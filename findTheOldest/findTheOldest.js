let findTheOldest = function(pepole) {
    for (let i = 0; i < pepole.length; i++) {
        pepole[i]['age'] = (pepole[i].yearOfDeath || 2021) - pepole[i].yearOfBirth;
    }
    pepole.sort((a, b) => b.age - a.age);
    console.table(pepole);
    return pepole[0];
}

module.exports = findTheOldest

// const people = [
//     {
//       name: 'Carly',
//       yearOfBirth: 2018,
//     },
//     {
//       name: 'Ray',
//       yearOfBirth: 1962,
//       yearOfDeath: 2011
//     },
//     {
//       name: 'Jane',
//       yearOfBirth: 1912,
//       yearOfDeath: 1941
//     },
//   ]