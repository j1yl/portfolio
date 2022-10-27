import { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Works = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            projectId={projectId}
          />
        )}
      </AnimatePresence>
      <section
        className="h-screen max-w-6xl px-4 md:px-0 mx-auto py-16"
        id="works"
      >
        <div className="flex flex-col justify-around w-full h-full">
          <div>
            <h2 className="text-5xl text-left font-bold italic">
              FEATURED WORKS
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <a
                className="text-5xl md:text-9xl text-left cursor-pointer"
                onClick={() => {
                  setProjectId(1);
                  modalOpen ? close() : open();
                }}
              >
                HEAVENSENT
              </a>
            </div>
            <div>
              <a
                className="text-5xl md:text-9xl text-left cursor-pointer"
                onClick={() => {
                  setProjectId(2);
                  modalOpen ? close() : open();
                }}
              >
                LEFODEV
              </a>
            </div>
            <div>
              <a
                className="text-5xl md:text-9xl text-left cursor-pointer"
                onClick={() => {
                  setProjectId(3);
                  modalOpen ? close() : open();
                }}
              >
                SPOTLYZER
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/j1yl"
              target="_blank"
              className="text-2xl"
            >
              VIEW MORE ON GITHUB
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
