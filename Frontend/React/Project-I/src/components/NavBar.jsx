import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"

const NavBar = () => {
  return (
    <div className="flex justify-between text-lg pb-5 items-center mb-10">

        <div className="flex items-center gap-3">
            <img className="w-10 h-10 bg-white rounded-[50%]" src={Logo} alt="Logo" />
            <h1 className="text-5xl font-normal font-sans opacity-70">Recipe App</h1>
        </div>

        <div className="flex gap-22 font-normal items-center">
            <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/">Home</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/recipes">Recipes</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/about">About</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300":""} to="/createRecipe">Create Recipe</NavLink>
        </div>
    </div>
  )
}

export default NavBar