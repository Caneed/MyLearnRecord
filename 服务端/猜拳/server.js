
const fs=require('fs')

const http=require('http')
const port=3000
const {hostname}=require('os')


const server=http.createServer()

server.on('request',(req,res)=>{
  fs.readFile('./index.html',(err,data)=>{
    if(err)return
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(data)
  })

  console.log(req.url);
  if(req.url.includes('.js')){
    console.log('js');
    fs.readFile(req.url,(err,data)=>{
      if(err)return
      res.setHeader('Content-Type','text/js;charset=utf-8')
    })
  }
})

server.listen(port,()=>{
  console.log(`服务器在${hostname}:${port}上运行`);
})