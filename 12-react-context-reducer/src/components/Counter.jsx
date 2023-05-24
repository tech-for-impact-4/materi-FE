import { useContext } from "react"
import { CounterContext } from "../context/CounterProvider"

function Counter() {
  const {count, setCount} = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter