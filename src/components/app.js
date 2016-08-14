import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './app.css'
import CarsContainer from '../containers/cars.js'

import AppBar from 'react-toolbox/lib/app_bar'
import { IconButton } from 'react-toolbox/lib/button'
import { Layout, Panel, NavDrawer, Sidebar } from 'react-toolbox/lib/layout'

import Navigation from './navigation'

class App extends Component {
  state = {
    drawerActive: false,
  }

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  render() {
    return (
      <div>
        <Layout styleName="app">
          <NavDrawer
            active={ this.state.drawerActive }
            permanentAt="xxxl"
            onOverlayClick={ this.toggleDrawerActive }
          >
            <Navigation />
          </NavDrawer>
          <Panel>
            <AppBar>
              <IconButton icon="menu" inverse={ true } onClick={ this.toggleDrawerActive } />
              Cars explorer
            </AppBar>
            <div style={ { flex: 1, overflowY: 'auto', padding: '1.8rem' } }>
              This is <span className={ this.props.styles.bold }>react</span> application
              { this.props.children }
              <CarsContainer />
            </div>
          </Panel>
        </Layout>
      </div>
    )
  }
}

App.propTypes = {
  styles: PropTypes.func,
  children: PropTypes.element,
}

export default CSSModules(App, styles)
