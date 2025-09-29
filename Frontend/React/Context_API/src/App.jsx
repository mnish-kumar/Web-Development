import Nav from "./component/Nav.jsx"
import Mainroutes from "./routes/Mainroutes.jsx"


const App = () => {
  return (
    <div className="bg-zinc-800 h-screen w-screen p-6 text-2xl text-white">
      
      <Nav />
      <Mainroutes />

    </div>
  )
}

export default App