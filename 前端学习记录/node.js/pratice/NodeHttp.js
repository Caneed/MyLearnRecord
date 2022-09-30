
const http = require('http')
const url = require('url')
const { hostname } = require('os')
const port = 3000

// const server=http.createServer((req,res)=>{
//   res.statusCode=200
//   res.setHeader('Content-Type','text/plain')
//   res.write('hello\n')
//   res.write('hello\n')
//   res.write('hello\n')
//   res.write('hello\n')
//   res.end()
// })

// server.listen(port,()=>{
//   console.log(`服务器在http://${hostname}:${port}中运行`)
// })



// GET



// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   console.log(url.parse(req.url,true).query);//得到页面传参的参数
//   res.end()
// })


// server.listen(port, () => {
//   console.log(`服务器在${hostname}:${port}中运行`);
// })

// POST


let data=''
const server=http.createServer((req,res)=>{
  console.log(res.url);
  console.log(res.method);
  res.end('ok')
})

server.listen(port,()=>{
  console.log(`服务器在${hostname}:${port}上运行`);
})