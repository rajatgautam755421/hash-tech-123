import React from "react";
import "./ProgressBar.css";
import CreateIcon from "@material-ui/icons/Create";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { Slide } from "react-reveal";

const ProgressBar = () => {
  return (
    <>
      <Slide top>
        <div className="process__items container">
          <ul className="Process__list">
            <li className="process__list__li1">
              <CreateIcon className="progress__items__icon1" />
              <h4> DESIGN IT</h4>
              <br />
            </li>
            <p>
              Understanding key stakeholders & their expectations to analyze the
              right solution that can be delivered to solve multiple
              perspectives.
            </p>

            <hr />
            <li className="process__list__li1">
              <TrendingUpIcon className="progress__items__icon2" />
              <h4>TRACK IT</h4>
            </li>
            <p>
              Understanding key stakeholders & their expectations to analyze the
              right solution that can be delivered to solve multiple
              perspectives.
            </p>

            <hr />
            <li className="process__list__li1">
              <DirectionsRunIcon className="progress__items__icon3" />
              <h4>RUN IT</h4>
            </li>
            <p>
              Understanding key stakeholders & their expectations to analyze the
              right solution that can be delivered to solve multiple
              perspectives.
            </p>
          </ul>
        </div>
      </Slide>
    </>
  );
};

export default ProgressBar;
