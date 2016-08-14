import React, { PropTypes } from 'react'
import history from '../history'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'

export default function MyNavigation() {
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
      <AppBar fixed flat>
        <Link label="Cars explorer" active href="/"  icon="directions_car" onClick={ transition } />
        <Navigation type="horizontal">
          <Link href="/cars" onClick={ transition } active={ currentPath === '/cars' } label="Cars list" icon="list" />
          <Link href="/add" onClick={ transition } active={ currentPath === '/add' } label="Add new car" icon="add" />
        </Navigation>
      </AppBar>
    </div>
  )
}
