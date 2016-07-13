import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'

export function CarsItem({ car, onRemove }) {
  const { name } = car

  return (
    <li styleName="cars-item">
      { name }
      <button onClick={ onRemove }>
        Remove
      </button>
    </li>
  )
}

CarsItem.defaultProps = {
  car: {},
  onRemove: () => null,
}

CarsItem.propTypes = {
  car: PropTypes.obj,
  styles: PropTypes.func,
  onRemove: PropTypes.func,
}

export default CSSModules(CarsItem, styles)
