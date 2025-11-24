import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductionNav = ({ brandName = "ShopVerse" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.userReducer.users);

  // 1. Base links that are always visible
  const baseNavLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  const navLinks = [
    ...baseNavLinks,
    ...(user ? (user && user?.isAdmin ? [{ name: "Create Product", path: "/admin/create-product" }] : []) : [{ name: "Login", path: "/login" }]),
  ];

  const closeMenu = () => setIsMenuOpen(false);

  // Common Tailwind classes for links
  const linkBaseClasses = "hover:text-gray-600 transition-colors duration-200 cursor-pointer";
  const linkActiveClasses = "text-gray-900 underline underline-offset-4";

  return (
    <header className="w-full bg-[#f3b54b] font-[Poppins] shadow-md mb-5 rounded">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Brand Name */}
        <h1 className="text-3xl font-bold">{brandName}</h1>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-20 text-3xl md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          {isMenuOpen ? (
            <i className="ri-close-line"></i> // Assumes you have icon CSS
          ) : (
            <i className="ri-menu-line"></i> // Assumes you have icon CSS
          )}
        </button>

        {/* Navigation Links */}
        <div
          id="nav-menu"
          className={`
            absolute top-0 left-0 h-screen w-full bg-amber-300 pt-24 text-center transition-transform duration-300 ease-in-out md:relative md:flex md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:pt-0
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          
        <ul className="flex flex-col gap-8 text-lg font-medium md:flex-row md:gap-6 md:items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${isActive ? linkActiveClasses : ""}`
                }
                onClick={closeMenu} // Close menu on link click for mobile
              >
              {link.name}
              </NavLink>
            </li>
          ))}

            {user && (
              <>  
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) => `${linkBaseClasses} ${isActive ? linkActiveClasses : ""}`}
                  onClick={closeMenu}
                >
                  Cart
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/admin/user-profile"
                  className={({ isActive }) => `${linkBaseClasses} ${isActive ? linkActiveClasses : ""}`}
                  onClick={closeMenu}
                >
                  Settings
                </NavLink>
              </li>
              </> 
            )}
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default ProductionNav;