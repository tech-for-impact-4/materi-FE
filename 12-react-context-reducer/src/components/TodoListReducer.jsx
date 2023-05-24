import { useContext, useState } from "react";
import { TodoReducerContext } from "../context/TodoReducerProvider";

function TodoListReducer() {
  const [inputTodo, setInputTodo] = useState("");
  const {todos, addTodo} = useContext(TodoReducerContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    let newTodo = {
      id: new Date().getTime(),
      task: inputTodo,
      isDone: false
    }

    addTodo(newTodo)
    setInputTodo("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button>add</button>
      </form>

      {todos.map((item) => (
      <div key={item.id}>
        <span style={item.isDone ? { textDecoration: "line-through" } : {}}>
          {item.task}
        </span>
        <button>x</button>
      </div>
    ))}
    </div>
  );
}

export default TodoListReducer;
