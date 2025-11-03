import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncLogOutUser } from "../store/actions/userAction";

const ProductionNav = ({ brandName = "Shopify" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.users);

  // 1. Base links that are always visible
  const baseNavLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  const navLinks = [
    ...baseNavLinks,
    ...(user
      ? [{ name: "Create Product", path: "/admin/create-product" }]
      : [{ name: "Login", path: "/login" }]),
  ];

  const closeMenu = () => setIsMenuOpen(false);
  const handleLogout = () => {
    dispatch(asyncLogOutUser());
    navigate("/");
    closeMenu();
  };

  // Common Tailwind classes for links
  const linkBaseClasses = "hover:text-gray-600 transition-colors duration-200 cursor-pointer";
  const linkActiveClasses = "text-gray-900 underline underline-offset-4";

  return (
    <header className="w-full bg-[#FAB12F] font-[Poppins] shadow-md mb-5 rounded">
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
          {/* Added md:items-center to align logout button on desktop */}
          <ul className="flex flex-col gap-8 text-lg font-medium md:flex-row md:gap-6 md:items-center">
            {/* 4. Map over the clean navLinks array */}
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
              <li>
                <button
                  onClick={handleLogout}
                  className="py-1 px-4 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default ProductionNav;
