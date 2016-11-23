jest.dontMock('../../src/smallquestions/factorial');

describe('factorial testing', function(){
    it('f(3)=6', function(){
       var fac = require('../../src/smallquestions/factorial');
        expect(fac(3)).toBe(6);
    });
});