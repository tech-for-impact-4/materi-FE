import axios from "axios"
import { useEffect, useState } from "react"

function Todo() {
  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState("")
  const [count, setCount] = useState(1)

  const addTodo = (event) => {
    event.preventDefault()

    const newTodo = {
      title: inputTodo,
      isDone: false
    }

    axios.post("https://643e1624c72fda4a0bed5b7f.mockapi.io/todo", newTodo)
    .then(() => setCount(count + 1)) // trigger useEffect dengan count
  }

  useEffect(() => {
    axios("https://643e1624c72fda4a0bed5b7f.mockapi.io/todo")
    .then(result => setTodos(result.data))
  }, [count])

  return (
    <>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          name="inputTodo" 
          placeholder="input your todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button>Add</button>
      </form>

      {todos.map(item => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span>{item.isDone ? "✅" : "❌"}</span>
        </div>
      ))}
    </>
  )
}

export default Todo