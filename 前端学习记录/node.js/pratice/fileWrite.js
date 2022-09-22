

const fs=require('fs')

const content='写入'

fs.writeFile('./files/file.txt',content,(err,data)=>{
  if(err)return
  console.log(data);
  console.log('写入成功');
})