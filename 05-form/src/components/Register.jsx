import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // makin banyak inputan
  // makin banyak juga state nya, dan
  // makin banyak juga handle input-nya

  const inputUsername = (event) => {
    setUsername(event.target.value)
  }

  const inputPassword = (event) => {
    setPassword(event.target.value)
  }

  const register = (event) => {
    event.preventDefault()

    console.log("username", username);
    console.log("password", password);
  }

  return (
    <form onSubmit={register} >
      <h1>Register</h1>
      <input 
        type="text" 
        name="username" 
        placeholder="username" 
        value={username}
        onChange={inputUsername}
      /> <br />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        value={password} 
        onChange={inputPassword}
      /> <br />
      <button>Register</button>
    </form>
  );
}

export default Register;
