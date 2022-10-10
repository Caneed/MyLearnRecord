const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // // 原生响应end()
  // res.end('Hello World!')

  // // send(),自动设置响应头，可以响应其他类型数据
  // res.send({
  //   name:'hello',
  //   age:30
  // })

  // // json,以json格式响应
  // res.json({
  //   name:'123',
  //   age:30
  // })

  //sendFile()响应文件
  res.sendFile(`${__dirname}/index.html`)

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))