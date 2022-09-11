import thunk from "redux-thunk" // 用户支持异步 action
import { legacy_createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import { persistStore, persistReducer } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"

const storageConfig = {
  key: "root", // 必须有的
  storage: storageSession, // 缓存机制
  //whitelist: ["count"], // reducer 里持久化的数据,除此外均为不持久化数据
}
const myPersistReducer = persistReducer(storageConfig, reducer)
const store = legacy_createStore(myPersistReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

export default store
