import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoList() {
  const [inputTodo, setInputTodo] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault()

    let newTodo = {
      id: new Date().getTime(),
      task: inputTodo,
      isDone: false
    }

    setTodos([newTodo, ...todos])
    setInputTodo("")
  }

  const handleDelete = (id) => {
    const filterTodos = todos.filter(item => item.id !== id)
    setTodos(filterTodos)
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
          <button onClick={() => handleDelete(item.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
