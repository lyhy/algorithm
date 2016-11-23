jest.dontMock('../../../src/leetcode/chars/minimum-window-substring.js');

describe('../../../src/leetcode/chars/minimum-window-substring.js', function(){
    it('"ADOBECODEBANC","ABC","BANC"', function(){
        var obj=require('../../../src/leetcode/chars/minimum-window-substring.js');
        expect(obj('ADOBECODEBANC', 'ABC')).toBe('BANC');
    })
})