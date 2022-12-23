// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  

// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 本质上可以是数组的排序，暴力破解
/**
 * @param {number[]} numbers
 * @return {number}
 */
// var minArray = function(numbers) {
//   numbers.sort((a,b)=>a-b)
//   return numbers[0]
// };

// // 或者可以使用二分法
// 首先，创建两个指针 left, right 分别指向 numbers 首尾数字，然后计算出两指针之间的中间索引值 middle，然后我们会遇到以下三种情况：

// middle > right ：代表最小值一定在 middle 右侧，所以 left 移到 middle + 1 的位置。
// middle < right ：代表最小值一定在 middle 左侧或者就是 middle，所以 right 移到 middle 的位置。
// middle 既不大于 left 指针的值，也不小于 right 指针的值，代表着 middle 可能等于 left 指针的值，或者 right 指针的值，我们这时候只能让 right 指针递减，来一个一个找最小值了。

var minArray = function (numbers) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (numbers[middle] > numbers[right]) left = middle + 1;
    else if (numbers[middle] < numbers[right]) right = middle;
    else right--;
  }
  return numbers[left];
};
