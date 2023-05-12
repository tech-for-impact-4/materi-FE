import { useState } from "react";

function RegisterRefactor() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const register = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={register}>
      <h1>Register Refactor</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <br />
      <button>Register</button>
    </form>
  );
}

export default RegisterRefactor;
