import { combineReducers } from 'redux'
import testReducer from './modules/test.js'
import carsReducer from './modules/cars/reducer'

export default combineReducers({
  test: testReducer,
  cars: carsReducer,
})
