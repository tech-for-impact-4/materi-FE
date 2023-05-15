import { useState } from "react";
import Profile from "./components/Profile";
import Todo from "./components/Todo";

function App() {
  // const [users, setUsers] = useState([
  //   { name: "alpha", age: 20 },
  //   { name: "beta", age: 20 },
  //   { name: "charlie", age: 20 },
  // ]);

  return (
    <>
      {/* <Profile name={"Alpha"} age={"20"} /> */}
      {/* {users.map((item, index) => (
        <Profile key={index} name={item.name} age={item.age} />
      ))} */}

      <Todo />
    </>
  );
}

export default App;
