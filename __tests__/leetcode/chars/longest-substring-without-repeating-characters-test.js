jest.dontMock('../../../src/leetcode/chars/longest-substring-without-repeating-characters.js');

describe('longest-substring-without-repeating-characters', function(){
    it('"abcabcbb" is "abc",', function(){
        var obj = require('../../../src/leetcode/chars/longest-substring-without-repeating-characters.js');
        expect(obj('abcabcbb')).toBe(3);

    });
});