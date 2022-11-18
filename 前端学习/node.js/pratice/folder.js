

// const fs = require('fs')

// // 检查文件夹是否存在或者是否有访问权限

// fs.access('./files',err=>{
//   if(err){
//     console.log('不存在/无读取权限');
//     return
//   }
//   console.log('读取成功');
// })

// fs.access('./file',err=>{
//   if(err){
//     console.log('不存在/无读取权限');
//     return
//   }
//   console.log('读取成功');
// })

// 创建文件夹

// fs.mkdir('./mkFolder',err=>{
//   if(err){
//     console.log('创建失败');
//     return
//   }
//   console.log('创建成功');
// })

// try {
//   fs.mkdirSync('./mkFolderSync')
// } catch (e) {
//   console.log(e);
// }


// 读取文件夹内容

// fs.readdir('../pratice',(err,data)=>{
//   if(err){
//     console.log(err);
//     return
//   }
//   console.log(data);
// })
//[
//   'consleLog.js',   'EventEmitter.js',
//   'eventLoop.html', 'express.js',
//   'filePath.js',    'fileRead.js',
//   'files',          'fileWrite.js',
//   'folder.js',      'hello.js',
//   'mkFolder',       'mkFolderSync',
//   'NodeHttp.js',    'package-lock.json',
//   'server.js'
// ]

// try {
//   fs.readdirSync('../pratice').map(fileName=>console.log(fileName))
// } catch (e) {
//   console.log(e);
// }

// // 重命名文件夹
// fs.rename('/Users/joe', '/Users/roger', err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //完成
// })

// try {
//   fs.renameSync('/Users/joe', '/Users/roger')
// } catch (err) {
//   console.error(err)
// }


// 删除文件夹
const fs = require('fs-extra')

// fs.remove('./files/file.txt',err=>{
//   if(err)return
//   console.log('删除成功')
// })

// promise
fs.remove('./files/file.txt').then((res)=>{
  console.log('删除成功'+res);
},(err)=>{
  console.log('失败'+err);
})

// await和async
async function removeFolder(folder) {
  try {
    await fs.remove(folder)
    //完成
  } catch (err) {
    console.error(err)
  }
}

const folder = '/Users/joe'
removeFolder(folder)