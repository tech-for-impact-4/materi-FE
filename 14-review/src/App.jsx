import MovieList from "./components/MovieList"

function App() {

  console.log(import.meta.env.VITE_MOVIES_API);
  
  return (
    <>
      <MovieList />
    </>
  )
}

export default App
