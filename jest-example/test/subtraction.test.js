const subtraction = require('../../lib/subtraction');

test('should sum', () => {
  expect(subtraction([1, 2, 3])).toBe(-4);
});