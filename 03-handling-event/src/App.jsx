import { useState } from 'react'
import Counter from './components/Counter';
import CartList from './components/CartList';
// import './App.css'

function App() {
  const [name, setName] = useState("Auzan")

  const handleClick = () => {
    console.log("tessss");
  }

  return (
    <>
      <h1 onClick={() => setName("ojan")}>{name}</h1>

      <h1 onClick={handleClick}>click me</h1>

      <Counter />

      <CartList />
    </>
  )
}

export default App
