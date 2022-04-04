const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  model: String,
  license_plates: String,
  carrier_pep:Number,
  price: Number,
  img_car: String,
  id_renter: String,
})
 
module.exports = mongoose.model('Car', carSchema)
