const express = require('express')
const router = express.Router()
const Car = require('../models/car')

const carsData = [
  {
    id: 1,
    name: 'Mazda 6',
  },
  {
    id: 2,
    name: 'Fiat 124 Spider',
  },
  {
    id: 3,
    name: 'Seat Cordoba',
  },
]

router.get('/:id', (req, res, next) => {
  res.json(carsData.filter(car => car.id === req.params.id)[0])
})

router.get('/', (req, res, next) => {
  res.json(carsData)
})

router.post('/', (req, res, next) => {
  const { name } = req.body

  const myCar = new Car({
    name,
  })

  myCar.save(function(err){
    if(err) {
        console.log('save error', err);
    }

    Car.find({}, function(error, cars) {
      console.log('my cars', cars)
    })
  })

  res.json(carsData[0])
})

router.put('/', (req, res, next) => {
  res.json(carsData[0])
})

router.delete('/', (req, res, next) => {
  res.json({
    id: 1,
    message: 'Car has been deleted',
  })
})

module.exports = router
