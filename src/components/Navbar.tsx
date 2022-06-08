import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation w-full font-sans text-xl z-10 navbar-bg text-white">
      <nav className="navbar navbar-expand navbar-dark bg-dark w-full">
        <div className="w-full bg-orange-400">
          <ul className="navbar-nav ml-auto flex flex-wrap items-start justify-start px-2 py-3 align-items-center">
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-orange-500 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/">
                  Home
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-orange-500 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/about">
                  About
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-orange-500 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/resume">
                  Resume Builder
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
