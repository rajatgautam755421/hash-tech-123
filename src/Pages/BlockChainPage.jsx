import React from "react";
import BlockchainService from "../components/BlockchainService/BlockchainService";
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

const BlockChainPage = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <BlockchainService />
    </motion.div>
  );
};

export default BlockChainPage;
