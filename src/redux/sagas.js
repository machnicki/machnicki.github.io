import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import carsSagas from './modules/cars/sagas'

function* myAwesomeFunction(action) {
  const myTest = yield 'This is my test saga'
  yield console.log(myTest)
}

function* saga() {
  yield* takeEvery('TEST_ACTION', myAwesomeFunction)
}

const sagas = [
  saga,
  carsSagas,
]

export default sagas
