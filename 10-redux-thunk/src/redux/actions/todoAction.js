import axios from "axios"

export const START_FETCHING = "START_FETCHING"
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO"

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

export const addTodo = (newTodo) => async (dispatch) => {
  const url = "https://643e1624c72fda4a0bed5b7f.mockapi.io/todo"
  await axios.post(url, newTodo)

  dispatch(getTodo())
}