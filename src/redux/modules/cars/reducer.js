import { fromJS, Map } from 'immutable'

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

const initialState = fromJS({
  isLoading: false,
  error: false,
  data: Map(),
})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ALL:
      return state
        .merge({
          isLoading: true,
          error: false,
        })
    case ALL_SUCCESS:
      return state
        .merge({
          isLoading: false,
          data: state.get('data').merge(
            Map((action.cars || []).map(
              car => ([car.id, car])
            ))
          ),
        })
    case ALL_ERROR:
      return state
        .merge({
          isLoading: false,
          error: action.error || 'Problem with request',
        })
    default:
      return state
  }
}
