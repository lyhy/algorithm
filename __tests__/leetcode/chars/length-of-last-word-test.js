jest.dontMock('../../../src/leetcode/chars/length-of-last-word.js');

describe('../../../src/leetcode/chars/length-of-last-word.js', function(){
    it('Hello world, 5', function(){
        var obj = require('../../../src/leetcode/chars/length-of-last-word.js');
        expect(obj('hello world')).toBe(5);
    });
});

