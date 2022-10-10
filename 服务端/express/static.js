const express = require('express')
const fileUpload = require('express-fileupload')
const fs=require('fs')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/public', express.static(`${__dirname}/public`))
const port = 3000

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.files.pic.data);

  fs.writeFile('./public/Pic.jpg',req.files.pic.data,(err)=>{
    if(err)return
    console.log('写入成功');
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})