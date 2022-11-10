
// 比如输出'hello world',或者'fly to moon     '
let str='hello world'

// 将它首尾去空格，然后根据空格分隔，存到数组中
let arr=str.trim().split(' ')

// 返回数组最后一个元素的长度
console.log(arr[arr.length-1].length);