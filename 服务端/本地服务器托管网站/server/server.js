

const fs = require('fs')
const http = require('http')
const path = require('path')
const port = 3000
const { hostname } = require('os')

const server=http.createServer()

const filePath=__dirname
const aPath=path.resolve(filePath,'../');
server.on('request',(req,res)=>{
  fs.readFile(`${aPath}/Autumn/html/index.html`,(err,data)=>{
    if(err)return
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(data)
  })
  console.log(req.url);
})

server.listen(port,()=>{
  console.log(`服务器在${hostname}:${port}上运行`);
})