import React from "react";
import ContactUs from "../components/ContactUs/ContactUs";
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
const ContactPage = () => {
  return (
    <motion.div variants={homeVarients} exit="exit">
      <ContactUs />
    </motion.div>
  );
};

export default ContactPage;
