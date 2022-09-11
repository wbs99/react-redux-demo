import { connect } from "react-redux"
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
  decrementAsyncAction,
} from "./store/actionCreators"

const Count = props => {
  const { count, xxx, yyy, qqq, www, personListLength } = props

  const increment = () => {
    xxx(1)
  }
  const decrement = () => {
    yyy(1)
  }
  const incrementAsync = () => {
    if (props.count % 2 !== 0) {
      qqq()
    }
  }
  const decrementAsync = () => {
    www()
  }

  return (
    <div>
      <div>Count 组件</div>
      <div>当前求和为：{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={incrementAsync}>异步且为奇数再 +1</button>
      <button onClick={decrementAsync}>异步 -1</button>
      <div>读取 Redux 中 Person 的 person 人数： {personListLength}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count,
    personListLength: state.personList.length,
  }
}
const mapStateToDispatch = dispatch => {
  return {
    xxx(number) {
      dispatch(incrementAction(number))
    },
    yyy(number) {
      dispatch(decrementAction(number))
    },
    qqq() {
      dispatch(incrementAsyncAction())
    },
    www() {
      dispatch(decrementAsyncAction())
    },
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Count)
