import React from "react";
import AppDevlopment from "../components/AppDevlopment/AppDevlopment";
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

const AppDevlopmentPage = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <AppDevlopment />
    </motion.div>
  );
};

export default AppDevlopmentPage;
