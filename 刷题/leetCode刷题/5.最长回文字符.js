// 给你一个字符串 s，找到 s 中最长的回文子串。
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let str = '';
    // 进入循环,定义头指针和尾指针都为0
    for(let i = 0,start = 0, end = 0; i<s.length; i++) {
        // 让头指针和尾指针都为当前的循环i
        start = i;
        end = i;
        // 当尾指针越界或者头尾指向值都相等时，头指针--
        while(end + 1 < s.length && s[end + 1] === s[i]) {
            end +=1;
        }
        // 当头尾都不越界并头尾指向值相等时，向外扩
        while(start - 1 >=0 && end + 1 < s.length && s[end + 1] === s[start - 1]) {
            end +=1;
            start -=1;
        }
        if (end > start && str.length < end - start + 1) {
            str = s.slice(start, end + 1);
        }
    }
    return str ? str : s[0];
}