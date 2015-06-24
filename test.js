var add = require('./'),
    assert = require('assert');

describe('#add', function() {
  it('should add numbers', function() {
    assert.equal(5, add(2, 3));
  });

  it('should add numbers', function() {
    assert.equal(7, add(4, 3));
  });
});