/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let stringfy = x.toString();
  let arr = stringfy.split("");
let reversed = arr.reverse().join('')
  if (stringfy === reversed) {
    return true;
  }
  return false;
};