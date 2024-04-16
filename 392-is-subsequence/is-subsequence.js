/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
 let out = 0;
    
    for(let i=0; i<t.length; i++) {
        if(s[out] === t[i]) {
            out++;
        }
        
        if(out === s.length) {
            break;
        }
    }
    
    return out === s.length
};