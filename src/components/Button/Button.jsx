import React from "react";
import "./Button.css";
import { motion } from "framer-motion";
const Button = ({ Icon, text, type }) => {
  return (
    <div className="Main__div">
      <motion.button
        type={type}
        className="Button btn btn-primary"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "2px 2px 8px #0B5ED7",
        }}
      >
        <span className="Button__Info">
          {" "}
          <Icon className="Button__icon" />
          <h4 className="Button__h4">{text}</h4>
        </span>
      </motion.button>
    </div>
  );
};

export default Button;
