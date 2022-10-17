import "../css/Navbar.scss";
import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <h1 className="logo">lefodev</h1>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className="links">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-1000}
            hashSpy={true}
            duration={500}
            onClick={handleToggle}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            hashSpy={true}
            duration={500}
            onClick={handleToggle}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            hashSpy={true}
            duration={500}
            onClick={handleToggle}
          >
            works
          </Link>
        </li>
        <li>
          <a href="mailto: lefodev@gmail.com" className="email">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
