const { sum } = require('../../lib/calculations');

test('should sum all the elements of the array', () => {
  expect(sum([1, 2, 3])).toBe(6);
});