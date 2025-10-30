"use client";

import { motion } from "framer-motion";

const AnimationWrapper = ({ children, direction = "left" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "bottom" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "bottom" ? 100 : 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }} // joto tuku visible hobe, animation start
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
