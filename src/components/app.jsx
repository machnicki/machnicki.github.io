import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './app.css'

export function App(props) {
  return (
    <div styleName="app">
      This is <span className={ props.styles.bold }>react</span> application
    </div>
  )
}

App.propTypes = {
  styles: PropTypes.obj,
}

export default CSSModules(App, styles)
