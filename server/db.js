const mongoose = require('mongoose')

module.exports = {
  init() {
    mongoose.connect('mongodb://localhost/cars-redux')
    mongoose.connection.on('error', () => {
      console.error('Connection Error')
    })
    mongoose.connection.once('open', () => {
      console.log('DB connection is open...')
    })
  },
}
