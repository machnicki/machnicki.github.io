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
    case GET:
    case ALL:
    case CREATE:
    case UPDATE:
    case DEL:
      return state
        .merge({
          isLoading: true,
          error: false,
        })
    case GET_SUCCESS:
    case CREATE_SUCCESS:
    case UPDATE_SUCCESS:
      return state
        .merge({
          isLoading: false,
          data: state.get('data').set(action.result._id, action.result),
        })
    case ALL_SUCCESS:
      return state
        .merge({
          isLoading: false,
          data: state.get('data').merge(
            Map((action.result || []).map(
              car => ([car._id, car])
            ))
          ),
        })
    case DEL_SUCCESS:
      return state
        .merge({
          isLoading: false,
          data: state.get('data').delete(action.result._id),
        })
    case GET_ERROR:
    case ALL_ERROR:
    case CREATE_ERROR:
    case UPDATE_ERROR:
    case DEL_ERROR:
      return state
        .merge({
          isLoading: false,
          error: action.error || 'Problem with request',
        })
    default:
      return state
  }
}
