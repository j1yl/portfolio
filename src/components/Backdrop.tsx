import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }: { children: any; onClick: any }) => {
  return (
    <>
      <motion.div
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute h-screen w-full bg-zinc-100 bg-opacity-75 flex items-center justify-center z-12"
      >
        {children}
      </motion.div>
    </>
  );
};

export default Backdrop;
