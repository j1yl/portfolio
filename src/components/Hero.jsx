import React from "react";
import "../css/Hero.scss";
import logoImg from "../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="box-2">
        <div className="main">
          <h1>
            I'm <span>Joe Lee</span>, <br></br>I create <span>elegant</span>{" "}
            websites.
          </h1>
        </div>
        <div className="labels">
          <h2>Front-End Developer</h2>
          <h2>Computer Science Student</h2>
        </div>
      </div>
      <div className="box-3">
        <button>Let's Talk !</button>
      </div>
      <div className="box-4">
        <img src={logoImg} />
      </div>
    </>
  );
};

export default Hero;
