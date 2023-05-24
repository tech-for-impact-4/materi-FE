import { createContext, useReducer, useState } from "react"

export const TodoReducerContext = createContext()

const initialState = [
  {id: 1, task: "belajar react", isDone: false},
  {id: 2, task: "context", isDone: true},
  {id: 3, task: "reducer", isDone: false},
]

const ADD_TODO = "ADD_TODO"

function reducer(state, action){
  switch(action.type){
    case ADD_TODO:
      return [action.payload, ...state]
    default: return state
  }
}

function TodoReducerProvider({children}) {
  const [todos, dispatch] = useReducer(reducer, initialState)

  function addTodo(newTodo){
    dispatch({
      type: ADD_TODO,
      payload: newTodo
    })
  }

  return (
    <TodoReducerContext.Provider value={{todos, addTodo}}>
      {children}
    </TodoReducerContext.Provider>
  )
}

export default TodoReducerProvider