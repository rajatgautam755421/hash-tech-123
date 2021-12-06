import React from "react";
import Typewriter from "typewriter-effect";
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

const HashLabs = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <h3 className="HWD__main__h3">
        <Typewriter
          options={{
            strings: ["Hash Labs"],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>{" "}
    </motion.div>
  );
};

export default HashLabs;
