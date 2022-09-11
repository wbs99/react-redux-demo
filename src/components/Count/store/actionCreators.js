import { increment, decrement } from "./constant"

export const incrementAction = data => {
  return {
    type: increment,
    data: data,
  }
}

export const decrementAction = data => {
  return {
    type: decrement,
    data: data,
  }
}

export const incrementAsyncAction = () => {
  return dispatch => {
    ajax("/increment")
      .then(res => dispatch(incrementAction(res)))
      .catch(err => console.log(err))
  }
}

export const decrementAsyncAction = () => {
  return dispatch => {
    ajax("/decrement")
      .then(res => dispatch(decrementAction(res)))
      .catch(err => console.log(err))
  }
}

function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/increment" || path === "/decrement") {
        resolve(1)
      }
    }, 1000)
  })
}
