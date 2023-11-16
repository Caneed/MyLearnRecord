/**
 * @description
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 * 请你计算并返回达到楼梯顶部的最低花费。
 */

/**
 * @example
 * 输入：cost = [10,15,20]
 * 输出：15
 * 解释：你将从下标为 1 的台阶开始。
 * - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
 * 总花费为 15 。
 */

/**
 * @function
 * @param cost 数组
 * @returns 花费数
 * @description 将阶梯分为无数的1-2阶楼梯，找到较小的那个
 */

function minCostClimbingStairs(cost: number[]): number {
    let l = cost.length
    if (l == 2) return Math.min(cost[0], cost[1])
    
}
// function minCostClimbingStairs(cost: number[]): number {
//     // 记录长度
//     let l = cost.length
//     // 如果两阶，返回较小的一阶
//     if (l === 2) return Math.min(cost[0], cost[1])
//     for (let i = 2; i < l; i++) {
//       cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2])
//     }
//     return Math.min(cost[l - 1], cost[l - 2])
// };