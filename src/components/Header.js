import React, { useRef, useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import NavList from "./NavList";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nodeRef = useRef(null);
  const Icon = menuOpen ? HiX : HiMenuAlt1;

  return (
    <div className="header-container row">
      <Icon className="menu-bar" onClick={() => setMenuOpen(!menuOpen)} />
      <CSSTransition
        classNames="nav-slide"
        unmountOnExit
        mountOnEnter
        in={menuOpen}
        timeout={300}
        nodeRef={nodeRef}
      >
        <NavList nodeRef={nodeRef} />
      </CSSTransition>
    </div>
  );
}

export default Header;
