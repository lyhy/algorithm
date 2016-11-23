jest.dontMock('../../src/smallquestions/flat-array.js');

describe('flat-array', function(){
    it("var a = [1,'', 'a',[undefined,['pd',[]]],null];", function(){
       var obj = require('../../src/smallquestions/flat-array.js');
        var a = [1,'', 'a',[undefined,['pd',[]]],null];
        expect(obj(a)).toEqual([1,'','a',undefined,'pd',null]);
    });
});