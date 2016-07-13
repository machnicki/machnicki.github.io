const express = require('express')
const router = express.Router()
const Car = require('../models/car')

router.get('/:id', (req, res, next) => {
  Car.findOne({ id: req.params.id }, (err, cars) => {
    if (err) console.log('save error', err);
    res.json(cars)
  })
})

router.get('/', (req, res, next) => {
  Car.find({}, (err, cars) => {
    if (err) console.log('save error', err);
    res.json(cars)
  })
})

router.post('/', (req, res, next) => {
  const { name } = req.body

  const myCar = new Car({
    name,
  })

  myCar.save((err, car) => {
    if (err) console.log('save error', err);
    res.json(car)
  })
})

router.put('/:id', (req, res, next) => {
  Car.find({ id: req.params.id }, (err, cars) => {
    if (err) console.log('save error', err);
    res.json(cars)
  })
})

router.delete('/', (req, res, next) => {
  res.json({
    id: 1,
    message: 'Car has been deleted',
  })
})

module.exports = router
