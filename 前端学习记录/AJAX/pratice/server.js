const express = require('express')
const app = express()
const fs=require('fs'
)
const port = 3000
app.use('/pratice',express.static((__dirname)))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/name_get',(req,res)=>{
  console.log(req.query);
  fs.readFile(`${__dirname}/login.html`,(err,data)=>{
    const file=data.toString().replace('XXXX',req.query.name)

    fs.writeFile('./login.html',file,(err)=>{
      if(err)return
      console.log('写入成功');
      res.end('ok')
    })
  })
})
// app.get('/login.html',(res,req)=>{
// console.log(req);
//   res.send('ok')
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))