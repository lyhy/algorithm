jest.dontMock('../../../src/leetcode/chars/edit-distance.js');

describe('../../../src/leetcode/chars/edit-distance.js', function(){
    it('abcd => abc,1', function(){
        var obj = require('../../../src/leetcode/chars/edit-distance.js');
        expect(obj('abcd', 'abc')).toBe(1);
    });
});