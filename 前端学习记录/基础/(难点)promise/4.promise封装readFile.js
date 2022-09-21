

// //promise对于读取文件的封装
// function myReadFile(path){
//   return new Promise((resolve,reject)=>{
//     require('fs').readFile(path,(err,data)=>{
//       if(err){
//         reject(err)
//       }
//       resolve(data)
//     })
//   })
// }

// myReadFile('./file.txt')
// .then((value)=>{
//   console.log(value.toString())
// }
// ,(reason)=>{
//   console.log(reason)
// })

//node.js自带的方法util.promisify
const fs = require('fs')
const util = require('util')

//在promisify中传入的回调形式的函数会被转化为一个promise形式的新函数
//用一个函数名去接收，此函数就可以使用promise形式调用了
let myReadFile = util.promisify(fs.readFile)

myReadFile('./file.txt').then(value => { console.log(value) }, reason => { console.log(reason) })
