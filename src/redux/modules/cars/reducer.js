import { fromJS } from 'immutable'

import {
  GET,
  GET_SUCCESS,
  GET_ERROR,
} from './types'

const initialState = fromJS({
  isLoading: false,
  error: false,
  data: fromJS({}),
})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET:
      return state
        .merge({
          isLoading: true,
          error: false,
        })
    case GET_SUCCESS:
      return state
        .merge({
          isLoading: false,
          data: {}, // add response
        })
    case GET_ERROR:
      return state
        .merge({
          isLoading: false,
          error: action.error || 'Problem with request',
        })
    default:
      return state
  }
}
