const mongoose = require('mongoose')

const carModel = function() {
  const schema = mongoose.Schema({
    name: String,
  })

  return mongoose.model('Car', schema)
}

module.exports = new carModel()
