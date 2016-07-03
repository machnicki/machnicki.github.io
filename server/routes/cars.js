const express = require('express')
const router = express.Router()

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
  res.json({
    cars: carsData,
  })
})

module.exports = router
