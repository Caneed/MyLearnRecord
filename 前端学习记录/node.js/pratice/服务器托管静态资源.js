
const fs = require('fs')
const http = require('http')
const path = require('path')
const port = 3000
const { hostname } = require('os')


const server = http.createServer()

// 封装readFile
// function myReadFile (url,res) {
//   fs.readFile(url,(err,data)=>{

//   })
// }
console.log(__dirname);
server.on('request', (req, res) => {
  if (req.url.includes('public')) {
    // 请求静态资源
    fs.readFile(`${__dirname}${req.url}`, (err, data) => {
      if (err) return
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else {
    // 请求API
    res.end('error')
  }
})

server.listen(port, () => {
  console.log(`服务器在${hostname}:${port}上运行`);
})