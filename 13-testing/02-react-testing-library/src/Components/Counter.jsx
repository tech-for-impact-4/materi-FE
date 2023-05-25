import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>

      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default Counter