import { SET_SELECTION } from './actions'

export default function selectionReducer(state, action) {
  switch (action.type) {
    case SET_SELECTION:
      return action.payload
    default:
      return state
  }
}