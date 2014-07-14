var helper = require('./support/helper');

describe('helper', function () {
    it('should return the value passed', function () {
        expect(helper('hello')).toBe('hello');
    });

    it('should return the value passed', function () {
        expect(helper(3)).toBe(3);
    });
});
