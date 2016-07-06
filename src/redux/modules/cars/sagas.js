import Config from '../../../config'
import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {
  GET,
  GET_SUCCESS,
  GET_ERROR,
  CREATE,
  CREATE_SUCCESS,
  CREATE_ERROR,
  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
  ALL,
  ALL_SUCCESS,
  ALL_ERROR,
  DEL,
  DEL_SUCCESS,
  DEL_ERROR,
} from './types'

function* getCars(action) {
  try {
    const cars = yield call(() => fetch(Config.CarsUrl).then(response => response.json()))
    yield put({ type: ALL_SUCCESS, cars })
  } catch (e) {
    yield put({ type: ALL_ERROR, message: e.message })
  }
}

export default function* saga() {
  yield* takeLatest(ALL, getCars)
}
