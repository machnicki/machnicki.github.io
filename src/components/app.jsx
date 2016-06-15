import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './app.css'
import Button from '../containers/sample.js'

export function App(props) {
  return (
    <div styleName="app">
      This is <span className={ props.styles.bold }>react</span> application

      <Button />
    </div>
  )
}

App.propTypes = {
  styles: PropTypes.func,
}

export default CSSModules(App, styles)
