const myFunction = require('../myFunction');

test('should return the input message', () => {
  expect(myFunction('hello')).toBe('hello');
});