import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CarsList } from '../components/cars'
import * as CarsActions from '../redux/modules/cars/actions'

export class CarsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(CarsActions.all())
  }

  render() {
    return (
      <CarsList />
    )
  }
}

CarsContainer.propTypes = {
  dispatch: PropTypes.func,
}

export default connect()(CarsContainer)
