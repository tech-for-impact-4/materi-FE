import Navbar from "./components/Navbar";

import "./App.css";
import Card from "./components/Card";
import ListDigimon from "./components/ListDigimon";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Profile />

      <main>
        <ListDigimon />
        <section></section>
        <section></section>
      </main>

      <footer>
        <span></span>
      </footer>
    </>
  );
}

export default App;
