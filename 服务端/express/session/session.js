const express = require('express')
const app = express()
const session = require('express-session')
const port = 3000
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{maxAge:1000000}
}))

app.get('/', (req, res) => {
  if (!req.session.count) { req.session.count = 1 }else{
    req.session.count++
  }
  console.log(req.session);
  res.send('Hello World!')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))