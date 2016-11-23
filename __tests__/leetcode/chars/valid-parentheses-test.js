jest.dontMock('../../../src/leetcode/chars/valid-parentheses.js');

describe('valid-parentheses-test.js', function(){
    var obj = require('../../../src/leetcode/chars/valid-parentheses.js');
    it('valid ()[]{}', function(){
        expect(obj('()[]{}')).toBeTruthy();
    });
});