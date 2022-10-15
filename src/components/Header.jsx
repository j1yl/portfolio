import React from "react";
import logoImg from "../assets/logo.png";
import "../css/Header.scss";

const Header = () => {
  return (
    <>
      <div className="box-1">
        <nav>
          <div className="logo">
            <img src={logoImg} alt="logo" width="100px" />
            <h2>LefoDev</h2>
          </div>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Works</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
