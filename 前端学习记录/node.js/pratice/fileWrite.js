

const fs=require('fs')

const content='写入'

fs.writeFile('./files/file.txt',content,err=>{
  if(err)return

  console.log('写入成功');
})