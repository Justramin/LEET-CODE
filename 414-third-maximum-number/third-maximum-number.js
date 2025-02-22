/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const ans = [...new Set([...nums])]
    ans.sort((a,b)=>b-a)
    if(ans.length<3){
        return ans[0]
    }
    return ans[2]
};