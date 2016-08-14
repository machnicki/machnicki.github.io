import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CarForm } from '../components/cars'
import * as CarsActions from '../redux/modules/cars/actions'

export default function AddCarContainer({
  dispatch,
}) {
  const handleSubmitCarForm = data => dispatch(CarsActions.create(data))

  return (
    <CarForm
      onSubmit={ handleSubmitCarForm }
    />
  )
}

AddCarContainer.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(state => ({}))(AddCarContainer)
