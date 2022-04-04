const express = require('express')
const router = express.Router()
const Tenants = require('../models/tenant')

router.get('/', async (req, res) => {
  const tenants = await Tenants.find()
  res.json(tenants)
})

module.exports = router
  