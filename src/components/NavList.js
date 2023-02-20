import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  const activeStyle = {
    color: "pink",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
