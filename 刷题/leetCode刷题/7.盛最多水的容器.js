// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
//
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
//
// 返回容器可以储存的最大水量。
//
// 说明：你不能倾斜容器。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 双指针法
    // i指向容器头，j指向尾部
    let i = 0, j = height.length - 1
    let max = 0
    while (i !== j) {
        // 定义最小高度
        let minHeight = Math.min(height[i], height[j])
        // 最大面积等于上一次循环的max和此次的面积较大值
        max = Math.max(max, (j - i) * minHeight)
        // 最后判断两边，较小的那一边就收缩
        minHeight === height[i] ? i++ : j--
    }
    return max
};