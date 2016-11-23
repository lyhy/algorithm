//var data = [
//    "(if (zero? x) max (/ 1 x))",
//    "I told him (that it's not (yet) done). (But he wasn't listening)",
//    ":-)",
//    "())(",
//    "((d)o(n)e)",
//    ")("
//];
//
//function isBalanced(chars) {
//
//    var findMatch = (list, isBalanced, total) => {
//
//        var b = !(!isBalanced || total < 0);
//
//        if (!list.length) return b;
//        else if (list[0] == '(') return findMatch(list.slice(1), b, total + 1);
//        else if (list[0] == ')') return findMatch(list.slice(1), b, total - 1);
//        else return findMatch(list.slice(1), b, total);
//
//    }
//
//    return findMatch(chars, true, 0);
//}

/** TEST SUITE **/
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Balanced parentheses", () => {
    it('it', function(){
        const obj = require('../../src/es6/syntax.js');
        expect(obj).to.equal('wjk');
    })


    //var r = [true, true, false, false, true, false];
    //
    //data.forEach((str, i) => {
    //    it("should be " + (r[i] ? "balanced" : "unbalanced"), () => {
    //        var chars = str.split('');
    //        expect(isBalanced(chars)).to.equal(r[i]);
    //    });
    //});

});

//mocha.run(function() {});

