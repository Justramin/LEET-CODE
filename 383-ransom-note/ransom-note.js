/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineCount ={}
    for(let i=0 ; i<magazine.length ; i++){
        let char = magazine[i]
        magazineCount[char] = (magazineCount[char] || 0) + 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if (!magazineCount[char]) return false;
        magazineCount[char]--;
    }

    return true
   
};