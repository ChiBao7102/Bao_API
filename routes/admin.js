const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')

router.get('/', async (req, res) => {
  const admins = await Admin.find()
  res.json(admins)
})

module.exports = router
  
