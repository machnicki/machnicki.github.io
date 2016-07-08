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
      <CarsList cars={ this.props.cars.toArray() } />
    )
  }
}

CarsContainer.defaultProps = {
  cars: [],
}

CarsContainer.propTypes = {
  cars: PropTypes.array,
  dispatch: PropTypes.func,
}

export default connect(state => {
  return {
    cars: state.cars.get('data'),
  }
})(CarsContainer)
