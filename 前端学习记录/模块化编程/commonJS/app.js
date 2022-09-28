
const uniq = require('uniq')
const module1 = require('./module1');
const module2 = require('./module2');
const module3 = require('./module3')

module1.foo()//调用module1模块的foo方法
module2()//调用module2的方式
module3.foo()
module3.bar()
// module1暴露的接口module1
// module2暴露的函数
// module3暴露foo
// module3暴露bar 


// 第三方库使用

let res=uniq(module3.arr)
console.log(res);
// [
//   1, 2,  3, 4,
//  42, 5, 67
// ]