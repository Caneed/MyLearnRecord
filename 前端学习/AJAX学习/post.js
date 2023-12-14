const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded())

app.use('/public', express.static(`${__dirname}`))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/xhr_get', (req, res) => {res.send('AJAX get')})
app.post('/xhr_post', (req, res) => {res.send('AJAX post')})
app.get('/axios_get', (req, res) => {res.send('axios get')})
app.post('/axios_post', (req, res) => {res.send('axios post')})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))