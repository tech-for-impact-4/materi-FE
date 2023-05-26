import axios from "axios"
import { START_FETCH, SUCCESS_GET_MOVIES } from "../actions/moviesAction"

const initialState = {
  movies: [],
  isLoading: false
}

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCH: 
      return {
        ...state,
        isLoading: true
      }

    case SUCCESS_GET_MOVIES:
      return {
        movies: action.movies,
        isLoading: false
      }
    default: return state
  }
}

export default moviesReducer