const express = require('express')
const router = express.Router();
const carController =require('../controller/carController')

router.post('/:id_renter',carController.addCar);
router.get('/get', carController.getAllCar);

module.exports = router
  