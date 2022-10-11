import "../css/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h2>About</h2>
        <p>
          Hello! My name is <span className="highlight">Joe Lee</span> and I
          love creating and designing websites. I first began taking interest in
          Computer Science when I was a child, since then I've messed around
          with various technologies and have established a solid foundation.
          Right now I am pursuing my undergraduate degree in{" "}
          <span className="highlight">Computer Science </span>
          at{" "}
          <span className="highlight">
            California State University, Fullerton.
          </span>
          <br></br>
          <br></br>
          Some of my goals include: finding comfortability in creating fullstack
          web applications, learning data structures and algorithms using
          Leetcode, and creating data visualizations through D3.js
        </p>
      </div>
      <div className="content">
        <h2>Skills</h2>
        <div className="skills-container">
          <li>Javascript</li>
          <li>React</li>
          <li>SASS</li>
          <li>Next</li>
          <li>Python</li>
          <li>Flask</li>
        </div>
      </div>
    </div>
  );
};

export default About;
