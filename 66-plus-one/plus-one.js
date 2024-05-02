/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
//     let digit = digits.join('')
//     digit =digit-1+2
   
//     let dig = digit+''

//  console.log(dig)
//     return dig.split('')
    
     let number = BigInt(digits.join(''));
    number = number + BigInt(1);
    let newDigits = number.toString().split('').map(Number);
    return newDigits


};