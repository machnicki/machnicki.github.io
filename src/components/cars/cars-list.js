import React, { PropTypes } from 'react'
import { List } from 'react-toolbox/lib/list'
import CSSModules from 'react-css-modules'
import styles from './style.css'
import CarsItem from './cars-item'

export function CarsList({ cars, onRemove }) {
  const handleRemove = carId => () => onRemove(carId)

  return (
    <List selectable ripple styleName="cars-list">
      {
        cars.map(car => (
          <CarsItem
            car={ car }
            onRemove={ handleRemove(car._id) }
          />
        ))
      }
    </List>
  )
}

CarsList.defaultProps = {
  cars: [],
  onRemove: () => null,
}

CarsList.propTypes = {
  cars: PropTypes.array,
  styles: PropTypes.func,
  onRemove: PropTypes.func,
}

export default CSSModules(CarsList, styles)
