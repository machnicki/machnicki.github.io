import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import saga from './sagas'

export default function createStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [
    sagaMiddleware,
  ]

  let finalCreateStore;

  if (__DEV__ && window.devToolsExtension) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension()
    )(_createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore)
  }

  const store = finalCreateStore(reducer, initialState)

  sagaMiddleware.run(saga)

  if (__DEV__ && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducer)
    })
  }

  return store
}
