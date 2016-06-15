import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app.jsx'
import createStore from './redux/create'

render((
  <Provider store={ createStore() }>
    <App />
  </Provider>
), document.getElementById('app'))
