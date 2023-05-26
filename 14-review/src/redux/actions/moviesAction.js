import axios from "axios"

export const START_FETCH = "START_FETCH"
export const SUCCESS_GET_MOVIES = "SUCCESS_GET_MOVIES"

const startFetch = () => {
  return {
    type: START_FETCH
  }
}

const successGetMovies = (data) => {
  return {
    type: SUCCESS_GET_MOVIES,
    movies: data
  }
}

export const getDataMovies = () => async (dispatch) => {
  dispatch(startFetch())

  let moviesApi = import.meta.env.VITE_MOVIES_API
  let apiKey = import.meta.env.VITE_API_KEY

  let {data} = await axios(`${moviesApi}?api_key=${apiKey}`)
  
  dispatch(successGetMovies(data.results))
} 