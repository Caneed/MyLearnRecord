/**
 * @description
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

/**
 * @example
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 */

/**
 * @description
 * 每次可以爬一阶或者两阶楼梯
 * 所以在爬三阶时有两种：先爬一阶，然后爬两阶；
 * 四阶楼梯也是一样，先爬三阶，再爬一阶，先爬两阶，再爬两阶；
 * 爬n阶可以的爬法有dp[n]种，则dp[n]=dp[n-1]+dp[n-2]
 */

/**
 * @param n 楼梯数
 * @return 爬的方法数
 */
function climbStairs(n: number): number {
    let dpArr: number[] = []
    dpArr[0] = 0
    dpArr[1] = 1
    dpArr[2] = 2
    for (let i = 3; i <= n; i++) {
        dpArr[i] = dpArr[i - 1] + dpArr[i - 2]
    }
    return dpArr[n]
}

console.log(climbStairs(25));
