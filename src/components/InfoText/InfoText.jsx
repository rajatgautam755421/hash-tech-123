import React from "react";
import "./InfoText.css";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const InfoText = ({ image, title, description }) => {
  return (
    <>
      <div className="container">
        <div className="row It__main__row">
          <motion.div
            className="IT__col__image col-md-4 col-10"
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2.8,
              delay: 0.4,
            }}
          >
            <img
              src={image}
              alt="ItemInfo"
              clasName="infotext__image"
              style={{
                width: "85%",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </motion.div>
          <motion.div
            className="IT__col__2nd col-md-8 col-10 "
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2.8,
              delay: 0.4,
            }}
          >
            <Card className="IT__card__main">
              <Card.Body className="card__body">
                <Card.Title className="BA__card__title">{title}</Card.Title>
                <Card.Text className="IT__card__text">{description}</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InfoText;
