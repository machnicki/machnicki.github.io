import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import { persistState } from 'redux-devtools'

export default function createStore(initialState = {}) {
  const middleware = []

  let finalCreateStore;

  if (__DEV__ && window.devToolsExtension) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore)
  }

  const store = finalCreateStore(reducer, initialState)

  if (__DEV__ && module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer)
    })
  }

  return store
}
