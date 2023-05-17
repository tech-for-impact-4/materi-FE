import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterAction";

function Counter() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

export default Counter;
