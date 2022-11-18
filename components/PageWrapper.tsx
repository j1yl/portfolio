"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
