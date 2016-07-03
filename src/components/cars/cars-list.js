import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'
import CarsItem from './cars-item'

export function CarsList(props) {
  return (
    <ul styleName="cars-list">
      This is list of cars
      <CarsItem />
    </ul>
  )
}

CarsList.propTypes = {
  styles: PropTypes.func,
}

export default CSSModules(CarsList, styles)
