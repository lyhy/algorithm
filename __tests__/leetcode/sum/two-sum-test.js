jest.dontMock('../../../src/leetcode/sum/two-sum');


describe('two sum', function(){
    var sum = require('../../../src/leetcode/sum/two-sum');
    it('index1=1, index2=2 , target = 9 in {2, 7, 11, 15},', function(){
        expect(sum(9, [2,7,11,15])).toEqual([1,2]);

    });
});
