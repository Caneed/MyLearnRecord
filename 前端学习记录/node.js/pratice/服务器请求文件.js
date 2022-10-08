const fs = require('fs')
const http = require('http')
const url = require('url')
const { hostname } = require('os')
const port = 3000


const serer = http.createServer((req, res) => {
  if(url==='/jpg'){
    fs.readFile('./public/91451279_p0_master1200.jpg', (err, data) => {
      if (err) return
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain;charset=utf-8')
      res.end(url+data)
    })
  }else if(url==='/index'){
    fs.readFile('./public/index.html', (err, data) => {
      if (err) return
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(url+data)
    })
  }else if(url==='/txt'){
    fs.readFile('./public/text.txt', (err, data) => {
      if (err) return
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain;charset=utf-8')
      res.end(url+data)
    })
  }
})

serer.listen(port, () => {
  console.log(`服务器在${hostname}:${port}中运行`);
})