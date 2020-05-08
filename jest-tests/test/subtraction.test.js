const { subtraction } = require('../../lib/calculations');

test('should substract the second and subsequent elements from the first element of the array', () => {
  expect(subtraction([1, 2, 3])).toBe(-4);
});