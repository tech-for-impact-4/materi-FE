import { useState } from "react"
import { Button } from "react-bootstrap"

function Counter() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Button 
        onClick={decrement} 
        disabled={count == 0 && true}
      >-</Button>
      <span className="mx-3">{count}</span>
      <Button onClick={increment}>+</Button>
    </>
  )
}

export default Counter