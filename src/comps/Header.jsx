import React from "react";
import "../css/Header.scss";

const Header = () => {
  return (
    <>
      <nav className="header_container">
        <h2>LefoDev</h2>
        <div className="nav_links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Works</a>
        </div>
        <button>Let's Talk</button>
      </nav>
    </>
  );
};

export default Header;
