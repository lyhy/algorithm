jest.dontMock('../../../src/leetcode/sum/three-closest-sum');

describe('three closest sum', function(){
   it('2 for S = {-1 2 1 -4}, and target = 1', function(){
      var sum = require('../../../src/leetcode/sum/three-closest-sum');
       expect(sum(1, [-1, 2, 1, -4])).toBe(-1);
   });
});