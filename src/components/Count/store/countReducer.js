import { increment, decrement } from "./constant"

const defaultState = 200

export default function countReducer(state = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case increment:
      return state + data
    case decrement:
      return state - data
    default:
      return state
  }
}
