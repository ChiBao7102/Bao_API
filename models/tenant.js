const mongoose = require('mongoose')

const tenantSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  phone: String,
  address: String,
  email: String
})

module.exports = mongoose.model('Tenant', tenantSchema)
