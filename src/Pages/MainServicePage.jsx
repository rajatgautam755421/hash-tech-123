import React from "react";
import MainServices from "../components/MainServices/MainServices";
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

const MainServicePage = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <MainServices />
    </motion.div>
  );
};

export default MainServicePage;
