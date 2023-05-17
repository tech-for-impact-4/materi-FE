import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

let store = createStore(counterReducer)

export default store