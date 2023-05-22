import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import todoReducer from "./reducers/todoReducer";

const allReducer = combineReducers({
  todoReducer,
  // userReducer,
  // cartReducer,
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store