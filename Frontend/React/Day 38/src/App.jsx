import { useState } from "react"
import Create from "./components/Create"
import Read from "./components/Read"

const App = () => {

  const [users, setusers] = useState([
    { name: "Manish", age: 21 },
    { name: "dhanesh", age: 24 },
    { name: "rowdy", age: 25 },
  ]);





  return (
    <div>

      <Create/>
      <hr />
      <Read users={users} setusers = {setusers}/>
      
    </div>
  )
}
export default App