import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

import moviesReducer from './reducers/moviesReducer';

const allReducer = combineReducers({
  moviesReducer
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store