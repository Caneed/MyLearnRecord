
/**
 * @description 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
 * 也就是：F(0) = 0，F(1) = 1 F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 给定 n ，请计算 F(n) 。
 */

/**
 * @param n 第几个
 * @returns 返回的斐波那契
 * @description 递归实现
 */
function Fib(n: number): number {
    if (n === 0) return 0
    if (n === 1) return 1
    return Fib(n - 1) + Fib(n - 2)
}
/**
 * @param n 第几个
 * @returns 返回的斐波那契
 * @description 循环实现
 */
function FibLoop(n: number): number {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}
console.log(Fib(3))
console.log(Fib(4))
console.log(Fib(5))
console.log(Fib(6))
