import React from "react";
import "../css/Header.scss";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <nav className="header_container">
        <h2>LefoDev</h2>
        <div className="nav_links">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={500}
          >
            Works
          </Link>
        </div>
        <button>Contact</button>
      </nav>
    </>
  );
};

export default Header;
