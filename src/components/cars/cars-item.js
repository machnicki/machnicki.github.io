import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'

export function CarsItem(props) {
  return (
    <li styleName="cars-item" onClick={ () => { console.log('test') } }>
      This is cars item
    </li>
  )
}

CarsItem.propTypes = {
  styles: PropTypes.func,
}

export default CSSModules(CarsItem, styles)
