//https://leetcode.com/problems/single-number-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var ones = 0, twos = 0;
    for(var i = 0; i<nums.length; i++){
        ones = ones ^ nums[i] & ~twos;
        twos = twos ^ nums[i] & ~ones;
    }

    return ones;

};
var nums = [2,3,2,2];
console.log(singleNumber(nums));