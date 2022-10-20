import "../css/About.scss";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_section">
        <h2>About</h2>
        <hr />
        <p>
          Hello! I am Joe Lee and I love planning, designing, and coding
          websites using the latest technologies. I am currently pursuing my
          undergraduate degree in computer science at California State
          Fullerton. Some of my hobbies include: listening to music, composing
          music, cooking, and going to the gym.
        </p>
      </div>
      <div className="skills_section">
        <div className="frontend_section">
          <h2>Front End</h2>
          <hr />
          <p>React</p>
          <p>Framer</p>
        </div>
        <div className="backend_section">
          <h2>Back End</h2>
          <hr />
          <p>NEXT</p>
          <p>Express</p>
        </div>
        <div className="tools_section">
          <h2>Tools</h2>
          <hr />
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>SASS</p>
          <p>Tailwind</p>
          <p>Python</p>
          <p>Flask</p>
        </div>
      </div>
    </div>
  );
};

export default About;
