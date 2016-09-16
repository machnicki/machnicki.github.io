const mongoose = require('mongoose')
const MONGODB_URI = require('../env.js').MONGODB_URI

module.exports = {
  init() {
    mongoose.connect(MONGODB_URI)
    mongoose.connection.on('error', () => {
      console.error('Connection Error')
    })
    mongoose.connection.once('open', () => {
      console.log('DB connection is open...')
    })
  },
}
