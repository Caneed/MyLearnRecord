/**
 * @description
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 * 然后返回 nums 中唯一元素的个数。
 * 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。
 * nums 的其余与 nums 的大小不重要。
 * 返回 k 。
 */

/**
 * @example
 * int[] nums = [...]; // 输入数组
 * int[] expectedNums = [...]; // 长度正确的期望答案
 * int k = removeDuplicates(nums); // 调用
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 * assert nums[i] == expectedNums[i];
 * }
 */

/**
 * @example
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。
 * 不需要考虑数组中超出新长度后面的元素。
 */

function removeDuplicates(nums: number[]): number {
    let res: number[] = []
    for (let i = 0; i < nums.length;) {
        if (!res.includes(nums[i])) {
            res.push(nums[i])
            i++
        } else {
            nums.splice(i, 1)
        }
    }
    return nums.length
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let expectedNums = [1, 2, 3, 4]; // 长度正确的期望答案

let k = removeDuplicates(nums); // 调用
console.log(nums);
console.log(k);
