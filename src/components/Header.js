import React from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="header-container row">
      <FaBars className="menu-bar" />
      {/* <NavList /> */}
    </div>
  );
}

export default Header;
