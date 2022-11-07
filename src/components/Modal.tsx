import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const projects = {
  one: {
    title: "HEAVENSENT",
    content:
      "A 3d product landing page with a stylish design and simple features.",
    tags: [
      "TYPESCRIPT",
      "REACT",
      "TAILWINDCSS",
      "VITE",
      "REACT-THREE/FIBER",
      "REACT-THREE/DREI",
    ],
    github: "https://github.com/j1yl/product",
    url: "https://i.imgur.com/v4GssXr.png",
  },
  two: {
    title: "LEFODEV",
    content:
      "LefoDev is a web application made to showcase my works, contact information, and information to future employers.",
    tags: ["TYPESCRIPT", "REACT", "TAILWINDCSS", "VITE", "FRAMER"],
    github: "https://github.com/j1yl/portfolio",
    url: "https://i.imgur.com/tzIOXg7.gif",
  },
  three: {
    title: "SPOTLYZER",
    content:
      "Spotlyzer is a web application that displays the user's top tracks and artists on the Spotify platform. Due to Spotify's limits, the program will not be publicly available, but a demo will be provided on GitHub.",
    tags: ["JAVASCRIPT", "REACT", "NEXT", "SASS", "SPOTIFYAPI", "NEXTAUTH"],
    github: "https://github.com/j1yl/spotlyzer",
    url: "https://i.imgur.com/MCMZu1y.png",
  },
  four: {
    title: "SHRINKURL",
    content: "ShrinkURL is a simple link shortener with a beautiful interface.",
    tags: ["TYPESCRIPT", "TAILWINDCSS", "REACT", "VITE"],
    github: "https://github.com/j1yl/shrinkurl",
    url: "https://i.imgur.com/zhL7NrT.gif",
  },
};

let selectedProject: any;

const Modal = ({
  handleClose,
  projectId,
  modalOpen,
}: {
  handleClose: any;
  projectId: number;
  modalOpen: any;
}) => {
  if (projectId === 1) {
    selectedProject = projects.one;
  } else if (projectId === 2) {
    selectedProject = projects.two;
  } else if (projectId === 3) {
    selectedProject = projects.three;
  } else if (projectId === 4) {
    selectedProject = projects.four;
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="p-10 w-full md:w-1/2 z-10 flex flex-col items-start bg-zinc-100 rounded-xl gap-5 border-2 border-zinc-900"
        onClick={(e) => e.stopPropagation()}
        initial={{
          y: -200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            bounce: 0.2,
          },
        }}
      >
        <h2 className="font-bold text-5xl">{selectedProject.title}</h2>
        <div className="flex flex-wrap gap-3">
          {selectedProject.tags.map((item: any, index: any) => (
            <span
              key={index}
              className="px-2 py-1 bg-zinc-900 text-zinc-100 rounded-full"
            >
              #{item}
            </span>
          ))}
        </div>
        <div>
          <img
            src={selectedProject.url}
            alt="project screenshot"
            className=""
          ></img>
        </div>
        <article className="text-xl">{selectedProject.content}</article>
        <div className="flex gap-5">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-zinc-900 text-zinc-100 font-bold rounded-full"
          >
            Close
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-zinc-900 text-zinc-100 font-bold rounded-full"
          >
            <a href={selectedProject.github} target="_blank">
              View Code
            </a>
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
