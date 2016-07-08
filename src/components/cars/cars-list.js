import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'
import CarsItem from './cars-item'

export function CarsList(props) {
  return (
    <ul styleName="cars-list">
      This is list of cars
      <CarsItem />
      <button onClick={ props.onCreate }>
        Lets create new one
      </button>
    </ul>
  )
}

CarsList.defaultProps = {
  onCreate: () => null,
}

CarsList.propTypes = {
  onCreate: PropTypes.func,
  styles: PropTypes.func,
}

export default CSSModules(CarsList, styles)
