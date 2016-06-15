import { combineReducers } from 'redux'
import testReducer from './modules/test.js'

export default combineReducers({
  test: testReducer,
})
