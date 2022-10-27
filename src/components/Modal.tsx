import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const projects = {
  one: {
    title: "HEAVENSENT",
    content:
      "A product landing page with a stylish design and simple features.",
    tags: [
      "TYPESCRIPT",
      "REACT",
      "TAILWINDCSS",
      "VITE",
      "REACT-THREE/FIBER",
      "REACT-THREE/DREI",
    ],
    github: "https://github.com/j1yl/product",
  },
  two: {
    title: "LEFODEV",
    content:
      "LefoDev is a web application made to showcase my works, contact information, and information to future employers.",
    tags: ["TYPESCRIPT", "REACT", "TAILWINDCSS", "VITE", "FRAMER"],
    github: "https://github.com/j1yl/portfolio",
  },
  three: {
    title: "SPOTLYZER",
    content:
      "Spotify is a web application that displays the user's top tracks and artists. Due to Spotify's limits, the program will not be publicly available, but a demo will be provided on GitHub.",
    tags: ["JAVASCRIPT", "REACT", "NEXT", "SASS", "SPOTIFYAPI", "NEXTAUTH"],
    github: "https://github.com/j1yl/spotlyzer",
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
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="p-10 w-full md:w-1/2 flex flex-col items-start bg-zinc-100 rounded-xl gap-5 border-2 border-zinc-900"
        onClick={(e) => e.stopPropagation()}
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
