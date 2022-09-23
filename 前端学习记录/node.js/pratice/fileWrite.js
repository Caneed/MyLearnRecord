

const fs = require('fs')

const content = '同步写入'

// fs.writeFile('./files/file.txt',content,err=>{
//   if(err)return

//   console.log('写入成功');
// })

// try {
//   fs.writeFileSync('./files/file.txt',content)
// } catch (e) {
//   console.log(e);
// }

const str='追加内容'

fs.appendFile('./files/file.txt',str,err=>{
  if(err){
    console.log(err);
    return 
  }
  console.log('追加成功');
})