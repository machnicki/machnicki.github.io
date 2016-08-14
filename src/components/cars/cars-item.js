import React, { PropTypes } from 'react'
import { ListItem } from 'react-toolbox/lib/list'
import CSSModules from 'react-css-modules'
import styles from './style.css'
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';

export function CarsItem({ car, onRemove }) {
  const { name } = car

  return (
    <ListItem
      styleName="cars-item"
      caption={ name }
      rightActions={ [
        <IconMenu icon="more_vert" position="topRight" menuRipple>
          <MenuItem value="delete" icon="delete" caption="Delete" onClick={ onRemove } />
        </IconMenu>,
      ] }
    />
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
