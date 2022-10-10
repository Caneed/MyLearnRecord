const express = require('express')
const fileUpload = require('express-fileupload')
const fs=require('fs')
const app = express()
const util=require('util')

let myReadFile=util.promisify(fs.readFile)
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/public', express.static(`${__dirname}/public`))
const port = 3000

app.post('/', (req, res) => {
  fs.writeFile('./public/Pic.jpg',req.files.pic.data,(err)=>{
    if(err)return
    console.log('写入成功');
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})