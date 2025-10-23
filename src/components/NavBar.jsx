import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/directors">Directors</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
