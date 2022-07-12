import React from "react";
import Logo from "../company logo/Logo";
import "./header.css";

function Header() {
  return (
    <header className="header-container">
      <Logo />
      <div className="right-side">
        <span>New User?</span>
        <span>Join DigiComp+</span>
      </div>
    </header>
  );
}

export default Header;
