import { useState } from "react"

import img from "../assets/me.png"

function Profile() {
  const [name, setName] = useState("Auzan")
  const [age, setAge] = useState(17)

  return (
    <div>
      <img src={img} alt="" width={200}/>
      <h2 onClick={() => setName("Ojan")}>Nama : {name}</h2>
      <h2>Umur : {age}</h2>
    </div>
  )
}

export default Profile