import { useState } from "react";
import { NavLink } from "react-router-dom";



const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Login", path: "/login" },
];

const ProductionNav = ({ brandName = "Shopify" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu, useful for NavLink clicks
  const closeMenu = () => setIsMenuOpen(false);

  // Common Tailwind classes for links to avoid repetition
  const linkBaseClasses = "hover:text-gray-600 transition-colors duration-200";
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
          {/* A better UX is to show a close icon when the menu is open */}
          {isMenuOpen ? (
            <i className="ri-close-line"></i> // Replace with <RiCloseLine /> if using react-icons
          ) : (
            <i className="ri-menu-line"></i> // Replace with <RiMenuLine /> if using react-icons
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
          <ul className="flex flex-col gap-8 text-lg font-medium md:flex-row md:gap-6">
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default ProductionNav;