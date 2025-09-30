import NavBar from "./components/NavBar"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
  return (
    <div className="w-[100%] h-auto text-white bg-zinc-800 font-thin p-6 pt-3 ">

      <NavBar />
      <MainRoutes />

    </div>
  )
}

export default App