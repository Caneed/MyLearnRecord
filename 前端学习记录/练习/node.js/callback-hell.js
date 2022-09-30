
const fs = require('fs')


// fs.readFile('./txt/1.txt', (err, data) => {
//   if (err) return
//   fs.readFile(data.toString(), (err, data2) => {
//     if (err) return
//     console.log('data2'+data2);
//     fs.writeFile('./txt/3.txt', data2, (err) => {
//       if (err) return
//       console.log('写入成功');
//     })
//   })
// })

// promise

function myPlan (path) {
  return new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data)=>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}


myPlan('./txt/1.txt').then(res => {
  return myPlan(res)
}, reason => {
  console.log(reason);
}).then(res=>{
  fs.writeFile('./txt/3.txt',res.toString(),err=>{
    if(err)return
    console.log('写入成功');
  })
},reason=>{
  console.log(reason);
})


// // await&async

// async function myPlan2(path){
//   let p=new Promise((resolve,reject)=>{
//     fs.readFile(path,(err,data)=>{
//       if(err)reject(err)
//       resolve(data)
//     })
//   })

//   let f2=await p
//   let res=new Promise((resolve,reject)=>{
//     fs.readFile(f2,(err,data)=>{
//       if(err)reject(err)
//       resolve(data)
//     })
//   })
//   let r2=await res 

//   let res3=new Promise((resolve,reject)=>{
//     fs.writeFile('./txt/3.txt',r2,err=>{
//       if(err)reject(err)
//       resolve('写入成功')
//     })
//   })

//   let r3= await res3
//   console.log(r3);
//   return r3
// }

// myPlan2('./txt/1.txt')