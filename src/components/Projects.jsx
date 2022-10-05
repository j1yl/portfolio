import React from "react";
import { Link } from "react-scroll";

const wipImage = "https://i.imgur.com/rqa4tTT.jpeg";

const Projects = () => {
  return (
    <>
      <section className="project-container" id="one">
        <h3>Responsive Portfolio Website</h3>
        <img
          src="https://i.imgur.com/HuE7l5A.png"
          alt="image"
          className="responsive-img"
        />
        <p>
          About: A website built from scratch using the technologies listed
          below. It's sole purpose is to showcase my projects in a creative way
          that will capture the audience's attention.<br></br>Techstack: React,
          Vite, SASS, Javascript, HTML.
        </p>

        <div className="project-links-container">
          <a
            href="https://github.com/j1yl/portfolio-single-page"
            className="project-links"
          >
            Github
          </a>
          <a href="https://lefo.dev" className="project-links">
            Link
          </a>
          <Link
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="project-links"
          >
            Back to Top
          </Link>
        </div>
      </section>
      <section className="project-container" id="two">
        <h3>Responsive MDX Blog</h3>
        <img src={wipImage} alt="image" className="responsive-img" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          laoreet mi, eu ultricies quam. Pellentesque pellentesque elementum
          lobortis. Donec scelerisque ipsum ac arcu mollis efficitur. Donec
          vestibulum vel massa sit amet facilisis. Proin eros ipsum, placerat in
          condimentum ornare, ullamcorper sit amet lorem. In vitae mi nisi. Sed
          maximus lectus in metus semper, mattis aliquet lectus euismod. Quisque
          lobortis lobortis augue, ut facilisis mauris condimentum vestibulum.
        </p>
        <div className="project-links-container">
          <a href="/" className="project-links">
            Github
          </a>
          <a href="/" className="project-links">
            Link
          </a>
          <Link
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="project-links"
          >
            Back to Top
          </Link>
        </div>
      </section>
      <section className="project-container" id="three">
        <h3>Three.js Interactive Scene with Raycasting</h3>
        <img src={wipImage} alt="image" className="responsive-img" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          laoreet mi, eu ultricies quam. Pellentesque pellentesque elementum
          lobortis. Donec scelerisque ipsum ac arcu mollis efficitur. Donec
          vestibulum vel massa sit amet facilisis. Proin eros ipsum, placerat in
          condimentum ornare, ullamcorper sit amet lorem. In vitae mi nisi. Sed
          maximus lectus in metus semper, mattis aliquet lectus euismod. Quisque
          lobortis lobortis augue, ut facilisis mauris condimentum vestibulum.
        </p>
        <div className="project-links-container">
          <a href="/" className="project-links">
            Github
          </a>
          <a href="/" className="project-links">
            Link
          </a>
          <Link
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="project-links"
          >
            Back to Top
          </Link>
        </div>
      </section>
      <section className="project-container" id="four">
        <h3>Roguelike Game</h3>
        <img src={wipImage} alt="image" className="responsive-img" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          laoreet mi, eu ultricies quam. Pellentesque pellentesque elementum
          lobortis. Donec scelerisque ipsum ac arcu mollis efficitur. Donec
          vestibulum vel massa sit amet facilisis. Proin eros ipsum, placerat in
          condimentum ornare, ullamcorper sit amet lorem. In vitae mi nisi. Sed
          maximus lectus in metus semper, mattis aliquet lectus euismod. Quisque
          lobortis lobortis augue, ut facilisis mauris condimentum vestibulum.
        </p>
        <div className="project-links-container">
          <a href="/" className="project-links">
            Github
          </a>
          <a href="/" className="project-links">
            Link
          </a>
          <Link
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="project-links"
          >
            Back to Top
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;
