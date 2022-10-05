import React from "react";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <>
      <section className="project-container" id="one">
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          laoreet mi, eu ultricies quam. Pellentesque pellentesque elementum
          lobortis. Donec scelerisque ipsum ac arcu mollis efficitur. Donec
          vestibulum vel massa sit amet facilisis. Proin eros ipsum, placerat in
          condimentum ornare, ullamcorper sit amet lorem. In vitae mi nisi. Sed
          maximus lectus in metus semper, mattis aliquet lectus euismod. Quisque
          lobortis lobortis augue, ut facilisis mauris condimentum vestibulum.
        </p>
        <a href="/">Github</a>
        <a href="/">Link</a>
        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="top-link"
        >
          Back to Top
        </Link>
      </section>
      <section className="project-container" id="two">
        <h3>Project 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          laoreet mi, eu ultricies quam. Pellentesque pellentesque elementum
          lobortis. Donec scelerisque ipsum ac arcu mollis efficitur. Donec
          vestibulum vel massa sit amet facilisis. Proin eros ipsum, placerat in
          condimentum ornare, ullamcorper sit amet lorem. In vitae mi nisi. Sed
          maximus lectus in metus semper, mattis aliquet lectus euismod. Quisque
          lobortis lobortis augue, ut facilisis mauris condimentum vestibulum.
        </p>
        <a href="/">Github</a>
        <a href="/">Link</a>
        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="top-link"
        >
          Back to Top
        </Link>
      </section>
      <section className="project-container" id="three">
        <h3>Project 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          laoreet mi, eu ultricies quam. Pellentesque pellentesque elementum
          lobortis. Donec scelerisque ipsum ac arcu mollis efficitur. Donec
          vestibulum vel massa sitLink amet facilisis. Proin eros ipsum,
          placerat in condimentum ornare, ullamcorper sit amet lorem. In vitae
          mi nisi. Sed maximus lectus in metus semper, mattis aliquet lectus
          euismod. Quisque lobortis lobortis augue, ut facilisis mauris
          condimentum vestibulum.
        </p>
        <a href="/">Github</a>
        <a href="/">Link</a>
        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="top-link"
        >
          Back to Top
        </Link>
      </section>
      <section className="project-container" id="four">
        <h3>Project 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          laoreet mi, eu ultricies quam. Pellentesque pellentesque elementum
          lobortis. Donec scelerisque ipsum ac arcu mollis efficitur. Donec
          vestibulum vel massa sit amet facilisis. Proin eros ipsum, placerat in
          condimentum ornare, ullamcorper sit amet lorem. In vitae mi nisi. Sed
          maximus lectus in metus semper, mattis aliquet lectus euismod. Quisque
          lobortis lobortis augue, ut facilisis mauris condimentum vestibulum.
        </p>
        <a href="/">Github</a>
        <a href="/">Link</a>
        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="top-link"
        >
          Back to Top
        </Link>
      </section>
    </>
  );
};

export default Projects;
