
const http=require('http')
const { hostname } = require('os')
const port=3000

const server=http.createServer((req,res)=>{
  res.statusCode=200
  res.setHeader('Content-Type','text/plain')
  res.end('hello,world\n')
})

server.listen(port,()=>{
  console.log(`服务器在http://${hostname}:${port}中运行`)
})