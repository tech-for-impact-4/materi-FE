import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Login from "./pages/Login";

import "./index.css";
import BlogList from "./pages/BlogList";
import Blog from "./pages/Blog";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink> <br />
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login />} />

        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:title" element={<Blog />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
