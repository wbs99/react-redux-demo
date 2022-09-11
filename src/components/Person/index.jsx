import { useState } from "react"
import { connect } from "react-redux"
import { addPersonAction } from "./store/actionCreators"

const Person = props => {
  const { personList, xxx, count } = props

  const [n, setN] = useState("")
  const [m, setM] = useState("")

  const onNChange = e => {
    setN(e.target.value)
  }
  const onMChange = e => {
    setM(e.target.value)
  }
  const add = () => {
    const personObj = { name: n, age: m }
    xxx(personObj)
  }

  return (
    <div>
      <div>Person 组件</div>
      <input
        type="text"
        value={n}
        onChange={onNChange}
        placeholder="请输入姓名"
      />
      <input
        type="text"
        value={m}
        onChange={onMChange}
        placeholder="请输入年龄"
      />
      <button onClick={add}>添加</button>
      <div>读取 Redux 中的 count 的值: {count}</div>
      <ul>
        {personList.map(item => {
          return (
            <li key={item.name}>
              {item.name} - {item.age}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    personList: state.personList,
    count: state.count,
  }
}
const mapStateToDispatch = dispatch => {
  return {
    xxx(personObj) {
      dispatch(addPersonAction(personObj))
    },
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Person)
