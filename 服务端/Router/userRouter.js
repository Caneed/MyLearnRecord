const express = require('express')
const router=express.Router()


router.get('/add', (req, res, next) => {
  res.send('add')
})
router.get('/delete', (req, res, next) => {
  res.send('delete')
})
router.get('/update', (req, res) => {
  res.send('update')
})

module.exports=router