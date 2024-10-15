// components/PageTransition.js
"use client";
import { AnimatePresence, motion } from "framer-motion";

// const pageTransitionVariants = {
//   // hidden: { opacity: 0, y: 20 }, // Start hidden and slightly moved down
//   // visible: { opacity: 1, y: 0 },  // Fully visible and in place
//   // exit: { opacity: 0, y: -20 },    // Exit by fading out and moving up
//   initial: { x: 500 },
//   animate: { x: 0 },
//   exit: { x: 500 },
//   transition: { ease: "easeInOut", duration: 0.5 },
// };

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial= { {opacity: 0} }
        animate={{ opacity: 1 }}
        exit= { {opacity: 0} }
        transition= { {ease: "easeInOut", duration: 0.5} }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
