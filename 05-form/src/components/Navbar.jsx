import "./Navbar.css"

import logo from "../assets/react.svg"

function Navbar() {
  return (
    <header>
      <img src={logo} alt="" width={50} />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Register</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
