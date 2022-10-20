import "../css/Works.scss";

const projects = [
  {
    name: "Spotlyzer",
    about:
      "Spotlyzer is a web application that displays a Spotify account's most played tracks, artists, and playlists in their library. Due to SpotifyAPI’s restrictions, only logins from a list of email addresses I selected will be valid. A demo video showcasing the project will be provided on GitHub instead.",
    tech: "React, JavaScript, NEXT, SpotifyAPI, SASS",
    github: "https://github.com/j1yl",
    url: "https://spotlyzer.vercel.app",
    img: "src/assets/spotlyzer.png",
  },
];

const Works = () => {
  return (
    <div className="works_container">
      {projects.map((x) => (
        <Card {...x} key={x} />
      ))}
    </div>
  );
};

const Card = ({ name, about, tech, github, url, img }) => {
  return (
    <div className="card_container">
      <div className="text">
        <div className="header">
          <h2>{name}</h2>
          <hr />
        </div>
        <div className="content">
          <p>
            {about}
            <br></br>
            <br></br>
            Tech: {tech}
          </p>
        </div>
        <div className="links">
          <li>
            <a href={url}>&lt; Visit /&gt;</a>
          </li>
          <li>
            <a href={github}>&lt; Code /&gt;</a>
          </li>
        </div>
      </div>
      <img src={img} alt="project_img" />
    </div>
  );
};

export default Works;
