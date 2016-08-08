import React from 'react'
import AddCarContainer from './containers/add-car'
import CarsContainer from './containers/cars'
import CarContainer from './containers/car'
import HomeContainer from './containers/home'

const routes = [
  { path: '/', action: () => <HomeContainer /> },
  { path: '/add', action: () => <AddCarContainer /> },
  { path: '/cars', action: () => <CarsContainer /> },
  { path: '/cars/:id', action: () => <CarContainer /> },
]

export default routes
