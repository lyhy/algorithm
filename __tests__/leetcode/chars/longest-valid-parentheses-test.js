jest.dontMock('../../../src/leetcode/chars/longest-valid-parentheses.js');

describe('../../../src/leetcode/chars/longest-valid-parentheses.js',function(){
   it(')()()), 4', function(){
       var obj=require('../../../src/leetcode/chars/longest-valid-parentheses.js');
       expect(obj(')()())')).toBe(4);
   })
});