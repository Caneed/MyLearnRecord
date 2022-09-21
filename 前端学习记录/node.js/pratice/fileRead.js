 const fs=require('fs')

 fs.open('./hello.txt' ,'r',(err,data)=>{
  if (err) return console.error(err);
  console.log(data.toString());
 })

 try {
  fs.openSync('./file.txt' ,'r')  
 } catch (e) {
  console.error(e)  
 }
