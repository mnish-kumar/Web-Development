import { NavLink } from "react-router-dom"

const Nav = () => {
  return (

    <div className="flex gap-20 mb-4 justify-center font-normal text-teal-300 ">
        <NavLink
          className={(e) => (e.isActive ? "text-pink-400" : "")}
          to="/">
          Home
        </NavLink>

        <NavLink className={(e) => (e.isActive ? "text-pink-400" : "")} to="/product">
          Product
        </NavLink>

        <NavLink className={(e) => (e.isActive ? "text-pink-400" : "")} to="/service">
          Service
        </NavLink>

        <NavLink className={(e) => (e.isActive ? "text-pink-400" : "")} to="/about">
          About
        </NavLink>
    </div>
    
  
)
}

export default Nav