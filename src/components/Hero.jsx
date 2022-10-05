import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero-container" id="top">
      <div className="intro">
        <h1>Hello! 🙋‍♂️</h1>
        <p>
          My name is <span>Joe Lee</span>. I am a first-year student majoring in
          Computer Science at Cal State Fullerton. I am currently studying
          popular Javascript frameworks and solidifying my knowledge in
          Javascript, HTML, CSS, and C++. The project I am working on right now
          is a MDX blog using NEXT.js, GraphQL, and SASS.<br></br>
          <br></br>I am interested in learning how to find meaningful
          correlations between statistics and creating unique and accessible
          visuals.
        </p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <Link
              to="one"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="project-links"
            >
              Portfolio Website
            </Link>
          </li>
          <li>
            <Link
              to="two"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="project-links"
            >
              MDX Blog
            </Link>
          </li>
          <li>
            <Link
              to="three"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="project-links"
            >
              3D Playground
            </Link>
          </li>
          <li>
            <Link
              to="four"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="project-links"
            >
              Roguelike Game
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
