/*
 Link:
 https://leetcode.com/problems/two-sum/

 Description:
 Given an array of integers, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 You may assume that each input would have exactly one solution.

 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2

 Hints:
 We can use a hash map to map the number to its index.
 When we traverse the nums list:
 If target - nums[i] in the hash table, return (index1, index2).
 If not, append (nums[i], index) to the hash table
* */

function sum2(target, intArray){
    var size = intArray.length;
    var checkupMap = {};
    var searchSubValue;
    var resultA=[], founded=false;

    if(size<=1)return[];
    //create a map, key is array item, value is array index
    intArray.forEach(function(item, index){
        checkupMap[item] = index+1;
    });

    intArray.forEach(function(item, index){
        searchSubValue = target - item;
        if(checkupMap[searchSubValue]>0 && !founded && index!==checkupMap[searchSubValue]-1){
            resultA.push((index+1));
            resultA.push(checkupMap[searchSubValue]);
            founded = true;
        }
    });

    return resultA;
}

module.exports = sum2;

/** TEST SUITE **/
var arr = [3,2,4];
var target = 6;
var expectedResult = [2,3];
//'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        expect(sum2(6, arr)).to.deep.equal(expectedResult);
    })



});

//sum2(6, arr);