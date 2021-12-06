import React from "react";
import "./BaCard.css";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const BaCard = ({ Icon, numeric, text, key }) => {
  return (
    <>
      <motion.div>
        <Card className="BA__card__main  justify-content-center">
          <Icon
            className="Ba__icon"
            style={{
              height: "150px",
              width: "150px",
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Card.Body className="card__body">
            <Card.Title className="BA__card__title">{numeric}</Card.Title>
            <Card.Text className="BA__card__text">{text}</Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </>
  );
};

export default BaCard;
