// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

//  输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  let arr=(num+'').split('')
  let comb=[]
    for(let space=0;space<=Math.floor(arr.length/2);space++){
      comb.push(space)
    }

  return comb
};

console.log(translateNum(122586));