import { useContext } from "react"
import Counter from "./components/Counter"
import { CounterContext } from "./context/CounterProvider"
import TodoList from "./components/TodoList"
import TodoListReducer from "./components/TodoListReducer"


function App() {
  const {count, setCount} = useContext(CounterContext)

  return (
    <>
      <h1>Halloo {count}</h1>
      <Counter />

      {/* <TodoList /> */}
      <TodoListReducer />
    </>
  )
}

export default App
