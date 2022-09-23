

const fs = require('fs')

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

fs.readdir('../pratice',(err,data)=>{
  if(err){
    console.log(err);
    return
  }
  console.log(data);
})
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

try {
  fs.readdirSync('../pratice').map(fileName=>console.log(fileName))
} catch (e) {
  console.log(e);
}