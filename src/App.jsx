import Count from "./components/Count/index"
import Person from "./components/Person/index"
import store from "./store"
import { Provider } from "react-redux"
import { persistor } from "./store"
import { PersistGate } from "redux-persist/lib/integration/react"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Count />
          <br />
          <br />
          <br />
          <Person />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
