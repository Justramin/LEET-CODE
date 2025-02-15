/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let out = 0

    for(let i=0 ; i<accounts.length ; i++){
        const res = accounts[i].reduce((a,b)=>a+b)
        if(out<res)out=res
    }
    return out
};