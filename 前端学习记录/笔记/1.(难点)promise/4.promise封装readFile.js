

//promise对于读取文件的封装
function myReadFile(path){
  return new Promise((resolve,reject)=>{
    require('fs').readFile(path,(err,data)=>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}

myReadFile('./file.txt')
.then((value)=>{
  console.log(value.toString())
}
,(reason)=>{
  console.log(reason)
})