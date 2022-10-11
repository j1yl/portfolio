import "../css/Hero.scss";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="intro">
        <p className="hello">Hello! I am</p>
        <h1 className="name">Joe Lee.</h1>
        <h2 className="slogan">I create modern web experiences.</h2>
        <p className="info">
          I love designing websites, creating pixel art, and automating everyday
          tasks. I am currently pursuing my undergraduate degree in Computer
          Science at
          <span className="school">
            {" "}
            California State University, Fullerton
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Hero;
