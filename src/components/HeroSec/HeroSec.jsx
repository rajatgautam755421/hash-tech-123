import React from "react";
import "./HeroSec.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const HeroSec = () => {
  return (
    <div className="main__hero">
      <div className="main__hero__content">
        <div class="custom-shape-divider-bottom-1634357701">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="main__hero__text">
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Typewriter
              options={{
                strings: ["HASH TECHNOLOGIES"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
          <motion.h3
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Design It , Track It , Run It.
          </motion.h3>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Hash Technologies works on a streamlined development process
            <br /> which delivers rapid, consistent, quality results.
            <br /> The process has evolved from continuous improvement from more
            than 200 worldwide projects.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
