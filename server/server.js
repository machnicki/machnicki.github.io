const express = require('express')
const path = require('path')
const session = require('express-session')
const passport = require('passport')
const app = express()
const bodyParser = require('body-parser')

const db = require ('./db')
db.init();

const mainRoute = require('./routes/index')
const usersRoute = require('./routes/users')
const carsRoute = require('./routes/cars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/', mainRoute)
app.use('/users', usersRoute)
app.use('/cars', carsRoute)

app.listen(3000, () => { console.log('App is listenning on port 3000') })
