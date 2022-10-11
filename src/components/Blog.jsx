import React from "react";

const Blog = ({ closeBlogModal }) => {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal-title">
          <h2>Responsive Portfolio Website</h2>
        </div>
        <div className="modal-body">
          <img
            src="https://i.imgur.com/HuE7l5A.png"
            alt="img"
            className="project-img"
          />
          <p className="modal-project-description">
            About: A website built from scratch using the technologies listed
            below. It's sole purpose is to showcase my projects in a creative
            way that will capture the audience's attention.<br></br>Techstack:
            React, Vite, SASS, Javascript, HTML.
          </p>
        </div>
        <div className="modal-footer">
          <button>Github</button>
          <button>Visit</button>
          <button onClick={() => closeBlogModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
