const express = require('express')
const router = express.Router()
const Renter = require('../models/renter')

router.get('/', async (req, res) => {
  const renters = await Renter.find()
  res.json(renters)
})

module.exports = router
  