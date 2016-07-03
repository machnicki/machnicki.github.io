import React, { Component, PropTypes } from 'react'
import { CarsList } from '../components/cars'

export class CarsContainer extends Component {
  componentWillMount() {
    console.log('fetch some data')
  }

  render() {
    return (
      <CarsList />
    )
  }
}

export default CarsContainer
