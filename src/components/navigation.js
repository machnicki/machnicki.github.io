import React, { PropTypes } from 'react'
import history from '../history'
import { Button } from 'react-toolbox/lib/button'

export default function Navigation() {
  const transition = event => {
    event.preventDefault()
    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search,
    })
  }

  return (
    <nav>
      <Button label="Hello World!" />
      <ul>
        <li><a href="/" onClick={ transition }>Start</a></li>
        <li><a href="/cars" onClick={ transition }>Cars list</a></li>
        <li><a href="/add" onClick={ transition }>Add a car</a></li>
      </ul>
    </nav>
  )
}
