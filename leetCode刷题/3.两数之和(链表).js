// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
/**
 * @param {number[]} l1
 * @param {number[]} l2
 * @return {number}
 */

let l1=[2,4,3]
let l2=[5,6,4]
var twoSum = function(l1, l2) {
  let str1=''
  let str2=''
  l1.reverse().forEach(item=>{
    str1+=item
  })
  l2.reverse().forEach(item=>{
    str2+=item
  })
  let arr=[];
  (Number(str1)+Number(str2)).toString().split('').forEach(item=>{
    arr.unshift(Number(item))
  })
  return arr
};

console.log(twoSum(l1,l2))
