jest.dontMock('../../../src/leetcode/chars/strStr.js');

describe('strStr.js', function(){
    it('"abc", "asdfabcdfeae", 4', function(){
        var obj = require('../../../src/leetcode/chars/strStr.js');
        expect(obj('asdfabcdfeae', 'abcc')).toBe(-1);
    });
});