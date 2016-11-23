jest.dontMock('../src/sum');
describe('sum', function(){
    it('add',function(){
       var sum = require('../src/sum');
        expect(sum(1, 2)).toBe(3);
    });
})