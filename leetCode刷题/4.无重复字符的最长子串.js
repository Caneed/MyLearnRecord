// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 创建一个接收字串的数组
  let arr = []
  // 创建最大子串长度
  let max = 0
  // 遍历字符串
  for (let str of s) {
    while (arr.includes(str)) {
      // 当数组中已经包含有此次循环的字符时(出现重复)
      // 直接去掉一个字符
      arr.shift()
    }
    // 向数组中填入字符串的字符
    arr.push(str)
    // 将此次数组的长度与之前的max相比，哪个大就再赋值给max
    max = Math.max(max, arr.length)
  }
  return max
};

console.log(lengthOfLongestSubstring('abcabcbb'));