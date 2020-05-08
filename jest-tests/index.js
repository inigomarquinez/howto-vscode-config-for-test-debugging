const { sum, subtraction } = require('../lib/calculations');

console.log('Welcome! Let\'s do some calculations');

console.log('1 + 2 + 3 =', sum([1, 2, 3]));
console.log('1 - 2 - 3 =', subtraction([1, 2, 3]));
