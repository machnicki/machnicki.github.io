import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'
import CarsItem from './cars-item'

export function CarsList(props) {
  return (
    <ul styleName="cars-list">
      {
        props.cars.map(car => (<CarsItem car={ car } />))
      }
    </ul>
  )
}

CarsList.defaultProps = {
  cars: [],
}

CarsList.propTypes = {
  cars: PropTypes.array,
  styles: PropTypes.func,
}

export default CSSModules(CarsList, styles)
