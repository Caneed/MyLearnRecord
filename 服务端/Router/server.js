const express = require('express')
const app = express()
const port = 3000
const router=require('./userRouter')

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/user',router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
