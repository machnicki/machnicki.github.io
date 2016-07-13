import Config from '../../../config'
import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as http from '../../../utils/http'

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

const APIurl = Config.CarsUrl

function* get(action = {}) {
  try {
    const result = yield call(() => http.get(APIurl, action.payload))
    yield put({ type: GET_SUCCESS, result })
  } catch (e) {
    yield put({ type: GET_ERROR, message: e.message })
  }
}

function* all(action = {}) {
  try {
    const result = yield call(() => http.get(APIurl, action.payload))
    yield put({ type: ALL_SUCCESS, result })
  } catch (e) {
    yield put({ type: ALL_ERROR, message: e.message })
  }
}

function* create(action = {}) {
  try {
    const result = yield call(() => http.post(APIurl, action.payload))
    yield put({ type: CREATE_SUCCESS, result })
  } catch (e) {
    yield put({ type: CREATE_ERROR, message: e.message })
  }
}

function* del(action = {}) {
  try {
    const result = yield call(() => http.del(`${APIurl}/${action.payload}`))
    yield put({ type: DEL_SUCCESS, result })
  } catch (e) {
    yield put({ type: DEL_ERROR, message: e.message })
  }
}

function* update(action = {}) {
  try {
    const result = yield call(() => http.put(APIurl, action.payload))
    yield put({ type: UPDATE_SUCCESS, result })
  } catch (e) {
    yield put({ type: UPDATE_ERROR, message: e.message })
  }
}

export default function* saga() {
  yield [
    takeLatest(GET, get),
    takeLatest(ALL, all),
    takeLatest(CREATE, create),
    takeLatest(DEL, del),
    takeLatest(UPDATE, update),
  ]
}
