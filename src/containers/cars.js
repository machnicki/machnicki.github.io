import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CarsList, CarForm } from '../components/cars'
import * as CarsActions from '../redux/modules/cars/actions'

export class CarsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(CarsActions.all())
  }

  handleRemoveCar = carId => {
    this.props.dispatch(CarsActions.del(carId))
  }

  handleSubmitCarForm = data => {
    this.props.dispatch(CarsActions.create(data))
  }

  render() {
    return (
      <div>
        <CarsList
          cars={ this.props.cars.toArray() }
          onRemove={ this.handleRemoveCar }
        />
        <CarForm
          onSubmit={ this.handleSubmitCarForm }
        />
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

export default connect(state => ({
  cars: state.cars.get('data'),
}))(CarsContainer)
