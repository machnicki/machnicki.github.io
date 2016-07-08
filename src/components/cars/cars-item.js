import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'

export function CarsItem(props) {
  const { name } = props.car
  return (
    <li styleName="cars-item">
      { name }
    </li>
  )
}

CarsItem.defaultProps = {
  car: {},
}

CarsItem.propTypes = {
  car: PropTypes.obj,
  styles: PropTypes.func,
}

export default CSSModules(CarsItem, styles)
