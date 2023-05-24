import { createContext, useEffect, useReducer, useState } from "react"

export const TodoReducerContext = createContext()

const initialState = [
  {id: 1, task: "belajar react", isDone: false},
  {id: 2, task: "context", isDone: true},
  {id: 3, task: "reducer", isDone: false},
]

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

function reducer(state, action){
  switch(action.type){
    case ADD_TODO:
      let newTodo = {
        id: new Date().getTime(),
        task: action.inputTodo,
        isDone: false
      }
      return [newTodo, ...state]
    
      case DELETE_TODO:
        const filterTodos = state.filter(item => item.id !== action.id)
        return filterTodos

    default: return state
  }
}

function TodoReducerProvider({children}) {
  const [todos, dispatch] = useReducer(reducer, initialState)

  function addTodo(inputTodo){
    dispatch({
      type: ADD_TODO,
      inputTodo
    })
  }

  function deleteTodo(id){
    dispatch({
      type: DELETE_TODO,
      id
    })
  }

  // kalau data berasal dari API
  // useEffect(() => {
    // axios
    // dispatch fetchTodo
  // }, [])

  return (
    <TodoReducerContext.Provider value={{todos, addTodo, deleteTodo}}>
      {children}
    </TodoReducerContext.Provider>
  )
}

export default TodoReducerProvider