import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const allReducer = combineReducers({
  counterReducer, 
  todoReducer
})

const store = createStore(allReducer)

export default store