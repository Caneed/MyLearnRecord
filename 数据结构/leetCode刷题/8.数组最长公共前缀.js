// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
// 提示：
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
// 标签：链表
// 当字符串数组长度为 0 时则公共前缀为空，直接返回；
// 令最长公共前缀 ans 的值为第一个字符串，进行初始化；
// 遍历后面的字符串，依次将其与 ans 进行比较，两两找出公共前缀，最终结果即为最长公共前缀；
// 如果查找过程中出现了 ans 为空的情况，则公共前缀不存在直接返回；
// 时间复杂度：O(s)O(s)，s 为所有字符串的长度之和。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return "";
    //首先定义公共部分为数组第一个元素
    let pub = strs[0];
    //循环遍历strs数组(跳过第一个成员)
    for (let i = 1; i < strs.length; i++) {
        //遍历第一个成员，如果第一个成员长度小于本次成员长度则遍历本次成员长度
        let j = 0;
        for (; j < pub.length && j < strs[i].length; j++) {
            //如果不相等(找到本次与该成员的公共部分)就直接退出本次循环
            if (pub[j] !== strs[i][j]) break;
        }
        pub = pub.substring(0, j);
        if (pub === "") return pub;
    }
    return pub;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))