
// // 普通导入
// import {a,b} from './module.js'

// console.log(a);
// console.log(b);
// b()


// // 导入第三方
// import http from 'http'
// console.log(http); 


// 模块变量和主页有重名变量时
let a=4
import {a as modA}from './module.js'

console.log(a,modA);

// export default

import c from './module.js'
console.log(c);