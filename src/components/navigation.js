import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './navigation.css'
import history from '../history'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu'

export function MyNavigation() {
  const transition = event => {
    event.preventDefault()
    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search,
    })
  }

  const currentPath = history.getCurrentLocation().pathname

  return (
    <div>
      <Navigation type="horizontal" styleName="navigation">
        <MenuItem styleName="navigation-item" selected={ currentPath === '/' }>
          <Link
            styleName="navigation-link" href="/" active
            onClick={ transition } label="Main page" icon="directions_car"
          />
        </MenuItem>
        <MenuItem styleName="navigation-item" selected={ currentPath === '/cars' }>
          <Link
            styleName="navigation-link" href="/cars" active
            onClick={ transition } label="Cars list" icon="list"
          />
        </MenuItem>
        <MenuItem styleName="navigation-item" selected={ currentPath === '/add' }>
          <Link
            styleName="navigation-link" href="/add" active
            onClick={ transition } label="Add new car" icon="add"
          />
        </MenuItem>
      </Navigation>
    </div>
  )
}

export default CSSModules(MyNavigation, styles)
