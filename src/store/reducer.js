// 合并各组件的reducer

import { combineReducers } from "redux"
import countReducer from "../components/Count/store/countReducer"
import personReducer from "../components/Person/store/personReducer"

export default combineReducers({
  count: countReducer,
  personList: personReducer,
})
