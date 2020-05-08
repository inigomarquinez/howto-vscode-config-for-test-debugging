const assert = require('assert');

const { sum } = require('../../lib/calculations');

it('should sum all the elements of the array', () => {
  assert.equal(sum([1, 2, 3]), 6);
});
