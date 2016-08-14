import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CarForm } from '../components/cars'
import * as CarsActions from '../redux/modules/cars/actions'

export function AddCarContainer({
  dispatch,
}) {
  let callbacksCarForm = {}
  const handleSubmitCarForm = data => dispatch(CarsActions.create({
    payload: data,
    callback: () => {
      callbacksCarForm.resetForm()
      alert('car add with success')
    },
  }))
  const handleCallbacksCarForm = callbacks => {
    callbacksCarForm = callbacks
  }

  return (
    <div>
      <CarForm
        onSubmit={ handleSubmitCarForm }
        callbacks={ handleCallbacksCarForm }
      />
    </div>
  )
}

AddCarContainer.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(state => ({}))(AddCarContainer)
