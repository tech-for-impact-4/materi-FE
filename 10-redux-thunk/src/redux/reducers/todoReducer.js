import axios from "axios"

const initialState = {
  todos: [],
  isLoading: false
}

// =============== todoAction.js =======================
const GET_TODO = "GET_TODO"
const START_FETCHING = "START_FETCHING"
const SUCCESS_GET_TODO = "SUCCESS_GET_TODO"

const startFetching = () => {
  return {
    type: START_FETCHING
  }
}

const successGetTodo = (payload) => {
  return {
    type: SUCCESS_GET_TODO,
    payload
  }
}

export const getTodo = () => {
  return async (dispatch) => {

    // mulai loading
    dispatch(startFetching()) 
    
    // ambil data todo
    const url = "https://643e1624c72fda4a0bed5b7f.mockapi.io/todo"
    const result = await axios(url) 

    // kirim todo ke reducer
    dispatch(successGetTodo(result.data)) 
  }
}
// =============== todoAction.js =======================

const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case START_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_GET_TODO: 
      return {
        isLoading: false,
        todos: [...action.payload]
      }
    default: return state
  }
}

export default todoReducer