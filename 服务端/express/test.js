

const express=require('express')

const app=express()

app.get('/',(req,res)=>{
  res.end('hello')
})

app.post('/index',(req,res)=>{
  res.end('post')
})

app.listen(3000,()=>{
  console.log('server is on 3000');
})