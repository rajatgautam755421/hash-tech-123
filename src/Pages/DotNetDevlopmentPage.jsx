import React from "react";
import DotNetDevlopmentComponent from "../components/DotNetDevlopment/DotNetDevlopment";
import { motion } from "framer-motion";

const homeVarients = {
  exit: {
    y: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

const DotNetDevlopment = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <DotNetDevlopmentComponent />
    </motion.div>
  );
};

export default DotNetDevlopment;
