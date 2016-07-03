import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'

export function CarsItem(props) {
  return (
    <il styleName="cars-item">
      This is cars item
    </il>
  )
}

CarsItem.propTypes = {
  styles: PropTypes.func,
}

export default CSSModules(CarsItem, styles)
