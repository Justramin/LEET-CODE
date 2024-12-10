/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let stringfy = x.toString();
  let arr = stringfy.split("");
  let reversed = "";
  const len = arr.length;
  let v = arr.length - 1;

  for (let i = 0; i < len; i++, v--) {
    reversed += arr[v];
  }

  if (stringfy === reversed) {
    return true;
  }
  return false;
};