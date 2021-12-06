import React from "react";
import DesignSolutions from "../components/DesignSolutions/DesignSolutions";
import { motion } from "framer-motion";

const homeVarients = {
  exit: {
    x: "100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

const DesigningSolutionsPage = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <DesignSolutions />
    </motion.div>
  );
};

export default DesigningSolutionsPage;
