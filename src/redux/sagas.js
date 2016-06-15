import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

function* myAwesomeFunction(action) {
  const myTest = yield 'This is my test saga'
  yield console.log(myTest)
}

export default function* saga() {
  yield* takeEvery('TEST_ACTION', myAwesomeFunction)
}
