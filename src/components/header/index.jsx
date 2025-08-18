import { NavLink } from "react-router-dom";

function Header() {
  const baseLinkClasses =
    "px-4 py-2 text-sm font-medium rounded transition-colors duration-300";

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <NavLink
          to="/"
          className="text-white text-xl font-extrabold tracking-wide"
        >
          🛒 Online Cart
        </NavLink>

        <nav className="flex gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLinkClasses} ${
                isActive
                  ? "bg-white text-indigo-700 shadow-md"
                  : "text-white hover:bg-white hover:text-indigo-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${baseLinkClasses} ${
                isActive
                  ? "bg-white text-indigo-700 shadow-md"
                  : "text-white hover:bg-white hover:text-indigo-700"
              }`
            }
          >
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
