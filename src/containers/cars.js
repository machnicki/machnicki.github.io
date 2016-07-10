import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CarsList, CarForm } from '../components/cars'
import * as CarsActions from '../redux/modules/cars/actions'

export class CarsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(CarsActions.all())
  }

  handleSubmitCarForm = data => {
    this.props.dispatch(CarsActions.create(data))
  }

  render() {
    return (
      <div>
        <CarsList cars={ this.props.cars.toArray() } />
        <CarForm onSubmit={ this.handleSubmitCarForm } />
      </div>
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
