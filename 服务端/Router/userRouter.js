router.get('/add', (req, res, next) => {
  console.log('I dont come here')
  res.send('add')
})
router.get('/delete', (req, res, next) => {
  console.log('I dont come here')
  res.send('delete')
})
app.get('/update', (req, res) => {
  console.log(' I come here too')
  res.send('update')
})