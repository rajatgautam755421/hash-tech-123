import React from "react";
import About from "../components/AboutUs/AboutUs";
import { motion } from "framer-motion";

const homeVarients = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

const AboutUsPage = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <About />
    </motion.div>
  );
};

export default AboutUsPage;
