import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './app.css'
import CarsContainer from '../containers/cars.js'
import Navigation from './navigation'

export function App(props) {
  return (
    <div styleName="app">
      <Navigation />
      This is <span className={ props.styles.bold }>react</span> application
      { props.children }
      <CarsContainer />
    </div>
  )
}

App.propTypes = {
  styles: PropTypes.func,
  children: PropTypes.element,
}

export default CSSModules(App, styles)
