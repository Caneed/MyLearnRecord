const express = require('express')
const app = express()
const port = 3000

function mid (req, res, next) {
  console.log('自定义中间件');
  // 表示调用中间件后向后继续响应
  next()
}
app.use(mid)
app.use((req,res,next)=>{console.log('自定义中间件2'); next()})
app.get('/', (req, res) => {
  // 自动调用处理的中间件
  res.send('Hello World!')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))