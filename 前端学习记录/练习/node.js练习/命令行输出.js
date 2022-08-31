
// //普通输出
// console.log('hello')//hello

// //传入参数输出
// let x=1
// let y=2
// console.log(x+y)//3

// //说明符格式化输出结果
// console.log('你好我的名字是%s,今年%d岁了','捏麻麻',12)
// //你好我的名字是捏麻麻，今年12岁了

// console.log('%o',Number)
// //Object Number[...]

// console.clear()

// //元素计数

// const x=1
// const y=2
// const z=3
// console.count('x值为'+x+'而且已经计数了几次？')
// console.count('x值为'+x+'而且已经计数了几次？')
// console.count('x值为'+x+'而且已经计数了几次？')
// console.count('x值为'+x+'而且已经计数了几次？')
// // x值为1而且已经计数了几次？: 1
// // x值为1而且已经计数了几次？: 2
// // x值为1而且已经计数了几次？: 3
// // x值为1而且已经计数了几次？: 4

// //打印栈堆踪迹
// const fun2=() => { console.trace() }
// const fun1=()=>{fun2()}
// fun1()
// // at fun2 (d:\VsCodeWorkSpace\LearningRecord\前端学习记录\练习\node.js练习\命令行输出.js:33:28)
// // at fun1 (d:\VsCodeWorkSpace\LearningRecord\前端学习记录\练习\node.js练习\命令行输出.js:34:17)
// // at Object.<anonymous> (d:\VsCodeWorkSpace\LearningRecord\前端学习记录\练习\node.js练习\命令行输出.js:35:1)
// // at Module._compile (node:internal/modules/cjs/loader:1105:14)
// // at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
// // at Module.load (node:internal/modules/cjs/loader:981:32)
// // at Function.Module._load (node:internal/modules/cjs/loader:822:12)
// // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
// // at node:internal/main/run_main_module:17:47

// //计算耗时

// const doSth = () => console.log('hello')
// const measure=()=>{
//   console.time('measure')//计算时间

//   doSth()//hello
//   console.timeEnd('measure')//计算时间 2.83ms
// }
// measure()

//输出着色
// console.log('\x1b[33m%s\x1b[0m', '你好')
//使用chalk着色
import {chalk} from 'chalk'

console.log(chalk.yellow('你好'))