import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/reducers/todoReducer";

function TodoList() {
  const dispatch = useDispatch()
  const [inputTodo, setInputTodo] = useState("")
  const {todos} = useSelector(state => state.todoReducer)
  // console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(inputTodo);

    const newTodo = {
      id: 4,
      title: inputTodo,
      isDone: false
    }
    
    dispatch(addTodo(newTodo))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="todo" 
          placeholder="new todo" 
          value={inputTodo}
          onChange={e => setInputTodo(e.target.value)}  
        />
        <button>add</button>
      </form>

      {todos.map(item => (
        <div key={item.id}>
          <span>{item.title}</span>
        </div>
      ))}
    </>
  )
}

export default TodoList