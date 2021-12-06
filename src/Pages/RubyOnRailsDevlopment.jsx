import React from "react";
import RubyOnRails from "../components/RubyOnRails/RubyOnRails";
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

const RubyOnRailsDevlopment = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <RubyOnRails />
    </motion.div>
  );
};

export default RubyOnRailsDevlopment;
