import "../css/Works.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="card_container"
    >
      <div className="text">
        <motion.div variants={item} className="header">
          <h2>{name}</h2>
          <hr />
        </motion.div>
        <motion.div variants={item} className="content">
          <p>
            {about}
            <br></br>
            <br></br>
            Tech: {tech}
          </p>
        </motion.div>
        <motion.div variants={item} className="links">
          <li>
            <a href={url}>&lt; Visit /&gt;</a>
          </li>
          <li>
            <a href={github}>&lt; Code /&gt;</a>
          </li>
        </motion.div>
      </div>
      <motion.img variants={item} src={img} alt="project_img" />
    </motion.div>
  );
};

export default Works;
