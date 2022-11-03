import { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence, motion } from "framer-motion";
import AnimateCharacter from "./AnimateCharacter";
import AnimateWord from "./AnimateWord";

const Works = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <AnimatePresence initial={false} mode="sync" onExitComplete={() => null}>
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
            <h2 className="flex text-5xl text-left font-bold italic">
              <AnimateWord text="FEATURED PROJECTS" delay={0.3} stagger={1} />
            </h2>
          </div>
          <div className="flex flex-col gap-5 z-2">
            <div>
              <a
                className="text-5xl md:text-9xl text-left cursor-pointer"
                onClick={() => {
                  setProjectId(1);
                  modalOpen ? close() : open();
                }}
              >
                <AnimateCharacter text="HEAVENSENT" delay={0.5} />
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
                <AnimateCharacter text="LEFODEV" delay={0.5} />
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
                <AnimateCharacter text="SPOTLYZER" delay={0.5} />
              </a>
            </div>
            <div>
              <a
                className="text-5xl md:text-9xl text-left cursor-pointer"
                onClick={() => {
                  setProjectId(4);
                  modalOpen ? close() : open();
                }}
              >
                <AnimateCharacter text="SHRINKURL" delay={0.5} />
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/j1yl"
              target="_blank"
              className="text-2xl"
            >
              <AnimateCharacter text="VIEW MORE ON GITHUB" delay={1} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
