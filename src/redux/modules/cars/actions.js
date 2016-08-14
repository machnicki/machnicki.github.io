import {
  GET,
  CREATE,
  UPDATE,
  ALL,
  DEL,
} from './types'

export function create({ payload, callback }) {
  return { type: CREATE, payload, callback }
}

export function update(payload) {
  return { type: UPDATE, payload }
}

export function get(payload) {
  return { type: GET, payload }
}

export function all() {
  return { type: ALL }
}

export function del(payload) {
  return { type: DEL, payload }
}
