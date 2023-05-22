import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/reducers/todoReducer";

function TodoList() {
  const dispatch = useDispatch()
  const { todos, isLoading } = useSelector((state) => state.todoReducer);

  console.log("LOADING", isLoading);
  console.log("TODOS", todos);

  useEffect(() => {
    dispatch(getTodo())
  }, [])

  return (
    <>
      <form action="">
        <input type="text" />
        <button>add</button>
      </form>

      {isLoading && <span>Loading...</span> }

      {todos.length > 0 && todos.map(item => (
        <div key={item.id}>
          <span>{item.title}</span>
        </div>
      ))}
    </>
  );
}

export default TodoList;
