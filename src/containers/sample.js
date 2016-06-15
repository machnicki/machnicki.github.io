import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export function Button({
  dispatch,
}) {
  return (
    <div onClick={ () => {
      dispatch({
        type: 'TEST_ACTION',
        payload: { id: 1}
      })
    } }>Click me</div>
  )
}

export default connect()(Button)
