const cookie = require('cookie-parser')

const express = require('express')
const app = express()
const port = 3000
app.use(cookie())

app.get('/', (req, res) => {
  if (JSON.stringify(req.cookies) == '{}') {
    res.cookie('name',req.query.name,{maxAge:1000000})
     res.send('第一次访问') 
     console.log(req.query);
    }else{
      res.send(`${req.cookies.name}`)
    }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))