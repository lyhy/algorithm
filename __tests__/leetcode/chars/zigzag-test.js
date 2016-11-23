jest.dontMock('../../../src/leetcode/chars/zigzag');

describe('zigzag', function(){
    it('convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR"', function(){
        var obj = require('../../../src/leetcode/chars/zigzag');
        expect(obj('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    });
});