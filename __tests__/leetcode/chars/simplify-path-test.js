jest.dontMock('../../../src/leetcode/chars/simplify-path.js');

describe('../../../src/leetcode/chars/simplify-path.js', function(){
    it('/a/b/../  => /a', function(){
        var obj = require('../../../src/leetcode/chars/simplify-path.js');

        expect(obj('/a/b/../')).toBe('/a');
    });
})