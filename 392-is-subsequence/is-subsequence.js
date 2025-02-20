/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
 let out = 0;
for (let char of t) {
    if (s[out] === char) out++;
    if (out === s.length) break;
}   
    return out === s.length
};