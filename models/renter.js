const mongoose = require('mongoose')

const renterSchema = new mongoose.Schema({
  username: String,
  password: String,
  phone: String,
  address: String,
  id_number: Number,
  id_driver_license: Number,
  email:String,
  img_id:String,
  img_license:String
})

module.exports = mongoose.model('Renter', renterSchema)