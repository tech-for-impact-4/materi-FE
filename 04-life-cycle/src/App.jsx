import { useState } from 'react'
import ListDigimon from './components/ListDigimon';

function App() {
  const [greeting, setGreeting] = useState("Hallo")
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 onClick={() => setGreeting("tesssss")}>{greeting}</h1>

      {/* Counter */}
      <div>
        <button>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      {/* List digiomon */}
      <ListDigimon />
    </>
  )
}

export default App
