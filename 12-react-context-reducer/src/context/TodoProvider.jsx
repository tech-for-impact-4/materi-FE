import { createContext, useState } from "react"

export const TodoContext = createContext()

function TodoProvider({children}) {
  const [todos, setTodos] = useState([
    {id: 1, task: "belajar react", isDone: false},
    {id: 2, task: "context", isDone: true},
    {id: 3, task: "reducer", isDone: false},
  ])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider