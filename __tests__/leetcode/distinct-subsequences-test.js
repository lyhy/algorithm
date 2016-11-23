jest.dontMock('../../src/leetcode/distinct-subsequences');

describe('ds test', function(){
    it('rabbit 3 in rabbbit', function(){
        var ds = require('../../src/leetcode/distinct-subsequences');
        expect(ds('rabbit', 'rabbbit')).toBe(3);
    });
});