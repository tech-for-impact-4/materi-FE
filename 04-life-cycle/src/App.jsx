import { useEffect, useState } from 'react'
import ListDigimon from './components/ListDigimon';

function App() {
  const [greeting, setGreeting] = useState("Hallo")
  const [count, setCount] = useState(0)
  // console.log("satu");

  useEffect(() => {
    // console.log("tiga");
  }) // [] dibaca sekali aja

  return (
    <>
      {/* {console.log("dua")} */}
     <h1 onClick={() => setGreeting("tesssss")}>{greeting}</h1>
      <div>
        <button>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <ListDigimon />
    </>
  )
}

export default App
