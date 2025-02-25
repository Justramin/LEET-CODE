/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
let a = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let b = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
let c = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let out = []
    
    for(let i=0;i<words.length;i++){
        let flag=true;
        let wor 
        let word=words[i].toLowerCase()
        if(a.includes(word[0])){
            wor = a
        }else if(b.includes(word[0])){
            wor =b
        }else{
            wor = c
        }
        for(let j=0;j<word.length ; j++){
            if(!wor.includes(word[j])){
                flag = false
                break;
            }
        }
        if(flag)out.push(words[i])
    }
    return out
};