const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cars-redux'
const API_URL = process.env.API_URL || 'http://localhost:3000'
const ENVIRONMENT = process.env.ENVIRONMENT || 'development'
const SERVER_TYPE = process.env.SERVER_TYPE || 'both'
const FE_PORT = SERVER_TYPE === 'frontend' ? (process.env.PORT || 5000) : 5000
const BE_PORT = SERVER_TYPE === 'backend' ? (process.env.PORT || 3000) : 3000

module.exports = {
  MONGODB_URI,
  API_URL,
  ENVIRONMENT,
  SERVER_TYPE,
  FE_PORT,
  BE_PORT,
}
