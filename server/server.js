const express = require('express')
const path = require('path')
const session = require('express-session')
const passport = require('passport')
const app = express()

const mongo = require('mongodb')
const mongoose = require('mongoose')
const db = mongoose.connection

const mainRoute = require('./routes/index')
const usersRoute = require('./routes/users')
const carsRoute = require('./routes/cars')

app.use('/', mainRoute)
app.use('/users', usersRoute)
app.use('/cars', carsRoute)

app.listen(3000, () => { console.log('App is listenning on port 3000') })
