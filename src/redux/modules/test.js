export default function testReducer(state = { index: 0 }, action = { type: undefined }) {
  switch (action.type) {
    case 'TEST_ACTION':
      return { ...state, index: state.index + 1 }
    default:
      return state
  }
}
