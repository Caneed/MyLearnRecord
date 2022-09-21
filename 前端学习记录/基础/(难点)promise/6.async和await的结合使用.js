
// // 读取文resource件夹下的三个文本文件1.txt,2.txt,3.txt
// //普通回调函数实现
// const fs = require('fs')

// fs.readFile('./resource/1.txt', (err, data1) => {
//   if (err) {
//     throw err
//   }
//   fs.readFile('./resource/2.txt', (err, data2) => {
//     if (err) {
//       throw err
//     }
//     fs.readFile('./resource/3.txt', (err, data3) => {
//       if (err) {
//         throw err
//       }
//       console.log(data1 + data2 + data3)//文件1文件2文件3
//     })
//   })
// })


// async和await实现文件读取

const fs = require('fs')
const util = require('util')
const myReadFile = util.promisify(fs.readFile)//将readfile包装成promise风格的形式

async function fn () {

  try {
    let p1 = await myReadFile('./resource/1.txt')
    let p2 = await myReadFile('./resource/2.txt')
    let p3 = await myReadFile('./resource/3.txt')
    console.log(p1 + p2 + p3)
  } catch (e) {
    console.log(e)
  }
}
fn()//文件1文件2文件3
