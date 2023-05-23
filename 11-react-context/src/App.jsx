import { useContext } from "react"
import Counter from "./components/Counter"
import { CounterContext } from "./context/CounterProvider"

function App() {
  const {count, setCount} = useContext(CounterContext)

  return (
    <>
      <h1>Halloo {count}</h1>
      <Counter />
    </>
  )
}

export default App
