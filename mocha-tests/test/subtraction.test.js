const assert = require('assert');

const { subtraction } = require('../../lib/calculations');

it('should substract the second and subsequent elements from the first element of the array', () => {
  assert.equal(subtraction([1, 2, 3]), -4);
});