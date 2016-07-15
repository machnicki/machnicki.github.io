import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import createStore from './redux/create'

import history from './history'
import routes from './routes'
import router from './router'

function myRender(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent))
}

function renderComponent(component) {
  render((
    <Provider store={ createStore() }>
      <App>
        { component }
      </App>
    </Provider>
  ), document.getElementById('app'))
}

myRender(history.getCurrentLocation())
history.listen(myRender)
