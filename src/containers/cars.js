import React, { Component, PropTypes } from 'react'
import { CarsList } from '../components/cars'
import * as CarsActions from '../redux/modules/cars/actions'

export class CarsContainer extends Component {
  componentWillMount() {
    CarsActions.all()
  }

  render() {
    return (
      <CarsList />
    )
  }
}

export default CarsContainer
