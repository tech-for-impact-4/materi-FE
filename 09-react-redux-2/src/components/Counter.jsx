import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux/reducers/counterReducer";

function Counter() {
  const dispatch = useDispatch()
  const {value} = useSelector(state => state.counterReducer)

  console.log(value);

  return (
    <>
      <button>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch(increment()) }>+</button>
    </>
  )
}

export default Counter