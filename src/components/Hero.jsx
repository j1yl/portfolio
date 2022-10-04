import React from "react";

const Hero = () => {
  return (
    <section className="hero-container">
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
        <ul>
          <h2>My Work</h2>
          <li>
            <a href="/">PROJECT NAME</a>
          </li>
          <li>
            <a href="/">PROJECT NAME</a>
          </li>
          <li>
            <a href="/">PROJECT NAME</a>
          </li>
          <li>
            <a href="/">PROJECT NAME</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
