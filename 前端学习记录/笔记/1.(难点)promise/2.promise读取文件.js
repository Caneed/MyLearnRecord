

const { rejects } = require('assert')
const fs=require('fs')
const { resolve } = require('path')
// 普通的读取文件
fs.readFile('./file.txt',(err,data)=>{
  if(err){
    throw err
  }else {
    console.log(data.toString())
  }
})
// promise进行异步的封装
const p=new Promise((resolve,reject)=>{
  fs.readFile('./file.txt',(err,data)=>{
    if(err){
      reject(err)
    }
    if(data){
      resolve(data)
    }
  })
})
p.then((value)=>{
  console.log(value.toString())
},(reason)=>{
  throw reason
})