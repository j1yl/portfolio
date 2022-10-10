import React from "react";
import { useState } from "react";
import Blog from "./Blog";

const Projects = () => {
  const [openBlogModal, setOpenBlogModal] = useState(false);
  return (
    <>
      <div className="project-container">
        <div className="projects">
          <h2 className="project-page-title">Projects</h2>
          <button
            className="open-modal-btn"
            onClick={() => {
              setOpenBlogModal(true);
            }}
          >
            MDX Blog
          </button>
        </div>
        {openBlogModal && <Blog closeBlogModal={setOpenBlogModal} />}
      </div>
    </>
  );
};

export default Projects;
