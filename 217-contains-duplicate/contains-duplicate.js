/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums)
    const res = Array.from(set)
    if(nums.length=== res.length){
        return false
    }else{
        return true
    }
    return false
};