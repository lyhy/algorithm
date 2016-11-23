jest.dontMock('../../../src/leetcode/chars/multiple-strings.js');

describe('../../../src/leetcode/chars/multiple-strings.js', function(){
    it('123X456=56088', function(){
        var obj = require('../../../src/leetcode/chars/multiple-strings.js');
        expect(obj('123', '456')).toBe('56088');
    });
});