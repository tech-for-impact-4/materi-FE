import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()

    // perintah utk cek username dan passwordnya
    // jika benar, maka dialihkan ke halaman yg lain
    navigate("/profile")
  }

  return (
    <>
      <form onSubmit={login}>
        <h1>Login</h1>
        <input type="text" name="" id="" placeholder="username" />
        <input type="text" name="" id="" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login