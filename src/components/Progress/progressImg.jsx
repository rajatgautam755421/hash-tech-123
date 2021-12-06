import React from "react";
import "./progressImg.css";
import { Slide } from "react-reveal";

const progress = () => {
  return (
    <>
      <Slide bottom>
        <div className="container">
          <img
            src="https://media.istockphoto.com/photos/blockchain-technology-structure-defocused-picture-id953499010?b=1&k=20&m=953499010&s=170667a&w=0&h=LrCJ8IuM2ErLZhO1DdhEQ_L0ZviBXzVv9Qp4DC8NIXg="
            alt="Our Process"
            className="process__image"
          />
        </div>
      </Slide>
    </>
  );
};

export default progress;
