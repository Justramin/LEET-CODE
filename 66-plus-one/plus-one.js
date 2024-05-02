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
    
     let num = digits.join("")
    num = BigInt(num) + BigInt(1)
    console.log(num)
    num = num.toString().split("")
    
    return num


};