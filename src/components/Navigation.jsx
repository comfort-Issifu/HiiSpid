import { NavLink } from "react-router-dom";
import { navigation } from "../data";

function Navigation({ isMobile, onItemClick }) {
  return (
    <nav className={isMobile ? "space-y-1" : "hidden md:flex space-x-8"}>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          onClick={onItemClick}
          className={({ isActive }) =>
            isMobile
              ? `relative flex items-center px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md ${
                  isActive ? "text-amber-600 bg-amber-50 font-semibold" : ""
                }`
              : `relative text-gray-700 hover:text-amber-600 transition-colors font-medium ${
                  isActive ? "text-amber-600 font-semibold" : ""
                }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && isMobile && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-600 rounded-r"></div>
              )}
              <span className={isActive && isMobile ? "ml-2" : ""}>
                {item.name}
              </span>
              {isActive && !isMobile && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600 rounded-full"></div>
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation