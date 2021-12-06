import React from "react";
import HowAreWeDifferent from "../components/HowAreWeDifferent/HowAreWeDifferent";
import { motion } from "framer-motion";

const homeVarients = {
  exit: {
    y: "100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

const HowAreWeDifferentPage = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <HowAreWeDifferent />
    </motion.div>
  );
};

export default HowAreWeDifferentPage;
