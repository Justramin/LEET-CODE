/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count =0;
    for(let i=0 ; i<nums.length ; i++){
        j=i+1
        while(nums.slice(j,nums.length).includes(nums[i])){
            count+=1
            j=j+nums.slice(j,nums.length).indexOf(nums[i])+1
        }
    }
    return count
};