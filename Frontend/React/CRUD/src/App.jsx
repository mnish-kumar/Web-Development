import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const[todo, setTodo] = useState([
    {id: 1, title:"kaam kro", isCompleted: false},
  ]);
  


  return (
    <div>
      <Create todo ={todo} setTodo = {setTodo}/>
      <hr />
      <Read todo ={todo} setTodo = {setTodo}/>
    </div>
  )
}

export default App