import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo } from "../redux/reducers/todoReducer";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todoReducer);
  const [inputTodo, setInputTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      title: inputTodo,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setInputTodo("");
  };

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="input todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button>add</button>
      </form>

      {isLoading && <span>Loading...</span>}

      {todos.length > 0 &&
        todos.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
          </div>
        ))}
    </>
  );
}

export default TodoList;
