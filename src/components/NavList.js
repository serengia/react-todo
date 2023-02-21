import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="link-item">
          <NavLink
            className={(state) => (state.isActive ? "active-link" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            className={(state) => (state.isActive ? "active-link" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
