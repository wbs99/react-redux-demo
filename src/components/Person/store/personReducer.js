import { addPerson } from "./constant"

const defaultState = [{ name: "Jack", age: 18 }]

export default function personReducer(state = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case addPerson:
      return [...state, data]
    default:
      return state
  }
}
