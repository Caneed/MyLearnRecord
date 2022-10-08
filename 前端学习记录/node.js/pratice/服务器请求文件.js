const fs = require('fs')
const http = require('http')
const { hostname } = require('os')
const port = 3000


const server = http.createServer((req, res) => {
  const {url}=req
  if(url=='/jpg'){
    fs.readFile('./public/91451279_p0_master1200.jpg', (err, data) => {
      if (err) return
      res.statusCode = 200
      res.setHeader('Content-Type', 'image/jpeg;charset=utf-8')
      res.end(data)
    })
  }else if(url=='/index'){
    fs.readFile('./public/index.html', (err, data) => {
      if (err) return
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  }else if(url=='/txt'){
    // fs.readFile('./public/text.txt', (err, data) => {
    //   if (err) return
    //   res.statusCode = 302
    //   res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    //   res.setHeader('location','/txt2')
    //   res.end(data)
    // })
    // 设置错误码
    res.statusCode=302
    // 重定向地址
    res.setHeader('Location','/txt2')
    res.end()
  }else if(url=='/txt2'){
    fs.readFile('./public/text.txt', (err, data) => {
      if (err) return
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain;charset=utf-8')
      res.end(data)
    })
  }
})

server.listen(port, () => {
  console.log(`服务器在${hostname}:${port}中运行`);
})